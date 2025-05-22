import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import PainPoints from "@/components/home/PainPoints";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
