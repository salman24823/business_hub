import React from "react";
import AboutUs from "../Sections/AboutUs/page";
import HeroSection from "../Sections/HeroSection/page";
import VisionSection from "../Sections/VisionSection/page";
import AboutEndSection from "../Sections/AboutEndSection/page";
import { Button } from "@heroui/react";

const about = () => {
  return (
    <>
      <div className="w-full h-[90vh] bg-gradient-to-r from-slate-200 to-gray-500 bg-cover bg-no-repeat ">
        <div className="filter p-[5%] w-full h-full flex items-center">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="main_heading">
              <span className="yellow">About</span> Us
            </h1>
            <p className="text-white p2para">
              Our business hub is a dynamic ecosystem designed to empower
              entrepreneurs, startups, and enterprises with smart rental spaces,
              cutting-edge IT solutions, expert financial guidance, and
              strategic advisory. We provide the tools, support, and environment
              to transform ideas into impactful ventures and help businesses
              grow, innovate, and lead confidently.
            </p>
            <div>
              <Button className="rounded-md yellow-bg font-bold">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <VisionSection />
      <AboutEndSection />
    </>
  );
};

export default about;
