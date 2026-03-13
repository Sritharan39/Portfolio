import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { portfolioData } from "../data/portfolioData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = scrolled
    ? "bg-[#0A0F1E]/80 backdrop-blur-md border-b border-[#1E2D4A]"
    : "bg-transparent";

  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + navClass}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" className="font-mono text-lg font-medium text-[#3B82F6]">
          <span className="text-[#94A3B8]">&lt;</span>
          {portfolioData.personal.name.split(" ")[0]}
          <span className="text-[#94A3B8]"> /&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-[#94A3B8] hover:text-[#F0F4FF] transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3B82F6] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[#94A3B8] hover:text-[#F0F4FF] hover:bg-white/10 transition-all duration-200"
          >
            {isDark ? "Sun" : "Moon"}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#94A3B8] hover:text-[#F0F4FF] transition-colors"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-[#1E2D4A] px-6 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#94A3B8] hover:text-[#F0F4FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="self-start text-sm text-[#94A3B8] hover:text-[#F0F4FF]"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
