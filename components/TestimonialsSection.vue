<template>
  <section id="testimonials" class="relative py-16 sm:py-20 md:py-28 overflow-hidden" aria-labelledby="testimonials-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-10 sm:mb-14">
        <span class="section-label mb-3 sm:mb-4 inline-block">Mijozlar fikri</span>
        <h2 id="testimonials-heading" class="section-heading mb-3 sm:mb-4">
          Ular nima
          <span class="gradient-text"> deyishadi?</span>
        </h2>
        <p class="section-sub px-2">
          Real mijozlarimizning haqiqiy fikrlari. Biz natijamiz bilan gaplashamiz.
        </p>
      </div>

      <!-- Testimonials grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <article
          v-for="review in testimonials"
          :key="review.id"
          :class="[
            'card card-hover p-5 sm:p-6 flex flex-col',
            review.featured ? 'sm:col-span-2 lg:col-span-1 bg-gradient-to-ob sm:bg-gradient-to-b from-brand-500/5 to-transparent border-brand-500/30' : ''
          ]"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4" :aria-label="`${review.rating} yulduz`">
            <svg
              v-for="n in 5"
              :key="n"
              class="w-4 h-4 sm:w-4 sm:h-4"
              viewBox="0 0 24 24"
              :fill="n <= review.rating ? '#f59e0b' : 'none'"
              stroke="#f59e0b"
              stroke-width="1.5"
              aria-hidden="true"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>

          <!-- Quote -->
          <blockquote class="text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed flex-1 mb-5 relative">
            <svg class="absolute -top-1 sm:-top-1.5 -left-1 sm:-left-2 text-brand-500/10 sm:text-brand-500/20 w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.157.315-.54.814-1.02 1.498-1.44 1.26-.776 2.14-1.326 2.64-1.65l-1.015-1.86c-1.027.606-1.952 1.212-2.78 1.817-.81.614-1.533 1.32-2.14 2.116-.613.8-1.04 1.693-1.278 2.678-.237.99-.24 2.117-.007 3.382.24 1.263.685 2.333 1.334 3.21.642.87 1.46 1.49 2.45 1.84 1 .355 2.12.408 3.36.16 1.24-.25 2.28-.79 3.12-1.62.84-.83 1.39-1.9 1.65-3.22.26-1.32.12-2.68-.42-4.08-1.2.64-2.2 1.38-3 2.22.14.46.21.95.21 1.47zm9.55 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.157.315-.54.814-1.02 1.498-1.44 1.26-.776 2.14-1.326 2.64-1.65l-1.015-1.86c-1.027.606-1.952 1.212-2.78 1.817-.81.614-1.533 1.32-2.14 2.116-.613.8-1.04 1.693-1.278 2.678-.237.99-.24 2.117-.007 3.382.24 1.263.685 2.333 1.334 3.21.642.87 1.46 1.49 2.45 1.84 1 .355 2.12.408 3.36.16 1.24-.25 2.28-.79 3.12-1.62.84-.83 1.39-1.9 1.65-3.22.26-1.32.12-2.68-.42-4.08-1.2.64-2.2 1.38-3 2.22.14.46.21.95.21 1.47z"/>
            </svg>
            <p class="pl-2 sm:pl-3 relative z-10">{{ review.text }}</p>
          </blockquote>

          <!-- Author -->
          <footer class="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
            <div
              :class="['w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0', review.avatarBg]"
              :aria-label="review.name + ' avatari'"
            >
              {{ review.name.charAt(0) }}
            </div>
            <div class="min-w-0">
              <div class="font-semibold text-sm text-[var(--color-text)] truncate">{{ review.name }}</div>
              <div class="text-[10px] sm:text-xs text-[var(--color-text-faint)] truncate">{{ review.role }}</div>
            </div>
            <div class="ml-auto pl-2">
              <span class="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-[var(--color-bg-muted)] text-[var(--color-text-faint)] whitespace-nowrap">{{ review.service }}</span>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    name: 'Asrorbek Olimov',
    role: 'Tadbirkor, Xorazm',
    service: 'SavdoPro',
    rating: 5,
    text: "SavdoPro tizimi do'konimiz ishini butunlay o'zgartirdi. Shtrix-kod skaneri va Excelga hisobotlarni yuklash funksiyalari juda qulay. Endi omborimizda nima borligini aniq bilamiz.",
    avatarBg: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    featured: true,
  },
  {
    id: 2,
    name: 'Murodbek Matkarimov',
    role: 'Marketolog & SMM',
    service: 'Landing Page',
    rating: 5,
    text: "WebUsta jamoasi mening shaxsiy portfoliomni juda zamonaviy va neon uslubida yaratib berishdi. Sayt yuklanish tezligi va mobil versiyasi ideal holatda. Mijozlarimga yoqdi!",
    avatarBg: 'bg-gradient-to-br from-purple-400 to-pink-500',
    featured: false,
  },
  {
    id: 3,
    name: 'Muhammadjon Xusainboyev',
    role: 'Professional Treyder',
    service: 'Professional Veb-sayt',
    rating: 5,
    text: "Treyder sifatida menga saytimning professional va ishonchli ko'rinishi juda muhim edi. WebUsta jamoasi barcha talablarimni yuqori darajada bajardi. Dizayn shunchaki super!",
    avatarBg: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    featured: false,
  },
  {
    id: 4,
    name: 'Boburjon Bobojonov',
    role: 'Treyder & Investor',
    service: 'Bio-Link Page',
    rating: 5,
    text: "Barcha ijtimoiy tarmoqlarim va aloqa kanallarim bitta premium bio-link sahifasiga jamlandi. Qora va tilla ranglardagi dizayn brendimning nufuzini ko'rsatib turibdi.",
    avatarBg: 'bg-gradient-to-br from-amber-400 to-yellow-600',
    featured: false,
  },
  {
    id: 5,
    name: 'Maftuna Saydullayeva',
    role: 'Savdo majmuasi menejeri',
    service: 'SavdoPro',
    rating: 5,
    text: "Mahsulotlar kam qolganda bildirishnoma kelishi bizga juda ma'qul keldi. Statistikalar esa qaysi mahsulot eng ko'p sotilayotganini ko'rsatib turadi. Professional ish uchun rahmat!",
    avatarBg: 'bg-gradient-to-br from-pink-400 to-purple-500',
    featured: false,
  },
  {
    id: 6,
    name: 'Javohirbek Ergashev',
    role: 'Katta do\'kon egasi',
    service: 'SavdoPro',
    rating: 5,
    text: "Web va mobil ilovaning birgalikda ishlashi juda yaxshi yechim. Do'kondagi jarayonlarni uzoqdan turib ham nazorat qila olaman. WebUsta jamoasiga kattakon rahmat!",
    avatarBg: 'bg-gradient-to-br from-emerald-400 to-teal-500',
    featured: false,
  },
]
</script>
