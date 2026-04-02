import { motion } from "framer-motion";

export default function GamePortfolio({ onBack }) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center" style={{ backgroundColor: "var(--bg-primary)" }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <div className="text-6xl mb-6">🎮</div>
        <h1 className="text-5xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Game Portfolio</h1>
        <p style={{ color: "var(--text-secondary)" }} className="mb-8">Interactive game-based portfolio experience</p>
        <button
          onClick={onBack}
          className="px-8 py-4 rounded-lg font-bold"
          style={{ background: "linear-gradient(135deg, #9d4edd, #c77dff)", color: "#fff" }}>
          Back to Selector
        </button>
        <div className="mt-8 text-sm" style={{ color: "var(--text-muted)" }}>Coming Soon</div>
      </motion.div>
    </div>
  );
}
