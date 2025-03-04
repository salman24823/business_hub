import React from "react";
import Image from "next/image";
import ceo from "../../../../public/ceo.jpg";
import test2 from "../../../../public/test2.jpg";
import test3 from "../../../../public/test3.jpg";
import test4 from "../../../../public/test4.jpg";
import { Button } from "@heroui/react";

const data = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO",
    image: ceo,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolorum debitis, minima sapiente numquam sequi!",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Marketing Manager",
    image: test2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolorum debitis, minima sapiente numquam sequi!",
  },
  {
    id: 3,
    name: "Mark Johnson",
    title: "Creative Director",
    image: test3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolorum debitis, minima sapiente numquam sequi!",
  },
  {
    id: 4,
    name: "Emily Brown",
    title: "Product Manager",
    image: test4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolorum debitis, minima sapiente numquam sequi!",
  }
];
const TestimonialSection = () => {
  return (
    <main className="p-[5%]">
      <div className="grid grid-cols-12 row-span-1">
        <div className="col-span-6 ">
         
        </div>
        {/* Right-side */}
        <div className="col-span-6 ">
          <div className="space-y-6">
            <h1 className="sub_heading">
              CUSTOMER <span className="yellow">TESTIMONIAL</span>
            </h1>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              dolorum debitis, minima sapiente numquam sequi!
            </p>
            <Button className="yellow-bg abt_btn  p-8 font-bold rounded-lg text-white">
              Explore more
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TestimonialSection;
