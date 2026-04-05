"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { about, meta } from "@/data/index";
import { cn, stagger } from "@/lib/utils";

/* ─── Shared card wrapper ─── */
function Card({ children, className, delay = 0, style = {} }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className={cn("relative overflow-hidden card p-7 flex flex-col gap-5", className)}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function CardLabel({ index, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--accent)" }}>
        {String(index).padStart(2, "0")}
      </span>
      <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
        {title}
      </span>
      <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
    </div>
  );
}

/* ─── Card 1: Intro ─── */
function IntroCard({ delay }) {
  return (
    <Card delay={delay} className="md:col-span-2 lg:col-span-1"
      style={{ background: "linear-gradient(135deg, var(--bg-card) 60%, rgba(245,158,11,0.06))" }}>

      {/* Corner accents */}
      <div className="corner-tl" /><div className="corner-tr" />
      <div className="corner-bl" /><div className="corner-br" />

      <CardLabel index={1} title="INTRO" />

      <div>
        <p className="font-mono text-[10px] tracking-widest mb-3" style={{ color: "var(--accent)" }}>
          ◈ HELLO WORLD
        </p>
        <h3 className="font-display font-black text-2xl md:text-3xl leading-tight mb-4"
          style={{ color: "var(--text-primary)" }}>
          {about.intro.greeting}
        </h3>
        <p className="font-mono text-xs tracking-wide mb-5" style={{ color: "var(--accent)", opacity: 0.8 }}>
          {about.intro.tagline}
        </p>
        <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          {about.intro.body}
        </p>
      </div>

      {/* Status badge */}
      <div className="flex items-center gap-2 mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "pulse 2s infinite" }} />
        <span className="font-mono text-[10px] tracking-wider text-emerald-400">
          AVAILABLE FOR OPPORTUNITIES
        </span>
      </div>
    </Card>
  );
}

/* ─── Card 2: Career overview ─── */
function CareerCard({ delay }) {
  return (
    <Card delay={delay}>
      <CardLabel index={2} title="CAREER OVERVIEW" />

      <div className="relative flex flex-col gap-0">
        {/* Vertical timeline line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px" style={{ background: "var(--border)" }} />

        {about.career.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 + 0.3 }}
            className="flex gap-4 items-start py-2.5 relative"
          >
            {/* Dot */}
            <div className="w-3.5 h-3.5 rounded-full shrink-0 mt-0.5 z-10 flex items-center justify-center"
              style={{ border: "1px solid var(--accent)", background: "var(--bg-primary)" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            </div>

            <div className="flex-1 min-w-0">
              <span className="font-mono text-[9px] tracking-widest block mb-0.5"
                style={{ color: "var(--accent)" }}>{item.year}</span>
              <p className="text-xs font-light leading-snug" style={{ color: "var(--text-secondary)" }}>
                {item.event}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

/* ─── Card 3: Rotating quotes ─── */
function QuotesCard({ delay }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % about.quotes.length), 3500);
    return () => clearInterval(id);
  }, []);

  const quote = about.quotes[idx];

  return (
    <Card delay={delay} style={{ background: "var(--bg-card)", minHeight: "220px" }}>
      <CardLabel index={3} title="MOTIVATION" />

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Quote mark */}
            <div className="font-display font-black text-5xl leading-none mb-3"
              style={{ color: "var(--accent)", opacity: 0.25 }}>&ldquo;</div>
            <p className="font-display font-bold text-base md:text-lg leading-snug mb-4"
              style={{ color: "var(--text-primary)" }}>
              {quote.text}
            </p>
            <p className="font-mono text-[10px] tracking-wider" style={{ color: "var(--text-muted)" }}>
              {quote.author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="flex gap-1.5 mt-auto">
        {about.quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="transition-all duration-300"
            style={{
              width: i === idx ? "1.5rem" : "0.375rem",
              height: "0.375rem",
              borderRadius: "9999px",
              background: i === idx ? "var(--accent)" : "var(--border)",
            }}
            aria-label={`Quote ${i + 1}`}
          />
        ))}
      </div>
    </Card>
  );
}

