import React from "react";
import Image from "next/image";
import ceo from "../../../../public/ceo.jpg";
import about_img from "../../../../public/about.png";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { PiOfficeChairFill } from "react-icons/pi";
import { Button } from "@heroui/react";

const AboutSection = () => {
  return (
    <section>
    <div className="about p-[5%] w-full">
      <div className="ybh w-full">
        <h2 className="ybh_h text-9xl font-bold text-white">
          Business Hub...
        </h2>
      </div>
      <div className="about_child_2 flex flex-col gap-5  pt-[5%]">
        <span className="point yellow">About Us</span>
      <div className="w-full pl-[5%]  flex gap-10">
        <h2 className="main_blue upper">Build and Inspire <br /> Your <span className="yellow">Business</span>with <br /> <span className="">Business Hub.</span></h2>
        <div className="arrow_box relative">
        <img src="/arrow.png" alt="" className="relative top-14 arrow w-48"/>
        </div>
      </div>
      </div>
      <div className="about_3rd_child w-full grid grid-cols-2 gap-20 py-[2%]">
        <div className="abt_img  h-[80vh]  bg-cover bg-no-repeat bg-left rounded-lg overflow-hidden">
          <img src="/ceo.png" alt="" className="w-full h-[100%" />
        </div>
        <div className="col-span-1 flex items-end">
        <div className="h-[100%] p-[5%] flex items-end ">
          <div className="w-full flex flex-col gap-8">
            <span className="point yellow blue uppercase">All in one hub</span>
            <span className="blue font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sequi numquam delectus accusamus quidem quo.</span>
            <p className="para w-[100%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolor aspernatur adipisci tempore quos soluta dolore fugiat cumque eius quasi. Nihil, ea eaque ab labore nisi sequi amet aut omnis?</p>
            <div>
            <Button className="yellow-bg abt_btn  p-8 font-bold rounded-lg text-white">Contact Us</Button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
    // <main className="p-[5%] relative">
    //   {/* left-side */}
    //   <div className="grid grid-cols-2 justify-center items-center gap-10 relative">
    //     <div className="relative flex">
    //       <div className="absolute w-[150px] h-[150px]  place-self-end flex flex-wrap ">
    //         <div className="bg-transparent w-[50%] h-[50%]"></div>
    //         <div className="yellow-bg w-[50%] h-[50%]"></div>
    //         <div className="bg-white w-[50%] h-[50%]"></div>
    //         <div className="bg-transparent w-[50%] h-[50%]"></div>
    //       </div>
    //       <Image src={about_img} className="" />
    //     </div>
    //     {/* Right-side */}
    //     <div className="">
    //       <div>
    //         <span className="point yellow">WHO WE ARE?</span>
    //         <h2 className="sub_blue">Right Space to meet your requirments</h2>
    //       </div>
    //       {/* paragraph-section */}
    //       <div className="mt-6">
    //         <p className="para w-3/4">
    //           Workspace talk to the grouping of home windows for your computer
    //           device You can create more than one workspaces,which act like
    //           digital desktops Workspace are supposed to lessen litter and make
    //           the computing device simpler to navigate.
    //         </p>
    //       </div>
    //       {/* partation */}
    //       <div className="mt-8 flex gap-8">
    //         <div className="flex gap-2">
    //           <HiMiniBuildingOffice2 className="blue text-2xl" />
    //           <span className="point">Flexiable Private Offices</span>
    //         </div>
    //         <div className="flex gap-2">
    //           <PiOfficeChairFill className="blue text-2xl" />
    //           <span className="point">Fully Custom Spaces</span>
    //         </div>
    //       </div>
    //       {/* stats */}
    //       <div className="mt-8">
    //         <div className="flex justify-between mb-2">
    //           <span className="point">Creative space</span>
    //           <span className="point">70%</span>
    //         </div>
    //         {/* yellow-line */}
    //         <div className="h-2 w-[100%] yellow-bg rounded">
    //           <div className="blue_bg h-2 w-[70%]  rounded"></div>
    //         </div>
    //       </div>
    //       {/* ceo-intro-div */}
    //       <div className="flex gap-6 mt-12">
    //         <Image src={ceo} className="w-16 h-16 rounded-full" alt="ceo" />
    //         <div className="flex flex-col ">
    //           <p className="font-bold">Muhammad</p>
    //           <p>Co-Founder</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
};

export default AboutSection;
