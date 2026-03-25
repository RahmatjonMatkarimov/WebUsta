<template>
  <section id="contact" class="relative py-16 sm:py-20 md:py-28 overflow-hidden" aria-labelledby="contact-heading">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-500/5 via-transparent to-accent-500/5 pointer-events-none"
      aria-hidden="true" />
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/5 blur-3xl pointer-events-none hidden sm:block"
      aria-hidden="true" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">

        <!-- Left: CTA content -->
        <div class="reveal">
          <span class="section-label mb-4 sm:mb-6 inline-block">Aloqa</span>
          <h2 id="contact-heading" class="section-heading mb-4 sm:mb-6">
            Loyihangizni
            <span class="gradient-text"> boshlaylik!</span>
          </h2>
          <p class="text-[var(--color-text-muted)] text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            Bepul konsultatsiya uchun murojaat qiling. Loyihangizni tinglаb, eng to'g'ri yechimni tavsiya qilamiz.
          </p>

          <!-- Contact options -->
          <div class="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <a v-for="contact in contacts" :key="contact.label" :href="contact.href"
              :target="contact.external ? '_blank' : undefined"
              :rel="contact.external ? 'noopener noreferrer' : undefined"
              class="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 card card-hover group">
              <div
                class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                :class="contact.iconBg">
                <span v-html="contact.icon" class="text-white" />
              </div>
              <div class="min-w-0 flex-1">
                <div class="text-xs text-[var(--color-text-faint)] mb-0.5">{{ contact.label }}</div>
                <div
                  class="font-semibold text-sm sm:text-base text-[var(--color-text)] group-hover:text-brand-500 transition-colors duration-200 truncate">
                  {{ contact.value }}</div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round"
                class="flex-shrink-0 text-[var(--color-text-faint)] group-hover:text-brand-500 group-hover:translate-x-1 transition-all duration-200"
                aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          <!-- Working hours -->
          <div class="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-text-muted)]">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" aria-hidden="true"></span>
            Ish vaqti: Dushanbadan-Shanbagacha, 9:00 – 22:00
          </div>
        </div>

        <!-- Right: Quick form -->
        <div class="reveal reveal-delay-1">
          <div class="card p-5 sm:p-6 md:p-8">
            <h3 class="font-display font-semibold text-lg sm:text-xl text-[var(--color-text)] mb-5 sm:mb-6">Tez ariza
              qoldiring</h3>

            <form @submit.prevent="submitForm" novalidate class="space-y-4" aria-label="Aloqa formasi">
              <div>
                <label for="contact-name"
                  class="block text-xs sm:text-sm font-medium text-[var(--color-text-muted)] mb-1.5">
                  Ismingiz <span class="text-red-400" aria-label="majburiy">*</span>
                </label>
                <input id="contact-name" v-model="form.name" type="text" placeholder="Bobur Toshmatov"
                  class="input-field" required autocomplete="name" />
              </div>

              <div>
                <label for="contact-phone"
                  class="block text-xs sm:text-sm font-medium text-[var(--color-text-muted)] mb-1.5">
                  Telefon raqam <span class="text-red-400" aria-label="majburiy">*</span>
                </label>
                <input id="contact-phone" v-model="form.phone" type="tel" placeholder="+998 90 123 45 67"
                  class="input-field" required autocomplete="tel" inputmode="tel" />
              </div>

              <div>
                <label for="contact-service"
                  class="block text-xs sm:text-sm font-medium text-[var(--color-text-muted)] mb-1.5">
                  Qaysi xizmat qiziqtiradi?
                </label>
                <select id="contact-service" v-model="form.service" class="input-field">
                  <option value="">Tanlang...</option>
                  <option value="web">Web sayt yaratish</option>
                  <option value="app">Mobil ilova</option>
                  <option value="bot">Telegram bot</option>
                  <option value="crm">CRM tizimi</option>
                  <option value="other">Boshqa</option>
                </select>
              </div>

              <div>
                <label for="contact-message"
                  class="block text-xs sm:text-sm font-medium text-[var(--color-text-muted)] mb-1.5">
                  Loyiha haqida qisqacha
                </label>
                <textarea id="contact-message" v-model="form.message" rows="3"
                  placeholder="Loyihangiz haqida qisqacha yozing..." class="input-field resize-none" />
              </div>

              <button type="submit" class="btn-primary w-full justify-center py-3 sm:py-3.5 text-sm sm:text-base"
                :disabled="sending">
                <template v-if="!sending && !sent">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Ariza yuborish
                </template>
                <template v-else-if="sending">
                  <svg class="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" aria-hidden="true">
                    <path
                      d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  Yuborilmoqda...
                </template>
                <template v-else>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Yuborildi! Tez orada aloqaga chiqamiz
                </template>
              </button>
            </form>

            <p class="text-xs text-[var(--color-text-faint)] text-center mt-4 flex items-center justify-center gap-1">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Ma'lumotlaringiz xavfsiz. Spam yubormaymiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { siteConfig } from '~/utils/siteConfig'

