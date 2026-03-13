import { portfolioData } from "../data/portfolioData";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCode, FiBox, FiLayers, FiGlobe } from "react-icons/fi";

const stats = [
  { label: "Year of Experience", value: "1+", icon: <FiCode size={20} /> },
  { label: "Projects Built", value: "5+", icon: <FiBox size={20} /> },
  { label: "Technologies", value: "15+", icon: <FiLayers size={20} /> },
  { label: "Domain", value: "Life Sciences", icon: <FiGlobe size={20} /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>// 01. About</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>About Me</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-lg leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{portfolioData.personal.bio}</p>
            <p className="leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              I specialize in SampleManager LIMS implementation, LES method development,
              and full-stack web development. I enjoy building tools that solve real problems in the life sciences domain.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Currently focused on expanding into SampleManager customization, VGL scripting, and .NET integrations.
            </p>
            <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              <HiOutlineLocationMarker size={16} style={{ color: "var(--accent)" }} />
              <span>{portfolioData.personal.location}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {portfolioData.languages.map((lang) => (
                <span key={lang.language} className="font-mono text-xs px-3 py-1 rounded-full border"
                  style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent-light)", borderColor: "var(--border-hover)" }}>
                  {lang.language} — {lang.proficiency}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl border transition-all duration-300 group cursor-default"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.boxShadow = "0 0 24px var(--accent-glow)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div className="mb-3" style={{ color: "var(--accent)" }}>{stat.icon}</div>
                <p className="text-3xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>{stat.value}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
