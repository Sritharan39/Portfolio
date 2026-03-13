import { portfolioData } from "../data/portfolioData";
import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";

export default function ResumeViewer() {
  return (
    <section id="resume" className="py-24 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[#7C3AED] text-xs tracking-widest uppercase mb-3">// 08. Resume</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] tracking-tight">My Resume</h2>
        </div>
        <div className="p-8 rounded-xl bg-[#18181B] border border-[#27272A]">
          <div className="hidden md:flex w-full h-[700px] rounded-xl overflow-hidden border border-[#27272A] mb-8 bg-[#09090B] items-center justify-center">
            <div className="text-center">
              <FiFileText size={48} className="text-[#27272A] mx-auto mb-4" />
              <p className="text-[#52525B] font-mono text-sm">Add your resume PDF to /public/resume.pdf</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#7C3AED] text-white font-medium text-sm hover:bg-[#6D28D9] transition-all duration-200"
            >
              <FiDownload size={16} /> Download Resume
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-[#27272A] text-[#A1A1AA] font-medium text-sm hover:border-[#7C3AED]/50 hover:text-[#FAFAFA] transition-all duration-200"
            >
              <FiExternalLink size={16} /> Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
