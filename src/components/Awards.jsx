import { portfolioData } from "../data/portfolioData";

export default function Awards() {
  if (!portfolioData.featureFlags.showAwards && portfolioData.awards.length === 0) {
    return null;
  }

  return (
    <section id="awards" className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#3B82F6] text-sm tracking-widest uppercase mb-3">
            // 07. Awards
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] tracking-tight">
            Awards & Recognition
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.awards.map((award, index) => (
            <div key={index} className="p-6 rounded-xl bg-[#131D35] border border-[#1E2D4A] hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🏆</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F0F4FF] mb-1">{award.title}</h3>
                  <p className="text-[#06B6D4] text-sm mb-1">{award.organization}</p>
                  <p className="text-[#94A3B8] text-xs font-mono mb-2">{award.date}</p>
                  <p className="text-[#94A3B8] text-sm">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
