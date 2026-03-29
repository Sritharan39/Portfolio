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
    { icon: <FiGithub size={22} />, href: portfolioData.social.github, delay: 0.2 },
    { icon: <FiLinkedin size={22} />, href: portfolioData.social.linkedin, delay: 0.3 },
    { icon: <FiMail size={22} />, href: portfolioData.social.email, delay: 0.4 },
  ];

  return (
    <section 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20" 
      style={{ backgroundColor: "var(--bg-primary)" }}>
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple gradient orbs */}
        <motion.div
          animate={{ y: scrollY * 0.4, x: Math.sin(scrollY * 0.005) * 30 }}
          className="absolute top-1/4 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ 
            background: "radial-gradient(circle, #9d4edd, transparent)",
            filter: "blur(120px)"
          }}
        />
        
        {/* Lime accent orb */}
        <motion.div
          animate={{ y: scrollY * -0.4, x: Math.cos(scrollY * 0.005) * 30 }}
          className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ 
            background: "radial-gradient(circle, #00ff41, transparent)",
            filter: "blur(120px)"
          }}
        />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(157, 78, 221, 0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(157, 78, 221, 0.02) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Main Container - Centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center">
        
        {/* Top Badge - Centered */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block">
          <div 
            className="flex items-center gap-3 px-6 py-2.5 rounded-full border-2 backdrop-blur-sm"
            style={{
              borderColor: "#9d4edd",
              background: "rgba(157, 78, 221, 0.1)",
            }}>
            <span style={{ color: "#00ff41" }} className="text-lg font-bold">●</span>
            <span style={{ color: "var(--text-secondary)" }} className="text-sm font-semibold tracking-wide">
              VIBRANT DEVELOPER
            </span>
            <span style={{ color: "#9d4edd" }} className="text-lg font-bold">●</span>
          </div>
        </motion.div>

        {/* Main Heading - Centered & Properly Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 text-center w-full">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-tight mb-6 w-full" 
            style={{ color: "var(--text-primary)" }}>
            <span className="block">Building Bold</span>
            <span 
              className="block"
              style={{
                background: "linear-gradient(90deg, #9d4edd, #c77dff, #00ff41)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Digital Visions
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-normal tracking-wide" style={{ color: "var(--text-muted)" }}>
            Creative Developer • LIMS Expert • Full-Stack Architect
          </p>
        </motion.div>

        {/* Centered Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-32 h-1 rounded-full mb-8"
          style={{ 
            background: "linear-gradient(90deg, #9d4edd, #00ff41)",
            originX: "center"
          }}
        />

        {/* Description - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-12 max-w-2xl w-full p-6 sm:p-8 rounded-xl border-2 text-center"
          style={{
            borderColor: "#9d4edd",
            background: "rgba(157, 78, 221, 0.08)",
          }}>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Transforming ideas into stunning applications. Specializing in LIMS systems, 
            modern web development, and creating experiences that inspire.
          </p>
        </motion.div>

        {/* CTA Buttons - Centered Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full mb-16">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all text-center"
            style={{ 
              background: "linear-gradient(135deg, #9d4edd, #c77dff)",
              color: "#fff",
              boxShadow: "0 15px 40px rgba(157, 78, 221, 0.35)",
              letterSpacing: "0.02em"
            }}>
            VIEW MY WORK
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg font-bold text-base sm:text-lg border-2 transition-all text-center"
            style={{ 
              borderColor: "#9d4edd",
              color: "var(--text-primary)",
              background: "rgba(157, 78, 221, 0.1)",
              letterSpacing: "0.02em"
            }}>
            GET IN TOUCH
          </motion.a>
        </motion.div>

        {/* Social Links - Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center gap-6 items-center">
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
                borderColor: "#9d4edd",
                color: "#9d4edd",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 25px rgba(157, 78, 221, 0.5)";
                e.currentTarget.style.backgroundColor = "rgba(157, 78, 221, 0.15)";
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

      {/* Scroll Indicator - Centered at Bottom */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-3 cursor-pointer">
          <span className="text-xs font-mono tracking-widest" style={{ color: "#9d4edd" }}>
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}>
            <FiArrowDown size={24} style={{ color: "#00ff41" }} />
          </motion.div>
        </a>
      </motion.div>

      {/* Parallax Accent Line */}
      <motion.div
        animate={{ scaleX: 1 + scrollY * 0.0008 }}
        className="absolute top-1/3 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #9d4edd, transparent)" }}
      />
    </section>
  );
}
