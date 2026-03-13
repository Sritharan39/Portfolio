import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-[#0A0F1E] min-h-screen font-sans">
        <Navbar />
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
