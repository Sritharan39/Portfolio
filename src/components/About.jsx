import { portfolioData } from "../data/portfolioData";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCode, FiBox, FiLayers, FiGlobe } from "react-icons/fi";

const stats = [
  { label: "Year of Experience", value: "1+", icon: <FiCode size={20} /> },
  { label: "Projects Built", value: "5+", icon: <FiBox size={20} /> },
  { label: "Technologies", value: "15+", icon: <FiLayers size={20} /> },
  { label: "Domain", value: "Life Sciences", icon: <FiGlobe size={20} /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0F0F12]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#7C3AED] text-xs tracking-widest uppercase mb-3">
            // 01. About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-5">
              {portfolioData.personal.bio}
            </p>
            <p className="text-[#A1A1AA] leading-relaxed mb-5">
              I specialize in SampleManager LIMS implementation, LES method development,
              and full-stack web development. I enjoy building tools that solve real problems
              in the life sciences domain.
            </p>
            <p className="text-[#A1A1AA] leading-relaxed mb-6">
              Based in {portfolioData.personal.location}. Currently focused on expanding
              into SampleManager customization, VGL scripting, and .NET integrations.
            </p>

            <div className="flex items-center gap-2 text-[#A1A1AA] text-sm mb-6">
              <HiOutlineLocationMarker size={16} className="text-[#7C3AED]" />
              <span>{portfolioData.personal.location}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {portfolioData.languages.map((lang) => (
                <span
                  key={lang.language}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20"
                >
                  {lang.language} — {lang.proficiency}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#7C3AED]/50 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="text-[#7C3AED] mb-3 group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-[#FAFAFA] mb-1">{stat.value}</p>
                <p className="text-[#A1A1AA] text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
