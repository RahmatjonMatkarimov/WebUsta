<template>
  <section id="portfolio" class="relative py-16 sm:py-20 md:py-28" aria-labelledby="portfolio-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-10 sm:mb-14 reveal">
        <span class="section-label mb-3 sm:mb-4 inline-block">Portfolio</span>
        <h2 id="portfolio-heading" class="section-heading mb-3 sm:mb-4">
          Bizning
          <span class="gradient-text"> ishlarimiz</span>
        </h2>
        <p class="section-sub px-2">
          150+ muvaffaqiyatli loyiha. Har bir loyiha mijoz maqsadlarini amalga oshirishga yo'naltirilgan.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <component
          :is="project.url ? 'a' : 'article'"
          v-for="(project, i) in filteredProjects"
          :key="project.id"
          :href="project.url || undefined"
          :target="project.url ? '_blank' : undefined"
          :rel="project.url ? 'noopener noreferrer' : undefined"
          :class="['card card-hover group overflow-hidden reveal block no-underline text-inherit', `reveal-delay-${(i % 3) + 1}`, project.url ? 'cursor-pointer' : '']"
        >
          <!-- Placeholder image area -->
          <div :class="['relative h-48 sm:h-52 overflow-hidden', project.bgClass]" role="img"
            :aria-label="project.title + ' loyihasi ko\'rinishi'">
            <!-- Mock UI inside card -->
            <div class="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
              <div class="w-full max-w-[200px] sm:max-w-xs">
                <!-- Browser chrome -->
                <div v-if="project.type === 'web'"
                  class="bg-white/10 backdrop-blur rounded-t-lg px-2 sm:px-3 py-1.5 sm:py-2 flex items-center gap-1.5 sm:gap-2">
                  <div class="flex gap-1">
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-400/70" />
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400/70" />
                    <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400/70" />
                  </div>
                  <div class="flex-1 bg-white/10 rounded px-2 py-0.5 text-[10px] sm:text-xs text-white/60 truncate">{{
                    project.url }}</div>
                </div>
                <div v-if="project.type === 'web'"
                  class="bg-white/5 rounded-b-lg px-2 sm:px-3 py-3 sm:py-4 flex flex-col gap-1.5 sm:gap-2">
                  <div class="h-2.5 sm:h-3 bg-white/20 rounded w-3/4" />
                  <div class="h-1.5 sm:h-2 bg-white/10 rounded w-full" />
                  <div class="h-1.5 sm:h-2 bg-white/10 rounded w-5/6" />
                  <div class="mt-1 h-5 sm:h-6 bg-white/20 rounded-lg w-20 sm:w-24" />
                </div>

                <!-- Phone frame for mobile -->
                <div v-if="project.type === 'app'"
                  class="mx-auto w-20 sm:w-24 bg-white/10 rounded-2xl p-1.5 sm:p-2 border border-white/20">
                  <div class="w-full aspect-[9/16] rounded-xl bg-white/5 flex flex-col gap-1.5 sm:gap-2 p-1.5 sm:p-2">
                    <div class="h-1.5 sm:h-2 bg-white/30 rounded w-2/3 mx-auto" />
                    <div class="flex-1 grid grid-cols-2 gap-1 mt-1">
                      <div class="bg-white/20 rounded-md sm:rounded-lg" />
                      <div class="bg-white/20 rounded-md sm:rounded-lg" />
                      <div class="bg-white/20 rounded-md sm:rounded-lg" />
                      <div class="bg-white/20 rounded-md sm:rounded-lg" />
                    </div>
                  </div>
                </div>

                <!-- Bot icon -->
                <div v-if="project.type === 'bot'"
                  class="mx-auto w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                  <svg class="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"
                    aria-hidden="true">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>

                <!-- CRM icon -->
                <div v-if="project.type === 'crm'" class="mx-auto">
                  <div class="bg-white/10 rounded-xl p-2 sm:p-3 flex flex-col gap-1.5 sm:gap-2 w-32 sm:w-40">
                    <div class="flex items-center gap-2">
                      <div class="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/30" />
                      <div class="flex-1 h-1.5 sm:h-2 bg-white/20 rounded" />
                    </div>
                    <div class="h-1 sm:h-1.5 bg-white/15 rounded w-full" />
                    <div class="h-1 sm:h-1.5 bg-white/15 rounded w-5/6" />
                    <div class="h-1 sm:h-1.5 bg-white/15 rounded w-4/6" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Hover overlay - click to interact on mobile -->
            <div
              class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span
                class="text-white font-semibold text-xs sm:text-sm bg-white/20 backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">Batafsil
                ma'lumot</span>
            </div>
          </div>

          <!-- Info -->
          <div class="p-4 sm:p-5">
            <div class="flex items-start justify-between gap-2 mb-2">
              <h3
                class="font-display font-semibold text-base sm:text-lg text-[var(--color-text)] group-hover:text-brand-500 transition-colors duration-200">
                {{ project.title }}</h3>
              <span
                class="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-[var(--color-bg-muted)] text-[var(--color-text-faint)] whitespace-nowrap">{{
                  project.typeLabel }}</span>
            </div>
            <p
              class="text-xs sm:text-sm text-[var(--color-text-muted)] mb-3 leading-relaxed line-clamp-2 sm:line-clamp-none">
              {{ project.description }}</p>
            <div class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="tag in project.tags" :key="tag"
                class="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-brand-500/10 text-brand-500 border border-brand-500/20">{{
                tag }}</span>
            </div>
            <!-- Testimonial snippet -->
            <div v-if="project.testimonial" class="pt-3 border-t border-[var(--color-border)] italic text-[11px] sm:text-xs text-[var(--color-text-muted)] flex gap-1.5 items-start">
              <svg class="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-500/40 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p>{{ project.testimonial }}</p>
            </div>
          </div>
        </component>
      </div>

      <div class="text-center mt-10 sm:mt-12 reveal">
        <a href="https://t.me/webusta" target="_blank" rel="noopener noreferrer" class="btn-secondary w-full sm:w-auto">
          Barcha loyihalarni ko'rish
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: 'SavdoPro – Boshqaruv Tizimi',
    description: "Do'konni boshqarish uchun web va mobil ilova. Shtrix-kod skaner orqali mahsulot narxini aniqlash kassa tizimi, ombor nazorati va statsitika yuritadi.",
    testimonial: "Do'konimiz ishini butunlay o'zgartirdi. Tavsiya qilaman!",
    type: 'web',
    typeLabel: 'Web + Mobil ilova',
    url: null,
    bgClass: 'bg-gradient-to-br from-brand-500 to-accent-600',
    tags: ['Vue 3', 'Tailwind', 'NestJS', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'Murodbek Matkarimov – SMM & Digital',
    description: "Professional marketolog uchun neon uslubidagi zamonaviy portfolio. Glassmorphism va animatsiyalar bilan boyitilgan.",
    testimonial: "Dizayn va tezlik ideal holatda. Mijozlarimga juda yoqdi!",
    type: 'web',
    typeLabel: 'Landing Page',
    url: 'https://murodbek-matkarimov.rahmatjonmatkarimov.uz/',
    bgClass: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    tags: ['Vue 3', 'Tailwind', 'SMM', 'Analytics'],
  },
  {
    id: 3,
    title: 'Muhammadjon Xusainboyev – Trader Portfolio',
    description: "Treyder va moliyaviy tahlilchi uchun professional veb-sayt. Toza va biznes-estetikasidagi dizayn.",
    testimonial: "Barcha talablarim yuqori darajada bajarildi. Super natija!",
    type: 'web',
    typeLabel: 'Corporate Web',
    url: 'https://xusainboyevmuhammadjon.rahmatjonmatkarimov.uz/',
    bgClass: 'bg-gradient-to-br from-blue-600 to-cyan-500',
    tags: ['Vue 3', 'Tailwind', 'Finance', 'Trading'],
  },
  {
    id: 4,
    title: 'Boburjon Bobojonov – Bio-Link',
    description: "Treyder uchun barcha aloqa kanallarini birlashtiruvchi premium bio-link sahifasi. Qora va tilla ranglardagi hashamatli dizayn.",
    testimonial: "Premium dizayn brendim nufuzini ko'rsatib turibdi.",
    type: 'web',
    typeLabel: 'Bio-Link Page',
    url: 'https://boburjon-bobojonov.rahmatjonmatkarimov.uz/',
    bgClass: 'bg-gradient-to-br from-gray-900 to-yellow-600',
  },
]

const filteredProjects = projects
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
