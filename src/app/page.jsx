import Image from "next/image";
import HeroSection from "./Sections/HeroSection/page";
import AboutSection from "./Sections/Aboutsection/page";
import ChooseUs from "./Sections/ChooseUs/page";
import TestimonialSection from "./Sections/TestimonialSection/page";
import FeatureSection from "./Sections/FeatureSection/page";
import MenuSection from "./Sections/ServiceSection/page";
import Form from "./Sections/Form/page";
import LocationSection from "./Sections/LocationSection/page";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <FeatureSection />
      <ChooseUs />
      <TestimonialSection />
      <Form />
      <LocationSection /> 
    </main>
  );
}
