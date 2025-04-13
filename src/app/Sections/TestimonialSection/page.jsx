"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import ceo from "../../../../public/review2.JPG";
import test2 from "../../../../public/test2.jpg";
import test3 from "../../../../public/review3.JPG";
import test4 from "../../../../public/review1.JPG";
import { Button } from "@heroui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: 1,
    name: "Ayesha",
    work: "Content Writer",
    image: ceo,
    text: "Fantastic office space with great amenities! The environment is professional and perfect for growing businesses.",
  },
  {
    id: 2,
    name: "Jane Doe",
    work: "Marketing Manager",
    image: test2,
    text: "Excellent facilities and supportive staff. The furnished offices and meeting rooms exceeded my expectations!",
  },
  {
    id: 3,
    name: "Maria Ashfaq",
    work: "Digital Marketing",
    image: test3,
    text: "Highly secure and well-maintained workspace. The café and office services make workdays smooth and productive.",
  },
  {
    id: 4,
    name: "M.Imran",
    work: "Bussinessman",
    image: test4,
    text: "Perfect location with top-notch facilities. The conference room and office services make business operations seamless.",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 768px (typically tablets or mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide instead of 2 on smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <main className="w-full overflow-hidden p-[5%]">
      <div className="testimonial_sec grid  grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-20 w-full">
        <div className="test_sec_1 col-span-1 md:col-span-6 lg:col-span-7 py-[5%]">
          <Slider {...settings} className="relative">
            {data.map((d) => (
              <div key={d.id} className="testimonial-card relative h-full">
                <div className="testimonial-para relative flex flex-col items-center p-5">
                  <p className="text-center">{d.text}</p>
                </div>
                <div className="test_data flex flex-col w-full items-center relative">
                  <div className="test_img relative bottom-10 w-full h-48 overflow-hidden">
                    <Image
                      src={d.image}
                      className="object-cover w-full h-full"
                      alt={d.name}
                    />
                  </div>
                  <span className="blue text-[1.6rem] font-semibold relative bottom-10">
                    {d.name}
                  </span>
                  <span className="yellow relative bottom-10">{d.work}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Right-side */}
        <div className="test_sec_2 col-span-1 md:col-span-6 lg:col-span-5 p-[5%]">
          <div className="space-y-6">
            <h1 className="sub_heading">
              CUSTOMER <span className="yellow">TESTIMONIAL</span>
            </h1>
            <p className="para">
              &quot;See what our satisfied clients have to say about their experience
              with us. Real feedback from businesses that found their perfect
              workspace!&quot;
            </p>
            <Button className="yellow-bg abt_btn p-8 font-bold rounded-lg text-white">
              Explore more
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestimonialSection;
