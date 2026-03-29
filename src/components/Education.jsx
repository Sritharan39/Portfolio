import { portfolioData } from "../data/portfolioData";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  return (
    <section id="education" className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader index="02" title="Education" />

        <div className="relative">
          {/* Timeline Line */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-1 rounded-full"
            style={{ background: "linear-gradient(180deg, #9d4edd, #00ff41, transparent)" }}
          />

          {/* Education Cards */}
          <div className="space-y-8">
            {portfolioData.education.map((edu, i) => (
              <AnimatedSection key={i} delay={i * 0.2}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="ml-24 p-8 rounded-2xl backdrop-blur-md transition-all hover:shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, rgba(157, 78, 221, 0.1), rgba(0, 255, 65, 0.05))",
                  }}>
                  {/* Timeline Dot */}
                  <div 
                    className="absolute -left-14 top-8 w-8 h-8 rounded-full border-4"
                    style={{
                      borderColor: "#9d4edd",
                      background: "var(--bg-primary)",
                    }}
                  />

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold" style={{ color: "#9d4edd" }}>
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold mt-2" style={{ color: "var(--text-primary)" }}>
                      {edu.institution}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-6 mt-6 pt-6" style={{ borderTop: "1px solid rgba(157, 78, 221, 0.2)" }}>
                    <div>
                      <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                        Year
                      </p>
                      <p className="text-lg font-semibold mt-1" style={{ color: "var(--text-primary)" }}>
                        {edu.year}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                        CGPA
                      </p>
                      <p className="text-lg font-semibold mt-1" style={{ color: "#00ff41" }}>
                        {edu.grade}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Certifications Section - Different Style */}
        <AnimatedSection delay={0.5}>
          <div className="mt-16 p-8 rounded-3xl backdrop-blur-md" 
            style={{
              background: "linear-gradient(135deg, rgba(0, 255, 65, 0.1), rgba(157, 78, 221, 0.05))",
            }}>
            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              🏆 Achievements
            </h3>
            <p style={{ color: "var(--text-secondary)" }}>
              Passionate learner with continuous focus on skill development and industry certifications. 
              Always staying updated with the latest technologies and best practices.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