const form = reactive({
  name: '',
  phone: '',
  service: '',
  message: '',
})

const sending = ref(false)
const sent = ref(false)

const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  const isMobile = /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua);
  const os = /Windows/i.test(ua) ? 'Windows' :
    /Mac OS X/i.test(ua) && !isMobile && !isTablet ? 'macOS' :
      /Linux/i.test(ua) && !isMobile ? 'Linux' :
        /Android/i.test(ua) ? 'Android' :
          /iPhone|iPad|iPod/i.test(ua) ? 'iOS' : 'Noma\'lum OS';
  const deviceType = isTablet ? '📟 Planshet' : isMobile ? '📱 Telefon' : '💻 Kompyuter (PC)';
  return `${deviceType} | ${os}`;
};

async function submitForm() {
  if (!form.name || !form.phone) return
  sending.value = true

  try {
    const deviceInfo = getDeviceInfo();
    const text = `🚀 Yangi ariza!\n\n` +
      `👤 Ism: ${form.name}\n` +
      `📞 Telefon: ${form.phone}\n` +
      `🛠 Xizmat: ${form.service || 'Ko\'rsatilmagan'}\n` +
      `💬 Xabar: ${form.message || '—'}\n\n` +
      `📅 Sana: ${new Date().toLocaleString('uz-UZ')}\n` +
      `💻 Device: ${deviceInfo}\n`

    const response = await fetch(`https://api.telegram.org/bot${siteConfig.telegramBot.token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: siteConfig.telegramBot.chatId,
        text: text,
        parse_mode: 'HTML'
      })
    })

    if (response.ok) {
      sent.value = true
      // Reset form
      form.name = ''
      form.phone = ''
      form.service = ''
      form.message = ''
    } else {
      throw new Error('Telegramga yuborishda xatolik')
    }
  } catch (error) {
    console.error('Xatolik:', error)
    alert("Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring yoki to'g'ridan-to'g'ri Telegram orqali yozing.")
  } finally {
    sending.value = false
  }
}

const contacts = [
  {
    label: 'Telegram',
    value: siteConfig.contact.telegram.display,
    href: siteConfig.contact.telegram.url,
    external: true,
    iconBg: 'bg-[#0088cc]',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.026 9.551c-.147.659-.541.82-1.097.51l-3.03-2.232-1.462 1.407c-.162.162-.297.297-.608.297l.215-3.062 5.575-5.032c.243-.215-.052-.335-.375-.12L6.376 14.17l-2.972-.928c-.648-.2-.659-.648.134-.959l11.59-4.47c.54-.2 1.013.12.834.435z"/></svg>`,
  },
  {
    label: 'Telefon',
    value: siteConfig.contact.phone.display,
    href: `tel:${siteConfig.contact.phone.raw}`,
    external: false,
    iconBg: 'bg-gradient-to-br from-brand-500 to-brand-600',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.55 3.35 2 2 0 0 1 3.52 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  },
  {
    label: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    external: false,
    iconBg: 'bg-gradient-to-br from-accent-500 to-accent-600',
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  },
]
</script>
