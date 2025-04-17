import React from "react";
import { Button } from "@heroui/react";

const VisionSection = () => {
  return (
    <main className="p-[5%] w-full big_screen">    
        {/* Right-side (Text Content) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-3">
          <span className="point yellow">Our Vision</span>
          <h2 className="sub_heading blue">One Space for Everyone&apos;s Needs</h2>
          <p className="text-gray-600">
            We provide dynamic, fully equipped workspaces designed to foster
            innovation, collaboration, and productivity. Our modern office
            solutions cater to freelancers, startups, growing teams, and
            established enterprises, offering an environment that enhances
            creativity and efficiency. With state-of-the-art amenities,
            high-speed internet, ergonomic furniture, and fully serviced meeting
            rooms, our workspaces are tailored to support your business needs.
            Whether you&apos;re looking for a private office, a shared coworking
            space, or a dedicated desk, we offer flexible plans that adapt to
            your evolving requirements.
          </p>
          <Button className="web-btn bg-yellow-500 text-white px-6 py-2 rounded-lg">
            Read More
          </Button>
        </div>
    </main>
  );
};

export default VisionSection;
