import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Framer Motion"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "C#", ".NET", "REST APIs", "JWT Auth"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "SQL Server", "MySQL", "Database Design", "Query Optimization"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Domain",
      skills: ["SampleManager LIMS", "VGL Scripting", "LES Methods", "Bio Repository 2.0", "21 CFR Part 11"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <section id="skills" className="py-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="03" title="Skills & Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-3xl backdrop-blur-md bg-gradient-to-br ${category.gradient} transition-all`}>
                
                {/* Category Title */}
                <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                  {category.title}
                </h3>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md transition-all hover:scale-105"
                      style={{
                        background: "rgba(157, 78, 221, 0.2)",
                        color: "#9d4edd",
                        border: "1px solid rgba(157, 78, 221, 0.3)",
                      }}>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tools & Platforms - Horizontal Scroll Style */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
              Tools & Platforms
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render"].map((tool, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="p-4 rounded-2xl text-center backdrop-blur-md transition-all"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(157, 78, 221, 0.15), rgba(0, 255, 65, 0.08))" 
                  }}>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                    {tool}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
