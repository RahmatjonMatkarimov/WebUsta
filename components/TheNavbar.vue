<template>
  <header :class="[
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    scrolled
      ? 'bg-[var(--color-bg)]/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-sm'
      : 'bg-transparent'
  ]" role="banner">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Asosiy navigatsiya">
      <div class="flex items-center justify-between h-14 sm:h-16">

        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 group flex-shrink-0" aria-label="WebUsta bosh sahifa">
          <div class="h-28 sm:h-36 overflow-hidden flex items-center">
            <img :src="logoSrc" alt="WebUsta Logo" class="h-full w-auto transition-all duration-300 logo-img" />
          </div>
        </NuxtLink>

        <!-- Desktop Nav -->
        <ul class="hidden lg:flex items-center gap-0.5 xl:gap-1" role="list">
          <li v-for="item in navItems" :key="item.href">
            <a :href="item.href"
              class="px-3 py-2 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-muted)] transition-all duration-200">
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Actions -->
        <div class="flex items-center gap-1.5 sm:gap-2">
          <!-- Dark mode toggle -->
          <button @click="toggleDark"
            class="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-muted)] transition-all duration-200 touch-target flex items-center justify-center"
            :aria-label="colorMode.value === 'dark' ? 'Kunduzgi rejim' : 'Tungi rejim'">
            <svg v-if="colorMode.value === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <a :href="siteConfig.contact.telegram.url" target="_blank" rel="noopener noreferrer"
            class="hidden md:inline-flex btn-primary py-2 text-sm">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
              stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Bog'lanish
          </a>

          <!-- Mobile menu button -->
          <button @click="mobileOpen = !mobileOpen"
            class="lg:hidden p-2 rounded-lg text-[var(--color-text-muted)] hover:bg-[var(--color-bg-muted)] transition-colors duration-200 touch-target flex items-center justify-center"
            :aria-expanded="mobileOpen" aria-controls="mobile-menu" aria-label="Menyu">
            <svg v-if="!mobileOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition name="mobile-menu">
        <div v-if="mobileOpen" id="mobile-menu" class="lg:hidden pb-4 border-t border-[var(--color-border)] mt-1 pt-3">
          <ul class="flex flex-col gap-1" role="list">
            <li v-for="item in navItems" :key="item.href">
              <a :href="item.href" @click="mobileOpen = false"
                class="block px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg-muted)] transition-all duration-200">
                {{ item.label }}
              </a>
            </li>
            <li class="mt-2">
              <a :href="siteConfig.contact.telegram.url" target="_blank" rel="noopener noreferrer"
                @click="mobileOpen = false" class="btn-telegram w-full justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.551c-.147.659-.541.82-1.097.51l-3.03-2.232-1.462 1.407c-.162.162-.297.297-.608.297l.215-3.062 5.575-5.032c.243-.215-.052-.335-.375-.12L6.376 14.17l-2.972-.928c-.648-.2-.659-.648.134-.959l11.59-4.47c.54-.2 1.013.12.834.435z" />
                </svg>
                Telegram orqali bog'lanish
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { siteConfig } from '~/utils/siteConfig'

const colorMode = useColorMode()
const scrolled = ref(false)
const mobileOpen = ref(false)

const logoSrc = computed(() => {
  return colorMode.value === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'
})

const navItems = [
  { label: 'Xizmatlar', href: '#services' },
  { label: 'Narxlar', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Biz haqimizda', href: '#why-us' },
  { label: 'Fikrlar', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Aloqa', href: '#contact' },
]

function toggleDark() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.touch-target {
  min-height: 44px;
  min-width: 44px;
}
</style>
