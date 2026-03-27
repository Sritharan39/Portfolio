import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiTwitter, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

const motivationalQuotes = [
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Every expert was once a beginner.", author: "Unknown" },
  { text: "Code is poetry written in a language machines understand.", author: "Anonymous Developer" },
  { text: "Build something great today that your future self will thank you for.", author: "Unknown" },
];

export default function Footer() {
  const [quote, setQuote] = useState(motivationalQuotes[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    setQuote(motivationalQuotes[randomIndex]);
  }, []);

  const socialLinks = [
    { name: "GitHub", href: portfolioData.social.github, icon: <FiGithub size={20} />, label: "GitHub" },
    { name: "LinkedIn", href: portfolioData.social.linkedin, icon: <FiLinkedin size={20} />, label: "LinkedIn" },
    { name: "Email", href: portfolioData.social.email, icon: <FiMail size={20} />, label: "Email" },
    { name: "Twitter", href: "https://twitter.com", icon: <FiTwitter size={20} />, label: "Twitter" },
    { name: "Instagram", href: "https://instagram.com", icon: <FiInstagram size={20} />, label: "Instagram" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t transition-colors duration-300" style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Motivational Quote Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 p-6 rounded-xl border"
          style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
          <p className="text-center italic mb-3" style={{ color: "var(--accent)", fontSize: "16px", lineHeight: "1.6" }}>
            "{quote.text}"
          </p>
          <p className="text-center text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            — {quote.author}
          </p>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start">
            <a href="#" className="font-mono text-lg font-bold gradient-text-animate mb-2">
              &lt;{portfolioData.personal.name.split(" ")[0]} /&gt;
            </a>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Full-Stack Developer | LIMS Specialist
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center">
            <p className="font-mono text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              Quick Links
            </p>
            <div className="flex flex-col gap-2 text-center">
              <a href="#about" className="text-xs transition-colors" style={{ color: "var(--text-muted)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                About
              </a>
              <a href="#skills" className="text-xs transition-colors" style={{ color: "var(--text-muted)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                Skills
              </a>
              <a href="#projects" className="text-xs transition-colors" style={{ color: "var(--text-muted)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                Projects
              </a>
              <a href="#contact" className="text-xs transition-colors" style={{ color: "var(--text-muted)" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}>
                Contact
              </a>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-end">
            <p className="font-mono text-sm font-bold mb-3" style={{ color: "var(--text-primary)" }}>
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {["React", "Node.js", "SQL", "C#", ".NET"].map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-md" 
                  style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent)" }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-6 mb-8 py-8 border-t border-b"
          style={{ borderColor: "var(--border)" }}>
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              className="flex items-center justify-center w-10 h-10 rounded-lg border transition-all"
              style={{ 
                color: "var(--text-muted)", 
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-secondary)"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.backgroundColor = "var(--accent-glow)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.backgroundColor = "var(--bg-secondary)";
              }}
              title={link.label}>
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <p className="text-xs font-mono text-center md:text-left" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="text-xs font-mono text-center" style={{ color: "var(--text-muted)" }}>
            Built with <span style={{ color: "var(--accent)" }}>❤️</span> using React, Tailwind CSS & Framer Motion
          </p>
          <p className="text-xs font-mono text-center md:text-right" style={{ color: "var(--text-muted)" }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Back to Top Button */}
        <div className="flex justify-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg border transition-all"
            style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}>
            <FiArrowUp size={14} /> Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
