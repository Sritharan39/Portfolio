import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Awards from "./components/Awards";
import ResumeViewer from "./components/ResumeViewer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-skin-base min-h-screen font-sans transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Awards />
        <ResumeViewer />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
