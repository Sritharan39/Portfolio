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
      {/* Animated Neon Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cyan glow orbs */}
        <motion.div
          animate={{ y: scrollY * 0.5, x: Math.sin(scrollY * 0.01) * 50 }}
          className="absolute top-1/4 -left-32 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{ 
            background: "radial-gradient(circle, #00d9ff, transparent)",
            filter: "blur(80px)"
          }}
        />
        <motion.div
          animate={{ y: scrollY * -0.3, x: Math.cos(scrollY * 0.01) * 50 }}
          className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ 
            background: "radial-gradient(circle, #0099ff, transparent)",
            filter: "blur(80px)"
          }}
        />
        
        {/* Grid background effect */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 217, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Animated top badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block">
          <div 
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 backdrop-blur-md"
            style={{
              borderColor: "#00d9ff",
              background: "rgba(0, 217, 255, 0.1)",
            }}>
            <span style={{ color: "#00d9ff" }} className="text-sm">◆</span>
            <span style={{ color: "var(--text-secondary)" }} className="text-xs font-mono">
              Welcome to my digital space
            </span>
            <span style={{ color: "#00d9ff" }} className="text-sm">◆</span>
          </div>
        </motion.div>

        {/* Main Heading - Bold Neon Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8">
          <h1 className="text-7xl md:text-8xl font-black leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
            Building The
            <br />
            <span 
              className="inline-block"
              style={{
                background: "linear-gradient(90deg, #0099ff, #00d9ff, #00f0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 30px rgba(0, 217, 255, 0.3)",
              }}>
              Future
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light" style={{ color: "var(--text-muted)" }}>
            Full-Stack Developer • LIMS Specialist • Tech Innovator
          </p>
        </motion.div>

        {/* Description with neon accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-12 max-w-2xl mx-auto p-6 rounded-lg border-2"
          style={{
            borderColor: "#00d9ff",
            background: "rgba(0, 217, 255, 0.08)",
          }}>
          <p style={{ color: "var(--text-secondary)" }}>
            Crafting elegant, high-performance solutions with cutting-edge technologies. From LIMS systems to full-stack web applications.
          </p>
        </motion.div>

        {/* CTA Buttons - Neon style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-bold text-lg transition-all"
            style={{ 
              background: "linear-gradient(135deg, #0099ff, #00d9ff)",
              color: "#000",
              boxShadow: "0 0 20px rgba(0, 217, 255, 0.4)"
            }}>
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg font-bold text-lg border-2 transition-all"
            style={{ 
              borderColor: "#00d9ff",
              color: "var(--text-primary)",
              background: "rgba(0, 217, 255, 0.1)",
            }}>
            Let's Talk
          </motion.a>
        </motion.div>

        {/* Social Links - Neon glow */}
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
              whileHover={{ scale: 1.2, y: -8 }}
              className="w-14 h-14 rounded-lg border-2 flex items-center justify-center transition-all"
              style={{ 
                borderColor: "#00d9ff",
                color: "#00d9ff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 217, 255, 0.6)";
                e.currentTarget.style.backgroundColor = "rgba(0, 217, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.backgroundColor = "transparent";
              }}>
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - Neon style */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-3 cursor-pointer">
          <span className="text-xs font-mono tracking-widest" style={{ color: "#00d9ff" }}>
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}>
            <FiArrowDown size={24} style={{ color: "#00d9ff" }} />
          </motion.div>
        </a>
      </motion.div>

      {/* Parallax accent lines */}
      <motion.div
        animate={{ scaleX: 1 + scrollY * 0.0005 }}
        className="absolute top-1/3 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #00d9ff, transparent)" }}
      />
      <motion.div
        animate={{ scaleX: 1 + scrollY * 0.0003 }}
        className="absolute bottom-1/3 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #0099ff, transparent)" }}
      />
    </section>
  );
}
