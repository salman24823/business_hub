"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { MonitorCheck, PencilRuler } from "lucide-react";

const HeroSection = () => {
  const typedRef = useRef(null);

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
    <main className="w-full">
      <div className="hero_section w-full h-[130vh] bg-[url(/slider1.jpg)] bg-cover bg-no-repeat">
        <div className="filter w-full h-[100%] px-[5%] py-[7%] flex flex-col justify-end gap-12">
          {/* hero-text */}
          <div className="hero_box py-[3%] px-4 nav_back w-[60%]">
            <span className="text-2xl font-semibold text-white yellow">
              BusinessHub Co-working Space
            </span>
            <h1 className="main_heading">THE SPACE FOR</h1>
            <h1 className="main_heading text-yellow-400">
              <span ref={typedRef}></span>{" "}
            </h1>
          </div>
          {/* hero-icons */}
          <div className="hero_boxes flex w-[60%]">
            <div className="hero_card flex text-white">
              <div className="hero_card_img p-5 blue_bg">
                <MonitorCheck className="w-12 h-12 yellow" />
              </div>
              <div className="hero_card_cont px-4 flex flex-col justify-center gap-1">
                <span className="text-3xl font-bold">IT Start Up</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="hero_card flex text-white">
              <div className="hero_card_img p-5 yellow-bg">
                <PencilRuler className="w-12 h-12 blue" />
              </div>
              <div className="hero_card_cont px-4 flex flex-col justify-center gap-1">
                <span className="text-3xl font-bold">Creative Studio</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
