"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12 + 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group border border-white/6 bg-[#111111] p-8 overflow-hidden cursor-default hover:border-amber-500/20 transition-colors"
    >
      {/* Hover fill */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-br from-amber-500/3 to-transparent pointer-events-none"
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-[10px] text-amber-500 tracking-widest">
          PROJECT_{project.id}
        </span>
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${project.status === "Production" || project.status === "Live" ? "bg-emerald-400" : "bg-amber-500"} animate-pulse`} />
          <span className="font-mono text-[10px] text-[#525252] tracking-wider">{project.status}</span>
        </div>
      </div>

      {/* Year */}
      <div className="font-mono text-[10px] text-[#525252] tracking-wider mb-3">{project.year}</div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-4 leading-tight group-hover:text-amber-500 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[#525252] text-sm font-light leading-relaxed mb-8">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] text-[#525252] border border-white/6 px-2.5 py-1 tracking-widest uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <motion.div
        animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
        className="absolute bottom-8 right-8 text-amber-500 font-mono text-lg"
      >
        →
      </motion.div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-32 md:py-48 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-label mb-4"
            >
              ◈ WORK SAMPLES
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display font-black text-4xl md:text-6xl text-white"
            >
              Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-mono text-[10px] text-[#525252] tracking-wider"
          >
            TOTAL_RECORDS: {projects.length.toString().padStart(2, "0")}<br />
            FILTER: ALL
          </motion.div>
        </div>

        {/* Projects grid — 2 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
