import About from "@/app/components/About/About";
import Contact from "@/app/components/Contact/Contact";
import Projects from "@/app/components/Projects/Projects";
import Skills from "@/app/components/Skills/Skills";
import 'animate.css';

export default function Home() {
  return (
    <main>
      {/* Sections */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
