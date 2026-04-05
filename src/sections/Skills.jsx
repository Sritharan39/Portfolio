"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/index";
import { stagger } from "@/lib/utils";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const total = skills.reduce((a, s) => a + s.items.length, 0);

  return (
    <section id="skills" ref={ref} className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute inset-0 grid-bg" style={{ opacity: 0.5 }} />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,var(--accent),transparent)", opacity: 0.3 }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,var(--border),transparent)" }} />

      <div className="relative max-w-8xl mx-auto px-6 md:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              className="label mb-4">◈ TECHNICAL STACK</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display font-black leading-tight"
              style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "var(--text-primary)" }}>
              Precision{" "}
              <span style={{ color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>Tools</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
            className="font-mono text-[10px] tracking-wider" style={{ color: "var(--text-muted)" }}>
            INSTRUMENTS_LOADED: {String(total).padStart(2,"0")}<br />
            CATEGORIES_ACTIVE: {skills.length}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {skills.map((cat, ci) => (
            <motion.div key={cat.category}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: stagger(ci, 0.1, 0.2), duration: 0.7, ease: [0.22,1,0.36,1] }}
              className="group relative p-8 md:p-10 transition-colors"
              style={{ background: "var(--bg-secondary)" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--bg-card)"}
              onMouseLeave={e => e.currentTarget.style.background = "var(--bg-secondary)"}>
              {/* Category row */}
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[10px] tracking-wider" style={{ color: "var(--accent)" }}>
                  [{String(ci+1).padStart(2,"0")}]
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
                  {cat.category}
                </span>
                <div className="flex-1 h-px transition-colors" style={{ background: "var(--border)" }} />
              </div>
              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, ii) => (
                  <motion.span key={item}
                    initial={{ opacity: 0, scale: 0.88 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: stagger(ii, 0.05, ci * 0.1 + 0.4) }}
                    whileHover={{ scale: 1.05 }}
                    className="text-sm font-light px-4 py-2 cursor-default transition-all"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                    onMouseEnter={e => { e.target.style.borderColor = "var(--border-accent)"; e.target.style.color = "var(--accent)"; e.target.style.background = "var(--accent-dim)"; }}
                    onMouseLeave={e => { e.target.style.borderColor = "var(--border)"; e.target.style.color = "var(--text-secondary)"; e.target.style.background = "rgba(255,255,255,0.03)"; }}>
                    {item}
                  </motion.span>
                ))}
              </div>
              {/* Bottom slide accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: "var(--accent)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
