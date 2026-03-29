import { portfolioData } from "../data/portfolioData";
import { FiBriefcase, FiAward, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="04" title="Professional Experience" />

        {portfolioData.experience.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.2}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 rounded-3xl overflow-hidden backdrop-blur-md transition-all hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(157, 78, 221, 0.12), rgba(0, 255, 65, 0.08))",
              }}>
              
              {/* Header with Icon */}
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex items-start gap-6 mb-6">
                  <div 
                    className="p-4 rounded-2xl flex-shrink-0"
                    style={{ background: "rgba(157, 78, 221, 0.2)" }}>
                    <FiBriefcase size={32} style={{ color: "#9d4edd" }} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-3xl font-bold" style={{ color: "var(--text-primary)" }}>
                      {exp.role}
                    </h3>
                    <p className="text-lg mt-2" style={{ color: "#00ff41" }}>
                      {exp.company}
                    </p>
                    <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {exp.description.map((desc, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-3 items-start"
                        style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "#00ff41" }} className="mt-1.5 flex-shrink-0">▸</span>
                        <span>{desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm"
                        style={{
                          background: "rgba(0, 255, 65, 0.15)",
                          color: "#00ff41",
                        }}>
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}

        {/* Summary Stats */}
        <AnimatedSection delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: <FiAward size={28} />, value: "5+", label: "Years in Tech" },
              { icon: <FiTrendingUp size={28} />, value: "50+", label: "Solutions Built" },
              { icon: <FiBriefcase size={28} />, value: "100%", label: "Project Success" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl text-center backdrop-blur-md"
                style={{
                  background: "rgba(157, 78, 221, 0.08)",
                }}>
                <div 
                  className="flex justify-center mb-3"
                  style={{ color: "#00ff41" }}>
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-2 uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
