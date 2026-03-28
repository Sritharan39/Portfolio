import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiEye, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedCount = localStorage.getItem("portfolioVisitors");
    const count = storedCount ? parseInt(storedCount) + 1 : 1;
    setVisitorCount(count);
    localStorage.setItem("portfolioVisitors", count.toString());
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { icon: <FiGithub size={20} />, href: portfolioData.social.github, label: "GitHub" },
    { icon: <FiLinkedin size={20} />, href: portfolioData.social.linkedin, label: "LinkedIn" },
    { icon: <FiMail size={20} />, href: portfolioData.social.email, label: "Email" },
  ];

  const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative transition-colors duration-300 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(135deg, var(--bg-secondary), var(--bg-card))",
      }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--accent)", opacity: 0.1 }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "var(--accent)", opacity: 0.1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold mb-2 gradient-text-animate">
              &lt;{portfolioData.personal.name.split(" ")[0]} /&gt;
            </h3>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Building elegant solutions with modern technology
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-widest" style={{ color: "var(--text-primary)" }}>
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  whileHover={{ x: 4 }}
                  className="text-sm transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>
                  → {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Visitor Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4">
            {mounted && (
              <>
                <div className="p-4 rounded-xl border" style={{ backgroundColor: "rgba(var(--accent-rgb), 0.05)", borderColor: "var(--border)" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <FiEye size={16} style={{ color: "var(--accent)" }} />
                    <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>Page Views</span>
                  </div>
                  <p className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
                    {visitorCount.toLocaleString()}
                  </p>
                </div>
                <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
                  Thanks for visiting! 🙏
                </p>
              </>
            )}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ height: "1px", background: "var(--border)", marginBottom: "24px" }}
          className="origin-left"
        />

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 mb-8">
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              className="w-10 h-10 rounded-lg border flex items-center justify-center transition-all"
              style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.backgroundColor = "rgba(var(--accent-rgb), 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              title={link.label}>
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-8">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {portfolioData.personal.name}. Made with <FiHeart style={{ display: "inline", color: "var(--accent)" }} /> using React & Tailwind
          </p>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
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
            <FiArrowUp size={14} /> Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
