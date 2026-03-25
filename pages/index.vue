<template>
  <div class="min-h-screen bg-[var(--color-bg)] flex flex-col">
    <TheNavbar />

    <main id="main-content" class="flex-1">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>

    <TheFooter />

    <!-- Floating CTA (mobile) -->
    <a
      v-if="showFab"
      :href="siteConfig.social.telegram"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-5 right-5 z-40 btn-telegram shadow-[0_8px_32px_rgba(0,136,204,0.4)] rounded-full w-14 h-14 flex items-center justify-center lg:hidden px-0"
      aria-label="Telegram orqali bog'lanish"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.551c-.147.659-.541.82-1.097.51l-3.03-2.232-1.462 1.407c-.162.162-.297.297-.608.297l.215-3.062 5.575-5.032c.243-.215-.052-.335-.375-.12L6.376 14.17l-2.972-.928c-.648-.2-.659-.648.134-.959l11.59-4.47c.54-.2 1.013.12.834.435z"/>
      </svg>
    </a>

    <!-- Back to top -->
    <button
      v-if="scrolled > 500"
      @click="scrollToTop"
      class="fixed bottom-5 left-5 z-40 w-12 h-12 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text-muted)] flex items-center justify-center hover:border-brand-400 hover:text-brand-500 shadow-card touch-target"
      aria-label="Tepaga qaytish"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
        <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { siteConfig } from '~/utils/siteConfig'

const scrolled = ref(0)
const showFab = ref(false)

onMounted(() => {
  // Scroll tracking
  const handleScroll = () => {
    scrolled.value = window.scrollY
    showFab.value = window.scrollY > 300
  }

  window.addEventListener('scroll', handleScroll, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'auto' })
}
</script>

<style scoped>
/* Animations removed for speed */
</style>
