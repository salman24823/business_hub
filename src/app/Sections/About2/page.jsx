import { SquareCheckBig } from "lucide-react";
import React from "react";
import Image from "next/image";
import about_img1 from "../../../../public/about.jpg";
import about_img2 from "../../../../public/about2.jpg";
import { Button } from "@heroui/react";
const About2 = () => {
  return (
    <main className="px-[5%]">
      <div className="grid grid-cols-2 justify-center items-center gap-10">
        <div className="my-20">
          <div>
            <span className="point yellow">WHY CHOOSE US?</span>
            <h2 className="sub_blue">The Explanation You Mustly Use Us</h2>
          </div>
          <div>
            <p className="para w-3/4 mt-8">
              We provide you with the state of the art offices and facilities of
              the 24/7 Electricity and Security Services Coworkspace is the
              concept of working together in the team and helping eachothers in
              the team
            </p>
          </div>
          <div className="flex gap-3 mt-8">
            <div className="flex gap-2">
              <SquareCheckBig />
              <span className="point">Modern & Comfartable</span>
            </div>
            <div className="flex gap-2">
              <SquareCheckBig />
              <span className="point">Customize Space</span>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <div className="flex gap-2">
              <SquareCheckBig />
              <span className="point">Saving your time</span>
            </div>
            <div className="flex gap-2">
              <SquareCheckBig />
              <span className="point">Parking Area</span>
            </div>
          </div>
          <Button className="web-btn yellow-bg blue mt-10 rounded-none">Explore more</Button>
        </div>
        <div className="relative flex gap-3 items-center">
          <div className="relative">
            <div className="absolute flex flex-wrap w-[150px] h-[150px] place-content-start">
              <div className="w-[50%] h-[50%] bg-white"></div>
              <div className="w-[50%] h-[50%] bg-transparent"></div>
              <div className="w-[50%] h-[50%] bg-transparent"></div>
              <div className="w-[50%] h-[50%] yellow-bg"></div>
            </div>
            <Image src={about_img1} className="w-80 h-[32rem]" />
          </div>
          <div className="relative">
            <div className="absolute flex flex-wrap w-[100px] h-[100px] bottom-0 right-0">
              <div className="w-[50%] h-[50%] yellow-bg"></div>
              <div className="w-[50%] h-[50%] bg-transparent"></div>
              <div className="w-[50%] h-[50%] bg-transparent"></div>
              <div className="w-[50%] h-[50%] bg-white"></div>
            </div>
            <Image src={about_img2} className="h-80 w-60 " />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About2;
