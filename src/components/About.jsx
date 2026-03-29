import { portfolioData } from "../data/portfolioData";
import { FiCode, FiDatabase, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const stats = [
    { icon: <FiCode size={32} />, value: "50+", label: "Projects Built", color: "#9d4edd" },
    { icon: <FiDatabase size={32} />, value: "5+", label: "Years Experience", color: "#00ff41" },
    { icon: <FiTrendingUp size={32} />, value: "100%", label: "Client Satisfaction", color: "#c77dff" },
  ];

  return (
    <section id="about" className="py-24" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="01" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Bio Text */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {portfolioData.personal.bio}
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                With a passion for clean code and innovative solutions, I specialize in building 
                robust LIMS systems and creating seamless user experiences. I believe in the power 
                of technology to solve real-world problems.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Currently at <span style={{ color: "#9d4edd" }}>UST Global</span>, where I work on 
                cutting-edge life sciences solutions. Always learning, always building, always pushing boundaries.
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Stats Cards - No Borders */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={0.2 + i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-6 rounded-2xl backdrop-blur-md transition-all"
                  style={{
                    background: `linear-gradient(135deg, rgba(157, 78, 221, 0.1), rgba(0, 255, 65, 0.05))`,
                  }}>
                  <div 
                    className="text-4xl mb-4"
                    style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.value}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Fun Facts - Gradient Pills */}
        <AnimatedSection delay={0.4}>
          <div className="bg-gradient-to-r from-purple-500/10 to-lime-500/10 rounded-3xl p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Fun Facts About Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "🎵 Love coding while listening to lo-fi beats",
                "🏃 Marathon enthusiast & fitness advocate",
                "📚 Voracious reader of tech blogs & sci-fi",
                "🌍 Passionate about open-source contributions",
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: "rgba(157, 78, 221, 0.1)" }}>
                  <p style={{ color: "var(--text-secondary)" }}>{fact}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
