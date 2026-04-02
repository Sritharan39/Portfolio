import { motion } from "framer-motion";

export default function PortfolioSelector({ types, onSelect }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-4" style={{ color: "var(--text-primary)" }}>
          Portfolio Styles
        </h1>
        <p className="text-xl md:text-2xl" style={{ color: "var(--text-secondary)" }}>
          Choose a portfolio style to explore
        </p>
        <p className="text-sm mt-4" style={{ color: "var(--text-muted)" }}>
          Each represents a different approach to showcasing your work
        </p>
      </motion.div>

      {/* Grid of Portfolio Options */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
        {types.map((type) => (
          <motion.button
            key={type.id}
            variants={itemVariants}
            onClick={() => onSelect(type.id)}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.95 }}
            className="p-6 rounded-2xl backdrop-blur-md transition-all duration-300 text-center group"
            style={{
              background: "linear-gradient(135deg, rgba(157, 78, 221, 0.1), rgba(0, 255, 65, 0.05))",
              border: "2px solid",
              borderColor: "var(--border)",
            }}>
            {/* Icon */}
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
              {type.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
              {type.name}
            </h3>

            {/* Description */}
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {type.description}
            </p>

            {/* Hover Arrow */}
            <div className="mt-4 inline-block">
              <span
                className="text-lg group-hover:translate-x-2 transition-transform"
                style={{ color: "#9d4edd" }}>
                →
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 text-center">
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Click any style to explore • Use "Back to Selector" to return
        </p>
      </motion.div>
    </div>
  );
}
