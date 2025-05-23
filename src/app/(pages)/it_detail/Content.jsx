import React from "react";
import Form from "../../Sections/Form/page";
import { CircleDollarSign, Code, Mail, Newspaper, PenTool, PodcastIcon, PresentationIcon } from "lucide-react"
import { TbSettingsSearch } from "react-icons/tb"
import { RiAdvertisementFill } from "react-icons/ri"
import { MdMobileFriendly } from "react-icons/md"
import { FaPaintBrush, FaShoppingBag } from "react-icons/fa"

const Content = ({ data }) => {
  if (data.length === 0) return <p>No data found.</p>;

  const features = [
    {
      id: 1,
      icon: <Code className="yellow w-10 h-10" />,
      title: "Web Development",
      slug: "web-development",
      description: "Custom websites are built to enhance both performance and user experience.",
    },
    {
      id: 2,
      icon: <TbSettingsSearch className="yellow w-10 h-10" />,
      title: "SEO Services",
      description: "Boost your visibility with data-driven SEO strategies.",
      slug: "seo",
    },
    {
      id: 3,
      icon: <RiAdvertisementFill className="yellow w-10 h-10" />,
      title: "Social Media Marketing",
      description: "Grow your brand with targeted social media campaigns.",
      slug: "social-media-marketing",
    },
    {
      id: 4,
      icon: <MdMobileFriendly className="yellow w-10 h-10" />,
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
      icon: <FaPaintBrush className="yellow w-10 h-10" />,
      title: "Graphics & UI/UX Design",
      description: "Visually stunning and intuitive interfaces.",
      slug: "graphics-ui-ux-design",
    },
    {
      id: 7,
      icon: <PenTool className="yellow w-10 h-10" />,
      title: "Video Editing",
      description: "Professional video production to showcase your brand.",
      slug: "video-editing",
    },
    {
      id: 8,
      icon: <PresentationIcon className="yellow w-10 h-10" />,
      title: "Digital Consulting",
      description: "Expert guidance to maximize your online potential.",
      slug: "digital-consulting",
    },
    {
      id: 9,
      icon: <PodcastIcon className="yellow w-10 h-10" />,
      title: "Podcasting",
      description: "Expert IT services for podcast setup, editing, and distribution support.",
      slug: "podcasting",
    },
    {
      id: 10,
      icon: <CircleDollarSign className="yellow w-10 h-10" />,
      title: "Digital Trading Service",
      description: "IT services for digital trading, including platforms, tools, and support.",
      slug: "digital-trading-service",
    },
    {
      id: 11,
      icon: <Newspaper className="yellow w-10 h-10" />,
      title: "Social Media Influence",
      slug: "social-media-influence",
      description:
        "We teach and guide you on becoming an impactful influencer, helping you build a powerful social media presence.",
    },
    {
      id: 12,
      icon: <Mail className="yellow w-10 h-10" />,
      title: "Email Marketing",
      slug: "email-marketing",
      description: "Drive engagement and conversions with targeted, personalized email marketing campaigns.",
    },
  ]

  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="overflow-hidden flex flex-col items-center"
        >
          <div className="w-[150%] h-[80vh] gap-6 px-[5%] flex flex-col justify-center items-center lightblue_bg bottom_style">
            <h2 className="sub_heading text-white">{item.dataTitle}</h2>
            {item.description && (
              <span className="text-white text-center w-[50%]">
                {item.description}
              </span>
            )}
          </div>
          <div className="grid px-[5%] grid-cols-6">

            <div className="services_include col-span-4 p-[5%] flex flex-col w-full gap-6">


              {item.subTitle2 && (
                <h2 className="text-3xl font-bold">{item.subTitle2}</h2>
              )}

              {item.points &&
                item.points.map((point, index) => (
                  <p key={index} className="text-gray-700">
                    • {point}
                  </p>
                ))}
              <div>
                {item.subTitle3 && (
                  <h3 className="text-3xl font-bold">{item.subTitle3}</h3>
                )}
                <div className="flex mt-6 flex-wrap gap-3">
                  {item.technologies &&
                    item.technologies.map((point, index) => (
                      <p key={index} className="border text-nowrap border-gray-300 hover:-translate-y-1 transition px-5 rounded-md py-3 text-gray-700">
                        {point}
                      </p>
                    ))}
                </div>
              </div>
              <div>
                {item.subTitle4 && (
                  <h3 className="text-3xl mb-5 font-bold">{item.subTitle4}</h3>
                )}
                {item.whyChooseUs && (
                  <p className="">{item.whyChooseUs}</p>
                )}
              </div>

            </div>


            <div className="col-span-2 space-y-3 py-8">
              {features.map((feature, index) => (
                <a
                  href={`/it_detail?params=${feature.id}`}
                  key={index}
                  className="group hover:cursor-pointer flex items-start gap-5 rounded-lg border border-gray-100 bg-white p-4 transition-all duration-300 ease-in-out hover:border-gray-200 hover:bg-gray-50 hover:shadow-sm md:p-5"
                >
                  <div className="flex-shrink-0">
                    <div className="relative h-10 w-10 overflow-hidden rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-1 text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                      {feature.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                      {feature.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>


          </div>

        </div>
      ))}
      <Form />
    </>
  );
};

export default Content;
