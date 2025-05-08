import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import PainPoints from "@/components/home/PainPoints";
import VideoTestimonialSection from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <PainPoints />
      <VideoTestimonialSection />
      <Contact />
    </main>
  );
}
