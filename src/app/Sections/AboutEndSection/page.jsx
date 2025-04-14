"use client";
import { Building2, HandCoins, Wifi } from "lucide-react";
import React, { useEffect, useState } from "react";
import { PiHandCoinsBold } from "react-icons/pi";

const AboutEndSection = () => {
  const features = [
    {
      icon: <PiHandCoinsBold className="w-16 h-16 blue" />,
      title: "Competitive Price",
      description:
        "We offer the most competitive rental prices in the market, ensuring affordability without compromising on quality.",
    },
    {
      icon: <Wifi className="w-16 h-16 blue" />,
      title: "Best Connection",
      description:
        "Our properties provide high-speed internet and seamless connectivity to keep your business running smoothly.",
    },
    {
      icon: <Building2 className="w-16 h-16 blue" />,
      title: "Large Buildings",
      description:
        "Spacious and well-structured buildings that cater to the needs of IT startups and growing businesses.",
    },
  ];

  const stats = [
    { label: "Services", percentage: 90, width: "w-[90%]" },
    { label: "Offices", percentage: 70, width: "w-[70%]" },
    { label: "Hospitality", percentage: 99, width: "w-[97%]" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((count, i) =>
          count < stats[i].percentage ? count + 1 : count
        )
      );
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-[5%] w-full space-y-10">
      {/* upper-div */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
        {features.map((feature, index) => (
          <div className="space-y-2 flex flex-col items-center" key={index}>
            {feature.icon}
            <span className="point yellow">{feature.title}</span>
            <p className="para">{feature.description}</p>
          </div>
        ))}
      </div>
      <hr className="w-full hidden md:block" />
      {/* lower-div */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* left-side */}
        <div className="space-y-5">
          <p className="text-xl yellow font-bold">Book a Place today!</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl blue font-bold">
            Giving You The Best Services
          </h2>
          <p className="para">
            We provide top-quality services tailored to your needs, ensuring
            reliability, efficiency, and satisfaction. Our commitment to
            excellence guarantees the best experience for businesses and
            individuals alike. Your success is our priority.
          </p>
        </div>
        {/* right-side */}
        <div className="flex flex-col justify-center items-center space-y-6 w-full">
          {stats.map((stat, index) => (
            <div className="w-full" key={index}>
              <div className="flex justify-between w-full">
                <p className="text-lg">{stat.label}</p>
                <p className="text-lg">{counters[index]}%</p>
              </div>
              <div className="w-full h-3 rounded-full yellow-bg">
                <div
                  className={`${stat.width} h-3 rounded-full blue_bg`}
                  style={{ width: `${counters[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutEndSection;
