"use client";
import { motion } from "framer-motion";
import { meta, nav } from "@/data/index";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-8xl mx-auto px-6 md:px-24 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rotate-45" style={{ background: "var(--accent)" }} />
            <span className="font-mono text-xs tracking-widest" style={{ color: "var(--text-primary)" }}>SRITHARAN</span>
            <span className="font-mono cursor-blink" style={{ color: "var(--accent)" }}>_</span>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            {nav.map(link => (
              <a key={link.label} href={link.href}
                className="font-mono text-[10px] tracking-widest uppercase transition-colors underline-hover"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
                onMouseLeave={e => e.target.style.color = "var(--text-muted)"}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-wider" style={{ color: "var(--text-muted)" }}>
            <motion.span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }}
              animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            © {year} · ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}
