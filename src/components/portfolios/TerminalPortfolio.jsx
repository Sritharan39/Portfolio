import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalPortfolio({ onBack }) {
  const [history, setHistory] = useState([
    { type: "system", content: "Welcome to Sritharan's Terminal Portfolio" },
    { type: "system", content: "Type 'help' to see available commands" },
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef(null);

  const commands = {
    help: {
      description: "Show available commands",
      execute: () => [
        "Available commands:",
        "  about     - About me",
        "  skills    - Technical skills",
        "  experience - Work experience",
        "  projects  - Featured projects",
        "  education - Education background",
        "  contact   - Contact information",
        "  clear     - Clear terminal",
      ],
    },
    about: {
      description: "Learn about me",
      execute: () => [
        "SRITHARAN - Full Stack Developer",
        "",
        "Experience: ~2 years in software development",
        "  • .NET Framework & Windows Desktop Applications",
        "  • Industrial Machine Vision Systems",
        "  • Life Science & LIMS Domain",
        "  • Full-Stack Web Development",
        "",
        "Focus: Enterprise systems with specialized domain expertise",
      ],
    },
    skills: {
      description: "View technical skills",
      execute: () => [
        "FRONTEND: React.js, JavaScript, Tailwind CSS, Framer Motion",
        "BACKEND: Node.js, Express.js, .NET, C#",
        "DATABASE: PostgreSQL, SQL Server, MongoDB",
        "TOOLS: Git, Docker, AWS, VS Code",
        "DOMAIN: LIMS, SampleManager, Industrial Systems, Life Science",
      ],
    },
    experience: {
      description: "Career timeline",
      execute: () => [
        "UST Global India (Current)",
        "  Role: Software Developer - Life Science/LIMS",
        "  • SampleManager LIMS implementation",
        "  • Full-stack development",
        "  • Enterprise systems",
        "",
        "Previous Company (9 months)",
        "  Role: Software Developer",
        "  • .NET Framework development",
        "  • Windows desktop applications",
        "  • Industrial machine vision",
      ],
    },
    projects: {
      description: "Featured projects",
      execute: () => [
        "1. Thanjavur Kitchen (MERN Stack)",
        "   Food ordering platform with real-time updates",
        "",
        "2. Daily Chronicle (Full-Stack)",
        "   Content management system",
        "",
        "3. LIMS RAG System (React + Node)",
        "   AI-powered lab information retrieval",
        "",
        "4. Portfolio Website (This!)",
        "   Multi-style portfolio showcase",
      ],
    },
    education: {
      description: "Education background",
      execute: () => [
        "Education:",
        "  Relevant coursework and training in software development",
        "  Focus on full-stack and enterprise systems",
        "",
        "Certifications:",
        "  Actively pursuing technical excellence",
      ],
    },
    contact: {
      description: "Get in touch",
      execute: () => [
        "Let's connect!",
        "",
        "Email: your.email@example.com",
        "GitHub: github.com/Sritharan39",
        "LinkedIn: linkedin.com/in/sritharan",
        "Twitter: @sritharan_dev",
      ],
    },
    clear: {
      description: "Clear screen",
      execute: () => {
        setHistory([]);
        return [];
      },
    },
  };

  const handleCommand = (e) => {
    if (e.key !== "Enter") return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "input", content: `$ ${input}` }];

    if (cmd === "") {
      setHistory(newHistory);
    } else if (commands[cmd]) {
      const output = commands[cmd].execute();
      output.forEach((line) => {
        newHistory.push({ type: "output", content: line });
      });
      setHistory(newHistory);
    } else if (cmd === "exit") {
      onBack();
      return;
    } else {
      newHistory.push({ type: "error", content: `Command not found: ${cmd}. Type 'help' for available commands.` });
      setHistory(newHistory);
    }

    setInput("");
  };

  useEffect(() => {
    terminalRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="w-full min-h-screen p-4 md:p-8" style={{ backgroundColor: "#0a0e27" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto p-6 rounded-lg font-mono text-sm"
        style={{ backgroundColor: "#0f1438", border: "2px solid #00ff41" }}>
        
        {/* Terminal Header */}
        <div className="mb-6 pb-4" style={{ borderBottom: "1px solid #00ff41" }}>
          <div className="flex items-center gap-2 mb-2">
            <span style={{ color: "#00ff41" }}>▶</span>
            <span style={{ color: "#00ff41" }}>Sritharan Terminal Portfolio</span>
          </div>
          <div style={{ color: "#888" }}>Press 'exit' to go back • Type 'help' for commands</div>
        </div>

        {/* Terminal Output */}
        <div className="min-h-96 max-h-screen overflow-y-auto mb-4 space-y-1">
          {history.map((line, idx) => (
            <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              {line.type === "input" && <span style={{ color: "#00ff41" }}>{line.content}</span>}
              {line.type === "output" && <span style={{ color: "#a0aec0" }}>{line.content}</span>}
              {line.type === "error" && <span style={{ color: "#ff6b6b" }}>{line.content}</span>}
              {line.type === "system" && <span style={{ color: "#00d9ff" }}>{line.content}</span>}
            </motion.div>
          ))}
          <div ref={terminalRef} />
        </div>

        {/* Input Line */}
        <div className="flex items-center gap-2">
          <span style={{ color: "#00ff41" }}>$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleCommand}
            autoFocus
            className="flex-1 bg-transparent outline-none"
            style={{ color: "#a0aec0" }}
            spellCheck="false"
          />
        </div>
      </motion.div>
    </div>
  );
}
