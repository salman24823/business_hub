import Link from "next/link";
import React from "react";
import Logo from "./../../../../public/logo.png" 
import Image from "next/image";
import { Button } from "@heroui/react";

const Header = () => {
  return (
    <main className="">
      <header className="nav_back px-[5%] py-4 font-bold ">
        <nav className="flex justify-between items-center text-white">
          <div className="flex items-center justify-center">
            <Image src={Logo} className="w-10"/>
            <h1 className="yellow text-[2rem] mt-2">BUSINESS HUB</h1>
          </div>
          <div className="flex items-center gap-10">
            <div className="nav-links flex gap-6 items-center">
            <Link href={"/About"} className="fade_right">Home</Link>
            <Link href={"/About"} className="fade_right">About</Link>
            <Link href={"/About"} className="fade_right">Services</Link>
            <Link href={"/About"} className="fade_right">Blogs</Link>
            <Link href={"/About"} className="fade_right">Contact Us</Link>
            </div>
            <div>
            <Link href={"/"}>
              <Button className="yellow-bg px-6 font-bold py-2 rounded-lg blue">
                Book Now
              </Button>
            </Link>
          </div>
          </div>
         
        </nav>
      </header>
    </main>
  );
};

export default Header;
