import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Booking from "@/components/home/Booking";
import Contact from "@/components/home/Contact";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <>
      <Banner />
      <Hero />
      <Projects />
      <About />
      <Booking />
      <Faq />
      <Contact />
    </>
  );
}
