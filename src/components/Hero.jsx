import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-[#0A0F1E]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#3B82F6] opacity-5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#06B6D4] opacity-5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <p className="font-mono text-[#3B82F6] text-sm tracking-widest uppercase mb-6">
          Hello, I am
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-[#F0F4FF] mb-4 tracking-tight">
          {portfolioData.personal.name}
        </h1>

        <h2 className="text-xl md:text-2xl text-[#94A3B8] font-medium mb-6">
          {portfolioData.personal.title}
        </h2>

        <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          {portfolioData.personal.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-[#3B82F6] text-white font-medium text-sm hover:bg-[#2563EB] transition-all duration-200"
          >
            View My Work
          </a>
          <a
            href={portfolioData.personal.resumeUrl}
            download
            className="px-8 py-3 rounded-lg border border-[#3B82F6] text-[#3B82F6] font-medium text-sm hover:bg-[#3B82F6]/10 transition-all duration-200"
          >
            Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-[#94A3B8] hover:text-[#F0F4FF] transition-colors text-sm font-mono"
          >
            GitHub
          </a>
          <span className="text-[#1E2D4A]">|</span>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[#94A3B8] hover:text-[#F0F4FF] transition-colors text-sm font-mono"
          >
            LinkedIn
          </a>
          <span className="text-[#1E2D4A]">|</span>
          <a
            href={portfolioData.social.email}
            className="text-[#94A3B8] hover:text-[#F0F4FF] transition-colors text-sm font-mono"
          >
            Email
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#94A3B8] text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#3B82F6] to-transparent" />
      </div>
    </section>
  );
}
