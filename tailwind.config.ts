import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Dark mode driven by CSS class (we control it via ThemeProvider)
  darkMode: "class",

  theme: {
    extend: {
      /* ── Fonts ── */
      fontFamily: {
        display: ["Syne",       "sans-serif"],
        mono:    ["Space Mono", "monospace"],
        body:    ["DM Sans",    "sans-serif"],
      },

      /* ── Colors (mirror CSS vars for Tailwind intellisense) ── */
      colors: {
        bg: {
          primary:   "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card:      "var(--bg-card)",
          hover:     "var(--bg-hover)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          dim:     "var(--accent-dim)",
        },
        text: {
          primary:   "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted:     "var(--text-muted)",
        },
        border: {
          subtle: "var(--border)",
          accent: "var(--border-accent)",
        },
      },

      /* ── Fluid font sizes ── */
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "10xl": ["10rem",   { lineHeight: "1" }],
      },

      /* ── Spacing ── */
      spacing: {
        "section": "var(--section-pad-y)",
        "container": "var(--container-x)",
      },

      /* ── Max widths ── */
      maxWidth: {
        "8xl": "88rem",
      },

      /* ── Animations ── */
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up":   "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-in":   "fade-in 0.5s ease forwards",
        "spin-slow": "spin 12s linear infinite",
      },

      /* ── Transitions ── */
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },

  plugins: [],
};

export default config;
