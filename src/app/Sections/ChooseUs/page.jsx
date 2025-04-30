import React from "react";
import Image from "next/image";
import { SquareCheckBig } from "lucide-react";
import about_img1 from "../../../../public/choose_us1.jpg";
import about_img2 from "../../../../public/choose_us2.jpg";

// Reusable Component for the "feature" section
const Feature = ({ text }) => (
  <div className="flex gap-2">
    <SquareCheckBig />
    <span className="sub_point">{text}</span>
  </div>
);

const ChooseUs = () => {
  return (
    <main className="p-[5%] big_screen">
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 ">
        <div className="ch_cnt flex flex-col gap-8 col-span-1">
          <div className="flex gap-4 flex-col ch_headings">
            <span className="sub_point yellow">WHY CHOOSE US?</span>
            <h2 className="sub_blue">The Explanation You Must Join Us</h2>
          </div>

          <div className="ch_para">
            <p className="para lg:w-[90%] ">
              At our organization, we turn ideas into accomplishments — from
              sourcing to sales, from individual skills to corporate growth. We
              provide state-of-the-art office spaces with 24/7 electricity and
              security, fostering a coworking environment where teams
              collaborate and support each other. Our CEO envisions a space
              where freshers evolve into future leaders, where both business and
              personality are groomed with care. With a strong passion for IT
              and empowering startups, he is committed to building a community
              that nurtures innovation, encourages entrepreneurship, and
              transforms dreams into professional success.
            </p>
          </div>

          {/* Features List */}
          <div className="flex gap-3 flex-wrap">
            <Feature text="Modern & Comfortable" />
            <Feature text="Customized Space" />
            <Feature text="Saving Your Time" />
            <Feature text="Supportive Staff" />
          </div>

          <div>
            {/* <Button className="web-btn yellow-bg  rounded-lg text-white">
              Explore More
            </Button> */}
          </div>
        </div>

        {/* Right-side Images Section */}
        <div className="chos_img flex relative  md:flex-row gap-3 items-center col-span-1">
          {/* First Image */}
          <div className="relative w-[60%] ">
            {/* <div className="absolute flex flex-wrap w-[90px] h-[90px] md:w-[150px] md:h-[150px] place-content-start">
              <div className="w-[50%] h-[50%] bg-white" />
              <div className="w-[50%] h-[50%] bg-transparent" />
              <div className="w-[50%] h-[50%] bg-transparent" />
              <div className="w-[50%] h-[50%] yellow-bg" />
            </div> */}
            <Image
              src={about_img2}
              alt="Office Image 1"
              className="w-[full] h-[full] rounded-lg"
            />
          </div>

          {/* Second Image */}
          <div className="relative w-[40%] ">
            {/* <div className="absolute flex flex-wrap w-[100px] h-[100px] bottom-0 right-0">
              <div className="w-[50%] h-[50%] yellow-bg" />
              <div className="w-[50%] h-[50%] bg-transparent" />
              <div className="w-[50%] h-[50%] bg-transparent" />
              <div className="w-[50%] h-[50%] bg-white" />
            </div> */}
            <Image
              src={about_img1}
              alt="Office Image 2"
              className="w-[full] h-[full] rounded-lg"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ChooseUs;
