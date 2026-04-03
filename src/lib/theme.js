/**
 * lib/theme.js
 * Theme utilities — client-safe, no Next.js imports.
 * Used by ThemeProvider and any component that needs theme state.
 */

export const THEMES = /** @type {const} */ (["dark", "light"]);

/** Read stored preference or fall back to system preference */
export function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Apply theme class to <html> and persist */
export function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
  localStorage.setItem("theme", theme);
}
