"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { meta, stats } from "@/data/index";

const BOOT_LINES = [
  "SYS  » Initializing portfolio kernel...",
  "LIMS » Loading SampleManager modules...",
  "NET  » Establishing secure connection...",
  "DATA » Mounting project registry...",
  "AUTH » Identity verified: SRITHARAN",
  "OK   » All systems operational ✓",
];

function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < BOOT_LINES.length) { setLines((p) => [...p, BOOT_LINES[i]]); i++; }
      else { clearInterval(id); setTimeout(onComplete, 300); }
    }, 220);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="font-mono text-[11px] space-y-1 mb-10">
      {lines.map((line, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.15 }}
          className={i === lines.length - 1 ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}>
          {line}
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [ready, setReady] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(245,158,11,0.07) 0%, transparent 70%)" }} />

      {/* Side labels */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-20 bg-gradient-to-b from-transparent to-[var(--accent)]" style={{ opacity: 0.4 }} />
        <span className="label" style={{ writingMode: "vertical-rl", letterSpacing: "0.25em" }}>PORTFOLIO 2025</span>
        <div className="w-px h-20 bg-gradient-to-t from-transparent to-[var(--accent)]" style={{ opacity: 0.4 }} />
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[var(--border)]" />
        <a href={meta.github} target="_blank" rel="noreferrer"
          className="label hover:text-[var(--text-primary)] transition-colors"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.25em", color: "var(--text-muted)" }}>
          GITHUB
        </a>
        <div className="w-px h-6 bg-[var(--border)]" />
        <a href={meta.linkedin} target="_blank" rel="noreferrer"
          className="label hover:text-[var(--text-primary)] transition-colors"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.25em", color: "var(--text-muted)" }}>
          LINKEDIN
        </a>
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-[var(--border)]" />
      </div>

      <motion.div style={{ y, opacity }}
        className="max-w-8xl mx-auto w-full px-6 md:px-24 pt-24 pb-16">
        <BootSequence onComplete={() => setReady(true)} />

        <motion.div initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }} className="label mb-6">
            ◈ SOFTWARE DEVELOPER · LIMS SPECIALIST
          </motion.p>

          <h1 className="font-display font-black leading-none tracking-tight mb-8 overflow-hidden">
            {["SRITHA", "RAN"].map((word, wi) => (
              <motion.span key={word} initial={{ y: 120, opacity: 0 }}
                animate={ready ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: wi * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="block"
                style={{
                  fontSize: "clamp(4rem, 14vw, 11rem)",
                  color: wi === 0 ? "var(--text-primary)" : "transparent",
                  WebkitTextStroke: wi === 1 ? "1px rgba(255,255,255,0.18)" : "none",
                }}>
                {word}{wi === 1 && <span style={{ color: "var(--accent)", WebkitTextStroke: "none" }}>.</span>}
              </motion.span>
            ))}
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 mt-2">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="max-w-md leading-relaxed font-light"
              style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
              {meta.bio ?? "Precision-driven software developer specializing in Laboratory Information Management Systems. Building systems where accuracy is non-negotiable."}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-5 shrink-0 flex-wrap">
              <motion.a href="#projects" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 font-mono text-[11px] tracking-widest font-bold px-7 py-3.5 transition-colors"
                style={{ background: "var(--accent)", color: "#0a0a0a" }}>
                VIEW WORK
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
              <motion.a href={meta.resume} whileHover={{ scale: 1.02 }}
                className="font-mono text-[11px] tracking-widest transition-colors underline-hover"
                style={{ color: "var(--text-secondary)" }}>
                RESUME ↓
              </motion.a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-20 pt-8 flex flex-wrap gap-10 md:gap-16"
            style={{ borderTop: "1px solid var(--border)" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display font-black text-3xl text-glow"
                  style={{ color: "var(--text-primary)" }}>{s.value}</div>
                <div className="label mt-1" style={{ color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="label">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)", opacity: 0.6 }} />
      </motion.div>
    </section>
  );
}
