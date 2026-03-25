# WebUsta – Landing Page

Professional IT services landing page built with Nuxt 3 + Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Generate static site
npm run generate
```

## 📁 Project Structure

```
webusta/
├── assets/
│   └── css/
│       └── main.css          # Global styles, CSS variables, animations
├── components/
│   ├── TheNavbar.vue         # Sticky navbar with dark mode + mobile menu
│   ├── HeroSection.vue       # Hero with CTA and stats
│   ├── ServicesSection.vue   # 4 service cards
│   ├── PricingSection.vue    # 3-tier pricing with tabs
│   ├── PortfolioSection.vue  # Filterable portfolio grid
│   ├── WhyUsSection.vue      # Trust signals + metrics
│   ├── TestimonialsSection.vue # Customer reviews
│   ├── FAQSection.vue        # Accordion FAQ
│   ├── ContactSection.vue    # Form + contact options
│   └── TheFooter.vue         # Footer with links
├── pages/
│   └── index.vue             # Main page (composes all sections)
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── nuxt.config.ts            # Nuxt config (SEO, modules)
├── tailwind.config.js        # Custom theme, dark mode
└── package.json
```

## ✨ Features

- **Dark/Light Mode** – System-aware, toggle in navbar
- **Fully Responsive** – Mobile-first, works on all devices
- **SEO Optimized** – Meta tags, semantic HTML, proper headings
- **Scroll Animations** – Reveal on scroll (IntersectionObserver)
- **Pricing Tabs** – Switch between Web, Bot, App, CRM pricing
- **Portfolio Filter** – Filter by service type
- **FAQ Accordion** – Smooth open/close
- **Contact Form** – With validation + Telegram fallback
- **Floating CTA** – Mobile Telegram button

## 🎨 Design System

Colors: Blue-sky (`#0ea5e9`) + Indigo (`#6366f1`) gradient
Fonts: Clash Display (headings) + DM Sans (body)
Mode: CSS variables for seamless dark/light switching

## 🔧 Customization

1. **Telegram link**: Replace `https://t.me/webusta` with your handle
2. **Phone/Email**: Update in `ContactSection.vue`
3. **Pricing**: Edit prices in `PricingSection.vue`
4. **Portfolio**: Add real projects in `PortfolioSection.vue`
5. **Testimonials**: Update with real reviews
6. **SEO meta**: Edit in `nuxt.config.ts`

## 🌐 Deploy

### Vercel (recommended)
```bash
npm run generate
# Deploy /dist folder to Vercel
```

### Netlify
```bash
npm run generate
# Upload /dist to Netlify
```

### VPS (Node.js)
```bash
npm run build
node .output/server/index.mjs
```
