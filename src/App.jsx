import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "./contexts/ThemeContext";
import PortfolioSelector from "./components/PortfolioSelector";
import TerminalPortfolio from "./components/portfolios/TerminalPortfolio";
import GamePortfolio from "./components/portfolios/GamePortfolio";
import ThreeDPortfolio from "./components/portfolios/ThreeDPortfolio";
import ChatPortfolio from "./components/portfolios/ChatPortfolio";
import DataVizPortfolio from "./components/portfolios/DataVizPortfolio";
import ScrollPortfolio from "./components/portfolios/ScrollPortfolio";
import MinimalistPortfolio from "./components/portfolios/MinimalistPortfolio";
import ExperimentalPortfolio from "./components/portfolios/ExperimentalPortfolio";

function App() {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const portfolioTypes = [
    { id: "terminal", name: "Terminal", icon: "⌨️", description: "Command-line interface" },
    { id: "game", name: "Game", icon: "🎮", description: "Interactive game experience" },
    { id: "3d", name: "3D World", icon: "🌐", description: "Immersive 3D environment" },
    { id: "chat", name: "Chat", icon: "💬", description: "Conversation-based" },
    { id: "dataviz", name: "Data Visualization", icon: "📊", description: "Interactive charts & flows" },
    { id: "scroll", name: "Scroll Narrative", icon: "📜", description: "Animated scroll journey" },
    { id: "minimalist", name: "Minimalist", icon: "⚫", description: "Clean & simple" },
    { id: "experimental", name: "Experimental", icon: "✨", description: "Bold & creative" },
  ];

  const renderPortfolio = () => {
    switch (selectedPortfolio) {
      case "terminal":
        return <TerminalPortfolio onBack={() => setSelectedPortfolio(null)} />;
      case "game":
        return <GamePortfolio onBack={() => setSelectedPortfolio(null)} />;
      case "3d":
        return <ThreeDPortfolio onBack={() => setSelectedPortfolio(null)} />;
      case "chat":
        return <ChatPortfolio onBack={() => setSelectedPortfolio(null)} />;
      case "dataviz":
        return <DataVizPortfolio onBack={() => setSelectedPortfolio(null)} />;
      case "scroll":
        return <ScrollPortfolio onBack={() => setSelectedPortfolio(null)} />;
      case "minimalist":
        return <MinimalistPortfolio onBack={() => setSelectedPortfolio(null)} />;
      case "experimental":
        return <ExperimentalPortfolio onBack={() => setSelectedPortfolio(null)} />;
      default:
        return <PortfolioSelector types={portfolioTypes} onSelect={setSelectedPortfolio} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="w-full min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
        {renderPortfolio()}
      </div>
    </ThemeProvider>
  );
}

export default App;
