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
      {/* Elegant Gold Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gold gradient orbs */}
        <motion.div
          animate={{ y: scrollY * 0.4, x: Math.sin(scrollY * 0.005) * 40 }}
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ 
            background: "radial-gradient(circle, #d4af37, transparent)",
            filter: "blur(120px)"
          }}
        />
        <motion.div
          animate={{ y: scrollY * -0.4, x: Math.cos(scrollY * 0.005) * 40 }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-12"
          style={{ 
            background: "radial-gradient(circle, #f4d03f, transparent)",
            filter: "blur(120px)"
          }}
        />
        
        {/* Elegant lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 inline-block">
          <div 
            className="flex items-center gap-3 px-6 py-3 rounded-full border-2 backdrop-blur-md"
            style={{
              borderColor: "#d4af37",
              background: "rgba(212, 175, 55, 0.08)",
            }}>
            <span style={{ color: "#d4af37" }} className="text-lg">✦</span>
            <span style={{ color: "var(--text-secondary)" }} className="text-sm font-semibold tracking-wider">
              PREMIUM DEVELOPER
            </span>
            <span style={{ color: "#d4af37" }} className="text-lg">✦</span>
          </div>
        </motion.div>

        {/* Main Heading - Elegant & Bold */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-8">
          <h1 className="text-7xl md:text-8xl font-black leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
            Crafting Digital
            <br />
            <span 
              className="inline-block"
              style={{
                background: "linear-gradient(90deg, #d4af37, #f4d03f, #d4af37)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light tracking-wide" style={{ color: "var(--text-muted)" }}>
            Premium Full-Stack Development • LIMS Innovation • Architectural Excellence
          </p>
        </motion.div>

        {/* Elegant Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="my-8 h-px"
          style={{ 
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
            originX: "center"
          }}
        />

        {/* Description with Gold accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12 max-w-2xl mx-auto p-8 rounded-lg border-2"
          style={{
            borderColor: "#d4af37",
            background: "rgba(212, 175, 55, 0.05)",
          }}>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Specializing in sophisticated LIMS systems and enterprise-grade full-stack applications. 
            Delivering premium code architecture and exceptional user experiences.
          </p>
        </motion.div>

        {/* CTA Buttons - Luxury Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg font-semibold text-lg transition-all"
            style={{ 
              background: "linear-gradient(135deg, #d4af37, #f4d03f)",
              color: "#000",
              boxShadow: "0 15px 40px rgba(212, 175, 55, 0.3)",
              letterSpacing: "0.05em"
            }}>
            EXPLORE MY WORK
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-lg font-semibold text-lg border-2 transition-all"
            style={{ 
              borderColor: "#d4af37",
              color: "var(--text-primary)",
              background: "rgba(212, 175, 55, 0.08)",
              letterSpacing: "0.05em"
            }}>
            GET IN TOUCH
          </motion.a>
        </motion.div>

        {/* Social Links - Gold Style */}
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
                borderColor: "#d4af37",
                color: "#d4af37",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 25px rgba(212, 175, 55, 0.5)";
                e.currentTarget.style.backgroundColor = "rgba(212, 175, 55, 0.12)";
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

      {/* Scroll Indicator - Elegant */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-3 cursor-pointer">
          <span className="text-xs font-mono tracking-widest" style={{ color: "#d4af37" }}>
            SCROLL DOWN
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}>
            <FiArrowDown size={24} style={{ color: "#d4af37" }} />
          </motion.div>
        </a>
      </motion.div>

      {/* Parallax accent lines - Gold */}
      <motion.div
        animate={{ scaleX: 1 + scrollY * 0.0008 }}
        className="absolute top-1/4 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }}
      />
      <motion.div
        animate={{ scaleX: 1 + scrollY * 0.0005 }}
        className="absolute bottom-1/4 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }}
      />
    </section>
  );
}
