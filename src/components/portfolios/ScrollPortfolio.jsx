import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollPortfolio({ onBack }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const sections = [
    { title: "Sritharan", subtitle: "Full Stack Developer" },
    { title: "Experience", subtitle: "2+ years in software development" },
    { title: "Skills", subtitle: "React, Node.js, PostgreSQL, .NET" },
    { title: "Projects", subtitle: "MERN, Full-Stack, LIMS Systems" },
    { title: "Let's Connect", subtitle: "Ready for new opportunities" },
  ];

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 px-4 py-2 rounded-lg font-bold text-sm"
        style={{ background: "linear-gradient(135deg, #9d4edd, #c77dff)", color: "#fff" }}>
        ← Back
      </button>

      <div ref={containerRef} className="w-full h-screen overflow-y-scroll scroll-smooth" style={{ backgroundColor: "var(--bg-primary)" }}>
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-screen flex flex-col items-center justify-center px-6"
            style={{
              backgroundColor: idx % 2 === 0 ? "var(--bg-primary)" : "var(--bg-secondary)",
            }}>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center">
              <h2 className="text-6xl md:text-8xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
                {section.title}
              </h2>
              <p className="text-2xl md:text-4xl" style={{ color: "var(--text-secondary)" }}>
                {section.subtitle}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
