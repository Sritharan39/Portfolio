"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { nav, meta } from "@/data/index";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const SCROLL_THRESHOLD = 40;

// Framer Motion variants
const menuVariants = {
  closed: {
    clipPath: "inset(0% 0% 100% 0%)",
    opacity: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  open: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkVariants = {
  closed: { opacity: 0, x: 32 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07 + 0.15, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

const logoVariants = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const navItemVariants = {
  initial: { opacity: 0, y: -8 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06 + 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─────────────────────────────────────────
   HOOK — active section via IntersectionObserver
───────────────────────────────────────── */
function useActiveSection(ids) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

/* ─────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────── */

/** Animated hamburger → X icon */
function HamburgerIcon({ open }) {
  return (
    <div className="flex flex-col justify-center items-end gap-[5px] w-6 h-5">
      <motion.span
        animate={open ? { rotate: 45, y: 7, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="block h-px bg-[var(--text-primary)] origin-center"
      />
      <motion.span
        animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
        className="block h-px bg-[var(--accent)] w-3/4"
      />
      <motion.span
        animate={open ? { rotate: -45, y: -7, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="block h-px bg-[var(--text-primary)] origin-center"
      />
    </div>
  );
}

/** Single desktop nav link with animated underline */
function DesktopNavLink({ item, index, isActive }) {
  return (
    <motion.a
      href={item.href}
      custom={index}
      variants={navItemVariants}
      initial="initial"
      animate="animate"
      className={cn(
        "relative font-mono text-[11px] tracking-[0.18em] uppercase py-1 transition-colors duration-200",
        isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
      )}
    >
      {/* Index prefix */}
      <span className="text-[var(--accent)] opacity-60 mr-1.5 text-[9px]">
        {String(index + 1).padStart(2, "0")}.
      </span>

      {item.label}

      {/* Animated underline */}
      <motion.span
        className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--accent)] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isActive ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.a>
  );
}

/** Mobile full-screen menu */
function MobileMenu({ open, items, active, onClose }) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="fixed inset-0 z-40 flex flex-col bg-[var(--bg-primary)]"
          style={{ paddingTop: "4rem" }}
        >
          {/* Subtle grid texture inside menu */}
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

          {/* Ambient glow */}
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)" }}
          />

          {/* Nav links */}
          <nav className="relative flex flex-col justify-center flex-1 px-8 gap-2">
            {items.map((item, i) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit={{ opacity: 0, x: 24, transition: { duration: 0.2 } }}
                  onClick={onClose}
                  className={cn(
                    "group flex items-baseline gap-4 py-4 border-b border-[var(--border)] transition-colors",
                    isActive ? "border-[var(--border-accent)]" : ""
                  )}
                >
                  <span className="font-mono text-[10px] text-[var(--accent)] tracking-widest w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-display font-black text-4xl sm:text-5xl tracking-tight transition-colors duration-200",
                      isActive
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-primary)] group-hover:text-[var(--accent)]"
                    )}
                  >
                    {item.label}
                  </span>
                  <motion.span
                    className="ml-auto text-[var(--text-muted)] text-2xl"
                    animate={{ x: isActive ? 0 : -8, opacity: isActive ? 1 : 0 }}
                    whileGroupHover={{ x: 0, opacity: 1 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              );
            })}
          </nav>

          {/* Bottom strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
            className="relative px-8 pb-10 flex items-center justify-between"
          >
            <span className="label">{meta.location}</span>
            <a
              href={`mailto:${meta.email}`}
              onClick={onClose}
              className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest hover:text-[var(--accent)] transition-colors"
            >
              {meta.email}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────
   MAIN HEADER
───────────────────────────────────────── */
export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const { scrollY }               = useScroll();

  // Track scroll position for glassmorphism trigger
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > SCROLL_THRESHOLD);
  });

  // Derive section IDs from nav
  const sectionIds = nav.map((n) => n.href.replace("#", ""));
  const active     = useActiveSection(sectionIds);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── HEADER BAR ── */}
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16",
          "transition-all duration-500 ease-out"
        )}
        style={{
          background: scrolled
            ? "rgba(10, 10, 10, 0.75)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.05)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.4)"
            : "none",
        }}
      >
        <div className="max-w-8xl mx-auto h-full px-6 md:px-12 flex items-center justify-between gap-8">

          {/* ── LOGO ── */}
          <motion.a
            href="#"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 shrink-0 z-50"
            onClick={() => setMenuOpen(false)}
          >
            {/* Amber diamond mark */}
            <motion.span
              className="inline-block w-2 h-2 bg-[var(--accent)] rotate-45"
              animate={{ rotate: [45, 90, 45] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-mono text-sm tracking-[0.2em] text-[var(--text-primary)] uppercase">
              Sritharan
            </span>
            <span
              className="font-mono text-[var(--accent)] cursor-blink text-sm"
              aria-hidden="true"
            >
              _
            </span>
          </motion.a>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item, i) => {
              const id = item.href.replace("#", "");
              return (
                <DesktopNavLink
                  key={item.label}
                  item={item}
                  index={i}
                  isActive={active === id}
                />
              );
            })}
          </nav>

          {/* ── RIGHT CLUSTER ── */}
          <div className="flex items-center gap-4 shrink-0">
            {/* CTA — desktop */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              whileHover={{ scale: 1.04, backgroundColor: "rgba(245,158,11,0.12)" }}
              whileTap={{ scale: 0.96 }}
              className={cn(
                "hidden md:flex items-center gap-2",
                "font-mono text-[11px] tracking-[0.18em] uppercase",
                "text-[var(--accent)] border border-[var(--border-accent)]",
                "px-5 py-2.5 transition-colors duration-200"
              )}
            >
              Hire Me
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.a>

            {/* Hamburger — mobile */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden relative z-50 p-2 -mr-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <HamburgerIcon open={menuOpen} />
            </motion.button>
          </div>

        </div>

        {/* Progress line at bottom of header (scroll indicator) */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-[var(--accent)] origin-left"
          style={{
            scaleX: useScroll().scrollYProgress,
          }}
        />
      </motion.header>

      {/* ── MOBILE MENU ── */}
      <MobileMenu
        open={menuOpen}
        items={nav}
        active={active}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}
