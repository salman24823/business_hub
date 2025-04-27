"use client";

import { Button } from "@heroui/react";
import React, { useEffect } from "react";
import gsap from "gsap";
import Form from '../../Sections/Form/page'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
// import Form from "@/app/Sections/Form/page";

gsap.registerPlugin(ScrollTrigger);

// ✅ Scroll function added here
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
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/premium_1.jpg",
      buttonText: "Book Now",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/premium_2.jpg",
      buttonText: "Book Now",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/premium_3.jpg",
      buttonText: "Book Now",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/premium_4.jpg",
      buttonText: "Book Now",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/v2.JPG",
      buttonText: "Book Now",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/v2.JPG",
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
      <div className="w-full h-[100vh] bg-[url(/pre-1.JPG)] bg-cover bg-no-repeat p_hero_section">
        <div className="filter p-[5%] big_screen w-full h-full flex items-center">
          <div className="flex flex-col gap-4">
            <h1 className="main_heading">
              <span className="yellow">Premium</span> Offices
            </h1>
            <p className="text-white p2para">
              We provide premium office spaces that are fully furnished,
              air-conditioned, and designed with super deluxe amenities to
              ensure a comfortable and professional working environment for our
              customers.
            </p>
            <div>
              {/* ✅ Scroll to Form on click */}
              <Button
                onClick={() => scrollToSection("contact")}
                className="rounded-md yellow-bg font-bold text-white"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div id="container" className="w-full bg-white flex flex-col">
        <div className="sub_heading py-[3%] px-[5%] big_screen">
          <span className="yellow">Premium</span> Offices
        </div>

        <div className="w-full">
          <div className="flex overflow-x-hidden border-gray-300 border-t px-[5%] big_screen">
            {Edata.map((data, index) => (
              <div
                key={index}
                className="Gsap-com components flex-shrink-0 flex flex-col items-center bg-white overflow-hidden p-8 border-gray-300 border-r"
              >
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
      </div>
      <Form />
    </section>
  );
};

export default RegularOffices;
