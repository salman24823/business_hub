import React from "react";
import { Button } from "@heroui/react";

const MenuSection = () => {
  return (
    <div className="p-[5%] w-full">
      <div className="grid grid-cols-12 grid-rows-2 gap-5">
        <div className="col-span-5 row-span-2 h-[100vh] bg-[url(/menu1.jpg)] bg-cover bg-no-repeat"></div>
        <div className="col-span-4 row-span-1 bg-[url(/menu2.jpg)] bg-cover bg-no-repeat"></div>
        <div className="col-span-3 row-span-1 bg-[url(/menu3.jpg)] bg-cover bg-no-repeat"></div>
        <div className="col-span-3 row-span-1 yellow-bg p-10">
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-bold">THE SERVICE</span>
            <p className="text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
              commodi!
            </p>
            <Button className="px-8 py-3 bg-transparent border border-black rounded-none font-bold text-xl">
              Follow Us
            </Button>
          </div>
        </div>
        <div className="col-span-4 row-span-1 bg-[url(/menu4.jpg)] bg-cover bg-no-repeat"></div>
      </div>
    </div>
  );
};

export default MenuSection;
