import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#0A0F1E] border-t border-[#1E2D4A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <a href="#" className="font-mono text-lg font-medium text-[#3B82F6]">
            <span className="text-[#94A3B8]">&lt;</span>
            {portfolioData.personal.name.split(" ")[0]}
            <span className="text-[#94A3B8]"> /&gt;</span>
          </a>

          <div className="flex items-center gap-6">
            <a href={portfolioData.social.github} target="_blank" rel="noreferrer" className="text-[#94A3B8] hover:text-[#F0F4FF] transition-colors text-sm font-mono">
              GitHub
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noreferrer" className="text-[#94A3B8] hover:text-[#F0F4FF] transition-colors text-sm font-mono">
              LinkedIn
            </a>
            <a href={portfolioData.social.email} className="text-[#94A3B8] hover:text-[#F0F4FF] transition-colors text-sm font-mono">
              Email
            </a>
          </div>

          <p className="text-[#475569] text-xs font-mono text-center">
            © {currentYear} {portfolioData.personal.name}. Built with React & Tailwind CSS.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="text-xs font-mono text-[#94A3B8] hover:text-[#3B82F6] transition-colors border border-[#1E2D4A] hover:border-[#3B82F6]/50 px-4 py-2 rounded-lg"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
