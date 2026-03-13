import { portfolioData } from "../data/portfolioData";

const stats = [
  { label: "Year of Experience", value: "1+" },
  { label: "Projects Built", value: "5+" },
  { label: "Technologies", value: "15+" },
  { label: "Domain", value: "Life Sciences" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#3B82F6] text-sm tracking-widest uppercase mb-3">
            // 01. About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] tracking-tight">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
              {portfolioData.personal.bio}
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              I specialize in SampleManager LIMS implementation, LES method development,
              and full-stack web development. I enjoy building tools that solve real problems
              in the life sciences domain.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-8">
              Based in {portfolioData.personal.location}. Currently focused on expanding
              into SampleManager customization, VGL scripting, and .NET integrations.
            </p>

            <div className="flex flex-wrap gap-2">
              {portfolioData.languages.map((lang) => (
                <span
                  key={lang.language}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-[#3B82F6]/10 text-[#06B6D4] border border-[#06B6D4]/30"
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
                className="p-6 rounded-xl bg-[#131D35] border border-[#1E2D4A] hover:border-[#3B82F6]/50 transition-all duration-300"
              >
                <p className="text-3xl font-bold text-[#3B82F6] mb-2">{stat.value}</p>
                <p className="text-[#94A3B8] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
