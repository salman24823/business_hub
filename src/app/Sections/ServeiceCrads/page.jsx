"use client";

import React, { useEffect } from "react";
import { LuBadgeCheck, LuLeaf, LuPaintBucket } from "react-icons/lu";
import { RiColorFilterAiLine } from "react-icons/ri";
import { IoKeyOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import { TbBusinessplan, TbDeviceDesktopCode } from "react-icons/tb";

const ServicesCards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main
      id="services"
      className="Main_cnt sections  w-full flex flex-col items-center gap-7 absolute left-0 top-[90%] px-[8%] big_screen"
    >
      {/* <h2 className='sub_heading flex gap-2' data-aos="fade-up">Our Services</h2> */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 w-full ">
        <div className="relative" data-aos="zoom-in" data-aos-delay="300">
          <div className="service_cardss h-full duration-500 flex flex-col justify-center items-center p-6 gap-5 green">
            <IoKeyOutline className="yellow size-14" />
            <span className=" text-2xl font-bold">Rental Services</span>
            <p className="text-center  text-base">
              Flexible rental services with open spaces, premium offices, and
              regular office setups to suit your business needs.
            </p>
          </div>
        </div>
        <div className="relative" data-aos="zoom-in" data-aos-delay="400">
          <div className="flex flex-col  duration-500 justify-center items-center service_cardss h-full p-5 gap-5 green">
            <TbDeviceDesktopCode className="yellow size-14" />
            <span className=" text-2xl font-bold">IT Services</span>
            <p className="text-center  text-base">
              Expert IT services including web development, mobile app
              development, graphic design, e-commerce and others solutions to
              elevate your business.
            </p>
          </div>
        </div>
        <div className="relative" data-aos="zoom-in" data-aos-delay="500">
          <div className="flex flex-col  duration-500 justify-center items-center service_cardss h-full p-5 gap-5 green">
            <TbBusinessplan className="yellow size-14" />
            <span className=" text-2xl font-bold">Business Start Up</span>
            <p className="text-center  text-base">
              Helping entrepreneurs turn ideas into reality with the right
              resources, assets, and guidance for a successful startup.
            </p>
          </div>
        </div>
        {/* <div className='relative'  data-aos="zoom-in" data-aos-delay="600">
          <div className='flex flex-col  duration-500 justify-center items-center service_cardss h-full p-5 gap-5 green'>
            <LuBadgeCheck className='blue size-14' />
            <span className=' text-2xl font-bold'>Trusted Supplier</span>
            <p className='text-center  text-base'>We have an efficient supply-chain management.</p>
          </div>
        </div> */}
      </div>
    </main>
  );
};

export default ServicesCards;
