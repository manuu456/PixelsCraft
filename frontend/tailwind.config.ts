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
        gold: {
          DEFAULT: '#D4AF37',
          light: '#FFD700',
          muted: '#BCA876',
          hover: '#F3E5AB',
          50: 'rgba(212, 175, 55, 0.05)',
          100: 'rgba(212, 175, 55, 0.1)',
          200: 'rgba(212, 175, 55, 0.2)',
          600: 'rgba(212, 175, 55, 0.6)',
        },
        void: {
          DEFAULT: '#050505',
          surface: '#0A0A0A',
          card: '#111111',
        },
      },
      fontFamily: {
        heading: ['Cabinet Grotesk', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'gold-pulse': 'gold-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gold-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212, 175, 55, 0.15)' },
          '50%': { boxShadow: '0 0 25px rgba(212, 175, 55, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
