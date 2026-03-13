import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { portfolioData } from "../data/portfolioData";
import { HiSun, HiMoon, HiMenuAlt3, HiX } from "react-icons/hi";

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
    ? "bg-[#09090B]/80 backdrop-blur-md border-b border-[#27272A]"
    : "bg-transparent";

  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + navClass}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" className="font-mono text-lg font-semibold text-[#7C3AED]">
          <span className="text-[#52525B]">&lt;</span>
          {portfolioData.personal.name.split(" ")[0]}
          <span className="text-[#52525B]"> /&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#7C3AED] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#27272A] transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0F0F12]/95 backdrop-blur-md border-t border-[#27272A] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="self-start flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-colors"
          >
            {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
