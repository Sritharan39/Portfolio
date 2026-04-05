"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { meta, experiences } from "@/data/index";
import { stagger } from "@/lib/utils";

const IDENTITY = [
  { key: "NAME",     val: "Sritharan" },
  { key: "ROLE",     val: "Software Developer" },
  { key: "DOMAIN",   val: "LIMS · SampleManager · Lab Systems" },
  { key: "EMPLOYER", val: "UST Global India" },
  { key: "LOCATION", val: meta.location },
  { key: "STATUS",   val: "Open to opportunities" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Parallax watermark */}
      <motion.div style={{ x: bgX }} aria-hidden
        className="absolute top-8 left-0 right-0 overflow-hidden pointer-events-none select-none">
        <div className="font-display font-black whitespace-nowrap tracking-tight"
          style={{ fontSize: "clamp(5rem,12vw,10rem)", color: "rgba(255,255,255,0.018)" }}>
          LABORATORY INFORMATION MANAGEMENT
        </div>
      </motion.div>

      <div className="max-w-8xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Identity card */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative card p-8 md:p-10">
              <div className="corner-tl" /><div className="corner-tr" />
              <div className="corner-bl" /><div className="corner-br" />
              <p className="label mb-6">IDENTITY · RECORD_001</p>
              <div className="space-y-4">
                {IDENTITY.map((row, i) => (
                  <motion.div key={row.key}
                    initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: stagger(i, 0.07, 0.3) }}
                    className="flex gap-4 items-start pb-3 last:pb-0"
                    style={{ borderBottom: "1px solid var(--border)" }}>
                    <span className="font-mono text-[10px] w-24 shrink-0 pt-0.5 tracking-wider"
                      style={{ color: "var(--accent)" }}>{row.key}</span>
                    <span className="text-sm font-light" style={{ color: "var(--text-secondary)" }}>{row.val}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: "pulse 2s infinite" }} />
                <span className="font-mono text-[10px] tracking-wider text-emerald-400">SYSTEM ONLINE</span>
              </div>
            </div>
          </motion.div>

          {/* Narrative */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}>
            <p className="label mb-6">◈ ABOUT</p>
            <h2 className="font-display font-black leading-tight mb-8"
              style={{ fontSize: "clamp(2rem,4vw,3.25rem)", color: "var(--text-primary)" }}>
              Building systems where{" "}
              <span style={{ color: "var(--accent)" }}>accuracy</span> is non&#8209;negotiable.
            </h2>
            <div className="space-y-5 font-light leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>I work at the intersection of software engineering and laboratory science — building LIMS solutions that labs trust to track every sample, every result, every time. At UST Global India, I specialize in SampleManager LIMS customization, workflow design, and instrument integration.</p>
              <p>My engineering philosophy mirrors the lab: precision first, then efficiency. I build systems that are auditable, scalable, and ones that scientists can actually use without friction.</p>
              <p>Beyond LIMS, I write frontend interfaces and data tools that bridge the gap between complex backend logic and human-readable outputs.</p>
            </div>
            <motion.div className="mt-10 flex flex-wrap gap-2"
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
              {["SampleManager LIMS","Python","React.js","SQL","REST APIs","Lab Automation"].map((tag) => (
                <span key={tag}
                  className="font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 transition-colors cursor-default"
                  style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}
                  onMouseEnter={e => { e.target.style.borderColor = "var(--border-accent)"; e.target.style.color = "var(--accent)"; }}
                  onMouseLeave={e => { e.target.style.borderColor = "var(--border)"; e.target.style.color = "var(--text-muted)"; }}>
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
