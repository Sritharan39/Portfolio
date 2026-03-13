import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-12 border-t transition-colors duration-300" style={{ backgroundColor: "var(--bg-primary)", borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-mono text-lg font-semibold" style={{ color: "var(--accent)" }}>
            <span style={{ color: "var(--text-muted)" }}>&lt;</span>
            {portfolioData.personal.name.split(" ")[0]}
            <span style={{ color: "var(--text-muted)" }}> /&gt;</span>
          </a>
          <div className="flex items-center gap-5">
            {[
              { href: portfolioData.social.github, icon: <FiGithub size={19} /> },
              { href: portfolioData.social.linkedin, icon: <FiLinkedin size={19} /> },
              { href: portfolioData.social.email, icon: <FiMail size={19} /> },
            ].map((item, i) => (
              <a key={i} href={item.href} target="_blank" rel="noreferrer"
                className="transition-colors" style={{ color: "var(--text-muted)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with React & Tailwind.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <a href="#" className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border transition-all duration-200"
            style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
            <FiArrowUp size={13} /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
