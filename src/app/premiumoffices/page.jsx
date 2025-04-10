import { Button } from "@heroui/react";
import React from "react";

const premiumoffices = () => {
  return (
    <section>
      <div className="w-full h-[100vh] bg-[url(/premium.JPG)] bg-cover bg-no-repeat ">
        <div className="filter p-[5%] w-full h-full flex items-center">
          <div className="flex flex-col gap-4">
            <h1 className="main_heading">
              <span className="yellow">Premium</span> Offices
            </h1>
            <p className="text-white p2para">
              The executive office offers a premium workspace with modern
              amenities, fostering productivity and professionalism. Ideal for
              executives and teams, it provides a sophisticated environment for
              meetings, decision-making, and strategic growth.
            </p>
            <div>
              <Button className="rounded-md yellow-bg font-bold text-white">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="p2contant"></div>
    </section>
  );
};

export default premiumoffices;
