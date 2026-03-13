import { portfolioData } from "../data/portfolioData";

const statusColors = {
  "In Progress": "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  "Completed": "text-green-400 bg-green-400/10 border-green-400/30",
  "Live": "text-[#06B6D4] bg-[#06B6D4]/10 border-[#06B6D4]/30",
};

export default function Projects() {
  const featured = portfolioData.projects.filter((p) => p.featured);
  const rest = portfolioData.projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <p className="font-mono text-[#3B82F6] text-sm tracking-widest uppercase mb-3">
            // 05. Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0F4FF] tracking-tight">
            Projects
          </h2>
        </div>

        {featured.map((project, index) => (
          <div
            key={index}
            className="mb-6 p-8 rounded-xl bg-[#131D35] border border-[#3B82F6]/30 hover:border-[#3B82F6]/60 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#3B82F6]">★ Featured</span>
                  <span className={"font-mono text-xs px-3 py-1 rounded-full border " + (statusColors[project.status] || "text-[#94A3B8]")}>
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="font-mono text-xs text-[#94A3B8] hover:text-[#F0F4FF] transition-colors border border-[#1E2D4A] hover:border-[#3B82F6]/50 px-4 py-2 rounded-lg">
                      GitHub →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="font-mono text-xs text-white bg-[#3B82F6] hover:bg-[#2563EB] px-4 py-2 rounded-lg transition-colors">
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#F0F4FF] mb-3">{project.name}</h3>
              <p className="text-[#94A3B8] leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-full bg-[#3B82F6]/10 text-[#06B6D4] border border-[#06B6D4]/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-6">
          {rest.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-[#131D35] border border-[#1E2D4A] hover:border-[#3B82F6]/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className={"font-mono text-xs px-3 py-1 rounded-full border " + (statusColors[project.status] || "text-[#94A3B8]")}>
                  {project.status}
                </span>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="font-mono text-xs text-[#94A3B8] hover:text-[#F0F4FF] transition-colors">
                      GitHub →
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="font-mono text-xs text-[#3B82F6] hover:text-[#06B6D4] transition-colors">
                      Live →
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#F0F4FF] mb-2">{project.name}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-full bg-[#0A0F1E] text-[#94A3B8] border border-[#1E2D4A]">
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
