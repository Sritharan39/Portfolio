import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Get visitor count from localStorage
    const storedCount = localStorage.getItem("portfolioVisitors");
    const count = storedCount ? parseInt(storedCount) + 1 : 1;
    setVisitorCount(count);
    localStorage.setItem("portfolioVisitors", count.toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <FiGithub size={18} />, href: portfolioData.social.github, label: "GitHub", color: "#333" },
    { icon: <FiLinkedin size={18} />, href: portfolioData.social.linkedin, label: "LinkedIn", color: "#0A66C2" },
    { icon: <FiMail size={18} />, href: portfolioData.social.email, label: "Email", color: "#EA4335" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)" }}>
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col">
            <h3 className="font-mono text-lg font-bold mb-2 gradient-text-animate">
              &lt;{portfolioData.personal.name.split(" ")[0]} /&gt;
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
              Full-Stack Developer specializing in LIMS & web development
            </p>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Building solutions that matter
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="font-mono text-sm font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                  → {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="font-mono text-sm font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Stack
            </h4>
            <div className="flex flex-col gap-2">
              {["React.js", "Node.js", "PostgreSQL", "C#", ".NET"].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full w-fit"
                  style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent)" }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visitor Counter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6">
            {/* Visitor Counter */}
            <div
              className="p-4 rounded-lg border"
              style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2 mb-2">
                <FiEye size={16} style={{ color: "var(--accent)" }} />
                <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                  Page Views
                </p>
              </div>
              <p className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
                {visitorCount}
              </p>
              <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                Thanks for visiting!
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border transition-all"
                  style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.backgroundColor = link.color;
                    e.currentTarget.style.borderColor = link.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "var(--border)";
                  }}
                  title={link.label}>
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "var(--border)", marginBottom: "12px" }}></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-center md:text-left" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border transition-all"
            style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}>
            <FiArrowUp size={14} /> Top
          </motion.button>

          {/* Built Info */}
          <p className="text-xs text-center md:text-right" style={{ color: "var(--text-muted)" }}>
            Built with React • Tailwind • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
