import { portfolioData } from "../data/portfolioData";
import { FiAward } from "react-icons/fi";

export default function Awards() {
  if (!portfolioData.featureFlags.showAwards && portfolioData.awards.length === 0) return null;

  return (
    <section id="awards" className="py-24 bg-[#0F0F12]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[#7C3AED] text-xs tracking-widest uppercase mb-3">// 07. Awards</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] tracking-tight">Awards & Recognition</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {portfolioData.awards.map((award, index) => (
            <div key={index} className="p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#7C3AED]/50 hover:shadow-glow transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center flex-shrink-0">
                  <FiAward size={18} className="text-[#7C3AED]" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#FAFAFA] mb-1">{award.title}</h3>
                  <p className="text-[#A78BFA] text-sm mb-1">{award.organization}</p>
                  <p className="text-[#52525B] text-xs font-mono mb-2">{award.date}</p>
                  <p className="text-[#A1A1AA] text-sm">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
