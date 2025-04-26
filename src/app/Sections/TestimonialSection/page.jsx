"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { toast } from "react-toastify";
import { Button } from "@heroui/react";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/handleTestimonials", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      if (response.ok) {
        setData(result.data); // <-- Correct here
      } else {
        toast.error(result.message || "Failed to fetch Reviews");
      }
    } catch (error) {
      toast.error("Not able to show data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="w-full overflow-hidden p-[5%] big_screen">
      <div className="testimonial_sec grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-20 w-full">
        {/* Left Side - Testimonials */}
        <div className="test_sec_1 col-span-1 md:col-span-6 lg:col-span-7 py-[5%]">
          <Slider {...settings} className="relative">
            {data.length > 0 ? (
              data.map((d) => (
                <div key={d._id} className="testimonial-card relative h-full">
                  <div className="testimonial-para relative flex flex-col items-center p-5">
                    <p className="text-center">{d.message}</p>
                  </div>
                  <div className="test_data flex flex-col w-full items-center relative">
                    <div className="test_img relative bottom-10 w-full h-48 overflow-hidden">
                      <img
                        src={d.image}
                        alt={d.name}
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="blue text-[1.6rem] font-semibold relative bottom-10">
                      {d.name}
                    </span>
                    <span className="yellow relative bottom-10">{d.role}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center w-full">No testimonials available</p>
            )}
          </Slider>
        </div>

        {/* Right Side - Explore more */}
        <div className="test_sec_2 col-span-1 md:col-span-6 lg:col-span-5 p-[5%]">
          <div className="space-y-6">
            <h1 className="sub_heading">
              CUSTOMER <span className="yellow">TESTIMONIAL</span>
            </h1>
            <p className="para">
              &quot;See what our satisfied clients have to say about their
              experience with us. Real feedback from businesses that found their
              perfect workspace!&quot;
            </p>
            {/* <Button className="yellow-bg abt_btn p-8 font-bold rounded-lg text-white">
              Explore more
            </Button> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestimonialSection;
