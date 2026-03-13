import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "var(--bg-primary)" }}>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.06]" style={{ backgroundColor: "var(--accent)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.04]" style={{ backgroundColor: "var(--accent-light)" }} />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--accent)" }} />
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--text-muted)" }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-5 tracking-tight leading-none"
          style={{ color: "var(--text-primary)" }}
        >
          {portfolioData.personal.name}
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-14" style={{ background: "linear-gradient(to right, transparent, var(--accent))" }} />
          <h2 className="font-mono text-sm md:text-base tracking-widest uppercase" style={{ color: "var(--accent-light)" }}>
            {portfolioData.personal.title}
          </h2>
          <div className="h-[1px] w-14" style={{ background: "linear-gradient(to left, transparent, var(--accent))" }} />
        </div>

        <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
          {portfolioData.personal.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3 rounded-lg text-white font-medium text-sm transition-all duration-200 shadow-glow"
            style={{ backgroundColor: "var(--accent)" }}
          >
            View My Work
            <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href={portfolioData.personal.resumeUrl}
            download
            className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-sm transition-all duration-200 border"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
          >
            <FiDownload size={15} /> Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          {[
            { href: portfolioData.social.github, icon: <FiGithub size={20} />, label: "GitHub" },
            { href: portfolioData.social.linkedin, icon: <FiLinkedin size={20} />, label: "LinkedIn" },
            { href: portfolioData.social.email, icon: <FiMail size={20} />, label: "Email" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-mono transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
            >
              {item.icon}
              <span className="hidden sm:block">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs tracking-widest" style={{ color: "var(--text-muted)" }}>SCROLL</span>
        <div className="w-[1px] h-8" style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
      </div>
    </section>
  );
}
