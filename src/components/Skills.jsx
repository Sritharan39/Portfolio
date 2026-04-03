"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative py-32 md:py-48 bg-[#0d0d0d] overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Background grid offset */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-label mb-4"
            >
              ◈ TECHNICAL STACK
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-4xl md:text-6xl text-white leading-tight"
            >
              Precision{" "}
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                Tools
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#525252] font-mono text-xs tracking-wider max-w-xs"
          >
            INSTRUMENTS_LOADED: {skills.reduce((a, s) => a + s.items.length, 0)}<br />
            CATEGORIES_ACTIVE: {skills.length}
          </motion.p>
        </div>

        {/* Skills grid — each category is structurally unique */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {skills.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.12 + 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#0d0d0d] p-8 md:p-10 group hover:bg-[#111111] transition-colors relative"
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[10px] text-amber-500">
                  [{String(ci + 1).padStart(2, "0")}]
                </span>
                <span className="font-mono text-xs text-[#525252] tracking-widest uppercase">
                  {cat.category}
                </span>
                <div className="flex-1 h-px bg-white/5 group-hover:bg-amber-500/20 transition-colors" />
              </div>

              {/* Skills as tags with stagger */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.12 + ii * 0.06 + 0.4 }}
                    whileHover={{ scale: 1.05, color: "#f59e0b" }}
                    className="font-body text-sm text-[#a3a3a3] bg-white/4 border border-white/6 px-4 py-2 cursor-default hover:border-amber-500/40 hover:bg-amber-500/5 transition-all"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
