import React from "react";
import { Button } from "@heroui/react";

const ServiceSection = () => {
  return (
    <main className="w-full p-[5%] ">
      <div className="mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] uppercase">
          what <span className="text-yellow-400">we</span> Offers <span className="text-yellow-400">...</span>
        </h2>
      </div>

      {/* Mobile layout (1 column) */}
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:hidden">
        {/* Executive Offices */}
        <div className="card_hover s_m card_hover bg-[url(/executive.JPG)]">
          <div className="rep">
            <h3 className="text-xl font-bold text-white mb-2">Executive Offices</h3>
            <p className="text-white text-sm">
              Premium executive offices with modern furnishings, advanced amenities, and a professional environment.
            </p>
          </div>
        </div>

        {/* THE SERVICE */}
        <div className="p-4 sm:p-5 rounded-lg bg-white shadow-md">
          <div className="flex flex-col gap-4">
            <span className="text-xl font-bold">THE SERVICE</span>
            <p>
              Discover a variety of office spaces tailored to your needs. From executive suites to open workspaces, find
              the perfect place to fit and start growing.
            </p>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold mt-2">Explore More</Button>
          </div>
        </div>

        {/* Meeting Rooms */}
        <div className="s_m card_hover bg-[url(/meeting-room.JPG)] ">
          <div className="rep">
            <h3 className="text-xl font-bold text-white mb-2">Meeting Rooms</h3>
            <p className="text-white text-sm">
              Fully equipped meeting rooms with modern technology and comfortable seating.
            </p>
          </div>
        </div>

        {/* Conference Hall */}
        <div className="s_m card_hover bg-[url(/conference.JPG)] ">
          <div className="rep">
            <h3 className="text-xl font-bold text-white mb-2">Conference Hall</h3>
            <p className="text-white text-sm">
              Spacious and well-equipped conference hall for corporate meetings and events.
            </p>
          </div>
        </div>

        {/* Regular Offices */}
        <div className="s_m card_hover bg-[url(/regular-office.JPG)] ">
          <div className="rep">
            <h3 className="text-xl font-bold text-white mb-2">Regular Offices</h3>
            <p className="text-white text-sm">Comfortable and functional regular offices with essential amenities.</p>
          </div>
        </div>

        {/* Open Workspace */}
        <div className="s_m card_hover bg-[url(/im.JPG)] ">
          <div className="rep">
            <h3 className="text-xl font-bold text-white mb-2">Open Workspace</h3>
            <p className="text-white text-sm">
              Collaborative open workspace with modern design and flexible seating.
            </p>
          </div>
        </div>

        {/* Shops */}
        <div className="s_m card_hover bg-[url(/slider3.jpg)] ">
          <div className="rep">
            <h3 className="text-xl font-bold text-white mb-2">Shops</h3>
            <p className="text-white text-sm">
              Prime retail shops in a high-traffic location with excellent visibility.
            </p>
          </div>
        </div>
      </div>

      {/* Tablet and Desktop layout */}
      <div className="hidden md:grid md:grid-cols-12 lg:grid-cols-12 gap-5 auto-rows-auto relative">
        {/* Executive Offices - Large left cell */}
        <div className="relative inset-0 bg-[url(/executive.JPG)] bg-cover bg-center bg-no-repeat card_hover group  md:col-span-5 lg:col-span-5 md:row-span-2 rounded-lg overflow-hidden">
          <div className="card_hover_animation absolute flex flex-col justify-end h-full filter transition-all duration-300">
            <div className="p-6 relative">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Executive Offices</h3>
              <p className="text-white text-sm lg:text-base w-[90%]">
                Premium executive offices with modern furnishings, advanced amenities, and a professional environment
                designed for business success.
              </p>
            </div>
          </div>
          <div className="w-full h-full" style={{ aspectRatio: "5/6" }}></div>
        </div>

        {/* Meeting Rooms */}
        <div className="inset-0 card_hover bg-[url(/meeting-room.JPG)] bg-cover bg-center bg-no-repeat group relative md:col-span-4 lg:col-span-4 rounded-lg overflow-hidden">
          <div className="card_hover_animation filter flex flex-col justify-end h-full w-full p-5">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Meeting Rooms</h3>
            <p className="text-white text-sm lg:text-base w-[90%]">
              Fully equipped meeting rooms with modern technology and comfortable seating.
            </p>
          </div>
          <div className="w-full" style={{ aspectRatio: "4/3" }}></div>
        </div>

        {/* Conference Hall */}
        <div className="inset-0 card_hover bg-[url(/conference.JPG)] bg-cover bg-center bg-no-repeat group relative md:col-span-3 lg:col-span-3 rounded-lg overflow-hidden">
          <div className="card_hover_animation filter flex flex-col justify-end h-full w-full p-5">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Conference Hall</h3>
            <p className="text-white text-sm lg:text-base w-[90%]">
              Spacious conference hall for corporate meetings and events.
            </p>
          </div>
          <div className="w-full" style={{ aspectRatio: "4/3" }}></div>
        </div>

        {/* THE SERVICE */}
        <div className="md:col-span-3 lg:col-span-3 p-5 rounded-lg bg-white shadow-md flex flex-col justify-between">
          <span className="text-xl lg:text-2xl font-bold">THE SERVICE</span>
          <p className="text-sm lg:text-base my-4">
            Discover a variety of office spaces tailored to your needs. From executive suites to open workspaces, find
            the perfect place to fit and start growing.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold mt-auto">Explore More</Button>
          <div className="hidden" style={{ aspectRatio: "4/3" }}></div>
        </div>

        {/* Regular Offices */}
        <div className="inset-0 card_hover bg-[url(/regular-office.JPG)] bg-cover bg-center bg-no-repeat group relative md:col-span-4 lg:col-span-4 rounded-lg overflow-hidden">
          <div className="card_hover_animation filter flex flex-col justify-end h-full w-full p-5">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Regular Offices</h3>
            <p className="text-white text-sm lg:text-base w-[90%]">
              Comfortable and functional regular offices with essential amenities.
            </p>
          </div>
          <div className="w-full" style={{ aspectRatio: "4/3" }}></div>
        </div>

        {/* Open Workspace */}
        <div className="inset-0 card_hover bg-[url(/im.JPG)] bg-cover bg-center bg-no-repeat group relative md:col-span-8 lg:col-span-8 rounded-lg overflow-hidden">
          <div className="card_hover_animation filter flex flex-col justify-end h-full w-full p-5">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Open Workspace</h3>
            <p className="text-white text-sm lg:text-base w-[90%]">
              Collaborative open workspace with modern design and flexible seating.
            </p>
          </div>
          <div className="w-full" style={{ aspectRatio: "8/3" }}></div>
        </div>

        {/* Shops */}
        <div className="inset-0 card_hover bg-[url(/slider3.jpg)] bg-cover bg-center bg-no-repeat group relative md:col-span-4 lg:col-span-4 rounded-lg overflow-hidden">
          <div className="card_hover_animation filter flex flex-col justify-end h-full w-full p-5">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">Shops</h3>
            <p className="text-white text-sm lg:text-base w-[90%]">
              Prime retail shops in a high-traffic location with excellent visibility.
            </p>
          </div>
          <div className="w-full" style={{ aspectRatio: "4/3" }}></div>
        </div>
      </div>
    </main>
  );
};

export default ServiceSection;
