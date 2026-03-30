import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: '#e8a0a0',
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d2d9',
          300: '#f4adb9',
          400: '#ec8194',
          500: '#e8a0a0',
          600: '#d4688a',
          700: '#b84d6d',
          800: '#9a4259',
          900: '#813a4d',
        },
        bloom: {
          DEFAULT: '#d4688a',
          light: '#e8849f',
          dark: '#b0405e',
        },
        petal: '#f7d4e0',
        leaf: '#6a9e6e',
        gold: '#c9a14a',
        glass: {
          bg: 'rgba(255, 255, 255, 0.22)',
          border: 'rgba(255, 255, 255, 0.42)',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      backdropBlur: {
        glass: '20px',
      },
      boxShadow: {
        glass: '0 8px 48px rgba(180, 80, 100, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
        'glass-hover': '0 24px 64px rgba(180, 80, 100, 0.20)',
        bloom: '0 6px 28px rgba(212, 104, 138, 0.38)',
        'bloom-hover': '0 12px 36px rgba(212, 104, 138, 0.48)',
      },
      animation: {
        'bounce-slow': 'bounce-slow 2s infinite',
        'fade-in': 'fade-in 0.9s ease-out forwards',
        'slide-up': 'slide-up 0.9s ease-out forwards',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(48px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
