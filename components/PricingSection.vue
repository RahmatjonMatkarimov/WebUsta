<template>
  <section id="pricing" class="relative py-16 sm:py-20 md:py-28 bg-[var(--color-bg-muted)]" aria-labelledby="pricing-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-10 sm:mb-14 reveal">
        <span class="section-label mb-3 sm:mb-4 inline-block">Narxlar</span>
        <h2 id="pricing-heading" class="section-heading mb-3 sm:mb-4">
          Har bir byudjet uchun
          <span class="gradient-text"> yechim</span>
        </h2>
        <p class="section-sub px-2">
          Kichik startapdan yirik biznesgacha — barchasi uchun mos paket bor.
          Narxlar o'zaro kelishuvga asoslanadi.
        </p>
      </div>

      <!-- Service Type Tabs — horizontally scrollable on mobile -->
      <div class="relative mb-8 sm:mb-12 reveal">
        <div class="flex gap-2 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
          <button
            v-for="tab in pricingTabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'flex-shrink-0 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5',
              activeTab === tab.id
                ? 'bg-brand-500 text-white shadow-brand'
                : 'bg-[var(--color-bg-card)] text-[var(--color-text-muted)] border border-[var(--color-border)] hover:border-brand-400 hover:text-brand-500'
            ]"
          >
            <span v-html="tab.icon" />
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        <article
          v-for="(plan, i) in currentPlans"
          :key="plan.name"
          :class="[
            'card relative flex flex-col reveal',
            `reveal-delay-${i + 1}`,
            plan.popular
              ? 'border-brand-500/40 shadow-brand lg:scale-[1.02] bg-gradient-to-b from-brand-500/5 to-transparent'
              : 'hover:border-brand-400/40 hover:shadow-card'
          ]"
        >
          <!-- Popular badge -->
          <div
            v-if="plan.popular"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-gradient-to-r from-brand-500 to-accent-500 text-white text-xs font-bold rounded-full whitespace-nowrap shadow-brand flex items-center gap-1.5"
            aria-label="Eng mashhur paket"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Eng mashhur
          </div>

          <div class="p-5 sm:p-6 md:p-8 flex flex-col flex-1">
            <!-- Plan name & icon -->
            <div class="flex items-center gap-3 mb-4">
              <div :class="[
                'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0',
                plan.popular
                  ? 'bg-gradient-to-br from-brand-500 to-accent-500 text-white'
                  : 'bg-[var(--color-bg-muted)] text-brand-500'
              ]">
                <span v-html="plan.icon" />
              </div>
              <div>
                <h3 class="font-display font-bold text-base sm:text-lg text-[var(--color-text)]">{{ plan.name }}</h3>
                <p class="text-xs text-[var(--color-text-faint)]">{{ plan.target }}</p>
              </div>
            </div>

            <!-- Price -->
            <div class="mb-5 pb-5 border-b border-[var(--color-border)]">
              <div class="flex items-baseline gap-1">
                <span class="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[var(--color-text)]">{{ plan.price }}</span>
                <span class="text-[var(--color-text-muted)] text-xs sm:text-sm">so'mdan</span>
              </div>
              <p class="text-xs sm:text-sm text-[var(--color-text-muted)] mt-1">{{ plan.duration }}</p>
            </div>

            <!-- Features -->
            <ul class="flex flex-col gap-2.5 mb-6 sm:mb-8 flex-1" role="list">
              <li
                v-for="feature in plan.features"
                :key="feature.text"
                class="flex items-start gap-2 text-xs sm:text-sm"
              >
                <svg
                  v-if="feature.included"
                  width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  class="text-brand-500 flex-shrink-0 mt-0.5"
                  aria-label="Mavjud"
                >
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <svg
                  v-else
                  width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  class="text-[var(--color-text-faint)] flex-shrink-0 mt-0.5"
                  aria-label="Mavjud emas"
                >
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
                <span :class="feature.included ? 'text-[var(--color-text-muted)]' : 'text-[var(--color-text-faint)] line-through'">
                  {{ feature.text }}
                </span>
              </li>
            </ul>

            <!-- CTA -->
            <a
              :href="siteConfig.social.telegram"
              target="_blank"
              rel="noopener noreferrer"
              :class="plan.popular ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'"
            >
              Buyurtma berish
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </article>
      </div>

      <!-- Note -->
      <p class="text-center text-xs sm:text-sm text-[var(--color-text-faint)] mt-6 sm:mt-8 reveal px-4">
        💡 Aniq narx loyiha talablariga ko'ra belgilanadi.
        <a :href="siteConfig.social.telegram" class="text-brand-500 hover:underline" target="_blank" rel="noopener noreferrer">Bepul konsultatsiya</a>
        uchun bog'laning.
      </p>
    </div>
  </section>
