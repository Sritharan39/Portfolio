import { portfolioData } from "../data/portfolioData";
import { FiMonitor, FiServer, FiDatabase, FiTool, FiActivity } from "react-icons/fi";

const skillCategories = [
  { key: "frontend", label: "Frontend", icon: <FiMonitor size={16} /> },
  { key: "backend", label: "Backend", icon: <FiServer size={16} /> },
  { key: "database", label: "Database", icon: <FiDatabase size={16} /> },
  { key: "tools", label: "Tools & DevOps", icon: <FiTool size={16} /> },
  { key: "domain", label: "Domain Knowledge", icon: <FiActivity size={16} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#09090B]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#7C3AED] text-xs tracking-widest uppercase mb-3">
            // 04. Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.key}
              className="p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#7C3AED]/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#7C3AED]">{cat.icon}</span>
                <h3 className="text-xs font-mono text-[#A78BFA] tracking-widest uppercase">
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#09090B] text-[#A1A1AA] border border-[#27272A] hover:border-[#7C3AED]/50 hover:text-[#FAFAFA] hover:bg-[#7C3AED]/5 transition-all duration-200 cursor-default"
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
