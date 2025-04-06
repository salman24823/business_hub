"use client";
import React, { useEffect } from "react";
import Image from "next/image";

import { ArrowRight, BarChart3, Building2, Users, Zap } from "lucide-react";
import { Button } from "@heroui/react";
import Vivus from "vivus";

const Mission = () => {
  useEffect(() => {
    const mySvg = new Vivus("mission-svg", {
      type: "delayed",
      duration: 900,
      animTimingFunction: Vivus.EASE_OUT_BOUNCE,
      start: "inViewport",
    });
  }, []);

  return (
    <section className="container mx-auto p-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div id="animated-svg">
          <svg
            id="mission-svg"
            className="stroke-[#f7d02e] stroke-[0.1px]"
            fill="none"
            width="auto"
            height="auto"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.85,21.15l-7-7a.48.48,0,0,0-.7,0L12.5,15.79,8,11.29V9h3v1a.5.5,0,0,0,.5.5h6a.52.52,0,0,0,.45-.27.51.51,0,0,0-.05-.52L16.12,7.25,17.9,4.79A.51.51,0,0,0,18,4.27.52.52,0,0,0,17.5,4H14V2.5a.5.5,0,0,0-.5-.5h-6a.5.5,0,0,0-.5.5v8.79L2.44,15.85A1.52,1.52,0,0,0,2,16.91V20.5A1.5,1.5,0,0,0,3.5,22h18a.5.5,0,0,0,.46-.31A.47.47,0,0,0,21.85,21.15ZM16.52,5,15.1,7a.48.48,0,0,0,0,.58l1.42,2H12V9h1.5a.5.5,0,0,0,.5-.5V5ZM13,8H8V3h5ZM3.5,21a.5.5,0,0,1-.5-.5V16.91a.47.47,0,0,1,.15-.35L7.5,12.21l4.65,4.64L16.29,21Zm14.21,0-4.5-4.5,1.29-1.29L20.29,21Z" />
          </svg>
        </div>
        <div className="space-y-6">
          <div className="point yellow">Our Mission & Vision</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl blue font-bold leading-tight">ALL IN ONE
             <br />
            <span className="yellow"> HUB </span><br />
          </h2>
          <p className="text-gray-700 text-lg max-w-md">
            Empowering entrepreneurs with modern workspaces and resources
            designed for growth, collaboration, and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* <Button className="yellow-bg  text-white font-bold px-8 py-6">
              <span className="sub_point">Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-amber-500 border yellow hover:bg-amber-50 px-8 py-6 font-bold"
            >
              Learn More
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
