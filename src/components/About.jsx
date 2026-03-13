import { portfolioData } from "../data/portfolioData";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCode, FiBox, FiLayers, FiGlobe } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const stats = [
  { label: "Year of Experience", value: "1+", icon: <FiCode size={20} /> },
  { label: "Projects Built", value: "5+", icon: <FiBox size={20} /> },
  { label: "Technologies", value: "15+", icon: <FiLayers size={20} /> },
  { label: "Domain", value: "Life Sciences", icon: <FiGlobe size={20} /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="01" title="About Me" />
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <AnimatedSection delay={0.1}>
            <p className="text-lg leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>{portfolioData.personal.bio}</p>
            <p className="leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
              I specialize in SampleManager LIMS implementation, LES method development, and full-stack web development.
            </p>
            <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Currently focused on expanding into SampleManager customization, VGL scripting, and .NET integrations.
            </p>
            <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              <HiOutlineLocationMarker size={16} style={{ color: "var(--accent)" }} />
              {portfolioData.personal.location}
            </div>
            <div className="flex flex-wrap gap-2">
              {portfolioData.languages.map((lang) => (
                <span key={lang.language} className="font-mono text-xs px-3 py-1 rounded-full border"
                  style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent-light)", borderColor: "var(--border-hover)" }}>
                  {lang.language} — {lang.proficiency}
                </span>
              ))}
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="p-6 rounded-xl border transition-all duration-300 card-glow cursor-default"
                style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
                <div className="mb-3 gradient-text">{stat.icon}</div>
                <p className="text-3xl font-bold mb-1 gradient-text">{stat.value}</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
