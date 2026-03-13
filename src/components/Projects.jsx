import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const statusColors = {
  "In Progress": { color: "#FBBF24", bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.2)" },
  "Completed": { color: "#34D399", bg: "rgba(52,211,153,0.08)", border: "rgba(52,211,153,0.2)" },
  "Live": { color: "#60A5FA", bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.2)" },
  "Planned": { color: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)" },
};

function StatusBadge({ status }) {
  const s = statusColors[status] || { color: "var(--text-muted)", bg: "transparent", border: "var(--border)" };
  return (
    <span className="font-mono text-xs px-3 py-1 rounded-full border"
      style={{ color: s.color, backgroundColor: s.bg, borderColor: s.border }}>{status}</span>
  );
}

export default function Projects() {
  const featured = portfolioData.projects.filter((p) => p.featured);
  const rest = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="05" title="Projects" />

        {featured.map((project, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 p-8 rounded-xl border relative overflow-hidden transition-all duration-300 card-glow"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border-hover)" }}>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-[0.06]"
              style={{ background: "radial-gradient(circle, var(--accent), var(--accent2))" }} />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs gradient-text">
                    <FiStar size={13} style={{ fill: "var(--accent)", color: "var(--accent)" }} /> Featured
                  </div>
                  <StatusBadge status={project.status} />
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <motion.a whileHover={{ scale: 1.05 }} href={project.githubUrl} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded-lg border transition-all"
                      style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
                      <FiGithub size={13} /> GitHub
                    </motion.a>
                  )}
                  {project.liveUrl && (
                    <motion.a whileHover={{ scale: 1.05 }} href={project.liveUrl} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded-lg text-white transition-all btn-primary">
                      <FiExternalLink size={13} /> Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>{project.name}</h3>
              <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-lg border"
                    style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent-light)", borderColor: "var(--border-hover)" }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl border transition-all duration-300 card-glow"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
              <div className="flex items-center justify-between gap-3 mb-4">
                <StatusBadge status={project.status} />
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                      className="transition-colors" style={{ color: "var(--text-muted)" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                      <FiGithub size={17} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer"
                      className="transition-colors" style={{ color: "var(--text-muted)" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                      <FiExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text-primary)" }}>{project.name}</h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-lg border"
                    style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-muted)", borderColor: "var(--border)" }}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
