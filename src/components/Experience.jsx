import { portfolioData } from "../data/portfolioData";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0F0F12]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#7C3AED] text-xs tracking-widest uppercase mb-3">
            // 03. Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#7C3AED] via-[#27272A] to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="flex gap-8 md:pl-16 relative">
                <div className="absolute left-[18px] top-6 w-4 h-4 rounded-full bg-[#7C3AED] border-2 border-[#09090B] shadow-glow hidden md:block" />

                <div className="flex-1 p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#7C3AED]/50 hover:shadow-glow transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center flex-shrink-0">
                        <FiBriefcase size={16} className="text-[#7C3AED]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#FAFAFA]">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-[#7C3AED] bg-[#7C3AED]/10 px-3 py-1 rounded-full w-fit border border-[#7C3AED]/20 flex-shrink-0">
                      <FiCalendar size={11} />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-[#A78BFA] font-medium text-sm mb-4 ml-12">{exp.company}</p>

                  <ul className="flex flex-col gap-2 mb-5">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-[#A1A1AA] text-sm leading-relaxed">
                        <span className="text-[#7C3AED] mt-1 flex-shrink-0">▸</span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20"
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
