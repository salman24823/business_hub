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
  const features = [
    {
      id: 1,
      icon: <Wifi className="yellow w-16 h-16" />,
      title: "5G Wifi",
      description: "We are providing High speed internet for 24/7 for private",
    },
    {
      id: 2,
      icon: <Building2 className="yellow w-16 h-16" />,
      title: "Large Building",
      description: "There are six floors in the building, which are accessible by elevator.",
    },
    {
      id: 3,
      icon: <Projector className="yellow w-16 h-16" />,
      title: "Conference Hall",
      description: "Spacious conference room available for meetings and events.",
    },
    {
      id: 4,
      icon: <Presentation className="yellow w-16 h-16" />,
      title: "Furnished Office",
      description: "Move-in ready offices with premium furniture and amenities.",
    },
    {
      id: 5,
      icon: <Cctv className="yellow w-16 h-16" />,
      title: "CCTV",
      description: "Advanced CCTV system ensuring a safe environment.",
    },
    {
      id: 6,
      icon: <Podcast className="yellow w-16 h-16" />,
      title: "Meeting Room",
      description: "Well-equipped meeting rooms for productive discussions.",
    },
    {
      id: 7,
      icon: <Users className="yellow w-16 h-16" />,
      title: "Cafe & Office Boys",
      description: "Enjoy a well-stocked café and professional support staff.",
    },
  ];

  return (
    <main className="p-[5%]">
      {/* main-div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-2 gap-5">
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
        {/* Feature Cards */}
        {features.map(({ id, icon, title, description }) => (
          <div key={id} className="vision_img feature_cards sm:col-span-1">
            {icon}
            <span className="sub_point">{title}</span>
            <p className="para text-center">{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default FeatureSection;
