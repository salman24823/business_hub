import Image from "next/image";
import HeroSection from "./Sections/HeroSection/page";
import AboutSection from "./Sections/Aboutsection/page";
import ChooseUs from "./Sections/ChooseUs/page";
import TestimonialSection from "./Sections/TestimonialSection/page";
import FeatureSection from "./Sections/FeatureSection/page";
import MenuSection from "./Sections/ServiceSection/page";
import Form from "./Sections/Form/page";
import LocationSection from "./Sections/LocationSection/page";
import ServicesCards from "./Sections/ServeiceCrads/page";
import Blank from "./Sections/Blank/page";
import ITservices from "./Sections/ITservices/page";
import Mission from "./Sections/Mission/page";
import BusinessServicesSection from "./Sections/BusinessServicesSection/page";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Blank />
      <AboutSection />
      <MenuSection />
      <FeatureSection />
      <ITservices />
      <BusinessServicesSection />
      <Mission />
      <ChooseUs />
      <TestimonialSection />    {/* issue in images import from public  */}
      <Form />
      <LocationSection />
    </main>
  );
}
