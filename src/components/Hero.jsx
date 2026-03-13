import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";

const roles = ["Software Developer", "LIMS Specialist", "Full Stack Developer", "SampleManager Expert"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.07] float"
          style={{ background: "radial-gradient(circle, var(--accent), transparent)" }} />
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-[0.06] float"
          style={{ background: "radial-gradient(circle, var(--accent2), transparent)", animationDelay: "2s" }} />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] opacity-[0.04] float"
          style={{ background: "radial-gradient(circle, #a855f7, transparent)", animationDelay: "4s" }} />
        <div className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
            style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }} />
            <span className="font-mono text-xs tracking-widest" style={{ color: "var(--text-muted)" }}>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-5 tracking-tight leading-none"
          style={{ color: "var(--text-primary)" }}>
          {portfolioData.personal.name}
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-6 h-10">
          <div className="h-[1px] w-14"
            style={{ background: "linear-gradient(to right, transparent, var(--accent))" }} />
          <h2 className="font-mono text-sm md:text-base tracking-widest gradient-text-animate">
            {displayed}<span className="animate-pulse">|</span>
          </h2>
          <div className="h-[1px] w-14"
            style={{ background: "linear-gradient(to left, transparent, var(--accent))" }} />
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: "var(--text-secondary)" }}>
          {portfolioData.personal.bio}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#projects"
            className="group flex items-center gap-2 px-8 py-3 rounded-lg text-white font-medium text-sm btn-primary">
            View My Work
            <FiArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a href={portfolioData.personal.resumeUrl} download
            className="flex items-center gap-2 px-8 py-3 rounded-lg font-medium text-sm transition-all duration-200 border hover:scale-105"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
          >
            <FiDownload size={15} /> Download Resume
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6">
          {[
            { href: portfolioData.social.github, icon: <FiGithub size={20} />, label: "GitHub" },
            { href: portfolioData.social.linkedin, icon: <FiLinkedin size={20} />, label: "LinkedIn" },
            { href: portfolioData.social.email, icon: <FiMail size={20} />, label: "Email" },
          ].map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 text-sm font-mono transition-all duration-200 hover:scale-110"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
              {item.icon}
              <span className="hidden sm:block">{item.label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs tracking-widest" style={{ color: "var(--text-muted)" }}>SCROLL</span>
        <div className="w-[1px] h-10"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
      </div>
    </section>
  );
}
