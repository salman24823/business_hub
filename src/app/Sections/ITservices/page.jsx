"use client"

import { useState } from "react";
import { Building2, Cctv, CheckCircle, Code, House, Palette, PenTool, Podcast, Presentation, Projector, ShoppingCart, Users, Wifi } from "lucide-react";
import React from "react";
import { TbSettingsSearch } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdMobileFriendly } from "react-icons/md";
import { FaPaintBrush, FaShoppingBag } from "react-icons/fa";

const ITservices = () => {
   const features = [
    {
      id: 1,
      icon: <Code className="blue w-12 h-12" />,
      title: "Web Development",
      description: "We are providing High speed internet for 24/7 for private",
    },
    {
      id: 2,
      icon: <TbSettingsSearch className="blue w-12 h-12" />,
      title: "SEO",
      description: "There are six floors in the building, which are accessible by elevator.",
    },
    {
      id: 3,
      icon: <RiAdvertisementFill className="blue w-12 h-12" />,
      title: "Social Media Markiting",
      description: "Spacious conference room available for meetings and events.",
    },
    {
      id: 4,
      icon: <MdMobileFriendly className="blue w-12 h-12" />,
      title: "App Development",
      description: "Move-in ready offices with premium furniture and amenities.",
    },
    {
      id: 5,
      icon: <FaShoppingBag  className="blue w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Advanced CCTV system ensuring a safe environment.",
    },
    {
      id: 6,
      icon: <FaPaintBrush className="blue w-12 h-12" />,
      title: "Graphics and Ui/Ux Designing",
      description: "Well-equipped meeting rooms for productive discussions.",
    },
    {
      id: 7,
      icon: <PenTool className="blue w-12 h-12" />,
      title: "Video Editing",
      description: "Well-equipped meeting rooms for productive discussions.",
    },
  
   ];

  return (
    <main className="p-[5%]">
    {/* main-div */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-2 gap-5">
      {/* Feature Cards */}
      {features.map(({ id, icon, title, description }) => (
        <div key={id} className="vision_img itservices_card sm:col-span-1 flex flex-col justify-between">
          <div className="yellow-bg w-20 h-20 p-3 rounded-[50%] flex justify-center items-center"><span>{icon}</span></div>
          <span className="text-[1.2rem] text-center font-bold text-white">{title}</span>
          {/* <p className="para text-center">{description}</p> */}
        </div>
      ))}
    </div>
  </main>
    // <div className="brown_bg bg-center bg-no-repeat bg-cover bgImage">
    

    //   <div className="w-full">
    //     <div className=" w-full grid grid-cols-3 max-[770px]:grid-cols-1 flex-nowrap max-[770px]:px-[5%] px-[5%] gap-4 justify-center py-10">
    //       {services.map((service) => (
    //         <div
    //           key={service.id}
    //           className="group hover:border-t-5 services_card hover:border-[#d08b5d]  shadow-lg relative cursor-pointer overflow-hidden bg-[#8a5a30] p-5  ring-gray-900/5 transition-all duration-500 hover:-translate-y-5 rounded-2xl"
    //         >
    //           {/* Hover Bg */}
    //           <span className="absolute top-5 z-0 h-20 w-20 rounded-full bg-[#946134] transition-all duration-500 group-hover:scale-[18]"></span>

    //           <div className="relative z-10">
    //             <div className="grid h-20 w-20 place-items-center rounded-full bg-[#a16c3d] transition-all duration-500 group-hover:bg-[#d08b5d]">
    //               {service.icon}
    //             </div>

    //             <div className="space-y-6  text-base leading-7 text-gray-100 transition-all duration-300 group-hover:text-white/90">
    //               <p>{service.description}</p>
    //             </div>

    //             <div className="pt-5 text-xl font-semibold leading-7">
    //               <p>
    //                 <a
    //                   href="#"
    //                   className="text-white transition-all duration-300 group-hover:text-white"
    //                 >
    //                   {service.title}
    //                 </a>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    // </div>
  );
};

export default ITservices;