</template>

<script setup>
import { siteConfig } from '~/utils/siteConfig'

const activeTab = ref('web')

const pricingTabs = [
  { id: 'web', label: 'Web sayt', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>` },
  { id: 'bot', label: 'Telegram bot', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>` },
  { id: 'app', label: 'Mobil ilova', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>` },
  { id: 'crm', label: 'CRM', icon: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>` },
]

const allPlans = {
  web: [
    {
      name: 'Start',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-1.58-1.58s-1.29 0-2.13.71Z"/><path d="m12 13-5.5 5.5-1.5-1.5L10.5 11.5Z"/><path d="m12 13 4 4 4.5-8.5-4-4-8.5 4.5z"/></svg>`,
      target: 'Kichik biznes uchun',
      price: '500,000',
      duration: '7-14 kun ichida',
      popular: false,
      features: [
        { text: '1-5 sahifa', included: true },
        { text: 'Mobil-qulay dizayn', included: true },
        { text: 'Kontakt forma', included: true },
        { text: 'SEO asoslari', included: true },
        { text: 'Admin panel', included: false },
        { text: "Ko'p tilli", included: false },
        { text: 'Online to\'lov', included: false },
        { text: '3 oy texnik yordam', included: false },
      ],
    },
    {
      name: 'Business',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      target: 'O\'sib borayotgan biznes',
      price: '1,500,000',
      duration: '14-21 kun ichida',
      popular: true,
      features: [
        { text: '10+ sahifa', included: true },
        { text: 'Mobil-qulay dizayn', included: true },
        { text: 'Admin panel', included: true },
        { text: 'SEO to\'liq optimizatsiya', included: true },
        { text: "Ko'p tilli qo'llab-quvvatlash", included: true },
        { text: 'CRM integratsiya', included: true },
        { text: 'Online to\'lov', included: false },
        { text: '6 oy texnik yordam', included: true },
      ],
    },
    {
      name: 'Premium',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M19 16v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"/></svg>`,
      target: 'Korporativ yechim',
      price: '3,000,000',
      duration: '21-30 kun ichida',
      popular: false,
      features: [
        { text: 'Cheksiz sahifalar', included: true },
        { text: 'Individual dizayn', included: true },
        { text: 'Kuchli admin panel', included: true },
        { text: 'SEO + Analytics', included: true },
        { text: "Ko'p tilli", included: true },
        { text: 'Online to\'lov tizimi', included: true },
        { text: 'API integratsiyalar', included: true },
        { text: '12 oy texnik yordam', included: true },
      ],
    },
  ],
  bot: [
    {
      name: 'Start',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
      target: 'Oddiy bot',
      price: '300,000',
      duration: '3-5 kun ichida',
      popular: false,
      features: [
        { text: 'Oddiy buyruqlar', included: true },
        { text: 'Xush kelibsiz xabar', included: true },
        { text: 'Ma\'lumot yuborish', included: true },
        { text: 'Admin panel', included: false },
        { text: 'To\'lov tizimi', included: false },
        { text: 'Mini App', included: false },
        { text: 'Statistika', included: false },
        { text: '3 oy yordam', included: false },
      ],
    },
    {
      name: 'Business',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      target: 'Biznes uchun bot',
      price: '800,000',
      duration: '7-14 kun ichida',
      popular: true,
      features: [
        { text: 'Buyurtma qabul qilish', included: true },
        { text: 'Admin panel', included: true },
        { text: 'Xabarnomalar', included: true },
        { text: 'Statistika', included: true },
        { text: 'To\'lov (Click/Payme)', included: true },
        { text: 'Mini App', included: false },
        { text: 'CRM integratsiya', included: false },
        { text: '6 oy yordam', included: true },
      ],
    },
    {
      name: 'Premium',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M19 16v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"/></svg>`,
      target: 'To\'liq yechim',
      price: '2,000,000',
      duration: '14-21 kun ichida',
      popular: false,
      features: [
        { text: 'To\'liq funksionallik', included: true },
        { text: 'Mini App (WebApp)', included: true },
        { text: 'To\'lov tizimlari', included: true },
        { text: 'CRM integratsiya', included: true },
        { text: 'AI asosida javoblar', included: true },
        { text: "Ko'p tilli", included: true },
        { text: 'Maxsus dizayn', included: true },
        { text: '12 oy yordam', included: true },
      ],
    },
  ],
  app: [
    {
      name: 'Start',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
      target: 'MVP ilova',
      price: '5,000,000',
      duration: '1-2 oy',
      popular: false,
      features: [
        { text: 'Android yoki iOS', included: true },
        { text: 'Asosiy ekranlar', included: true },
        { text: 'API integratsiya', included: true },
        { text: 'Push bildirishnoma', included: false },
        { text: 'To\'lov tizimi', included: false },
        { text: 'Offline rejim', included: false },
        { text: 'App Store joylash', included: true },
        { text: '3 oy yordam', included: false },
      ],
    },
    {
      name: 'Business',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      target: 'Cross-platform',
      price: '12,000,000',
      duration: '2-3 oy',
      popular: true,
      features: [
        { text: 'Android + iOS', included: true },
        { text: 'To\'liq funksionallik', included: true },
        { text: 'Push bildirishnomalar', included: true },
        { text: 'To\'lov tizimi', included: true },
        { text: 'Admin panel', included: true },
        { text: 'Offline rejim', included: false },
        { text: 'Do\'konga joylash', included: true },
        { text: '6 oy yordam', included: true },
      ],
    },
    {
      name: 'Premium',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M19 16v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"/></svg>`,
      target: 'Enterprise ilova',
      price: '25,000,000',
      duration: '3-6 oy',
      popular: false,
      features: [
        { text: 'Android + iOS', included: true },
        { text: 'Maxsus dizayn', included: true },
        { text: 'Offline rejim', included: true },
        { text: 'Real-time funksiyalar', included: true },
        { text: 'Analitika', included: true },
        { text: 'Maxsus integratsiyalar', included: true },
        { text: 'Do\'konga joylash', included: true },
        { text: '12 oy yordam', included: true },
      ],
    },
  ],
  crm: [
    {
      name: 'Start',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
      target: 'Kichik jamoa',
      price: '3,000,000',
      duration: '2-3 hafta',
      popular: false,
      features: [
        { text: 'Mijozlar bazasi', included: true },
        { text: 'Vazifalar boshqaruvi', included: true },
        { text: 'Asosiy hisobotlar', included: true },
        { text: 'Foydalanuvchi rollari', included: false },
        { text: 'API integratsiya', included: false },
        { text: 'Email/SMS', included: false },
        { text: 'Mobil ilova', included: false },
        { text: '3 oy yordam', included: false },
      ],
    },
    {
      name: 'Business',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
      target: 'O\'rta korporatsiya',
      price: '8,000,000',
      duration: '1-1.5 oy',
      popular: true,
      features: [
        { text: 'To\'liq mijozlar boshqaruvi', included: true },
        { text: 'Foydalanuvchi rollari', included: true },
        { text: 'Kengaytirilgan hisobotlar', included: true },
        { text: 'Email/SMS xabarnomalar', included: true },
        { text: 'Telegram bot integratsiya', included: true },
        { text: 'API integratsiya', included: false },
        { text: 'Mobil ilova', included: false },
        { text: '6 oy yordam', included: true },
      ],
    },
    {
      name: 'Premium',
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M19 16v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2"/></svg>`,
      target: 'Korporativ yechim',
      price: '20,000,000',
      duration: '2-3 oy',
      popular: false,
      features: [
        { text: "To'liq maxsus CRM", included: true },
        { text: 'Cheksiz integratsiyalar', included: true },
        { text: 'Maxsus AI analitika', included: true },
        { text: 'Mobil ilova bilan', included: true },
        { text: 'Email/SMS marketing', included: true },
        { text: 'API to\'liq ochiq', included: true },
        { text: 'Maxsus dizayn', included: true },
        { text: '12 oy yordam', included: true },
      ],
    },
  ],
}

const currentPlans = computed(() => allPlans[activeTab.value] || allPlans.web)
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
