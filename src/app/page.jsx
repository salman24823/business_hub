import Image from "next/image";
import HeroSection from "./Sections/HeroSection/page";
import AboutSection from "./Sections/Aboutsection/page";
import About2 from "./Sections/About2/page";
import TestimonialSection from "./Sections/TestimonialSection/page";
import FeatureSection from "./Sections/FeatureSection/page";
import MenuSection from "./Sections/MenuSection/page";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <About2 />
      <MenuSection />
      <FeatureSection />
      <TestimonialSection />
    </main>
  );
}
