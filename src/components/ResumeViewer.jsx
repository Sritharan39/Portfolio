import { portfolioData } from "../data/portfolioData";
import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";

export default function ResumeViewer() {
  return (
    <section id="resume" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>// 08. Resume</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>My Resume</h2>
        </div>
        <div className="p-8 rounded-xl border" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
          <div className="hidden md:flex w-full h-[700px] rounded-xl border mb-8 items-center justify-center flex-col gap-3"
            style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}>
            <FiFileText size={48} style={{ color: "var(--border)" }} />
            <p className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>Add your resume PDF to /public/resume.pdf</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={portfolioData.personal.resumeUrl} download
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg text-white font-medium text-sm transition-all duration-200"
              style={{ backgroundColor: "var(--accent)" }}>
              <FiDownload size={16} /> Download Resume
            </a>
            <a href={portfolioData.personal.resumeUrl} target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium text-sm transition-all duration-200 border"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text-primary)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; }}>
              <FiExternalLink size={16} /> Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
