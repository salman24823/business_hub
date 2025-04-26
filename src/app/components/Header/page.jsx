"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Logo from "./../../../../public/logo.svg";
import workspace from "../../../../public/workspace.png";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TbClockHour8Filled } from "react-icons/tb";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = -70; // adjust if your header height changes
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop + offset,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (id) => {
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push(`/#${id}`);
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        setTimeout(() => {
          scrollToSection(id);
        }, 300);
      }
    }
  }, [pathname]);

  return (
    <main className="">
      <header className="px-[5%] big_screen font-bold text-white bg-transparent absolute w-full z-10">
        <nav className="navbar">
          <div className="nav_ch_1 flex justify-between items-start p-3">
            <div className="clock flex items-center gap-2">
              <TbClockHour8Filled className="yellow text-xl" />
              <span className="font-semibold">
                Open 24/7 We&rsquo;re always here for you!
              </span>
            </div>
            <div className="social_links flex gap-8 items-center">
              <a
                href="https://www.facebook.com/share/1JdBspVFAa/"
                target="_blank"
                rel="noopenr noreferrer"
              >
                <FaFacebookF className="text-lg cursor-pointer hover:text-[#ffe84e]" />
              </a>
              <a
                href="https://wa.me/+923007238256"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiWhatsappLine className="text-xl cursor-pointer hover:text-[#ffe84e]" />
              </a>
              <a
                href="https://www.instagram.com/businesshubworkspace?igsh=MTlkZ3liMzVubTJhdw=="
                target="blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-lg cursor-pointer hover:text-[#ffe84e]" />
              </a>
              <a
                href="https://youtube.com/@businesshubworkspace?si=9YJic6Eo5YP45kfn"
                target="blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-lg cursor-pointer hover:text-[#ffe84e]" />
              </a>
            </div>
          </div>
          <div className="blue_bg nav_ch_2 flex justify-between px-4 items-center text-white w-full h-[4rem] er">
            <div className="flex items-center justify-center gap-1">
              <Image alt="logo" src={Logo} className="w-12 lg:w-12" />
              <h1 className="yellow text-lg lg:text-[2.2rem] mt-2 flex gap-1">
                BUSINESS <span className=""> HUB</span>
              </h1>
              <Image
                alt="workspace"
                src={workspace}
                className="w-16 lg:w-44 hidden md:block"
              />
            </div>
            <div className="flex items-center gap-10">
              <div className="nav-links flex gap-6 items-center">
                <Link href={"/"} className="fade_right">
                  Home
                </Link>
                <Link href={"/about"} className="fade_right">
                  About
                </Link>
                <div className="page_dropdown relative">
                  <div
                    className="fade_right w-full flex flex-row items-center relative cursor-pointer"
                    onClick={() => handleScroll("service")}
                  >
                    <span className="flex flex-row items-center relative gap-1">
                      Services
                      <span className="drop_arrow">
                        <ChevronDown />
                      </span>
                    </span>
                  </div>
                  <div className="p_dropdown absolute w-48 flex flex-col gap-2 blue_bg top-12">
                    <span
                      className="drop_items px-4 py-3 cursor-pointer"
                      onClick={() => handleScroll("service")}
                    >
                      Rental Services
                    </span>
                    <span
                      className="drop_items px-4 py-3 cursor-pointer"
                      onClick={() => handleScroll("IT-service")}
                    >
                      IT Services
                    </span>
                    <span
                      className="drop_items px-4 py-3 cursor-pointer"
                      onClick={() => handleScroll("bussiness")}
                    >
                      Business Services
                    </span>
                  </div>
                </div>
                <div className="page_dropdown relative">
                  <Link
                    href={"/blogs"}
                    className="fade_right w-full flex flex-row items-center relative"
                  >
                    <span className="flex flex-row items-center relative gap-1">
                      Pages
                      <span className="drop_arrow">
                        <ChevronDown />
                      </span>
                    </span>
                  </Link>
                  <div className="p_dropdown absolute w-44 flex flex-col gap-2 blue_bg top-12">
                    <Link
                      href={"/premiumoffices"}
                      className="drop_items px-6 py-3"
                    >
                      Premium Office
                    </Link>
                    <Link
                      href={"/regularoffices"}
                      className="drop_items px-6 py-3"
                    >
                      Regular Office
                    </Link>
                    {/* <Link href={"/openspaces"} className="drop_items px-6 py-3">
                      Open Spaces
                    </Link> */}
                    {/* <Link
                      href={"/termsandconditions"}
                      className="drop_items px-6 py-3"
                    >
                      Term & Conditions
                    </Link>
                    <Link
                      href={"/privacypolicy"}
                      className="drop_items px-6 py-3"
                    >
                      Privacy Policy
                    </Link> */}
                    <Link href={"/contact"} className="drop_items px-6 py-3">
                      Contact
                    </Link>
                  </div>
                </div>
                <Link
                  href={"https://blog.businesshubworkspace.com"}
                  className="fade_right"
                >
                  Blogs
                </Link>
              </div>
              <div className="nav_btn hidden md:block">
                <Button
                  className="yellow-bg px-6 font-bold py-2 rounded-lg text-white md:hidden lg:block"
                  onClick={() => handleScroll("contact")} // Change "contact" to your actual section ID
                >
                  Book Now
                </Button>
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
              <div className="page_dropdown relative">
                <div
                  className="fade_right w-full flex flex-row items-center relative cursor-pointer"
                  onClick={() => handleScroll("service")}
                >
                  <span className="flex flex-row items-center relative gap-1">
                    Services
                    <span className="drop_arrow">
                      <ChevronDown />
                    </span>
                  </span>
                </div>
                <div className="p_dropdown absolute w-48 flex flex-col gap-2 blue_bg top-12">
                  <span
                    className="drop_items px-4 py-3 cursor-pointer"
                    onClick={() => {
                      toggleMenu();
                      handleScroll("service");
                    }}
                  >
                    Rental Services
                  </span>
                  <span
                    className="drop_items px-4 py-3 cursor-pointer"
                    onClick={() => {
                      toggleMenu();
                      handleScroll("IT-service");
                    }}
                  >
                    IT Services
                  </span>
                  <span
                    className="drop_items px-4 py-3 cursor-pointer"
                    onClick={() => {
                      toggleMenu(); // Close the menu
                      handleScroll("bussiness"); // Scroll to the section
                    }}
                  >
                    Business Services
                  </span>
                </div>
              </div>
              <Link
                href={"/premiumoffices"}
                className="text-lg"
                onClick={toggleMenu}
              >
                Premium Offices
              </Link>
              <Link
                href={"/regularoffices"}
                className="text-lg"
                onClick={toggleMenu}
              >
                Regular Offices
              </Link>
              <Link
                href="https://blog.businesshubworkspace.com"
                className="text-lg"
                onClick={toggleMenu}
              >
                Blogs
              </Link>
            </div>
          </div>
          <div className="p-5 flex justify-center">
            <Button
              className="yellow-bg px-6 font-bold py-2 rounded-lg text-white w-full"
              onClick={() => {
                toggleMenu(); // Close the menu
                handleScroll("contact"); // Scroll to the section
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
