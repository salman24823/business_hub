import Image from "next/image";
import React from "react";
import slider1 from "../../../../public/slider1.jpg";
import slider2 from "../../../../public/slider2.jpg";
import slider3 from "../../../../public/slider3.jpg";
import { Button } from "@heroui/react";
const HeroSection = () => {
  return (
    <main>
      <div className="relative h-screen overflow-hidden">
        <Image
          src={slider1}
          alt="Background 1"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover animate-zoom-fade"
        />
        <Image
          src={slider2}
          alt="Background 2"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover animate-zoom-fade animate-zoom-fade-delay-4"
        />
        <Image
          src={slider3}
          alt="Background 3"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full object-cover animate-zoom-fade animate-zoom-fade-delay-8"
        />
        <div className="absolute hero_back w-full h-[100vh] z-10 flex flex-col justify-center items-center">
          <h1 className="main_heading opacity-[100%]">
            <span className="yellow">Bussiness Hub</span>
          </h1>
          <h2 className="sub_heading text-white opacity-[100%]">
            Coworking Creative Space
          </h2>
          <p className="text-center w-1/2 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            dicta reiciendis facere quae! Possimus beatae excepturi laudantium
            repellat veritatis, odio tempora quae? Ipsum, facere iure? Velit a
            recusandae placeat tempore!
          </p>
          <Button className="web-btn yellow-bg blue mt-10">Explore more</Button>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
