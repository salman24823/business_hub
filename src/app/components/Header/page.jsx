import Link from "next/link";
import React from "react";
import Logo from "./../../../../public/logo.svg";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FaFacebookF } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbClockHour8Filled } from "react-icons/tb";

const Header = () => {
  return (
    <main className="">
      <header className="px-[5%] p font-bold text-white bg-transparent absolute w-full z-10">
        <nav className="">
          <div className="nav_ch_1 flex justify-between items-start p-3">
            <div className="clock flex items-center gap-2">
              <TbClockHour8Filled className="yellow text-xl" />
              <span className="font-semibold">
                Opening : Mon-Fri 09:00 am - 11:00 pm
              </span>
            </div>
            <div className="social_links flex gap-8 items-center">
              <FaFacebookF className="text-lg cursor-pointer hover:text-[#ffe84e]" />
              <RiWhatsappLine className="text-xl cursor-pointer hover:text-[#ffe84e]" />
              <FaPinterestP className="text-lg cursor-pointer hover:text-[#ffe84e]" />
              <FaInstagram className="text-lg cursor-pointer hover:text-[#ffe84e]" />
            </div>
          </div>
          <div className="nav_back nav_ch_2 flex justify-between px-4 items-center text-white w-full h-[4rem] er">
            <div className="flex items-center justify-center">
              <Image src={Logo} className="w-12"/>
              <h1 className="text-[2.2rem] mt-2 flex gap-1">
                BUSINESS <span className="yellow"> HUB</span>
              </h1>
            </div>
            <div className="flex items-center gap-10">
              <div className="nav-links flex gap-6 items-center">
                <Link href={"/"} className="fade_right">
                  Home
                </Link>
                <Link href={"/About"} className="fade_right">
                  About
                </Link>
                <Link href={"/Service"} className="fade_right">
                  Services
                </Link>
                <Link href={"/Blogs"} className="fade_right">
                  Blogs
                </Link>
                <Link href={"/Contact"} className="fade_right">
                  Contact Us
                </Link>
              </div>
              <div>
                <Link href={"/"}>
                  <Button className="yellow-bg px-6 font-bold py-2 rounded-none blue">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Header;
