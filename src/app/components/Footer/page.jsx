import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.png";
import { MapPin, Phone, ChevronRight } from "lucide-react";
import { Button } from "@heroui/react";
import { FaFacebookF } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-[5%] w-full blue_bg">
      <div className="flex flex-col justify-center items-center w-full p-[3%]  bg-gray-100 gap-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4">
            <h1 className="sub_blue">Business Hub</h1>
            <p className="para">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              soluta eius maxime id, error neque quibusdam blanditiis atque
            </p>
            <div className="flex justify-start items-center gap-2 my-3">
              <MapPin className="yellow" />
              <p>Location: D-Ground, Satiyana Road</p>
            </div>
            <div className="flex justify-start items-center gap-2 my-3">
              <Phone className="yellow" />
              <p>Phone: +41 8756934</p>
            </div>
          </div>
          <div className="col-span-2 space-y-3">
            <span className="text-2xl font-bold yellow">Quick Links</span>
            <div className="flex justify-start items-center">
              <ChevronRight className="yellow" />
              <p className="cursor-pointer">Home</p>
            </div>
            <div className="flex justify-start items-center">
              <ChevronRight className="yellow" />
              <p className="cursor-pointer">About</p>
            </div>
            <div className="flex justify-start items-center">
              <ChevronRight className="yellow" />
              <p className="cursor-pointer">Services</p>
            </div>
            <div className="flex justify-start items-center">
              <ChevronRight className="yellow" />
              <p className="cursor-pointer">Contact</p>
            </div>
          </div>
          <div className="col-span-2 space-y-3">
            <span className="text-2xl font-bold yellow">Useful Links</span>
            <div className="flex justify-start items-center">
              <ChevronRight className="yellow" />
              <p className="cursor-pointer">Privacy Policy</p>
            </div>
            <div className="flex justify-start items-center">
              <ChevronRight className="yellow" />
              <p className="cursor-pointer">Terms and Conditions</p>
            </div>
            <div className="flex justify-start items-center">
              <ChevronRight className="yellow" />
              <p className="cursor-pointer">Disclaimer</p>
            </div>
            <div className="flex justify-start items-center">
              <ChevronRight className="yellow" />
              <p className="cursor-pointer">Support</p>
            </div>
          </div>
          <div className="col-span-4">
            <span className="yellow text-2xl font-bold">Newsletter</span>
            <p className="my-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis, rerum.
            </p>
            <form className="my-5 flex flex-col gap-3" action="">
              <input
                type="text"
                className="border border-black w-80 py-2"
                placeholder=" Your Email..."
              />
              <Button className="w-80 rounded-none yellow-bg">Subscribe</Button>
            </form>
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between w-full">
          <div>
            <span className="text-sm">
              Copyright © BUSINESS HUB 2025. All Rights Reserved.
            </span>
          </div>
          <div className="flex gap-4">
            <FaFacebookF className="text-lg cursor-pointer hover:text-[#ffe84e]" />
            <RiWhatsappLine className="text-xl cursor-pointer hover:text-[#ffe84e]" />
            <FaPinterestP className="text-lg cursor-pointer hover:text-[#ffe84e]" />
            <FaInstagram className="text-lg cursor-pointer hover:text-[#ffe84e]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
