import { portfolioData } from "../data/portfolioData";
import { FiAward } from "react-icons/fi";

export default function Awards() {
  if (!portfolioData.featureFlags.showAwards && portfolioData.awards.length === 0) return null;
  return (
    <section id="awards" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>// 07. Awards</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>Awards & Recognition</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {portfolioData.awards.map((award, i) => (
            <div key={i} className="p-6 rounded-xl border transition-all duration-300"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 24px var(--accent-glow)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border"
                  style={{ backgroundColor: "var(--accent-glow)", borderColor: "var(--border-hover)" }}>
                  <FiAward size={18} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{award.title}</h3>
                  <p className="text-sm mb-1" style={{ color: "var(--accent-light)" }}>{award.organization}</p>
                  <p className="text-xs font-mono mb-2" style={{ color: "var(--text-muted)" }}>{award.date}</p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
