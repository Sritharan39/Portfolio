import { portfolioData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#3B82F6] text-sm tracking-widest uppercase mb-3">
            // 02. Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] tracking-tight">
            Education
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="flex gap-6 p-6 rounded-xl bg-[#131D35] border border-[#1E2D4A] hover:border-[#3B82F6]/50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center">
                <span className="text-[#3B82F6] text-xl font-bold">🎓</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-[#F0F4FF]">{edu.degree}</h3>
                  <span className="font-mono text-xs text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full w-fit">
                    {edu.year}
                  </span>
                </div>
                <p className="text-[#94A3B8] font-medium mb-1">{edu.institution}</p>
                {edu.grade && (
                  <p className="text-[#94A3B8] text-sm">
                    Grade: <span className="text-[#06B6D4]">{edu.grade}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
