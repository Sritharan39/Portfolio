import { portfolioData } from "../data/portfolioData";
import { FiMonitor, FiServer, FiDatabase, FiTool, FiActivity } from "react-icons/fi";
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const skillCategories = [
  { key: "frontend", label: "Frontend", icon: <FiMonitor size={15} /> },
  { key: "backend", label: "Backend", icon: <FiServer size={15} /> },
  { key: "database", label: "Database", icon: <FiDatabase size={15} /> },
  { key: "tools", label: "Tools & DevOps", icon: <FiTool size={15} /> },
  { key: "domain", label: "Domain Knowledge", icon: <FiActivity size={15} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 transition-colors duration-300" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader index="04" title="Skills & Technologies" />
        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat, ci) => (
            <motion.div key={cat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl border transition-all duration-300 card-glow"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2 mb-4">
                <span style={{ color: "var(--accent)" }}>{cat.icon}</span>
                <h3 className="font-mono text-xs tracking-widest uppercase gradient-text">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills[cat.key].map((skill, si) => (
                  <motion.span key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.04 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-default"
                    style={{ backgroundColor: "var(--bg-secondary)", color: "var(--text-secondary)", borderColor: "var(--border)" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.backgroundColor = "var(--accent-glow)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.backgroundColor = "var(--bg-secondary)"; }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
