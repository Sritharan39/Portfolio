import { portfolioData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#3B82F6] text-sm tracking-widest uppercase mb-3">
            // 03. Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#3B82F6] via-[#1E2D4A] to-transparent" />

          <div className="flex flex-col gap-10">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="flex gap-8 pl-16 relative">
                <div className="absolute left-[18px] top-1 w-4 h-4 rounded-full bg-[#3B82F6] border-2 border-[#0F172A] shadow-lg shadow-[#3B82F6]/30" />

                <div className="flex-1 p-6 rounded-xl bg-[#131D35] border border-[#1E2D4A] hover:border-[#3B82F6]/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-[#F0F4FF]">{exp.role}</h3>
                    <span className="font-mono text-xs text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[#06B6D4] font-medium mb-4">{exp.company}</p>

                  <ul className="flex flex-col gap-2 mb-5">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-[#94A3B8] text-sm leading-relaxed">
                        <span className="text-[#3B82F6] mt-1 flex-shrink-0">▸</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-[#3B82F6]/10 text-[#06B6D4] border border-[#06B6D4]/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
