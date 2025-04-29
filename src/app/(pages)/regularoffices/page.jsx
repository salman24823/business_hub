"use client";

import { Button } from "@heroui/react";
import React, { useEffect } from "react";
import gsap from "gsap";
import Form from "../../Sections/Form/page";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const offset = -70; // adjust this based on your header height
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop + offset,
      behavior: "smooth",
    });
  }
};

const RegularOffices = () => {
  const Edata = [
    {
      name: "Single Person Office",
      discription:
        "A private, fully equipped workspace designed for individual professionals seeking focus, comfort, and productivity daily.",
      source: "/pic-5.jpg",
      buttonText: "Book Now",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Ideal for small teams, these offices offer a collaborative, private space to work efficiently together.",
      source: "/3_person.jpg",
      buttonText: "Book Now",
    },
    {
      name: "Three-Five Person Offices",
      discription:
        "Perfect for growing teams, these offices provide a spacious, productive environment with essential amenities included.",
      source: "/5_person.jpg",
      buttonText: "Book Now",
    },
    {
      name: "Five-Eight Person Offices",
      discription:
        "Designed for mid-sized teams, these offices offer ample space, comfort, and all necessary work essentials.",
      source: "/8_person.jpg",
      buttonText: "Book Now",
    },
    {
      name: "P2 Open Spaces",
      discription:
        "Collaborative open workspace on P2 floor, ideal for dynamic teams needing flexibility, creativity, and connectivity.",
      source: "/open_1.JPG",
      buttonText: "Book Now",
    },
    {
      name: "",
      discription: "",
      source: "",
      buttonText: "",
    },
  ];

  useEffect(() => {
    const components = document.querySelectorAll(".components");
    const container = document.getElementById("container");

    if (components.length && container) {
      const totalWidth = Array.from(components).reduce(
        (sum, comp) => sum + comp.offsetWidth,
        0
      );

      const scrollDistance = totalWidth - container.offsetWidth;

      gsap.to(components, {
        x: () => -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <section>
      <div className="w-full h-[100vh] bg-hero-mobile bg-hero-desktop bg-cover bg-no-repeat p_hero_section">
        <div className="filter p-[5%] big_screen w-full h-full flex items-center">
          <div className="flex flex-col gap-4">
            <h1 className="main_heading">
              <span className="yellow">Regular</span> Offices
            </h1>
            <p className="text-white p2para">
              The Regular office at Businesshub Workspace is a collaborative
              space designed for freelancers and small teams, offering a
              productive environment for 5-6 people to work seamlessly together.
            </p>
            <div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="rounded-md yellow-bg font-bold text-whi"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div id="container" className="w-full bg-white flex flex-col">
        <div className="sub_heading px-[5%] big_screen py-[3%]">
          <span className="yellow">Regular</span> Offices
        </div>

        <div className="w-full premium-desktop">
          <div className="flex gap-4 overflow-x-hidden border-t border-gray-300 px-[5%] big_screen">
            {Edata.map((data, index) => (
              <div
                key={index}
                className="Gsap-com components flex-shrink-0 flex flex-col items-center bg-white overflow-hidden p-8 border-gray-300 border-r"
                // style={{ width: "calc(33.333% - 16px)" }}
              >
                {/* 👇 Proper Image Wrapper */}
                {data.source !== "" && (
                  <div className="relative w-full h-52">
                    <Image
                      src={data.source || "/placeholder.svg"}
                      alt=""
                      fill
                      className="object-cover rounded-sm"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-3 rounded-sm p-3">
                  <strong className="font-bold text-xl">{data.name}</strong>
                  <p className="para text-sm">{data.discription}</p>
                  {data.buttonText !== "" && (
                    <Button
                      className="yellow-bg text-white p-3 px-6 font-bold w-full rounded-sm"
                      onClick={() => scrollToSection("contact")}
                    >
                      {data.buttonText}
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
         <div className="premium-mobile md:hidden">
                  {Edata.map((data, index) => (
                    <div key={index} className="flex flex-col p-[5%]">
                      {data.source !== "" && (
                        <div className="relative w-full h-52">
                          <Image
                            src={data.source || "/placeholder.svg"}
                            alt=""
                            fill
                            className="object-cover rounded-sm"
                          />
                        </div>
                      )}
        
                      <div className="flex flex-col gap-3 rounded-sm p-3">
                        <strong className="font-bold text-xl">{data.name}</strong>
                        <p className="para text-sm">{data.discription}</p>
                        {data.buttonText !== "" && (
                          <Button
                            onClick={() => scrollToSection("contact")}
                            className="yellow-bg text-white p-3 px-6 font-bold w-full rounded-sm"
                          >
                            {data.buttonText}
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
      </div>

      <Form />
    </section>
  );
};

export default RegularOffices;
