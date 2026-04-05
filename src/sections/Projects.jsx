"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/index";
import { stagger } from "@/lib/utils";

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: stagger(index, 0.1, 0.2), duration: 0.8, ease: [0.22,1,0.36,1] }}
      onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)}
      className="group relative card p-8 overflow-hidden cursor-default flex flex-col">
      {/* Hover tint */}
      <motion.div animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.04) 0%, transparent 60%)" }} />

      {/* Top row */}
      <div className="flex items-start justify-between mb-5">
        <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--accent)" }}>
          PROJECT_{project.id}
        </span>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full"
            style={{ background: project.status === "Live" || project.status === "Production" ? "#34d399" : "var(--accent)",
                     animation: "pulse 2s infinite" }} />
          <span className="font-mono text-[10px] tracking-wider" style={{ color: "var(--text-muted)" }}>{project.status}</span>
        </div>
      </div>

      <span className="font-mono text-[10px] tracking-wider mb-2" style={{ color: "var(--text-muted)" }}>{project.year}</span>

      <h3 className="font-display font-bold text-xl md:text-2xl mb-4 leading-tight transition-colors duration-200"
        style={{ color: hovered ? "var(--accent)" : "var(--text-primary)" }}>
        {project.title}
      </h3>

      <p className="text-sm font-light leading-relaxed flex-1 mb-8" style={{ color: "var(--text-muted)" }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1"
            style={{ border: "1px solid var(--border)", color: "var(--text-muted)" }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow reveal */}
      <motion.span animate={{ x: hovered ? 0 : -10, opacity: hovered ? 1 : 0 }}
        className="absolute bottom-8 right-8 text-lg font-mono"
        style={{ color: "var(--accent)" }}>→</motion.span>

      {/* Bottom slide line */}
      <div className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
        style={{ background: "var(--accent)" }} />
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}>
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,var(--border),transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,var(--accent),transparent)", opacity: 0.25 }} />

      <div className="max-w-8xl mx-auto px-6 md:px-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              className="label mb-4">◈ WORK SAMPLES</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display font-black"
              style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", color: "var(--text-primary)" }}>
              Projects
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
            className="font-mono text-[10px] tracking-wider" style={{ color: "var(--text-muted)" }}>
            TOTAL_RECORDS: {String(projects.length).padStart(2,"0")}<br />FILTER: ALL
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
