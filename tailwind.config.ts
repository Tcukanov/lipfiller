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
        primary: {
          50: '#fdf4f3',
          100: '#fce8e6',
          200: '#f9d5d2',
          300: '#f4b5af',
          400: '#ec8b82',
          500: '#e06459',
          600: '#cb4539',
          700: '#aa372d',
          800: '#8d3129',
          900: '#752e28',
          950: '#401511',
        },
        secondary: {
          50: '#f6f5f0',
          100: '#e9e6da',
          200: '#d5cfb8',
          300: '#bdb38f',
          400: '#a89a6f',
          500: '#998961',
          600: '#836f52',
          700: '#6a5744',
          800: '#5a4a3d',
          900: '#4e4137',
          950: '#2c231d',
        },
        gold: {
          50: '#fbf9eb',
          100: '#f6f1cb',
          200: '#efe29a',
          300: '#e5cb60',
          400: '#ddb636',
          500: '#cd9f23',
          600: '#b17c1b',
          700: '#8d5b19',
          800: '#76491c',
          900: '#653d1d',
          950: '#3a1f0d',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
