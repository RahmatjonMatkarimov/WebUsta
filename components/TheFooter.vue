<template>
  <footer class="relative bg-[var(--color-bg-muted)] border-t border-[var(--color-border)] pt-12 sm:pt-16 pb-6 sm:pb-8" role="contentinfo">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

        <!-- Brand — spans 2 cols on mobile for better look -->
        <div class="col-span-2 sm:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-2 mb-3 sm:mb-4">
            <div class="h-28 sm:h-36 overflow-hidden flex items-center">
              <img
                :src="logoSrc"
                alt="WebUsta Logo"
                class="h-full w-auto transition-all duration-300 logo-img"
              />
            </div>
          </div>
          <p class="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 sm:mb-5 max-w-xs">
            Biznesingizni raqamli dunyoga olib chiqamiz. Sifat, tezlik va ishonchlilik — bizning ustuvorligimiz.
          </p>
          <div class="flex gap-2 sm:gap-3" role="list" aria-label="Ijtimoiy tarmoqlar">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-9 h-9 rounded-xl border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] hover:border-brand-400 hover:text-brand-500 hover:bg-brand-500/10 transition-all duration-200"
              role="listitem"
            >
              <span v-html="social.icon" aria-hidden="true" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div v-for="group in linkGroups" :key="group.title">
          <h3 class="font-display font-semibold text-[var(--color-text)] mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider">{{ group.title }}</h3>
          <ul class="space-y-2 sm:space-y-2.5" role="list">
            <li v-for="link in group.links" :key="link.label">
              <a
                :href="link.href"
                class="text-xs sm:text-sm text-[var(--color-text-muted)] hover:text-brand-500 transition-colors duration-200 flex items-center gap-1.5"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Divider + bottom -->
      <div class="border-t border-[var(--color-border)] pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <p class="text-xs sm:text-sm text-[var(--color-text-faint)] text-center sm:text-left">
          © {{ new Date().getFullYear() }} WebUsta. Barcha huquqlar himoyalangan.
        </p>
        <div class="flex items-center gap-4 text-xs sm:text-sm text-[var(--color-text-faint)]">
          <a href="#" class="hover:text-brand-500 transition-colors duration-200">Maxfiylik siyosati</a>
          <a href="#" class="hover:text-brand-500 transition-colors duration-200">Foydalanish shartlari</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { siteConfig } from '~/utils/siteConfig'

const colorMode = useColorMode()
const logoSrc = computed(() => {
  return colorMode.value === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'
})

const linkGroups = [
  {
    title: 'Xizmatlar',
    links: [
      { label: 'Web sayt yaratish', href: '#services' },
      { label: 'Mobil ilova', href: '#services' },
      { label: 'Telegram bot', href: '#services' },
      { label: 'CRM tizimi', href: '#services' },
    ],
  },
  {
    title: 'Kompaniya',
    links: [
      { label: 'Narxlar', href: '#pricing' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Fikrlar', href: '#testimonials' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Aloqa', href: '#contact' },
    ],
  },
]

const socials = [
  {
    label: 'Telegram kanali',
    href: siteConfig.social.telegram,
    icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.551c-.147.659-.541.82-1.097.51l-3.03-2.232-1.462 1.407c-.162.162-.297.297-.608.297l.215-3.062 5.575-5.032c.243-.215-.052-.335-.375-.12L6.376 14.17l-2.972-.928c-.648-.2-.659-.648.134-.959l11.59-4.47c.54-.2 1.013.12.834.435z"/></svg>`,
  },
  {
    label: 'Instagram',
    href: siteConfig.social.instagram,
    icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.social.linkedin,
    icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  },
]
</script>
