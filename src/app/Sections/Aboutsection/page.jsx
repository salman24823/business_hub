import React from "react";
import Image from "next/image";
import ceo from "../../../../public/ceo.jpg";
import about_img from "../../../../public/about.png";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { PiOfficeChairFill } from "react-icons/pi";

const AboutSection = () => {
  return (
    <main className="p-[5%] relative">
      <div className="grid grid-cols-2 justify-center items-center gap-10 relative">
        <div className="relative flex">
          <div className="absolute w-[150px] h-[150px]  place-self-end flex flex-wrap ">
            <div className="bg-transparent w-[50%] h-[50%]"></div>
            <div className="yellow-bg w-[50%] h-[50%]"></div>
            <div className="bg-white w-[50%] h-[50%]"></div>
            <div className="bg-transparent w-[50%] h-[50%]"></div>
          </div>
          <Image src={about_img} className="" />
        </div>
        <div className="">
          <div>
            <span className="point yellow">WHO WE ARE?</span>
            <h2 className="sub_blue">Right Space to meet your requirments</h2>
          </div>
          <div className="mt-6">
            <p className="para w-3/4">
              Workspace talk to the grouping of home windows for your computer
              device You can create more than one workspaces,which act like
              digital desktops Workspace are supposed to lessen litter and make
              the computing device simpler to navigate.
            </p>
          </div>
          {/* partation */}
          <div className="mt-8 flex gap-8">
            <div className="flex gap-2">
              <HiMiniBuildingOffice2 className="blue text-2xl" />
              <span className="point">Flexiable Private Offices</span>
            </div>
            <div className="flex gap-2">
              <PiOfficeChairFill className="blue text-2xl" />
              <span className="point">Fully Custom Spaces</span>
            </div>
          </div>
          {/* stats */}
          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <span className="point">Creative space</span>
              <span className="point">70%</span>
            </div>
            <div className="h-2 w-[100%] yellow-bg rounded">
              <div className="blue_bg h-2 w-[70%]  rounded"></div>
            </div>
          </div>
          <div className="flex gap-6 mt-12">
            <Image src={ceo} className="w-16 h-16 rounded-full" alt="ceo" />
            <div className="flex flex-col ">
              <p className="font-bold">Muhammad</p>
              <p>Co-Founder</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutSection;
