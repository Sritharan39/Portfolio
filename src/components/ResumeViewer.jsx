import { portfolioData } from "../data/portfolioData";

export default function ResumeViewer() {
  return (
    <section id="resume" className="py-24 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#3B82F6] text-sm tracking-widest uppercase mb-3">
            // 08. Resume
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] tracking-tight">
            My Resume
          </h2>
        </div>

        <div className="p-8 rounded-xl bg-[#131D35] border border-[#1E2D4A]">
          <div className="hidden md:block w-full h-[700px] rounded-lg overflow-hidden border border-[#1E2D4A] mb-6">
            <iframe
              src={portfolioData.personal.resumeUrl}
              className="w-full h-full"
              title="Resume"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={portfolioData.personal.resumeUrl}
              download
              className="px-8 py-3 rounded-lg bg-[#3B82F6] text-white font-medium text-sm hover:bg-[#2563EB] transition-all duration-200 text-center"
            >
              Download Resume
            </a>
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-lg border border-[#3B82F6] text-[#3B82F6] font-medium text-sm hover:bg-[#3B82F6]/10 transition-all duration-200 text-center"
            >
              Open in New Tab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
