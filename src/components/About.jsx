"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="about" ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Drifting background text */}
      <motion.div
        style={{ x }}
        className="absolute top-12 left-0 right-0 overflow-hidden pointer-events-none select-none"
        aria-hidden
      >
        <div className="font-display font-black text-[12vw] text-white/[0.018] whitespace-nowrap tracking-tight">
          LABORATORY INFORMATION MANAGEMENT
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Identity card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative border border-white/6 bg-[#111111] p-8 md:p-10">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500" />

              <div className="section-label mb-4">IDENTITY · RECORD_001</div>

              <div className="space-y-4">
                {[
                  { key: "NAME", val: personalInfo.name },
                  { key: "ROLE", val: personalInfo.title },
                  { key: "DOMAIN", val: "LIMS · SampleManager · Lab Systems" },
                  { key: "EMPLOYER", val: "UST Global India" },
                  { key: "LOCATION", val: personalInfo.location },
                  { key: "STATUS", val: "Available for opportunities" },
                ].map((row, i) => (
                  <motion.div
                    key={row.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.08 + 0.3 }}
                    className="flex gap-4 items-start border-b border-white/4 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-mono text-[10px] text-amber-500 tracking-wider w-24 shrink-0 pt-0.5">
                      {row.key}
                    </span>
                    <span className="text-sm text-[#a3a3a3] font-light">{row.val}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-400 tracking-wider">SYSTEM ONLINE</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="section-label mb-6">◈ ABOUT</div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-8">
              Building systems where{" "}
              <span className="text-amber-500">accuracy</span>{" "}
              is non-negotiable.
            </h2>
            <div className="space-y-5 text-[#a3a3a3] font-light leading-relaxed">
              <p>
                I work at the intersection of software engineering and laboratory science — building
                LIMS solutions that labs trust to track every sample, every result, every time.
                At UST Global India, I specialize in SampleManager LIMS customization, workflow
                design, and instrument integration.
              </p>
              <p>
                My engineering philosophy mirrors the lab: precision first, then efficiency. I build
                systems that are auditable, scalable, and — critically — ones that scientists can
                actually use without friction.
              </p>
              <p>
                Beyond LIMS, I write frontend interfaces and data tools that bridge the gap between
                complex backend logic and human-readable outputs.
              </p>
            </div>

            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              {["SampleManager LIMS", "Python", "React.js", "SQL", "REST APIs", "Lab Automation"].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-[#525252] border border-white/8 px-3 py-1.5 tracking-wider hover:border-amber-500/40 hover:text-amber-500 transition-colors cursor-default"
                >
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
