import { portfolioData } from "../data/portfolioData";
import { HiAcademicCap } from "react-icons/hi";
import { FiCalendar, FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>// 02. Education</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>Education</h2>
        </div>
        <div className="flex flex-col gap-5">
          {portfolioData.education.map((edu, i) => (
            <div key={i} className="flex gap-5 p-6 rounded-xl border transition-all duration-300"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 24px var(--accent-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border"
                style={{ backgroundColor: "var(--accent-glow)", borderColor: "var(--border-hover)" }}>
                <HiAcademicCap size={22} style={{ color: "var(--accent)" }} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>{edu.degree}</h3>
                  <div className="flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full border w-fit"
                    style={{ color: "var(--accent)", backgroundColor: "var(--accent-glow)", borderColor: "var(--border-hover)" }}>
                    <FiCalendar size={11} /> {edu.year}
                  </div>
                </div>
                <p className="font-medium text-sm mb-2" style={{ color: "var(--accent-light)" }}>{edu.institution}</p>
                {edu.grade && (
                  <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                    <FiAward size={13} style={{ color: "var(--accent)" }} />
                    Grade: <span className="font-medium ml-1" style={{ color: "var(--accent-light)" }}>{edu.grade}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
