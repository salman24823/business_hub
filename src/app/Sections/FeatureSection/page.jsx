import React from "react";
import {
  Wifi,
  Cctv,
  Presentation,
  Projector,
  Building2,
  Users,
  Podcast,
} from "lucide-react";
import { Button } from "@heroui/react";

const FeatureSection = () => {
  return (
    <main className="p-[5%]">
      {/* main-div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 xl:grid-rows-2 gap-5">
        {/* 1st-div */}
        <div className="flex flex-col sm:col-span-1 justify-center items-start space-y-3  p-2 ">
          <span className="point">We Care About Visitors</span>
          {/* hr className="w-[50%]" />< */}
          <div className="line w-full h-[2px] yellow-bg"></div>
          <p className="para">
            We are here to provide a comfortable and relaxing environment for
            your visitors.
          </p>
          <Button className="yellow-bg rounded-lg text-white font-bold">
            Read more
          </Button>
          <hr color="#F7D02E" />
        </div>
        {/* 2nd-div */}
        <div className="vision_img feature_cards sm:col-span-1">
          <Wifi className="yellow w-16 h-16" />
          <span className="sub_point">5G Wifi</span>
          <p className="para text-center">
            We are providing High speed internet for 24/7 for private
          </p>
        </div>
        {/* 3rd-div */}
        <div className="vision_img feature_cards sm:col-span-1">
          <Building2 className="yellow w-16 h-16" />
          <span className="sub_point">Large Building</span>
          <p className="para text-center">
            There are six floors in the building, which are accessible by
            elevator.
          </p>
        </div>
        {/* 4th-div */}
        <div className="vision_img feature_cards sm:col-span-1">
          <Projector className="yellow w-16 h-16" />
          <span className="sub_point">Conference Hall</span>
          <p className="para text-center">
            Spacious conference room available for meetings and events.
          </p>
        </div>
        {/* 5th-div */}
        <div className="vision_img feature_cards sm:col-span-1">
          <Presentation className="yellow w-16 h-16" />
          <span className="sub_point">Furnished Office</span>
          <p className="para text-center">
            Move-in ready offices with premium furniture and amenities.
          </p>
        </div>
        {/* 6th-div */}
        <div className="vision_img feature_cards sm:col-span-1">
          <Cctv className="yellow w-16 h-16" />
          <span className="sub_point">CCTV</span>
          <p className="para  text-center">
            Advanced CCTV system ensuring a safe environment.
          </p>
        </div>
        {/* 7th-div */}
        <div className="vision_img feature_cards sm:col-span-1">
          <Podcast className="yellow w-16 h-16" />
          <span className="sub_point">Meeting Room</span>
          <p className="para text-center">
            Well-equipped meeting rooms for productive discussions.{" "}
          </p>
        </div>
        {/* 8th-div */}
        <div className="vision_img feature_cards sm:col-span-1">
          <Users className="yellow w-16 h-16" />
          <span className="sub_point">Cafe & Office Boys</span>
          <p className="para text-center">
            Enjoy a well-stocked café and professional support staff.
          </p>
        </div>
      </div>
    </main>
  );
};

export default FeatureSection;
