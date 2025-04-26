"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; // Assuming you're using Next.js
import { LuBadgeCheck, LuLeaf, LuPaintBucket } from "react-icons/lu";
import { RiColorFilterAiLine } from "react-icons/ri";
import { IoKeyOutline } from "react-icons/io5";
import { TbBusinessplan, TbDeviceDesktopCode } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesCards = () => {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -70; // Adjust this if you have a fixed header
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop + offset,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (id) => {
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        setTimeout(() => {
          scrollToSection(id);
        }, 300);
      }
    }
  }, [pathname]);

  return (
    <main
      id="services"
      className="Main_cnt sections w-full flex flex-col items-center gap-7 absolute left-0 top-[90%] px-[8%] big_screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        <div
          onClick={() => handleScroll("service")}
          className="relative cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="service_cardss h-full duration-500 flex flex-col justify-center items-center p-6 gap-5 green">
            <IoKeyOutline className="yellow size-14" />
            <span className="text-2xl font-bold">Rental Services</span>
            <p className="text-center text-base">
              Flexible rental services with open spaces, premium offices, and
              regular office setups to suit your business needs.
            </p>
          </div>
        </div>
        <div
          onClick={() => handleScroll("IT-service")}
          className="relative cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="flex flex-col duration-500 justify-center items-center service_cardss h-full p-5 gap-5 green">
            <TbDeviceDesktopCode className="yellow size-14" />
            <span className="text-2xl font-bold">IT Services</span>
            <p className="text-center text-base">
              Expert IT services including web development, mobile app
              development, graphic design, e-commerce and other solutions to
              elevate your business.
            </p>
          </div>
        </div>
        <div
          onClick={() => handleScroll("bussiness")}
          className="relative cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="flex flex-col duration-500 justify-center items-center service_cardss h-full p-5 gap-5 green">
            <TbBusinessplan className="yellow size-14" />
            <span className="text-2xl font-bold">Business Start Up</span>
            <p className="text-center text-base">
              Helping entrepreneurs turn ideas into reality with the right
              resources, assets, and guidance for a successful startup.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesCards;
