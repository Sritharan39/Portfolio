import { portfolioData } from "../data/portfolioData";
import { FiMonitor, FiServer, FiDatabase, FiTool, FiActivity } from "react-icons/fi";

const skillCategories = [
  { key: "frontend", label: "Frontend", icon: <FiMonitor size={15} /> },
  { key: "backend", label: "Backend", icon: <FiServer size={15} /> },
  { key: "database", label: "Database", icon: <FiDatabase size={15} /> },
  { key: "tools", label: "Tools & DevOps", icon: <FiTool size={15} /> },
  { key: "domain", label: "Domain Knowledge", icon: <FiActivity size={15} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>// 04. Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>Skills & Technologies</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat) => (
            <div key={cat.key} className="p-6 rounded-xl border transition-all duration-300"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 24px var(--accent-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span style={{ color: "var(--accent)" }}>{cat.icon}</span>
                <h3 className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent-light)" }}>{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[cat.key].map((skill) => (
                  <span key={skill} className="font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-default"
                    style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)", borderColor: "var(--border)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
                  >
                    {skill}
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
