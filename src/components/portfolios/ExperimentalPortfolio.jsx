import { motion } from "framer-motion";
import { useState } from "react";

export default function ExperimentalPortfolio({ onBack }) {
  const [rotation, setRotation] = useState(0);

  const randomPosition = () => ({
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    rotate: Math.random() * 360,
  });

  const cards = [
    { title: "Sritharan", subtitle: "Full Stack Developer", color: "#9d4edd" },
    { title: "React", subtitle: "Frontend Expert", color: "#00d9ff" },
    { title: "Node.js", subtitle: "Backend Specialist", color: "#00ff41" },
    { title: "PostgreSQL", subtitle: "Database Pro", color: "#c77dff" },
    { title: "Full Stack", subtitle: "End-to-end Solutions", color: "#7209b7" },
    { title: "LIMS", subtitle: "Domain Expert", color: "#ff006e" },
  ];

  return (
    <div className="w-full min-h-screen overflow-hidden relative p-6" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 px-4 py-2 rounded-lg font-bold text-sm"
        style={{ background: "linear-gradient(135deg, #9d4edd, #c77dff)", color: "#fff" }}>
        ← Back
      </button>

      {/* Animated Title */}
      <motion.div
        animate={{ rotate: rotation }}
        onHoverStart={() => setRotation(rotation + 360)}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer">
        <h1 className="text-6xl font-black" style={{ color: "var(--text-primary)" }}>
          Creative
        </h1>
        <p style={{ color: "var(--text-secondary)" }}>Hover to rotate</p>
      </motion.div>

      {/* Floating Cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={randomPosition()}
            animate={{
              x: Math.cos((idx / cards.length) * Math.PI * 2) * 200,
              y: Math.sin((idx / cards.length) * Math.PI * 2) * 200,
            }}
            transition={{
              duration: 2 + idx * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            className="absolute w-32 h-32 rounded-lg p-4 cursor-pointer flex flex-col items-center justify-center text-white text-center shadow-lg"
            style={{ backgroundColor: card.color }}>
            <h3 className="font-bold text-lg">{card.title}</h3>
            <p className="text-sm">{card.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
