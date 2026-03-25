<template>
  <section id="why-us" class="relative py-16 sm:py-20 md:py-28 bg-[var(--color-bg-muted)] overflow-hidden" aria-labelledby="why-heading">
    <!-- Decorative blobs -->
    <div class="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-brand-500/5 blur-3xl pointer-events-none" aria-hidden="true" />
    <div class="absolute bottom-0 left-0 w-56 h-56 sm:w-80 sm:h-80 rounded-full bg-accent-500/5 blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

        <!-- Left: Content -->
        <div>
          <span class="section-label mb-4 sm:mb-6 inline-block reveal">Nega biz?</span>
          <h2 id="why-heading" class="section-heading mb-4 sm:mb-6 reveal reveal-delay-1">
            Biz faqat kod
            <span class="gradient-text"> yozmaymiz</span>
          </h2>
          <p class="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 reveal reveal-delay-2">
            Biz sizning biznesingizning <strong class="text-[var(--color-text)] font-medium">raqamli hamkorlarimiz.</strong>
            Maqsadingizni tushunib, texnologiya orqali real natijaga erishishga yordam beramiz.
          </p>

          <!-- Reasons list -->
          <div class="space-y-4 sm:space-y-5">
            <div
              v-for="(reason, i) in reasons"
              :key="reason.title"
              :class="['flex items-start gap-3 sm:gap-4 group reveal', `reveal-delay-${i + 2}`]"
            >
              <div class="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border)] flex items-center justify-center text-brand-500 group-hover:border-brand-400/40 group-hover:shadow-brand transition-all duration-300">
                <span v-html="reason.icon" />
              </div>
              <div>
                <h3 class="font-display font-semibold text-[var(--color-text)] mb-0.5 sm:mb-1 text-sm sm:text-base">{{ reason.title }}</h3>
                <p class="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">{{ reason.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Visual card grid -->
        <div class="grid grid-cols-2 gap-3 sm:gap-4 reveal reveal-delay-1">
          <div
            v-for="(metric, i) in metrics"
            :key="metric.label"
            :class="[
              'card p-4 sm:p-5 text-center group hover:border-brand-400/40 hover:shadow-brand hover:-translate-y-1 transition-all duration-300',
              i === 0 ? 'col-span-2 bg-gradient-to-r from-brand-500/5 to-accent-500/5 border-brand-500/20' : ''
            ]"
          >
            <div class="text-2xl sm:text-3xl md:text-4xl font-display font-bold gradient-text mb-0.5 sm:mb-1">{{ metric.value }}</div>
            <div class="text-xs sm:text-sm text-[var(--color-text-muted)]">{{ metric.label }}</div>
            <p v-if="metric.desc" class="text-xs text-[var(--color-text-faint)] mt-0.5 sm:mt-1">{{ metric.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reasons = [
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    title: 'Tez yetkazib berish',
    description: 'Kelishilgan muddatda, hech qachon kechiktirilmasdan. Vaqtingiz bizga qimmat.',
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    title: 'Natijaga yo\'naltirilgan',
    description: "Chiroyli dizayn emas — konversiya, leadlar va biznes o'sishi uchun yaratamioz.",
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    title: "Kafolat va qo'llab-quvvatlash",
    description: "Loyiha topshirilgandan keyin ham yoningizda bo'lamiz. 24/7 texnik yordam.",
  },
  {
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    title: 'Byudjetga mos narx',
    description: "Kichik biznes ham, yirik korporatsiya ham uchun mos narxlar. Shaffof hisob-kitob.",
  },
]

const metrics = [
  { value: '150+', label: 'Bajarilgan loyiha', desc: 'O\'zbekiston va xorijda' },
  { value: '3 yil', label: 'Bozordagi tajriba' },
  { value: '98%', label: 'Mijoz mamnunligi' },
  { value: '2×', label: 'O\'rtacha ROI' },
  { value: '24/7', label: 'Qo\'llab-quvvatlash' },
]
</script>
