import Image from "next/image";
import HeroSection from "./Sections/HeroSection/page";
import AboutSection from "./Sections/Aboutsection/page";
import About2 from "./Sections/About2/page";
import TestimonialSection from "./Sections/TestimonialSection/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <About2 />
      <TestimonialSection />
    </main>
  );
}
