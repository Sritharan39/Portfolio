import { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: portfolioData.social.github, delay: 0.2 },
    { icon: <FiLinkedin size={20} />, href: portfolioData.social.linkedin, delay: 0.3 },
    { icon: <FiMail size={20} />, href: portfolioData.social.email, delay: 0.4 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: scrollY * 0.5 }}
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "var(--accent)", filter: "blur(100px)" }}
        />
        <motion.div
          animate={{ y: scrollY * -0.3 }}
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "var(--accent)", filter: "blur(100px)" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block">
          <span
            className="text-xs font-mono px-4 py-2 rounded-full border backdrop-blur-md"
            style={{
              background: "rgba(var(--accent-rgb), 0.1)",
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}>
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading - Bold & Large */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-4" style={{ color: "var(--text-primary)" }}>
            <span className="block">Full-Stack</span>
            <span
              className="block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent"
              style={{ backgroundClip: "text" }}>
              Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-light mt-4" style={{ color: "var(--text-secondary)" }}>
            Crafting elegant solutions for complex problems
          </p>
        </motion.div>

        {/* Subheading with Animated Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-8">
          <p className="text-sm md:text-base mb-6" style={{ color: "var(--text-muted)" }}>
            Specializing in <span style={{ color: "var(--accent)" }}>LIMS Systems</span> • <span style={{ color: "var(--accent)" }}>React</span> • <span style={{ color: "var(--accent)" }}>Full-Stack Development</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-semibold text-white transition-all"
            style={{ background: "var(--accent)", boxShadow: "0 10px 30px rgba(var(--accent-rgb), 0.3)" }}>
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2, borderColor: "var(--accent)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-semibold border-2 transition-all"
            style={{ borderColor: "var(--border)", color: "var(--text-primary)" }}>
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center gap-6">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: link.delay }}
              whileHover={{ scale: 1.2, y: -5 }}
              className="w-12 h-12 rounded-lg border flex items-center justify-center transition-all"
              style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "transparent";
              }}>
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-2 cursor-pointer">
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Scroll to explore</span>
          <FiArrowDown size={20} style={{ color: "var(--accent)" }} />
        </a>
      </motion.div>

      {/* Parallax Shapes */}
      <motion.div
        animate={{ y: scrollY * 0.7, rotate: scrollY * 0.1 }}
        className="absolute top-1/4 right-10 w-40 h-40 rounded-3xl opacity-10"
        style={{ background: "var(--accent)" }}
      />
      <motion.div
        animate={{ y: scrollY * -0.5, rotate: scrollY * -0.1 }}
        className="absolute bottom-1/4 left-10 w-40 h-40 rounded-3xl opacity-10"
        style={{ background: "var(--accent)" }}
      />
    </section>
  );
}
