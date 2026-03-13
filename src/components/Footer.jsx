import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#09090B] border-t border-[#18181B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <a href="#" className="font-mono text-lg font-semibold text-[#7C3AED]">
            <span className="text-[#52525B]">&lt;</span>
            {portfolioData.personal.name.split(" ")[0]}
            <span className="text-[#52525B]"> /&gt;</span>
          </a>

          <div className="flex items-center gap-5">
            <a href={portfolioData.social.github} target="_blank" rel="noreferrer"
              className="text-[#52525B] hover:text-[#FAFAFA] transition-colors">
              <FiGithub size={19} />
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noreferrer"
              className="text-[#52525B] hover:text-[#FAFAFA] transition-colors">
              <FiLinkedin size={19} />
            </a>
            <a href={portfolioData.social.email}
              className="text-[#52525B] hover:text-[#FAFAFA] transition-colors">
              <FiMail size={19} />
            </a>
          </div>

          <p className="text-[#3F3F46] text-xs font-mono text-center">
            © {currentYear} {portfolioData.personal.name}. Built with React & Tailwind CSS.
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="flex items-center gap-2 text-xs font-mono text-[#52525B] hover:text-[#7C3AED] transition-colors border border-[#27272A] hover:border-[#7C3AED]/50 px-4 py-2 rounded-lg"
          >
            <FiArrowUp size={13} /> Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
}
