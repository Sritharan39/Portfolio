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
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "var(--bg-primary)" : "transparent",
        borderBottomColor: scrolled ? "var(--border)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b mt-[3px]"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-base font-bold gradient-text">
          &lt;{portfolioData.personal.name.split(" ")[0]} /&gt;
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(({ label, href }) => {
            const isActive = active === href.slice(1);
            return (
              <a key={label} href={href}
                className="relative text-sm font-medium transition-all duration-200 group"
                style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-[2px] transition-all duration-300 rounded-full"
                  style={{
                    width: isActive ? "100%" : "0%",
                    background: "linear-gradient(90deg, var(--accent), var(--accent2))"
                  }} />
              </a>
            );
          })}
          <button onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-200 border"
            style={{ color: "var(--text-secondary)", borderColor: "var(--border)", backgroundColor: "var(--bg-card)" }}
            aria-label="Toggle theme"
          >
            {isDark
              ? <HiSun size={17} style={{ color: "#f59e0b" }} />
              : <HiMoon size={17} style={{ color: "var(--accent)" }} />
            }
          </button>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 transition-colors"
          style={{ color: "var(--text-secondary)" }}>
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 py-6 flex flex-col gap-5 border-t"
          style={{ backgroundColor: "var(--bg-secondary)", borderColor: "var(--border)" }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              className="text-base font-medium transition-colors"
              style={{ color: "var(--text-secondary)" }}>{label}</a>
          ))}
          <button onClick={toggleTheme}
            className="self-start flex items-center gap-2 text-sm"
            style={{ color: "var(--text-secondary)" }}>
            {isDark ? <HiSun size={16} style={{ color: "#f59e0b" }} /> : <HiMoon size={16} style={{ color: "var(--accent)" }} />}
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
