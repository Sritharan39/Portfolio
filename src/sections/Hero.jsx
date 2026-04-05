"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { meta } from "@/data/index";

/* ─────────────────────────────────────────
   TYPING EFFECT HOOK
   Cycles through roles with typewriter animation
───────────────────────────────────────── */
function useTypingEffect(words, { typeSpeed = 60, deleteSpeed = 35, pauseMs = 1800 } = {}) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx,   setWordIdx]   = useState(0);
  const [phase,     setPhase]     = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const word = words[wordIdx];
    let timeout;

    if (phase === "typing") {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseMs);
      }
    } else if (phase === "pausing") {
      setPhase("deleting");
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
      } else {
        setWordIdx((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIdx, words, typeSpeed, deleteSpeed, pauseMs]);

  return { displayed, phase };
}

/* ─────────────────────────────────────────
   PARALLAX BACKGROUND LAYERS
───────────────────────────────────────── */
function ParallaxLayers({ scrollYProgress }) {
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%",  "25%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%",  "15%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const op = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <motion.div style={{ opacity: op }} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Layer 1 — large amber orb, slow drift */}
      <motion.div style={{ y: y1 }}
        className="absolute"
        aria-hidden
        css={{
          top: "10%", left: "55%",
          width: "clamp(320px, 50vw, 700px)",
          height: "clamp(320px, 50vw, 700px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
        style2={{ top: "10%", left: "55%" }}
      >
        <div style={{
          width: "clamp(320px,50vw,700px)", height: "clamp(320px,50vw,700px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)",
          filter: "blur(40px)",
        }} />
      </motion.div>

      {/* Layer 2 — grid, slightly faster */}
      <motion.div style={{ y: y2 }}
        className="absolute inset-0 grid-bg"
        aria-hidden />

      {/* Layer 3 — floating rings, counter-move */}
      <motion.div style={{ y: y3 }} className="absolute inset-0" aria-hidden>
        {[120, 220, 340].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full"
            style={{
              width: size, height: size,
              top: `calc(50% - ${size / 2}px)`,
              right: `calc(15% - ${size / 2}px)`,
              border: `1px solid rgba(245,158,11,${0.06 - i * 0.015})`,
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   PROFILE IMAGE — floating + parallax
───────────────────────────────────────── */
function ProfileImage({ scrollYProgress }) {
  const y  = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yS = useSpring(y, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      style={{ y: yS }}
      initial={{ opacity: 0, x: 60, scale: 0.92 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center justify-center"
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: "-24px",
          border: "1px solid rgba(245,158,11,0.15)",
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating container */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Image frame */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Corner accents */}
          <div className="corner-tl" style={{ width: "1.5rem", height: "1.5rem" }} />
          <div className="corner-tr" style={{ width: "1.5rem", height: "1.5rem" }} />
          <div className="corner-bl" style={{ width: "1.5rem", height: "1.5rem" }} />
          <div className="corner-br" style={{ width: "1.5rem", height: "1.5rem" }} />

          {/* Profile image — replace src with your real photo */}
          <div
            className="absolute inset-3 overflow-hidden"
            style={{ border: "1px solid var(--border)" }}
          >
            {/* Placeholder avatar — swap <img> tag when you have a real photo */}
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)" }}
            >
              {/* Monogram fallback */}
              <div className="text-center">
                <div
                  className="font-display font-black"
                  style={{ fontSize: "clamp(3rem,8vw,5rem)", color: "var(--accent)", lineHeight: 1 }}
                >
                  S
                </div>
                <div className="font-mono text-[10px] tracking-[0.3em] mt-2"
                  style={{ color: "var(--text-muted)" }}>
                  SRITHARAN
                </div>
              </div>

              {/* Uncomment and replace with your image:
              <img
                src="/profile.jpg"
                alt="Sritharan"
                className="w-full h-full object-cover object-center"
              />
              */}
            </div>
          </div>

          {/* Scan line effect over image */}
          <motion.div
            className="absolute inset-3 pointer-events-none"
            style={{
              background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(245,158,11,0.015) 3px, rgba(245,158,11,0.015) 4px)",
            }}
          />
        </div>

        {/* Floating badge — role */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute -bottom-4 -left-4 md:-left-8 px-4 py-2.5 flex items-center gap-3"
          style={{
            background: "rgba(10,10,10,0.9)",
            border: "1px solid var(--border-accent)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"
            style={{ animation: "pulse 2s infinite" }} />
          <span className="font-mono text-[10px] tracking-widest text-emerald-400">
            OPEN TO WORK
          </span>
        </motion.div>

        {/* Floating badge — company */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="absolute -top-4 -right-4 md:-right-8 px-4 py-2.5"
          style={{
            background: "rgba(10,10,10,0.9)",
            border: "1px solid var(--border)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="font-mono text-[10px] tracking-widest" style={{ color: "var(--text-muted)" }}>
            @ UST Global
          </div>
          <div className="font-mono text-[10px] tracking-widest" style={{ color: "var(--accent)" }}>
            Chennai, India
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   LEFT CONTENT — text + CTAs
───────────────────────────────────────── */
function HeroContent() {
  const { displayed, phase } = useTypingEffect(meta.roles, {
    typeSpeed: 65, deleteSpeed: 38, pauseMs: 1900,
  });

  // Stagger config for text blocks
  const staggerItems = [
    { delay: 0.1 },
    { delay: 0.25 },
    { delay: 0.4 },
    { delay: 0.55 },
    { delay: 0.7 },
  ];

  return (
    <div className="flex flex-col justify-center gap-6 lg:gap-8 relative z-10">

      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...staggerItems[0], duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3"
      >
        <div className="w-8 h-px" style={{ background: "var(--accent)" }} />
        <span className="label">PORTFOLIO 2025 · SRITHARAN</span>
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...staggerItems[1], duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1
          className="font-display font-black tracking-tight leading-none"
          style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)", color: "var(--text-primary)" }}
        >
          {meta.name}
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>
      </motion.div>

      {/* Animated role — typing effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...staggerItems[2], duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-0 h-8"
        style={{ minHeight: "2rem" }}
      >
        <span
          className="font-mono text-sm md:text-base tracking-widest"
          style={{ color: "var(--text-secondary)" }}
        >
          {displayed}
        </span>
        <motion.span
          className="font-mono text-base ml-0.5"
          style={{ color: "var(--accent)" }}
          animate={{ opacity: phase === "pausing" ? [1, 0, 1] : 1 }}
          transition={{ duration: 0.8, repeat: phase === "pausing" ? Infinity : 0 }}
        >
          |
        </motion.span>
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...staggerItems[3], duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-lg text-sm md:text-base font-light leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {meta.bio}
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...staggerItems[4], duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-wrap items-center gap-4"
      >
        {/* Primary CTA */}
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(245,158,11,0.25)" }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-3 font-mono text-[11px] font-bold tracking-widest px-7 py-3.5 transition-all"
          style={{ background: "var(--accent)", color: "#0a0a0a" }}
        >
          VIEW WORK
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.a>

        {/* Secondary CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.04, borderColor: "var(--accent)", color: "var(--text-primary)" }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 font-mono text-[11px] tracking-widest px-7 py-3.5 transition-all"
          style={{
            border: "1px solid var(--border)",
            color: "var(--text-secondary)",
          }}
        >
          CONTACT ME
        </motion.a>

        {/* Resume link */}
        <motion.a
          href={meta.resume}
          whileHover={{ color: "var(--accent)" }}
          className="font-mono text-[11px] tracking-widest transition-colors underline-hover"
          style={{ color: "var(--text-muted)" }}
        >
          RESUME ↓
        </motion.a>
      </motion.div>

      {/* Social quick-links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex items-center gap-5 pt-2"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {[
          { label: "GitHub",   href: meta.github },
          { label: "LinkedIn", href: meta.linkedin },
          { label: "Email",    href: `mailto:${meta.email}` },
        ].map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            whileHover={{ y: -2, color: "var(--accent)" }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95 + i * 0.07 }}
            className="font-mono text-[10px] tracking-widest uppercase transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            {s.label}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SCROLL CUE
───────────────────────────────────────── */
function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="label" style={{ color: "var(--text-muted)" }}>SCROLL</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "1px", height: "2rem",
          background: "linear-gradient(to bottom, var(--accent), transparent)",
          opacity: 0.6,
        }}
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   MAIN HERO
───────────────────────────────────────── */
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingTop: "4rem" }} // header height offset
    >
      {/* Parallax background layers */}
      <ParallaxLayers scrollYProgress={scrollYProgress} />

      {/* Main content — split layout */}
      <div className="relative z-10 max-w-8xl mx-auto w-full px-6 md:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)]">

          {/* Left — text content */}
          <HeroContent />

          {/* Right — profile image */}
          <div className="flex justify-center lg:justify-end">
            <ProfileImage scrollYProgress={scrollYProgress} />
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <ScrollCue />
    </section>
  );
}
