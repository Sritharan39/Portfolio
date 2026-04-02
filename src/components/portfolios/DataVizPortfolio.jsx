import { motion } from "framer-motion";

export default function DataVizPortfolio({ onBack }) {
  const skills = [
    { category: "Frontend", level: 85, color: "#9d4edd" },
    { category: "Backend", level: 80, color: "#c77dff" },
    { category: "Database", level: 75, color: "#7209b7" },
    { category: "DevOps", level: 70, color: "#00ff41" },
  ];

  const experience = [
    { year: "2024-Present", company: "UST Global", role: "Developer - LIMS" },
    { year: "2023-2024", company: "Previous Org", role: "Developer - .NET" },
  ];

  return (
    <div className="w-full min-h-screen p-8" style={{ backgroundColor: "var(--bg-primary)" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <button onClick={onBack} className="text-sm font-semibold mb-4" style={{ color: "#9d4edd" }}>
            ← Back
          </button>
          <h1 className="text-5xl font-bold" style={{ color: "var(--text-primary)" }}>Data Visualization</h1>
          <p style={{ color: "var(--text-secondary)" }} className="mt-2">Skills & Experience Metrics</p>
        </div>

        {/* Skills Chart */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>Technical Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
                <div className="flex justify-between mb-2">
                  <span style={{ color: "var(--text-primary)" }}>{skill.category}</span>
                  <span style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-3 rounded-full" style={{ backgroundColor: "var(--bg-card)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: idx * 0.2 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>Experience Timeline</h2>
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-4 rounded-lg"
                style={{ backgroundColor: "var(--bg-card)" }}>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>{exp.company}</h3>
                    <p style={{ color: "var(--text-secondary)" }}>{exp.role}</p>
                  </div>
                  <span style={{ color: "#9d4edd" }}>{exp.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
