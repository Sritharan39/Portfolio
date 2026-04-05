import Header   from "@/components/Header";
import Hero       from "@/sections/Hero";
import About      from "@/sections/About";
import Skills     from "@/sections/Skills";
import Experience from "@/sections/Experience";
import Projects   from "@/sections/Projects";
import Contact    from "@/sections/Contact";
import Footer     from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
