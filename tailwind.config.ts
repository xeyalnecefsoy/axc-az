import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sepia: {
          50: '#f8f5f0',
          100: '#efe8d9',
          200: '#e3d3b5',
          300: '#d5b98d',
          400: '#c79e66',
          500: '#b8853f',
          600: '#966732',
          700: '#734a25',
          800: '#4f2f18',
          900: '#2c160a',
        },
        wood: {
          50: '#F5EEE6',
          100: '#E7D9C9',
          200: '#D4BFA4',
          300: '#C1A680',
          400: '#A8845A',
          500: '#8B5A2B',
          600: '#6E4521',
          700: '#52331A',
          800: '#3A2412',
          900: '#26180C'
        }
      },
      fontFamily: {
        serif: ['\"Times New Roman\"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(44,22,10,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
