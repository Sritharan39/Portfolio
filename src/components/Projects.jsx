import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="06" title="Featured Projects" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {portfolioData.projects.map((project, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group h-full rounded-2xl border overflow-hidden transition-all duration-300"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                {/* Project Image/Background */}
                <div
                  className="h-48 relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                  style={{
                    backgroundImage: `linear-gradient(135deg, var(--accent-glow), rgba(var(--accent-rgb), 0.05))`,
                  }}>
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}>
                    <FiCode size={64} style={{ color: "var(--accent)", opacity: 0.3 }} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: "var(--text-secondary)" }}>
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "var(--accent-glow)",
                          color: "var(--accent)",
                        }}>
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "var(--accent-glow)",
                          color: "var(--accent)",
                        }}>
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-lg"
                      style={{
                        backgroundColor: project.status === "Completed" ? "rgba(52, 211, 153, 0.2)" : "rgba(249, 115, 22, 0.2)",
                        color: project.status === "Completed" ? "#34D399" : "#F97316",
                      }}>
                      {project.status}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-mono" style={{ color: "var(--accent)" }}>
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 text-sm transition-colors"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                        <FiGithub size={16} /> Code
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-2 text-sm transition-colors ml-auto"
                        style={{ color: "var(--text-muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                        Live Demo <FiExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </motion.div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center">
          <motion.a
            href="#"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-2 text-sm font-mono"
            style={{ color: "var(--accent)" }}>
            View More Projects → 
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
