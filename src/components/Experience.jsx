import { portfolioData } from "../data/portfolioData";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>// 03. Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>Work Experience</h2>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[1px] hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--accent), var(--border), transparent)" }} />
          <div className="flex flex-col gap-10">
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="flex gap-8 md:pl-16 relative">
                <div className="absolute left-[18px] top-6 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{ backgroundColor: "var(--accent)", borderColor: "var(--bg-primary)", boxShadow: "0 0 12px var(--accent-glow)" }} />
                <div className="flex-1 p-6 rounded-xl border transition-all duration-300"
                  style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 24px var(--accent-glow)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border"
                        style={{ backgroundColor: "var(--accent-glow)", borderColor: "var(--border-hover)" }}>
                        <FiBriefcase size={16} style={{ color: "var(--accent)" }} />
                      </div>
                      <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full border w-fit flex-shrink-0"
                      style={{ color: "var(--accent)", backgroundColor: "var(--accent-glow)", borderColor: "var(--border-hover)" }}>
                      <FiCalendar size={11} /> {exp.period}
                    </div>
                  </div>
                  <p className="font-medium text-sm mb-4 ml-12" style={{ color: "var(--accent-light)" }}>{exp.company}</p>
                  <ul className="flex flex-col gap-2 mb-5">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <span className="mt-1 flex-shrink-0" style={{ color: "var(--accent)" }}>▸</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="font-mono text-xs px-3 py-1 rounded-lg border"
                        style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent-light)", borderColor: "var(--border-hover)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
