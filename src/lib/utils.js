/**
 * lib/utils.js
 * Shared helper utilities used across components.
 */

/** Merge class names (lightweight clsx alternative) */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** Stagger delay helper for Framer Motion lists */
export function stagger(index, base = 0.08, offset = 0.2) {
  return index * base + offset;
}

/** Clamp a number between min and max */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/** Format a date string to "MMM YYYY" */
export function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
