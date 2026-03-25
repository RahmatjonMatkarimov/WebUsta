// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'uz' },
      title: 'WebUsta – Web Sayt, Mobil Ilova va Telegram Bot Yaratish | O\'zbekiston',
      meta: [
        { charset: 'utf-8' },
        // Proper mobile viewport — prevents zoom issues, ensures full width
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, viewport-fit=cover'
        },
        {
          name: 'description',
          content: "WebUsta – O'zbekistonda web sayt yaratish, mobil ilova ishlab chiqish, Telegram bot yasash va CRM tizimlarini joriy etish bo'yicha IT kompaniya. Tez, sifatli va hamyonbop xizmat."
        },
        {
          name: 'keywords',
          content: "web sayt yaratish, telegram bot yasash, mobil ilova yaratish, landing page, CRM tizimi, IT kompaniya Uzbekistan, sayt dizayn Toshkent, dastur yaratish, website Uzbekistan"
        },
        { name: 'author', content: 'WebUsta' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#0ea5e9' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'format-detection', content: 'telephone=yes' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://webusta.uz' },
        { property: 'og:site_name', content: 'WebUsta' },
        { property: 'og:title', content: "WebUsta – Professional IT Xizmatlari O'zbekistonda" },
        { property: 'og:description', content: "Biznesingizni internetga olib chiqamiz. Web sayt, mobil ilova, Telegram bot va CRM yechimlar. Bepul konsultatsiya." },
        { property: 'og:image', content: 'https://webusta.uz/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'uz_UZ' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'WebUsta – Professional IT Xizmatlari' },
        { name: 'twitter:description', content: "Web sayt, mobil ilova, Telegram bot va CRM yechimlar. Bepul konsultatsiya." },
        { name: 'twitter:image', content: 'https://webusta.uz/og-image.jpg' },
      ],
      link: [
        { rel: 'canonical', href: 'https://webusta.uz' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap'
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WebUsta",
            "url": "https://webusta.uz",
            "logo": "https://webusta.uz/favicon.svg",
            "description": "O'zbekistonda web sayt yaratish, mobil ilova, Telegram bot va CRM tizimlari bo'yicha IT kompaniya.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Xorazm",
              "addressCountry": "UZ"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "url": "https://t.me/webusta",
              "availableLanguage": ["Uzbek"]
            },
            "sameAs": [
              "https://t.me/webusta",
              "https://instagram.com/webusta"
            ],
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "UZS",
              "lowPrice": "500000",
              "offerCount": "4"
            }
          })
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },

  nitro: {
    compressPublicAssets: true,
  },

  compatibilityDate: '2024-04-03',
})
