import { SquareCheckBig } from "lucide-react";
import React from "react";
import Image from "next/image";
import about_img1 from '../../../../public/about.jpg';
import about_img2 from '../../../../public/about2.jpg'
const About2 = () => {
  return (
    <main className="px-[5%]">
      <div className="grid grid-cols-2 justify-center items-center gap-10">
        <div className="my-20">
          <p className="text-[#f9d229]">WHY CHOOSE US?</p>
          <h2 className="sub_heading">The Explanation You Mustly Use Us</h2>
          <p className="w-3/4">
            We provide you with the state of the art offices and facilities of
            the 24/7 Electricity and Security Services Coworkspace is the
            concept of working together in the team and helping eachothers in
            the team
          </p>
          <div className="flex gap-3 mt-6">
            <div className="flex gap-2">
              <SquareCheckBig />
              Modern & Comfartable
            </div>
            <div className="flex gap-2">
              <SquareCheckBig />
              Customize Space
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <div className="flex gap-2">
              <SquareCheckBig />
              Saving your time
            </div>
            <div className="flex gap-2">
              <SquareCheckBig />
              Parking Area
            </div>
          </div>
          <button className="bg-[#f9d229] px-12 py-2 rounded-lg mt-10">
            Explore
          </button>
        </div>
        <div className=" flex gap-3 my-20">
          <Image src={about_img1} className="w-80 h-[32rem]" />
          <Image src={about_img2} className="h-80 w-60 mt-32"/>
        </div>
      </div>
    </main>
  );
};

export default About2;
