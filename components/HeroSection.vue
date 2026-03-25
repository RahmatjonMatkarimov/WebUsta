<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    aria-label="Bosh sahifa"
  >
    <!-- Background -->
    <div class="absolute inset-0 grid-pattern" aria-hidden="true" />
    <div class="absolute inset-0 bg-gradient-mesh dark:bg-gradient-mesh-dark" aria-hidden="true" />

    <!-- Floating orbs — hidden on small screens to avoid layout issues -->
    <div class="absolute top-1/4 -left-16 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" aria-hidden="true" />
    <div class="absolute bottom-1/4 -right-16 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-accent-500/10 blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 text-center">

      <!-- Headline -->
      <h1 class="section-heading mb-5 sm:mb-6">
        Biznesingizni
        <span class="gradient-text"> internetga</span>
        <br class="hidden sm:block" />
        olib chiqamiz
      </h1>

      <!-- Subheadline -->
      <p class="section-sub mb-8 sm:mb-10 mx-auto px-2">
        Web sayt, mobil ilova, Telegram bot va CRM tizimlari — barchasi bir joyda.
        <strong class="text-[var(--color-text)] font-medium">Tez, sifatli va ishonchli xizmat.</strong>
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col xs:flex-row sm:flex-row gap-3 justify-center mb-12 sm:mb-16 px-4 sm:px-0">
        <a href="#contact" class="btn-primary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
          Buyurtma berish
        </a>
        <a :href="siteConfig.contact.telegram.url" target="_blank" rel="noopener noreferrer" class="btn-secondary text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Bog'lanish
        </a>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="card p-3 sm:p-4 text-center group hover:border-brand-400/40"
        >
          <div class="text-xl sm:text-2xl md:text-3xl font-display font-bold gradient-text mb-0.5 sm:mb-1">{{ stat.value }}</div>
          <div class="text-xs sm:text-sm text-[var(--color-text-muted)] leading-tight">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="text-[var(--color-text-faint)]">
        <path d="M12 5v14M5 12l7 7 7-7"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { siteConfig } from '~/utils/siteConfig'

const stats = [
  { value: '150+', label: 'Bajarilgan loyiha' },
  { value: '3 yil', label: 'Tajriba' },
  { value: '98%', label: 'Mijoz mamnunligi' },
  { value: '24/7', label: "Qo'llab-quvvatlash" },
]
</script>
