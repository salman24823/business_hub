import React from "react";
import Image from "next/image";
import v1 from "../../../../public/vision1.JPG";
import v2 from "../../../../public/vision2.jpg";
import v3 from "../../../../public/vision3.jpg";
import v4 from "../../../../public/review2.jpg";
import { Button } from "@heroui/react";

const VisionSection = () => {
  return (
    <main className="p-[5%] w-full">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        {/* Left-side (Images Grid) */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 w-full lg:w-1/2">
          <div className="col-span-1 row-span-1">
            <Image
              src={v1}
              className="w-full h-auto"
              alt="Vision 1"
            />
          </div>
          <div className="col-span-2 row-span-1">
            <Image
              src={v2}
              className="w-full h-full"
              alt="Vision 2"
            />
          </div>
          <div className="col-span-2 row-span-1">
            <Image
              src={v3}
              className="w-full h-full"
              alt="Vision 3"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <Image
              src={v4}
              className="w-full h-auto"
              alt="Vision 4"
            />
          </div>
        </div>

        {/* Right-side (Text Content) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-3">
          <span className="point yellow">Our Vision</span>
          <h2 className="sub_heading blue">One Space for Everyone's Needs</h2>
          <p className="text-gray-600">
            We provide dynamic, fully equipped workspaces designed to foster
            innovation, collaboration, and productivity. Our modern office
            solutions cater to freelancers, startups, growing teams, and
            established enterprises, offering an environment that enhances
            creativity and efficiency. With state-of-the-art amenities,
            high-speed internet, ergonomic furniture, and fully serviced meeting
            rooms, our workspaces are tailored to support your business needs.
            Whether you're looking for a private office, a shared coworking
            space, or a dedicated desk, we offer flexible plans that adapt to
            your evolving requirements.
          </p>
          <Button className="web-btn bg-yellow-500 text-white px-6 py-2 rounded-lg">
            Read More
          </Button>
        </div>
      </div>
    </main>
  );
};

export default VisionSection;
