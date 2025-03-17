"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./../../../../public/logo.svg";
import workspace from "../../../../public/workspace.png";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FaFacebookF } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbClockHour8Filled } from "react-icons/tb";
import { ChevronUp, MenuIcon, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="">
      <header className="px-[5%] font-bold text-white bg-transparent absolute w-full z-10">
        <nav className="navbar">
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
          <div className="blue_bg nav_ch_2 flex justify-between px-4 items-center text-white w-full h-[4rem] er">
            <div className="flex items-center justify-center gap-1">
              <Image src={Logo} className="w-12 lg:w-12  " />
              <h1 className="yellow text-lg lg:text-[2.2rem] mt-2 flex gap-1">
                BUSINESS <span className=""> HUB</span>
              </h1>
              <Image src={workspace} className="w-16 lg:w-44 hidden md:block" />
            </div>
            <div className="flex items-center gap-10">
              <div className="nav-links flex gap-6 items-center">
                <Link href={"/"} className="fade_right">
                  Home
                </Link>
                <Link href={"/about"} className="fade_right">
                  About
                </Link>
                <Link href={"/Service"} className="fade_right">
                  Services
                </Link>
                <div className="page_dropdown relative">
                  <Link
                    href={"/Blogs"}
                    className="fade_right w-full flex flex-row items-center relative"
                  >
                    <span className="flex flex-row items-center relative gap-1">
                      Pages
                      <span className="drop_arrow">
                        <ChevronUp />
                      </span>
                    </span>
                  </Link>
                  <div className="p_dropdown absolute w-44 flex flex-col gap-2 blue_bg top-12">
                    <Link href={"/"} className="drop_items px-6 py-3">
                      Home
                    </Link>
                    <Link href={"/"} className="drop_items px-6 py-3">
                      Space
                    </Link>
                    <Link href={"/about"} className="drop_items px-6 py-3">
                      About
                    </Link>
                    <Link href={"/"} className="drop_items px-6 py-3">
                      Contact
                    </Link>
                  </div>
                </div>
                <Link href={"/contact"} className="fade_right">
                  Blogs
                </Link>
              </div>
              <div className="nav_btn hidden md:block">
                <Link href={"/"}>
                  <Button className="yellow-bg px-6 font-bold py-2 rounded-lg text-white">
                    Book Now
                  </Button>
                </Link>
              </div>
              {/* Small screen view-btn */}
              <div className="menu_bar">
                <button className=" cursor-pointer" onClick={toggleMenu}>
                  <MenuIcon className="h-7 w-7" />
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out shadow-lg z-50 flex flex-col justify-between`}
        >
          <div>
            <div className="flex justify-between items-center p-5 border-b border-gray-700">
              <h2 className="text-xl font-semibold"></h2>
              <button onClick={toggleMenu}>
                <X className="h-7 w-7" />
              </button>
            </div>
            <div className="flex flex-col p-5 space-y-4">
              <Link href="/" className="text-lg" onClick={toggleMenu}>
                Home
              </Link>
              <Link href="/about" className="text-lg" onClick={toggleMenu}>
                About
              </Link>
              <Link href="/service" className="text-lg" onClick={toggleMenu}>
                Services
              </Link>
              <Link href="/blogs" className="text-lg" onClick={toggleMenu}>
                Blogs
              </Link>
              <Link href="/contact" className="text-lg" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
          </div>
          <div className="p-5 flex justify-center">
            <Link href="/">
              <Button className="yellow-bg px-6 font-bold py-2 rounded-lg text-white w-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
