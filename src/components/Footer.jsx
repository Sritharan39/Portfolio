import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiEye, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Get visitor count from localStorage
    const storedVisitors = localStorage.getItem("portfolioVisitors");
    const currentVisitors = storedVisitors ? parseInt(storedVisitors) + 1 : 1;
    setVisitors(currentVisitors);
    localStorage.setItem("portfolioVisitors", currentVisitors.toString());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { 
      icon: <FiGithub size={18} />, 
      href: portfolioData.social.github, 
      label: "GitHub",
      bg: "#1a1a2e"
    },
    { 
      icon: <FiLinkedin size={18} />, 
      href: portfolioData.social.linkedin, 
      label: "LinkedIn",
      bg: "#0a66c2"
    },
    { 
      icon: <FiMail size={18} />, 
      href: portfolioData.social.email, 
      label: "Email",
      bg: "#ea4335"
    },
  ];

  return (
    <footer className="transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Top Section - Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1 - About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3">
            <h3 className="font-mono font-bold text-sm" style={{ color: "var(--text-primary)" }}>
              About
            </h3>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Full-stack developer specializing in LIMS implementation, SampleManager customization, and modern web technologies.
            </p>
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
              <FiMapPin size={14} />
              <span>Chennai, Tamil Nadu, India</span>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3">
            <h3 className="font-mono font-bold text-sm" style={{ color: "var(--text-primary)" }}>
              Quick Links
            </h3>
            <div className="space-y-2 text-xs">
              {[
                { label: "Home", href: "#" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block transition-colors duration-200"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-muted)"}>
                  → {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 3 - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3">
            <h3 className="font-mono font-bold text-sm" style={{ color: "var(--text-primary)" }}>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "PostgreSQL", "C#", ".NET"].map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full border transition-all"
                  style={{
                    color: "var(--accent)",
                    borderColor: "var(--accent)",
                    backgroundColor: "var(--accent-glow)"
                  }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "var(--border)", marginBottom: "2rem" }}></div>

        {/* Middle Section - Social Links & Visitor Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 p-6 rounded-lg"
          style={{ backgroundColor: "var(--bg-primary)", border: "1px solid var(--border)" }}>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="flex items-center justify-center w-12 h-12 rounded-lg border transition-all"
                style={{
                  color: "white",
                  borderColor: "var(--border)",
                  backgroundColor: "var(--bg-card)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = link.bg;
                  e.currentTarget.style.borderColor = link.bg;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg-card)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
                title={link.label}>
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Visitor Counter */}
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-4 py-2 rounded-lg"
            style={{ backgroundColor: "var(--accent-glow)", border: "1px solid var(--accent)" }}>
            <FiEye size={18} style={{ color: "var(--accent)" }} />
            <div className="flex flex-col">
              <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
                Page Visitors
              </span>
              <span className="text-lg font-bold font-mono" style={{ color: "var(--accent)" }}>
                {visitors.toLocaleString()}
              </span>
            </div>
          </motion.div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all text-xs font-mono"
            style={{
              color: "var(--text-muted)",
              borderColor: "var(--border)",
              backgroundColor: "var(--bg-secondary)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}>
            <FiArrowUp size={14} />
            Back to Top
          </motion.button>

        </motion.div>

        {/* Bottom Section - Copyright & Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-2 pt-6"
          style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Designed & Built with <span style={{ color: "var(--accent)" }}>❤️</span> using React, Tailwind CSS & Framer Motion
          </p>
          <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            v1.0.0 • Last Updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
