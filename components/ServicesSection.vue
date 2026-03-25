<template>
  <section id="services" class="relative py-16 sm:py-20 md:py-28 overflow-hidden" aria-labelledby="services-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-10 sm:mb-14">
        <span class="section-label mb-3 sm:mb-4 inline-block">Xizmatlar</span>
        <h2 id="services-heading" class="section-heading mb-3 sm:mb-4">
          Sizga nima kerak?
        </h2>
        <p class="section-sub px-2">
          Biznesingiz uchun eng to'g'ri raqamli yechimni tanlaymiz va amalga oshiramiz.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <article
          v-for="service in services"
          :key="service.title"
          :class="[
            'card card-hover p-5 sm:p-6 md:p-8 group cursor-pointer flex flex-col',
            service.featured ? 'bg-gradient-to-br from-brand-500/5 to-accent-500/5 border-brand-500/20 shadow-brand/10' : ''
          ]"
        >
          <div class="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 flex-1">
            <!-- Icon -->
            <div :class="[
              'flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center',
              service.featured
                ? 'bg-gradient-to-br from-brand-500 to-accent-500 shadow-brand text-white'
                : 'bg-[var(--color-bg-muted)] text-brand-500 group-hover:bg-gradient-to-br group-hover:from-brand-500/20 group-hover:to-accent-500/20'
            ]">
              <span aria-hidden="true" v-html="service.icon" />
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1.5 sm:mb-2">
                <h3 class="text-lg sm:text-xl font-display font-semibold text-[var(--color-text)]">{{ service.title }}</h3>
                <span v-if="service.badge" class="px-2 py-0.5 text-xs font-semibold rounded-full bg-brand-500/15 text-brand-500 whitespace-nowrap">{{ service.badge }}</span>
              </div>
              <p class="text-[var(--color-text-muted)] mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{{ service.description }}</p>

              <!-- Features list -->
              <ul class="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2" role="list">
                <li
                  v-for="feature in service.features"
                  :key="feature"
                  class="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-text-muted)]"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-brand-500 flex-shrink-0" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Web Sayt Yaratish',
    description: "Sizning biznesingiz uchun zamonaviy, tez yuklanadigan va mobil-qulay web saytlar yaratamiz. SEO optimizatsiya bilan birga.",
    badge: 'Mashhur',
    featured: false,
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    features: ['Landing page', 'Korporativ sayt', 'Online do\'kon', 'Portfolio sayt', 'SEO optimizatsiya', 'Mobil-qulay dizayn'],
  },
  {
    title: 'Mobil Ilova Yaratish',
    description: "iOS va Android uchun zamonaviy mobil ilovalar ishlab chiqamiz. Foydalanuvchi uchun qulay interfeys va tez ishlash kafolati.",
    badge: null,
    featured: false,
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    features: ['iOS va Android', 'React Native', 'Push bildirishnomalar', 'Offline rejim', 'API integratsiya', 'App Store/Play Store'],
  },
  {
    title: 'Telegram Bot Yaratish',
    description: "Biznesingiz uchun aqlli Telegram botlar yaratamiz. Mijozlarga avtomatik javob, buyurtma qabul qilish va ko'p narsalar.",
    badge: '🔥 Trend',
    featured: true,
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    features: ['Buyurtma qabul qilish', 'Avtomatik javoblar', 'To\'lov integratsiyasi', 'Admin panel', 'Statistika', 'Mini App'],
  },
  {
    title: 'CRM Tizimi',
    description: "Kompaniyangiz uchun maxsus CRM tizimi. Mijozlar, buyurtmalar va jamoangizni bir joydan boshqaring.",
    badge: null,
    featured: false,
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    features: ['Mijozlar bazasi', 'Buyurtmalar boshqaruvi', 'Hisobotlar', 'Jamoa boshqaruvi', 'Email/SMS yuborish', 'Integratsiyalar'],
  },
]
</script>
