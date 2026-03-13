/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        skin: {
          base: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
          border: 'var(--border)',
          'border-hover': 'var(--border-hover)',
          text: 'var(--text-primary)',
          muted: 'var(--text-secondary)',
          faint: 'var(--text-muted)',
          accent: 'var(--accent)',
          'accent-light': 'var(--accent-light)',
        }
      },
      boxShadow: {
        glow: '0 0 24px var(--accent-glow)',
        'glow-lg': '0 0 48px var(--accent-glow)',
      }
    },
  },
  plugins: [],
}
