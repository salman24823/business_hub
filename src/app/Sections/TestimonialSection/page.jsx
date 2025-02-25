import React from "react";
import Image from "next/image";
import ceo from "../../../../public/ceo.jpg";
const TestimonialSection = () => {
  return (
    <div className="p-[5%] space-y-10">
      <div className="flex flex-col justify-center items-center">
        <h2 className="sub_blue">What Our Client Saying?</h2>
        <p className="para">Here are some reviews of our clients </p>
      </div>
      <div className="grid grid-cols-12 grid-rows-2 gap-10">
        <div className="flex flex-col col-span-8 bg-slate-100 p-5 rounded-lg">
          <Image src={ceo} className="w-16 h-16 rounded-full" />
          <p className="my-4">
            "Cowork has been a game changer for our bussiness the energy here is
            unmatched and it motivates us to work hard and think out of the
            box."
          </p>
          <p className="para">Creative Director</p>
          <span className="point">Sarah thompson</span>
        </div>
        <div className="flex flex-col col-span-4  bg-slate-100 p-5 rounded-lg">
          <Image src={ceo} className="w-16 h-16 rounded-full" />
          <p className="my-4">
            "Cowork has revolutionized the way we work and innovate the
            collabrative enviroment encourages us to push boundaries everyday
            its the perfect place for creator to turn there ideas into reality"
          </p>
          <p className="para">Freelancer</p>
          <span className="point">John Carter</span>
        </div>
        <div className="flex flex-col col-span-4 bg-slate-100 p-5 rounded-lg">
          <Image src={ceo} className="w-16 h-16 rounded-full" />
          <p className="my-4">
            "Cowork is more than just a workspace it's a hub for creativity
            Every day is filled with inspiration and new possibilities"
          </p>
          <p className="para">Freelancer</p>
          <span className="point">John Carter</span>
        </div>
        <div className="flex flex-col col-span-8 bg-slate-100 p-5 rounded-lg">
          <Image src={ceo} className="w-16 h-16 rounded-full" />
          <p className="my-4">
            "Cowork has been a game changer for our bussiness the energy here is
            unmatched and it motivates us to work hard and think out of the
            box."
          </p>
          <p className="para">Creative Director</p>
          <span className="point">Sarah thompson</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
