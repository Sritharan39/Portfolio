"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";

const BOOT_LINES = [
  "SYS » Initializing portfolio kernel...",
  "LIMS » Loading SampleManager modules...",
  "NET  » Establishing secure connection...",
  "DATA » Mounting project registry...",
  "AUTH » Identity verified: SRITHARAN",
  "STATUS » All systems operational ✓",
];

function BootSequence({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(id);
        setTimeout(() => { setDone(true); onComplete(); }, 400);
      }
    }, 260);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-mono text-xs text-[#525252] space-y-1 mb-8"
    >
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className={i === lines.length - 1 && done ? "text-amber-500" : ""}
        >
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const [bootDone, setBootDone] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/3 blur-[100px] pointer-events-none" />

      {/* Vertical label */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-amber-500/50" />
        <span className="section-label rotate-90 whitespace-nowrap">PORTFOLIO 2025</span>
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-amber-500/50" />
      </div>

      {/* Right vertical social */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-white/10" />
        <a href={personalInfo.github} target="_blank" className="section-label rotate-90 whitespace-nowrap text-[#525252] hover:text-amber-500 transition-colors">GITHUB</a>
        <div className="w-px h-8 bg-white/10" />
        <a href={personalInfo.linkedin} target="_blank" className="section-label rotate-90 whitespace-nowrap text-[#525252] hover:text-amber-500 transition-colors">LINKEDIN</a>
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-white/10" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-6 md:px-24 w-full pt-24 pb-20"
      >
        {/* Boot sequence */}
        <BootSequence onComplete={() => setBootDone(true)} />

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={bootDone ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bootDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-6"
          >
            ◈ SOFTWARE DEVELOPER · LIMS SPECIALIST
          </motion.div>

          <h1 className="font-display font-black leading-none tracking-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={bootDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="block text-6xl md:text-8xl lg:text-[10rem] text-white"
            >
              SRITHA
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={bootDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-6xl md:text-8xl lg:text-[10rem] text-transparent"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
              }}
            >
              RAN
              <span className="text-amber-500" style={{ WebkitTextStroke: "none" }}>.</span>
            </motion.span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={bootDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#a3a3a3] text-base md:text-lg max-w-md leading-relaxed font-light"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={bootDone ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-6 shrink-0"
            >
              <motion.a
                href="#projects"
                className="group flex items-center gap-3 bg-amber-500 text-black font-mono text-xs font-bold px-6 py-3.5 tracking-widest hover:bg-amber-400 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                VIEW WORK
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.a>
              <motion.a
                href="#about"
                className="font-mono text-xs text-[#a3a3a3] tracking-widest hover:text-white transition-colors border-b border-white/20 pb-0.5"
                whileHover={{ scale: 1.02 }}
              >
                ABOUT ME
              </motion.a>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={bootDone ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20 pt-8 border-t border-white/5 flex flex-wrap gap-12"
          >
            {[
              { val: personalInfo.yearsExp, label: "Years Experience" },
              { val: personalInfo.projectsBuilt, label: "Projects Built" },
              { val: personalInfo.systemsIntegrated, label: "Systems Integrated" },
              { val: "UST", label: "Current Employer" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-3xl text-white text-glow">{s.val}</div>
                <div className="font-mono text-[10px] text-[#525252] tracking-widest mt-1 uppercase">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={bootDone ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="section-label">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-amber-500/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
