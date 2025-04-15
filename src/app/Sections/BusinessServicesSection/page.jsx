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
        "Comprehensive market analysis to identify profitable product opportunities with high demand and low competition.",
      icon: <Search className="h-6 w-6" />,
    },
    {
      title: "Product Sourcing",
      description:
        "Connect with reliable manufacturers and suppliers to source high-quality products at competitive prices.",
      icon: <Package className="h-6 w-6" />,
    },
    {
      title: "Niched Market",
      description:
        "End-to-end product development services from concept to manufacturing, including design, prototyping, and testing.",
      icon: <Factory className="h-6 w-6" />,
    },
    {
      title: "Marketing Support",
      description:
        "Develop a compelling brand identity and positioning strategy to differentiate your business in the marketplace.",
      icon: <Handshake className="h-6 w-6" />,
    },
    {
      title: "Networking Event",
      description:
        "Professional setup and optimization of your e-commerce store on platforms like Shopify, WooCommerce, or Amazon.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Traning & Development",
      description:
        "Complete dropshipping solutions including product selection, supplier connections, and automated order fulfillment.",
      icon: <Cog className="h-6 w-6" />,
    },
    {
      title: "Consultancy Services",
      description:
        "Strategic guidance for entering new markets, including competitive analysis, positioning, and go-to-market planning.",
      icon: <NotebookPen className="h-6 w-6" />,
    },
    {
      title: "Strategy & Planing",
      description:
        "Optimize your supply chain operations for efficiency, cost reduction, and improved delivery times.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Research & Development",
      description:
        "Connect with relevant influencers to promote your products and expand your brand reach to targeted audiences.",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      title: "Modern Technologies",
      description:
        "Comprehensive quality assurance services to ensure your products meet industry standards and customer expectations.",
      icon: <Microchip className="h-6 w-6" />,
    },
  ];

  return (
    <section id="bussiness" className="p-[5%]">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
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

          <div className="mt-24 text-center">
            <a
              href="#"
              className="inline-block border-b border-[#f7d02e] pb-1 text-sm tracking-wide hover:pb-2 transition-all duration-300"
            >
              View all services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
