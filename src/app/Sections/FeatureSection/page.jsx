import React from "react";
import {
  Wifi,
  Cctv,
  CircleParking,
  Presentation,
  Projector,
  Building2,
  Users,
} from "lucide-react";
import { Button } from "@heroui/react";

const FeatureSection = () => {
  return (
    <main className="p-[5%]">
      {/* main-div */}
      <div className="grid grid-cols-12 grid-rows-2 gap-5">
        {/* 1st-div */}
        <div className="flex flex-col col-span-3 justify-center items-start space-y-3  p-2 ">
          <span className="point">We Care About Visitors</span>
          <hr className="w-[50%]" />
          <p className="para">
            We are here to provide a comfortable and relaxing environment for
            your visitors.
          </p>
          <Button className="yellow-bg rounded-none font-bold">
            Read more
          </Button>
          <hr color="#F7D02E" />
        </div>
        {/* 2nd-div */}
        <div className="feature_cards">
          <Wifi className="yellow w-16 h-16" />
          <span className="point">24/7 Wifi</span>
          <p className="para text-center">
            We are providing High speed internet for 16/7 for private 
          </p>
        </div>
        {/* 3rd-div */}
        <div className="feature_cards">
          <Building2 className="yellow w-16 h-16" />
          <span className="point">Large Building</span>
          <p className="para text-center">
            There are six floors in the Building in which we have multiple type
            
          </p>
        </div>
        {/* 4th-div */}
        <div className="feature_cards">
          <Projector className="yellow w-16 h-16" />
          <span className="point">Conference Rooms</span>
          <p className="para text-center">
            Big wide conference room which is available to held meetings and
            events.
          </p>
        </div>
        {/* 5th-div */}
        <div className="feature_cards">
          <Presentation className="yellow w-16 h-16" />
          <span className="point">Furnished Office</span>
          <p className="para text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        {/* 6th-div */}
        <div className="feature_cards">
          <Cctv className="yellow w-16 h-16" />
          <span className="point">CCTV</span>
          <p className="para  text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>
        {/* 7th-div */}
        <div className="feature_cards">
          <CircleParking className="yellow w-16 h-16" />
          <span className="point">Parking</span>
          <p className="para text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* 8th-div */}
        <div className="feature_cards">
          <Users className="yellow w-16 h-16" />
          <span className="point">Office Boys</span>
          <p className="para text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            
          </p>
        </div>
      </div>
    </main>
  );
};

export default FeatureSection;
