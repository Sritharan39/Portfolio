import { motion } from "framer-motion";

export default function MinimalistPortfolio({ onBack }) {
  return (
    <div className="w-full min-h-screen p-8 md:p-16" style={{ backgroundColor: "#ffffff" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl mx-auto">
        {/* Header */}
        <button onClick={onBack} className="text-sm font-semibold mb-12" style={{ color: "#666" }}>
          ← Back
        </button>

        {/* Name */}
        <h1 className="text-6xl font-light mb-2" style={{ color: "#000" }}>
          Sritharan
        </h1>
        <p className="text-lg mb-12" style={{ color: "#666" }}>
          Full Stack Developer
        </p>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: "#999" }}>
            About
          </h2>
          <p style={{ color: "#333", lineHeight: "1.8" }}>
            2+ years building enterprise software. Specialized in LIMS systems and full-stack development. Currently at UST Global.
          </p>
        </section>

        {/* Work */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: "#999" }}>
            Work
          </h2>
          <div className="space-y-4">
            <div>
              <h3 style={{ color: "#000" }} className="font-semibold">
                UST Global
              </h3>
              <p style={{ color: "#999" }}>Software Developer • LIMS</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: "#999" }}>
            Skills
          </h2>
          <p style={{ color: "#333", lineHeight: "1.8" }}>
            React • Node.js • PostgreSQL • .NET • JavaScript • Full Stack
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-sm font-semibold mb-4 uppercase tracking-widest" style={{ color: "#999" }}>
            Contact
          </h2>
          <p style={{ color: "#333" }}>
            email@example.com • github.com/Sritharan39
          </p>
        </section>
      </motion.div>
    </div>
  );
}
