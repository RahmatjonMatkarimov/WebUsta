/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        accent: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
        surface: {
          light: '#f8fafc',
          dark: '#0a0f1a',
        }
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
        'gradient-brand-dark': 'linear-gradient(135deg, #075985 0%, #4f46e5 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, hsla(210,100%,56%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(240,80%,60%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(200,100%,50%,0.1) 0px, transparent 50%)',
        'gradient-mesh-dark': 'radial-gradient(at 40% 20%, hsla(210,100%,40%,0.2) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(240,80%,50%,0.15) 0px, transparent 50%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'brand': '0 0 0 1px rgba(14,165,233,0.1), 0 4px 16px rgba(14,165,233,0.12), 0 12px 40px rgba(14,165,233,0.08)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.06)',
        'card-dark': '0 1px 3px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.25)',
        'glow': '0 0 40px rgba(14,165,233,0.3)',
        'glow-purple': '0 0 40px rgba(99,102,241,0.25)',
      },
    },
  },
  plugins: [],
}
