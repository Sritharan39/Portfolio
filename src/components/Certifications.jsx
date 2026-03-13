import { portfolioData } from "../data/portfolioData";
import { FiAward, FiExternalLink, FiCalendar } from "react-icons/fi";

export default function Certifications() {
  if (!portfolioData.featureFlags.showCertifications && portfolioData.certifications.length === 0) return null;
  return (
    <section id="certifications" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>// 06. Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>Certifications</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {portfolioData.certifications.map((cert, i) => (
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
                  <h3 className="text-base font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{cert.name}</h3>
                  <p className="text-sm mb-2" style={{ color: "var(--accent-light)" }}>{cert.issuer}</p>
                  <div className="flex items-center gap-1.5 text-xs font-mono mb-3" style={{ color: "var(--text-muted)" }}>
                    <FiCalendar size={11} /> {cert.date}
                  </div>
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono transition-colors" style={{ color: "var(--accent)" }}>
                      <FiExternalLink size={12} /> View Credential
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
