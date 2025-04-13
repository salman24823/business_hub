"use client"; // Add this at the top of the file to make this a client-side component

import { Button } from "@heroui/react";
import React, { useEffect } from "react";
import gsap from "gsap";
import Form from "../Sections/Form/page";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const premiumoffices = () => {
  const Edata = [
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/v2.JPG",
      buttonText: "Book Now"
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/v2.JPG",
      buttonText: "Book Now"
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/v2.JPG",
      buttonText: "Book Now"
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/v2.JPG",
      buttonText: "Book Now"
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/v2.JPG",
      buttonText: "Book Now"
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/v2.JPG",
      buttonText: "Book Now"
    },
    {
      name: "",
      discription:
        "",
      source: "",
      buttonText: ""
    }
  ];

  useEffect(() => {
    const components = document.querySelectorAll(".components");
    const container = document.getElementById("container");

    if (components.length && container) {
      // Calculate total width of all components
      const totalWidth = Array.from(components).reduce(
        (sum, comp) => sum + comp.offsetWidth,
        0
      );

      // Calculate how much we need to scroll (total width - container width)
      const scrollDistance = totalWidth - container.offsetWidth;

      gsap.to(components, {
        x: () => -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  return (
    <section>
      <div className="w-full h-[100vh] bg-[url(/E-1.JPG)] bg-cover bg-no-repeat ">
        <div className="filter p-[5%] w-full h-full flex items-center">
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
              <Button className="rounded-md yellow-bg font-bold text-whi">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        id='container'
        className="w-full bg-white flex flex-col">

        <div 
        
        className="sub_heading p-[5%]">
          <span className="yellow">Premium</span> Offices
        </div>

        <div className="  w-full">

          <div
            className="flex gap-4 overflow-x-hidden border-gray-300 border-t px-[5%]"
          >

            {Edata.map((data, index) => (
              <div
                key={index}
                className="components flex-shrink-0 flex flex-col items-center bg-white overflow-hidden p-8 border-gray-300 border-r"
                style={{ width: "calc(33.333% - 16px)" }} // Exactly 1/3 of container width minus gap
              >
                <div className="">
                  <img
                    className="w-full h-auto rounded-sm"
                    src={data.source || "/placeholder.svg"}
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-3 rounded-sm p-3">
                  <strong className="font-bold text-xl">{data.name}</strong>
                  <p className="para text-sm">{data.discription}</p>
                  {
                    data.buttonText !== "" ?

                      <Button className="yellow-bg text-white p-3 px-6 font-bold w-full rounded-sm">
                        {data.buttonText}
                      </Button>
                      :
                      ""
                  }
                </div>
              </div>
            ))}

            {/* <div className="components w-40 h-auto">ASD</div> */}

          </div>
        </div>
      </div>

      <Form />
    </section>
  );
};

export default premiumoffices;
