"use client";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import ServicesCards from "../ServeiceCrads/page";
import { Spinner } from "@heroui/react";

const HeroSection = () => {
  const typedRef = useRef(null);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  useEffect(() => {

    const typed = new Typed(typedRef.current, {
      strings: ["IMMAGINATION", "CREATIVITY", "WORKING"],
      typeSpeed: 80,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };

  }, []);

  return (
    <main className="w-full relative">
      {
        loading ?

          <div className="w-full h-screen flex justify-center bg-[#00000099] items-center">
            <div className="flex flex-col gap-2 justify-center items-center text-center">
              <Spinner color="white" size="lg" />
              <p className="text-white">Loading...</p>
            </div>
          </div>

          :
          ""
      }
      <div className="hero_section w-full h-[100vh] md:h-[110vh] bg-[url(/m9.jpg)] bg-cover bg-no-repeat">
        <div className="filter w-full h-[100%] px-[5%] py-[7%] flex flex-col justify-end gap-24">
          {/* hero-text */}
          <div className="hero_box py-[3%] px-4 nav_back w-full lg:w-[60%]">
            <span className="text-2xl font-semibold text-white yellow">
              BusinessHub Co-working Space
            </span>
            <h1 className="main_heading">THE SPACE FOR</h1>
            <h1 className="main_heading text-yellow-400">
              <span ref={typedRef}></span>{" "}
            </h1>
          </div>
          {/* hero-icons */}
          <div>

          </div>
          <div className="hero_boxes flex  flex-wrap gap-10 md:gap-0 md:flex-nowrap ">
            <ServicesCards />
            {/* <div className="hero_card flex text-white">
            <div className="hero_card_img p-5 blue_bg">
              <MonitorCheck className="w-12 h-12 yellow" />
            </div>
            <div className="hero_card_cont px-4 flex flex-col justify-center gap-1">
              <span className="text-2xl font-bold">IT Start Up</span>
              <p>An ideal place to grow your business or startup.</p>
            </div>
          </div> */}
            {/* <div className="hero_card flex text-white">
            <div className="hero_card_img p-5 yellow-bg">
              <PencilRuler className="w-12 h-12 blue" />
            </div>
            <div className="hero_card_cont px-4 flex flex-col justify-center gap-1">
              <span className="text-2xl font-bold">Creative Studio</span>
              <p>Perfect place to build your creative studio.</p>
            </div>
          </div> */}
          </div>
        </div>
      </div>

    </main>
  );
};

export default HeroSection;
