import { portfolioData } from "../data/portfolioData";

const skillCategories = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools & DevOps" },
  { key: "domain", label: "Domain Knowledge" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0A0F1E]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#3B82F6] text-sm tracking-widest uppercase mb-3">
            // 04. Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.key}
              className="p-6 rounded-xl bg-[#131D35] border border-[#1E2D4A] hover:border-[#3B82F6]/50 transition-all duration-300"
            >
              <h3 className="text-sm font-mono text-[#3B82F6] tracking-widest uppercase mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#0A0F1E] text-[#94A3B8] border border-[#1E2D4A] hover:border-[#3B82F6]/50 hover:text-[#F0F4FF] transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
