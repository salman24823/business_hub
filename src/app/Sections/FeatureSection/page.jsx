import React from "react";
import {
  Wifi,
  UtensilsCrossed,
  CircleParking,
  Presentation,
  Projector,
  Building2,
} from "lucide-react";
import { Button } from "@heroui/react";

const FeatureSection = () => {
  return (
    <div className="p-[5%]">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="grid grid-cols-12 grid-rows-2 gap-5">
          <div className="flex flex-col col-span-3 justify-center items-start space-y-3  p-2 rounded-lg">
            <span className="point">We Care About Visitors</span>
            <hr className="w-[50%]" />
            <p className="para">
              We are here to provide a comfortable and relaxing environment for
              your visitors. Our design is made to be easy to navigate and
              enjoyable for everyone.
            </p>
            <Button className="yellow-bg">Read more</Button>
            <hr className="yellow-bg" />
          </div>
          <div className="flex flex-col col-span-3 justify-center items-center space-y-3  bg-slate-200 p-5 rounded-lg">
            <Wifi className="yellow w-16 h-16" />
            <span className="point">24/7 Wifi</span>
            <p className="para text-center">
              We are providing High speed internet for 16/7 for private offices
              or even for open workspaces.
            </p>
          </div>
          <div className="flex flex-col col-span-3 justify-center items-center space-y-3  bg-slate-200 p-5 rounded-lg">
            <Building2 className="yellow w-16 h-16" />
            <span className="point">Large Building</span>
            <p className="para text-center">
              There are six floors in the Building in which we have multiple
              type of offices, rooms and openspaces open for your work.
            </p>
          </div>
          <div className="flex flex-col col-span-3 justify-center items-center space-y-3  bg-slate-200 p-5 rounded-lg">
            <Projector className="yellow w-16 h-16" />
            <span className="point">Conference Rooms</span>
            <p className="para text-center">
              Big wide conference room which is available to held meetings and
              events.
            </p>
          </div>
          <div className="flex flex-col col-span-3 justify-center items-center space-y-3  bg-slate-200 p-5 rounded-lg">
            <Presentation className="yellow w-16 h-16" />
            <span className="point">Furnished Office</span>
            <p className="para text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              obcaecati rerum architecto porro deserunt nobis illo, molestias.
            </p>
          </div>
          <div className="flex flex-col col-span-3 justify-center items-center space-y-3  bg-slate-200 p-5 rounded-lg">
            <CircleParking className="yellow w-16 h-16" />
            <span className="point">Parking</span>
            <p className="para  text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              obcaecati rerum architecto porro deserunt nobis illo, molestias.
            </p>
          </div>
          <div className="flex flex-col col-span-3 justify-center items-center space-y-3  bg-slate-200 p-5 rounded-lg">
            <UtensilsCrossed className="yellow w-16 h-16" />
            <span className="point">Kitchen</span>
            <p className="para text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              obcaecati rerum architecto porro deserunt nobis illo, molestias.
            </p>
          </div>
          <div className="flex flex-col col-span-3 justify-center items-center space-y-3  bg-slate-200 p-5 rounded-lg">
            <UtensilsCrossed className="yellow w-16 h-16" />
            <span className="point">Kitchen</span>
            <p className="para text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              obcaecati rerum architecto porro deserunt nobis illo, molestias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
