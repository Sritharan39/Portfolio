import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

const statusColors = {
  "In Progress": { color: "#FBBF24", bg: "rgba(251,191,36,0.1)", border: "rgba(251,191,36,0.2)" },
  "Completed": { color: "#34D399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.2)" },
  "Live": { color: "#60A5FA", bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.2)" },
};

function StatusBadge({ status }) {
  const s = statusColors[status] || { color: "var(--text-muted)", bg: "var(--bg-card)", border: "var(--border)" };
  return (
    <span className="font-mono text-xs px-3 py-1 rounded-full border"
      style={{ color: s.color, backgroundColor: s.bg, borderColor: s.border }}>
      {status}
    </span>
  );
}

export default function Projects() {
  const featured = portfolioData.projects.filter((p) => p.featured);
  const rest = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>// 05. Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>Projects</h2>
        </div>

        {featured.map((project, i) => (
          <div key={i} className="mb-6 p-8 rounded-xl border relative overflow-hidden transition-all duration-300"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--accent-glow)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 48px var(--accent-glow)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--accent-glow)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-5"
              style={{ backgroundColor: "var(--accent)" }} />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: "var(--accent-light)" }}>
                    <FiStar size={13} style={{ fill: "var(--accent)", color: "var(--accent)" }} /> Featured Project
                  </div>
                  <StatusBadge status={project.status} />
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded-lg border transition-all duration-200"
                      style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
                    >
                      <FiGithub size={13} /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs px-4 py-2 rounded-lg text-white transition-all duration-200"
                      style={{ backgroundColor: "var(--accent)" }}>
                      <FiExternalLink size={13} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>{project.name}</h3>
              <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-lg border"
                    style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent-light)", borderColor: "var(--border-hover)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => (
            <div key={i} className="p-6 rounded-xl border transition-all duration-300"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 24px var(--accent-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <StatusBadge status={project.status} />
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                      className="transition-colors" style={{ color: "var(--text-muted)" }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
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
                    style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-muted)", borderColor: "var(--border)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
