import { portfolioData } from "../data/portfolioData";
import { HiAcademicCap } from "react-icons/hi";
import { FiCalendar, FiAward } from "react-icons/fi";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#7C3AED] text-xs tracking-widest uppercase mb-3">
            // 02. Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] tracking-tight">
            Education
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#7C3AED]/50 hover:shadow-glow transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center">
                <HiAcademicCap size={22} className="text-[#7C3AED]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-[#FAFAFA]">{edu.degree}</h3>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#7C3AED] bg-[#7C3AED]/10 px-3 py-1 rounded-full w-fit border border-[#7C3AED]/20">
                    <FiCalendar size={11} />
                    {edu.year}
                  </div>
                </div>
                <p className="text-[#A78BFA] font-medium text-sm mb-2">{edu.institution}</p>
                {edu.grade && (
                  <div className="flex items-center gap-1.5 text-[#A1A1AA] text-sm">
                    <FiAward size={13} className="text-[#7C3AED]" />
                    <span>Grade: <span className="text-[#A78BFA] font-medium">{edu.grade}</span></span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