/* ─── Card 4: Skills snapshot ─── */
function SkillsSnapshotCard({ delay }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Card delay={delay} className="md:col-span-2 lg:col-span-1">
      <CardLabel index={4} title="SKILLS SNAPSHOT" />

      <div ref={ref} className="flex flex-col gap-4">
        {about.skillsSnapshot.map((skill, i) => (
          <div key={skill.label}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-mono text-[10px] tracking-wider" style={{ color: "var(--text-secondary)" }}>
                {skill.label}
              </span>
              <span className="font-mono text-[10px]" style={{ color: "var(--accent)" }}>
                {skill.level}%
              </span>
            </div>
            {/* Track */}
            <div className="w-full h-px relative" style={{ background: "var(--border)" }}>
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{ background: "var(--accent)" }}
                initial={{ width: "0%" }}
                animate={inView ? { width: `${skill.level}%` } : { width: "0%" }}
                transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Tip dot */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
                initial={{ left: "0%" }}
                animate={inView ? { left: `calc(${skill.level}% - 3px)` } : { left: "0%" }}
                transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─── Card 5: Work values ─── */
function ValuesCard({ delay }) {
  const [hovered, setHovered] = useState(null);

  return (
    <Card delay={delay}>
      <CardLabel index={5} title="WORK VALUES" />

      <div className="grid grid-cols-2 gap-3 flex-1">
        {about.values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 + 0.3 }}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            className="relative p-3 transition-colors duration-200 cursor-default"
            style={{
              border: "1px solid",
              borderColor: hovered === i ? "var(--border-accent)" : "var(--border)",
              background: hovered === i ? "var(--accent-dim)" : "transparent",
            }}
          >
            <div className="font-mono text-base mb-2" style={{ color: "var(--accent)" }}>{v.icon}</div>
            <div className="font-mono text-[10px] tracking-widest uppercase mb-1.5"
              style={{ color: "var(--text-primary)" }}>{v.title}</div>
            <p className="text-[10px] font-light leading-snug" style={{ color: "var(--text-muted)" }}>
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

/* ─── Card 6: Highlights / stats ─── */
function HighlightsCard({ delay }) {
  return (
    <Card delay={delay} className="md:col-span-2 lg:col-span-1"
      style={{ background: "linear-gradient(135deg, var(--bg-card), rgba(245,158,11,0.04))" }}>
      <CardLabel index={6} title="HIGHLIGHTS" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1">
        {about.highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 + 0.3 }}
            className="flex flex-col gap-1 p-3"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div className="font-display font-black text-2xl md:text-3xl text-glow"
              style={{ color: "var(--text-primary)" }}>
              {h.value}
              <span className="text-lg" style={{ color: "var(--accent)" }}>{h.suffix}</span>
            </div>
            <div className="font-mono text-[9px] tracking-widest uppercase leading-tight"
              style={{ color: "var(--text-muted)" }}>
              {h.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
        <span className="font-mono text-[10px]" style={{ color: "var(--accent)" }}>◉</span>
        <span className="font-mono text-[10px] tracking-wider" style={{ color: "var(--text-muted)" }}>
          {meta.location}
        </span>
      </div>
    </Card>
  );
}

/* ─── Main About section ─── */
export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,158,11,0.03) 0%, transparent 70%)"
        }} />

      <div className="max-w-8xl mx-auto px-6 md:px-24">

        {/* Section header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="label mb-4">
            ◈ ABOUT ME
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-black leading-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--text-primary)" }}>
            The person behind<br />
            <span style={{ color: "var(--accent)" }}>the code.</span>
          </motion.h2>
        </div>

        {/* 2×3 responsive card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <IntroCard        delay={0.05} />
          <CareerCard       delay={0.12} />
          <QuotesCard       delay={0.19} />
          <SkillsSnapshotCard delay={0.26} />
          <ValuesCard       delay={0.33} />
          <HighlightsCard   delay={0.40} />
        </div>
      </div>
    </section>
  );
}
