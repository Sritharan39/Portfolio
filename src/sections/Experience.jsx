"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/data/index";
import { stagger } from "@/lib/utils";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section id="experience" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-24">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          className="label mb-4">◈ WORK HISTORY</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-black mb-20"
          style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "var(--text-primary)" }}>
          Experience
        </motion.h2>

        <div className="relative">
          {/* Animated timeline line — desktop */}
          <div className="absolute left-[188px] top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border)" }}>
            <motion.div style={{ height: lineH }}
              className="w-full"
              
              style={{ height: lineH, background: "linear-gradient(to bottom, #f59e0b, transparent)" }} />
          </div>

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: stagger(i, 0.15, 0.3), duration: 0.8, ease: [0.22,1,0.36,1] }}
                className="md:grid gap-0" style={{ gridTemplateColumns: "200px 1fr" }}>
                {/* Meta — desktop left */}
                <div className="hidden md:flex flex-col items-end pr-10 pt-1 gap-1.5">
                  <span className="font-mono text-[10px] tracking-wider text-right" style={{ color: "var(--accent)" }}>{exp.period}</span>
                  <span className="font-mono text-[10px] tracking-wider text-right" style={{ color: "var(--text-muted)" }}>{exp.type}</span>
                  {/* Timeline dot */}
                  <div className="mt-3 relative">
                    <div className="absolute left-full ml-[9px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45"
                      style={{ border: "1px solid var(--accent)", background: "var(--bg-primary)" }} />
                  </div>
                </div>

                {/* Card */}
                <div className="group relative card p-8 md:p-10 transition-colors"
                  style={{ paddingLeft: "2.5rem" }}>
                  {/* Left accent bar */}
                  <div className="absolute top-0 left-0 bottom-0 w-0.5 transition-colors duration-300 group-hover:bg-[var(--accent)]"
                    style={{ background: "transparent" }} />

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <h3 className="font-display font-bold text-xl md:text-2xl mb-1"
                        style={{ color: "var(--text-primary)" }}>{exp.role}</h3>
                      <span className="font-mono text-sm tracking-wider" style={{ color: "var(--accent)" }}>{exp.company}</span>
                    </div>
                    <span className="md:hidden font-mono text-[10px] tracking-wider" style={{ color: "var(--accent)" }}>{exp.period}</span>
                  </div>

                  <p className="font-light leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>{exp.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.highlights.map((h, hi) => (
                      <motion.div key={hi}
                        initial={{ opacity: 0, x: -10 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: stagger(hi, 0.07, 0.6) }}
                        className="flex items-center gap-3">
                        <span style={{ color: "var(--accent)", fontSize: "0.7rem" }}>▸</span>
                        <span className="font-mono text-[11px] tracking-wide" style={{ color: "var(--text-muted)" }}>{h}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
