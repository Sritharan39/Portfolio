import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-[#09090B] overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#7C3AED] opacity-[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#A78BFA] opacity-[0.04] blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7C3AED] opacity-[0.02] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, #A78BFA 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181B] border border-[#27272A] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
          <span className="font-mono text-xs text-[#A1A1AA] tracking-widest">AVAILABLE FOR OPPORTUNITIES</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#FAFAFA] mb-4 tracking-tight leading-none">
          {portfolioData.personal.name}
        </h1>

        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#7C3AED]" />
          <h2 className="font-mono text-[#A78BFA] text-sm md:text-base tracking-widest uppercase">
            {portfolioData.personal.title}
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#7C3AED]" />
        </div>

        <p className="text-[#A1A1AA] text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          {portfolioData.personal.bio}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-8 py-3 rounded-lg bg-[#7C3AED] text-white font-medium text-sm hover:bg-[#6D28D9] transition-all duration-200 shadow-glow"
          >
            View My Work
            <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href={portfolioData.personal.resumeUrl}
            download
            className="flex items-center gap-2 px-8 py-3 rounded-lg border border-[#27272A] text-[#A1A1AA] font-medium text-sm hover:border-[#7C3AED] hover:text-[#FAFAFA] transition-all duration-200"
          >
            <FiDownload size={16} />
            Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200 group"
          >
            <FiGithub size={20} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-mono hidden sm:block">GitHub</span>
          </a>
          <div className="w-[1px] h-5 bg-[#27272A]" />
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200 group"
          >
            <FiLinkedin size={20} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-mono hidden sm:block">LinkedIn</span>
          </a>
          <div className="w-[1px] h-5 bg-[#27272A]" />
          <a
            href={portfolioData.social.email}
            className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200 group"
          >
            <FiMail size={20} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="text-sm font-mono hidden sm:block">Email</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#52525B] text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#7C3AED] to-transparent" />
      </div>
    </section>
  );
}
