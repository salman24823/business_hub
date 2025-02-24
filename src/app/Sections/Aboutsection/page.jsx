import React from "react";
import Image from "next/image";
import ceo from "../../../../public/ceo.jpg";
import about_img from "../../../../public/about.png";
import { GlobeLock, Users } from "lucide-react";
const AboutSection = () => {
  return (
    <main className="px-[5%]">
      <div className="grid grid-cols-2 justify-center items-center gap-8">
        <div className="my-20">
          <Image src={about_img} className="mt-24" />
        </div>
        <div className=" my-20">
          <p className="text-[#f9d229]">WHO WE ARE?</p>
          <h2 className="sub_heading">Right Space to meet your requirments</h2>
          <p className="w-3/4">
            Workspace talk to the grouping of home windows for your computer
            device You can create more than one workspaces,which act like
            digital desktops Workspace are supposed to lessen litter and make
            the computing device simpler to navigate.
          </p>
          {/* partation */}
          <div className="mt-8 flex gap-8">
            <div className="flex gap-2">
              <GlobeLock />
              <p>Flexiable Private Offices</p>
            </div>
            <div className="flex gap-2">
              <Users />
              <p>Fully Custom Spaces</p>
            </div>
          </div>
          {/* stats */}
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <p>Creative space</p>
              <p>70%</p>
            </div>
            <div className="h-2 w-[100%] bg-gray-500 rounded">
              <div className="h-2 w-[70%] bg-yellow-500 rounded"></div>
            </div>
          </div>
          <div className="flex gap-6 mt-12">
            <Image src={ceo} className="w-16 h-16 rounded-full" alt="ceo" />
            <div className="flex flex-col ">
              <p>Co-Founder</p>
              <p className="font-bold">M Malik</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutSection;
