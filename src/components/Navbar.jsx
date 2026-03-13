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

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "var(--bg-primary)" : "transparent",
        borderBottomColor: scrolled ? "var(--border)" : "transparent",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a href="#" className="font-mono text-base font-semibold" style={{ color: "var(--accent)" }}>
          <span style={{ color: "var(--text-muted)" }}>&lt;</span>
          {portfolioData.personal.name.split(" ")[0]}
          <span style={{ color: "var(--text-muted)" }}> /&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium transition-colors duration-200 group"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => e.target.style.color = "var(--text-primary)"}
              onMouseLeave={e => e.target.style.color = "var(--text-secondary)"}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-200"
            style={{ color: "var(--text-secondary)", border: "1px solid var(--border)" }}
            aria-label="Toggle theme"
          >
            {isDark
              ? <HiSun size={17} style={{ color: "var(--accent-light)" }} />
              : <HiMoon size={17} style={{ color: "var(--accent)" }} />
            }
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-6 flex flex-col gap-5 border-t backdrop-blur-md"
          style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="self-start flex items-center gap-2 text-sm transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            {isDark ? <HiSun size={16} /> : <HiMoon size={16} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
