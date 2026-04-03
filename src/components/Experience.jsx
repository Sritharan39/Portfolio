"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-label mb-4"
        >
          ◈ WORK HISTORY
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display font-black text-4xl md:text-6xl text-white mb-20"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-white/5 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-amber-500 to-amber-500/0"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="md:grid md:grid-cols-[200px_1fr] gap-0"
              >
                {/* Left — meta */}
                <div className="hidden md:flex flex-col items-end pr-10 pt-1 gap-2">
                  <div className="font-mono text-[10px] text-amber-500 tracking-wider text-right">
                    {exp.period}
                  </div>
                  <div className="font-mono text-[10px] text-[#525252] tracking-wider text-right">
                    {exp.type}
                  </div>
                  {/* Timeline dot */}
                  <div className="relative mt-2">
                    <div className="absolute left-full ml-px top-1/2 -translate-y-1/2 w-3 h-3 border border-amber-500 bg-[#0a0a0a] rotate-45" />
                  </div>
                </div>

                {/* Right — content */}
                <div className="md:pl-10 border border-white/6 bg-[#111111] p-8 md:p-10 relative group hover:border-amber-500/20 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500/0 group-hover:bg-amber-500/40 transition-colors" />

                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="font-display font-bold text-2xl text-white mb-1">{exp.role}</h3>
                      <div className="font-mono text-sm text-amber-500 tracking-wider">{exp.company}</div>
                    </div>
                    <div className="md:hidden">
                      <div className="font-mono text-[10px] text-amber-500 tracking-wider">{exp.period}</div>
                    </div>
                  </div>

                  <p className="text-[#a3a3a3] font-light leading-relaxed mb-8">{exp.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.highlights.map((h, hi) => (
                      <motion.div
                        key={hi}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: hi * 0.08 + 0.6 }}
                        className="flex items-center gap-3"
                      >
                        <span className="text-amber-500 text-xs flex-shrink-0">▸</span>
                        <span className="font-mono text-[11px] text-[#525252] tracking-wide">{h}</span>
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
