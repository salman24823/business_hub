"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/logo.svg";
import workspace from "../../../../public/workspace.png";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@heroui/react";
import { FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Pages", href: "/" },
    { label: "Blogs", href: "/" },
  ];

  async function submitEmail(e) {
    e.preventDefault();

    try {
      if (!email) {
        return toast.error("Please enter a valid email.");
      }

      const response = await fetch("/api/handleNewsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // ← pass email in the body
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setEmail(""); // clear input
      } else {
        toast.error(data.message || "Failed to subscribe.");
      }
    } catch (error) {
      console.error("Newsletter submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <footer className="blue_bg flex flex-col items-center">
      <div className="footer_child_1 big_screen p-[5%] flex flex-col gap-20 md:flex-row md:justify-between w-full">
        <div className="">
          <h2 className="sub_heading uppercase text-white">
            Join <br />
            <span className="yellow">newsletter</span>
          </h2>
        </div>
        <div className="flex items-end overflow-hidden ">
          <form
            className="Sub_form flex flex-col gap-4 lg:gap-6"
            onSubmit={submitEmail}
          >
            <label
              htmlFor="newsletter"
              className="text-white text-2xl font-bold"
            >
              Stay Up To Date
            </label>
            <div className="bg-white flex items-center lg:gap-6 p-2 overflow-hidden rounded-lg">
              <input
                type="email"
                required
                name="email"
                placeholder="Enter your Email"
                className="email_input bg-transparent p-2 w-[70%]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="web-btn yellow-bg text-white">
                Subscribe Now
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="footer_child_2 px-[5%] py-[2%] big_screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full">
        <div className="md:col-span-1 footer_cards flex flex-col gap-6 col-span-1 lg:col-span-4 ">
          <div className="flex items-end">
            <Image src={logo} alt="logo" className="w-32" />
            <div>
              <span className="yellow text-4xl font-bold">Business Hub</span>
              <Image src={workspace} alt="workspace" className="w-48" />
            </div>
          </div>
          <p className="text-white">
            Find your ideal workspace with us! We offer a variety of offices and
            open spaces tailored for professionals, startups, and businesses.
            Enjoy a productive environment with flexible plans. Contact us
            today!
          </p>
        </div>

        <div className="md:col-span-1 footer_cards col-span-1 lg:col-span-3 p-5 ">
          <span className="point yellow">Quick Links</span>
          <div className="footer_links">
            {footerLinks.map((link, index) => (
              <Link key={index} className="ft-link" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 footer_cards col-span-1 lg:col-span-2 py-5 lg:py-5">
          <span className="point yellow">Further Links</span>
          <div className="footer_links">
            <Link className="ft-link" href={"/privacypolicy"}>
              Privacy Policy
            </Link>
            <Link className="ft-link" href={"/termsandconditions"}>
              Term & Conditions
            </Link>
            <Link className="ft-link" href={"/link_us"}>
              Link us
            </Link>
            <Link className="ft-link" href={"/site_map"}>
              Site map
            </Link>
            {/* <Link className="ft-link" href={"/"}>
              Recruitment
            </Link> */}
            <Link className="ft-link" href={"https://wa.me/+923008405105"}>
              <span className="flex gap-2">
                <FaWhatsapp className="yellow w-6 h-6" />
                Whatsapp
              </span>
            </Link>
          </div>
        </div>

        <div className="md:col-span-1 footer_cards col-span-1 lg:col-span-3 flex-col gap-5 lg:items-end">
          <div className="p-5 flex-col flex gap-5">
            <span className="point yellow">Social Media</span>
            <div className="footer_links">
              <Link
                className="ft-link"
                href={"https://www.facebook.com/share/1JdBspVFAa/"}
              >
                <span className="flex gap-2">
                  <Facebook className="yellow" />
                  Facebook
                </span>
              </Link>
              <Link
                className="ft-link"
                href={
                  "https://www.instagram.com/businesshubworkspace?igsh=MTlkZ3liMzVubTJhdw=="
                }
              >
                <span className="flex gap-2">
                  <Instagram className="yellow" />
                  Instagram
                </span>
              </Link>
              <Link
                className="ft-link"
                href={
                  "https://youtube.com/@businesshubworkspace?si=9YJic6Eo5YP45kfn"
                }
              >
                <span className="flex gap-2">
                  <Youtube className="yellow" />
                  Youtube
                </span>
              </Link>
              <Link
                className="ft-link"
                href={
                  "https://www.tiktok.com/@businesshubworkspace?_t=ZS-8vaGvoE92pQ&_r=1"
                }
              >
                <span className="flex gap-2">
                  <FaTiktok className="yellow w-6 h-6" />
                  Tiktok
                </span>
              </Link>
              <Link className="ft-link" href={"/"}>
                <span className="flex gap-2">
                  <FaLinkedin className="yellow w-6 h-6" />
                  LinkedIn
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-[90%]" />
      <div className="footer_line w-full p-[2%] flex justify-center items-center">
        <span className="yellow">Copyright © 2025 Business Hub Workspace</span>
      </div>
    </footer>
  );
};

export default Footer;
