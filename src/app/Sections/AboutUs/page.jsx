"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { HouseWifi, Projector, Building2, Cctv, MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@heroui/react";
import abt_img from "../../../../public/lvl.JPG";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 6000;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [target]);

  return <h2 className="sub_blue">{count}</h2>;
};

const AboutUs = () => {
  return (
    <div className="p-6 md:p-[5%]">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        
        {/* Left-side */}
        <div className="text-center lg:text-left order-1 lg:order-none">
          <span className="yellow point">About Us</span>
          <h2 className="sub_blue">LEVELING UP YOUR CREATIVE MIND</h2>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem temporibus repudiandae culpa minus est aut provident dolore adipisci facilis ea quos eos sit accusamus modi commodi tenetur, distinctio qui rem!
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 my-10">
            {[
              { icon: HouseWifi, label: "Office Rooms", value: 120 },
              { icon: Projector, label: "Meeting Rooms", value: 80 },
              { icon: Building2, label: "No. of Floors", value: 6 },
              { icon: Cctv, label: "Hours CCTV Security", value: 24 },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <stat.icon className="w-16 h-16 yellow" />
                {typeof stat.value === "number" ? <Counter target={stat.value} /> : <h2 className="sub_blue">{stat.value}</h2>}
                <p className="para">{stat.label}</p>
              </div>
            ))}
          </div>

          <Button className="web-btn yellow-bg rounded-lg text-white">Read more</Button>
        </div>

        {/* Yellow Section for Small Screens (Moved Below Counter Section) */}
        <div className="effect_hover bg-yellow-500 text-white p-4 rounded-lg shadow-lg w-full text-center order-2 lg:hidden">
          <div className="space-y-2">
            <div className="flex justify-center items-center gap-2">
              <MapPin />
              <p className="para">Location: D-Ground, Satiyana Road</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Clock />
              <p className="para">Time: Mon - Sat : 7am - 8pm</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Phone />
              <p className="para">Phone: +92 301 6669681</p>
            </div>
          </div>
        </div>

        {/* Right-side (For Larger Screens) */}
        <div className="relative w-full flex justify-center lg:block">
          <div className="absolute w-[250px] sm:w-[300px] bg-yellow-500 text-white p-4 rounded-lg top-0 right-0 shadow-lg">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin />
                <p className="text-white">Location: D-Ground, Satiyana Road</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock />
                <p className="text-white">Time: Mon - Sat : 7am - 8pm</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone />
                <p className="text-white">Phone: +92 301 6669681</p>
              </div>
            </div>
          </div>
          <Image src={abt_img} className="p-6 md:p-10 w-full max-w-[400px]" alt="About Us Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
