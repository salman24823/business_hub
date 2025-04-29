"use client";
import {
  CircleDollarSign,
  Code,
  Mail,
  Newspaper,
  PenTool,
  PodcastIcon,
  PresentationIcon,
} from "lucide-react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbSettingsSearch } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdMobileFriendly } from "react-icons/md";
import { FaPaintBrush, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import Detail from "../../(pages)/it_detail/page";

const ITservices = () => {
  const features = [
    {
      id: 1,
      icon: <Code className="yellow w-16 h-16" />,
      title: "Web Development",
      slug: "web-development",
      description:
        "Custom websites are built to enhance both performance and user experience.",
    },
    {
      id: 2,
      icon: <TbSettingsSearch className="yellow w-16 h-16" />,
      title: "SEO",
      description: "Boost your visibility with data-driven SEO strategies.",
      slug: "seo",
    },
    {
      id: 3,
      icon: <RiAdvertisementFill className="yellow w-16 h-16" />,
      title: "Social Media Marketing",
      description: "Grow your brand with targeted social media campaigns.",
      slug: "social-media-marketing",
    },
    {
      id: 4,
      icon: <MdMobileFriendly className="yellow w-16 h-16" />,
      title: "App Development",
      description: "Native and cross-platform apps for seamless experiences.",
      slug: "app-development",
    },
    {
      id: 5,
      icon: <FaShoppingBag className="yellow w-14 h-14" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payments and inventory.",
      slug: "e-commerce-solutions",
    },
    {
      id: 6,
      icon: <FaPaintBrush className="yellow w-16 h-16" />,
      title: "Graphics & UI/UX Design",
      description: "Visually stunning and intuitive interfaces.",
      slug: "graphics-ui-ux-design",
    },
    {
      id: 7,
      icon: <PenTool className="yellow w-16 h-16" />,
      title: "Video Editing",
      description: "Professional video production to showcase your brand.",
      slug: "video-editing",
    },
    {
      id: 8,
      icon: <PresentationIcon className="yellow w-16 h-16" />,
      title: "Digital Consulting",
      description: "Expert guidance to maximize your online potential.",
      slug: "digital-consulting",
    },
    {
      id: 9,
      icon: <PodcastIcon className="yellow w-16 h-16" />,
      title: "Podcasting",
      description:
        "Expert IT services for podcast setup, editing, and distribution support.",
      slug: "podcasting",
    },
    {
      id: 10,
      icon: <CircleDollarSign className="yellow w-16 h-16" />,
      title: "Digital Trading Service",
      description:
        "IT services for digital trading, including platforms, tools, and support.",
      slug: "digital-trading-service",
    },
    {
      id: 11,
      icon: <Newspaper className="yellow w-16 h-16" />,
      title: "Social Media Influence",
      slug: "social-media-influence",
      description:
        "We teach and guide you on becoming an impactful influencer, helping you build a powerful social media presence.",
    },
    {
      id: 12,
      icon: <Mail className="yellow w-16 h-16" />,
      title: "Email Marketing",
      slug: "email-marketing",
      description:
        "Drive engagement and conversions with targeted, personalized email marketing campaigns.",
    },
  ];

  return (
    <main
      id="IT-service"
      className="p-[5%] flex flex-col items-center gap-12 big_screen"
    >
      <div className="flex flex-col gap-1 items-center">
        <h2 className="sub_heading yellow">
          <span className="blue">IT</span>Services
        </h2>
        <p className="sub_point blue xl:w-[60%] text-center">
          Empowering businesses with cutting-edge technology solutions to drive
          growth and innovation in the digital era.
        </p>
      </div>

      {/* main-div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {/* Feature Cards */}

        {features.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="relative itservices_card sm:col-span-1 flex flex-col items-center yellow"
          >
            <div className="w-20 h-20 p-3 rounded-[50%] flex justify-center items-center">
              <span>{icon}</span>
            </div>
            <span className="text-[1.4rem] font-bold text-center blue">
              {title}
            </span>
            <p className="text-[16px] text-center text-gray-500">
              {description}
            </p>
            <div className="service_card_hover w-full h-[110%] absolute flex justify-center items-center yellow-bg">
              <Link
                href={`/it_detail?params=${id}`}
                className="flex gap-1 items-center border-none yellow-bg text-white px-6 rounded-md font-bold text-2xl"
              >
                <p>Read More</p>
                <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* <Detail features /> */}
    </main>
  );
};

export default ITservices;
