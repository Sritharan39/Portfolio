"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-mono text-[10px] text-[#525252] tracking-wider">
          © 2025 SRITHARAN · BUILT WITH NEXT.JS + FRAMER MOTION
        </div>
        <div className="font-mono text-[10px] text-[#525252] tracking-wider flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse inline-block" />
          ALL_SYSTEMS_OPERATIONAL
        </div>
      </div>
    </footer>
  );
}
