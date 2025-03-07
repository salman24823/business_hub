import Image from "next/image";
import React from "react";
import logo from "../../../../public/logo.svg";
import workspace from "../../../../public/workspace.png";
import { MapPin, Phone, ChevronRight, Mail } from "lucide-react";
import { Button } from "@heroui/react";
import { FaFacebookF } from "react-icons/fa";
import { RiWhatsappLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="blue_bg flex flex-col items-center">
      <div className="footer_child_1 p-[5%] flex flex-col gap-20  md:flex-row md:justify-between w-full">
        <div className="">
        <h2 className="sub_heading uppercase text-white">Join <br /><span className="yellow">newsletter</span></h2>
        </div>
        <div className="flex items-end overflow-hidden ">
          <form className="Sub_form flex flex-col gap-4 lg:gap-6 ">
            <label htmlFor="" className="text-white text-2xl font-bold">Stay Up To Date</label>
            <div className="bg-white flex items-center lg:gap-6 p-2 overflow-hidden rounded-lg">
            <input type="email" required placeholder="Enter yor Email" className="email_input bg-transparent p-2 w-[70%]" />
            <Button type='submit' className="web-btn yellow-bg text-white">Subcribe Now</Button>
            </div>
          </form>
          
        </div>
      </div>
      <div className="footer_child_2 px-[5%] py-[2%] grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        <div className="footer_cards flex flex-col gap-6 col-span-1 lg:col-span-4 ">
          <div className="flex items-end">
          <Image src={logo}  className="w-32"/>
          <div>
          <span className="yellow text-4xl font-bold">Business Hub</span>
          <Image src={workspace} className="w-48"/>
          </div>
          </div>
          <p className="text-white pl-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, voluptate! Consequuntur dolore sapiente hic illum, ad omnis velit molestias enim?</p>
        </div>
        <div className="footer_cards col-span-1 lg:col-span-3 p-5 ">
          <span className="point yellow">Quick Links</span>
          <div className="footer_links ">
            <Link className="ft-link" href={"/"}>Home</Link>
            <Link className="ft-link" href={"/"}>About</Link>
            <Link className="ft-link" href={"/"}>Services</Link>
            <Link className="ft-link" href={"/"}>Pages</Link>
            <Link className="ft-link" href={"/"}>Blogs</Link>
          </div>
        </div>
        <div className="footer_cards col-span-1 lg:col-span-2 p-5 lg:py-5 ">
        <span className="point yellow">Futher Links</span>
          <div className="footer_links">
            <Link className="ft-link" href={"/"}>Terms and Conditions</Link>
            <Link className="ft-link" href={"/"}>News</Link>
            <Link className="ft-link" href={"/"}>Recruitment</Link>
          </div>
        </div>
        <div className="footer_cards col-span-1 lg:col-span-3 flex-col gap-5 lg:items-end">
        <div className="p-5 ">
        <span className="point yellow">Futher Links</span>
          <div className="footer_links">
            <Link className="ft-link flex" href={"/"}><MapPin className="yellow" />Terms and Conditions</Link>
            <Link className="ft-link flex" href={"/"}><Phone  className="yellow"/>Recruitment</Link>
            <Link className="ft-link flex" href={"/"}><Mail   className="yellow"/>News</Link>
          </div>
        </div>
        </div>
      </div>
      <hr className="w-[90%]"/>
      <div className="footer_line w-full p-[2%] flex justify-center items-center">
        <span className="yellow">Copyright © 2025 Business Hub Workspace</span>
      </div>
    </footer>
  );
};

export default Footer;
