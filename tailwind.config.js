/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#09090B',
          secondary: '#0F0F12',
          card: '#18181B',
          hover: '#1C1C1F',
        },
        border: {
          DEFAULT: '#27272A',
          hover: '#7C3AED',
        },
        accent: {
          primary: '#7C3AED',
          secondary: '#A78BFA',
          glow: 'rgba(124,58,237,0.15)',
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#52525B',
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(124,58,237,0.15)',
        'glow-lg': '0 0 40px rgba(124,58,237,0.2)',
      }
    },
  },
  plugins: [],
}
