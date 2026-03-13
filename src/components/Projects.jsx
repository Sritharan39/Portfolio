import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

const statusColors = {
  "In Progress": "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  "Completed": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Live": "text-[#A78BFA] bg-[#7C3AED]/10 border-[#7C3AED]/20",
};

export default function Projects() {
  const featured = portfolioData.projects.filter((p) => p.featured);
  const rest = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#0F0F12]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#7C3AED] text-xs tracking-widest uppercase mb-3">
            // 05. Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] tracking-tight">
            Projects
          </h2>
        </div>

        {featured.map((project, index) => (
          <div
            key={index}
            className="mb-6 p-8 rounded-xl bg-[#18181B] border border-[#7C3AED]/30 hover:border-[#7C3AED]/60 hover:shadow-glow-lg transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#7C3AED] opacity-[0.04] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#A78BFA]">
                    <FiStar size={13} className="fill-[#7C3AED] text-[#7C3AED]" />
                    Featured Project
                  </div>
                  <span className={"font-mono text-xs px-3 py-1 rounded-full border " + (statusColors[project.status] || "text-[#A1A1AA]")}>
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors border border-[#27272A] hover:border-[#7C3AED]/50 px-4 py-2 rounded-lg">
                      <FiGithub size={14} /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-white bg-[#7C3AED] hover:bg-[#6D28D9] px-4 py-2 rounded-lg transition-colors">
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#FAFAFA] mb-3">{project.name}</h3>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-lg bg-[#7C3AED]/10 text-[#A78BFA] border border-[#7C3AED]/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#18181B] border border-[#27272A] hover:border-[#7C3AED]/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className={"font-mono text-xs px-3 py-1 rounded-full border " + (statusColors[project.status] || "text-[#A1A1AA]")}>
                  {project.status}
                </span>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer"
                      className="text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors">
                      <FiGithub size={17} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer"
                      className="text-[#A1A1AA] hover:text-[#A78BFA] transition-colors">
                      <FiExternalLink size={17} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#FAFAFA] mb-2">{project.name}</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-lg bg-[#09090B] text-[#A1A1AA] border border-[#27272A] hover:border-[#7C3AED]/30 transition-colors">
                    {t}
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
