<template>
  <section id="faq" class="relative py-16 sm:py-20 md:py-28 bg-[var(--color-bg-muted)]" aria-labelledby="faq-heading">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-10 sm:mb-14 reveal">
        <span class="section-label mb-3 sm:mb-4 inline-block">FAQ</span>
        <h2 id="faq-heading" class="section-heading mb-3 sm:mb-4">
          Ko'p so'raladigan
          <span class="gradient-text"> savollar</span>
        </h2>
        <p class="section-sub px-2">
          Qo'shimcha savolingiz bormi? Telegram orqali murojaat qiling.
        </p>
      </div>

      <!-- Accordion -->
      <div class="space-y-2 sm:space-y-3 reveal reveal-delay-1">
        <div
          v-for="(item, i) in faqs"
          :key="item.id"
          class="card overflow-hidden"
        >
          <button
            @click="toggle(item.id)"
            :aria-expanded="open === item.id"
            :aria-controls="`faq-answer-${item.id}`"
            :id="`faq-question-${item.id}`"
            class="w-full flex items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 text-left hover:bg-[var(--color-bg-muted)] transition-colors duration-200"
          >
            <span class="flex items-center gap-2.5 sm:gap-3">
              <span class="text-brand-500 font-display font-bold text-xs sm:text-sm flex-shrink-0">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="font-medium text-sm sm:text-base text-[var(--color-text)]">{{ item.question }}</span>
            </span>
            <svg
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              :class="['flex-shrink-0 transition-transform duration-300 text-[var(--color-text-muted)] w-4 h-4 sm:w-5 sm:h-5', open === item.id ? 'rotate-180' : '']"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          <Transition name="faq">
            <div
              v-show="open === item.id"
              :id="`faq-answer-${item.id}`"
              :aria-labelledby="`faq-question-${item.id}`"
              role="region"
            >
              <div class="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                <div class="pl-7 sm:pl-9 text-[var(--color-text-muted)] leading-relaxed text-xs sm:text-sm md:text-base border-t border-[var(--color-border)] pt-3 sm:pt-4">
                  {{ item.answer }}
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-10 sm:mt-12 reveal px-4">
        <p class="text-[var(--color-text-muted)] text-sm sm:text-base mb-3 sm:mb-4">Savolingiz javobsiz qoldimi?</p>
        <a :href="siteConfig.social.telegram" target="_blank" rel="noopener noreferrer" class="btn-telegram w-full sm:w-auto justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="w-4 h-4 sm:w-[18px] sm:h-[18px]">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.551c-.147.659-.541.82-1.097.51l-3.03-2.232-1.462 1.407c-.162.162-.297.297-.608.297l.215-3.062 5.575-5.032c.243-.215-.052-.335-.375-.12L6.376 14.17l-2.972-.928c-.648-.2-.659-.648.134-.959l11.59-4.47c.54-.2 1.013.12.834.435z"/>
          </svg>
          Telegramda so'rash
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteConfig } from '~/utils/siteConfig'

const open = ref(null)

function toggle(id) {
  open.value = open.value === id ? null : id
}

const faqs = [
  {
    id: 1,
    question: "Loyiha qancha vaqt oladi?",
    answer: "Loyiha murakkabligiga qarab farqlanadi. Oddiy landing page 3-5 ish kuni, biznes sayt 2-3 hafta, mobil ilova 1-3 oy ichida tayyor bo'ladi. Aniq muddatni bepul konsultatsiyada kelishamiz.",
  },
  {
    id: 2,
    question: "To'lov qanday amalga oshiriladi?",
    answer: "To'lov ikki bosqichda: loyiha boshida 50% oldindan to'lov, qolgan 50% tayyor bo'lgandan keyin. Click, Payme, bank o'tkazmasi orqali to'lash mumkin.",
  },
  {
    id: 3,
    question: "Loyiha tugagandan keyin qo'llab-quvvatlash bormi?",
    answer: "Ha, albatta! Har bir paketda texnik qo'llab-quvvatlash kiritilgan (Start: 3 oy, Business: 6 oy, Premium: 12 oy). Kichik tuzatishlar va savollar uchun doim yordamga tayyormiz.",
  },
  {
    id: 4,
    question: "Sayt uchun hosting va domen kerakmi?",
    answer: "Ha, sayt ishlashi uchun hosting va domen kerak bo'ladi. Biz uni siz uchun o'rnatib beramiz va qanday olishni ko'rsatamiz. Narxi yiliga $10-50 atrofida.",
  },
  {
    id: 5,
    question: "Dizaynni o'zim tanlasam bo'ladimi?",
    answer: "Albatta! Siz o'zingizga yoqqan dizayn namunalarini ko'rsating, biz o'sha stilga mos yaratamiz. Yoki to'liq dizaynni bizga ishonib topshirishingiz ham mumkin.",
  },
  {
    id: 6,
    question: "Narxlar narx listdagidan arzonroq bo'lishi mumkinmi?",
    answer: "Narxlar loyiha talablariga qarab o'zgaradi. Agar byudjetingiz chegaralangan bo'lsa, imkoniyatga qarab yechim topamiz. Biz sizni yo'q deb qaytarmaymiz.",
  },
  {
    id: 7,
    question: "Sayt Google da chiqishi uchun nima qilasizlar?",
    answer: "Har bir saytga asosiy SEO sozlamalarini amalga oshiramiz: meta teglar, tez yuklash, mobil-qulay, semantic HTML, alt textlar. Premium paketda to'liq SEO audit va optimallashtirish ham kiritilgan.",
  },
  {
    id: 8,
    question: "Loyiha jarayonida o'zgarishlar kiritsa bo'ladimi?",
    answer: "Ha, loyiha jarayonida muloqot muhim. Dizayn bosqichida va dasturlash bosqichida belgilangan hajmda o'zgarishlar kiritish mumkin. Katta o'zgarishlar uchun qo'shimcha kelishamiz.",
  },
]
</script>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
}
.faq-enter-to,
.faq-leave-from {
  opacity: 1;
  max-height: 500px; /* Accordion height fix for transitioning */
}
</style>
