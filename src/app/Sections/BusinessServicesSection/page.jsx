"use client";

import { useState } from "react";
import {
  Search,
  Package,
  Lightbulb,
  Users,
  Handshake,
  Cog,
  NotebookPen,
  GraduationCap,
  Microchip,
  Factory,
} from "lucide-react";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "Product Hunting",
      description:
        "We help identify high-demand, low-competition products to maximize your sales and market potential.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Product Sourcing",
      description:
        "We connect you with reliable suppliers to ensure quality products at the best possible prices.",
      icon: <Package className="h-6 w-6" />,
    },
    {
      title: "Niched Market",
      description:
        "We target specific, profitable market segments to help your business grow with focused customer reach.",
      icon: <Factory className="h-6 w-6" />,
    },
    {
      title: "Marketing Support",
      description:
        "We provide strategic marketing assistance to boost your brand visibility, engagement, and business growth effectively.",
      icon: <Handshake className="h-6 w-6" />,
    },
    {
      title: "Networking Event",
      description:
        "We organize professional networking events to connect you with potential partners, clients, and industry experts.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Traning & Development",
      description:
        "We offer skill-building programs to enhance employee performance, productivity, and professional growth across various roles.",
      icon: <Cog className="h-6 w-6" />,
    },
    {
      title: "Consultancy Services",
      description:
        "We provide expert consultancy to guide your business decisions, ensuring strategic growth and long-term success.",
      icon: <NotebookPen className="h-6 w-6" />,
    },
    {
      title: "Strategy & Planing",
      description:
        "We craft tailored strategies and actionable plans to help your business achieve sustainable growth and goals",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Research & Development",
      description:
        "We conduct in-depth research and innovative development to create effective solutions and drive business advancement.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Modern Technologies",
      description:
        "We leverage cutting-edge technologies to streamline operations, enhance efficiency, and keep your business future-ready.",
      icon: <Microchip className="h-6 w-6" />,
    },
  ];

  return (
    <section id="bussiness" className="p-[5%] big_screen w-full flex flex-col items-center">
      <div className="container ">
        <div className=" flex flex-col items-center w-full">
          <div className="mb-20 flex justify-center">
            <h2 className="sub_heading">
              <span className="yellow">Business</span> Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="relative overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-[1px] bg-[#f7d02e] transition-all duration-700 ease-in-out ${
                      activeService === index ? "w-full" : "w-0"
                    }`}
                  ></div>

                  <div className="pt-8 pb-6 flex items-start">
                    <div className="mr-5 opacity-80">{service.icon}</div>
                    <div>
                      <span className="sub_point blue mb-3">
                        {service.title}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom border that animates */}
                  <div
                    className={`absolute bottom-0 right-0 h-[1px] bg-[#f7d02e] transition-all duration-700 ease-in-out ${
                      activeService === index ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-24 text-center">
            <a
              href="#"
              className="inline-block border-b border-[#f7d02e] pb-1 text-sm tracking-wide hover:pb-2 transition-all duration-300"
            >
              View all services
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
