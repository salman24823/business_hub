"use client"; // Add this at the top of the file to make this a client-side component

import { Button } from "@heroui/react";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Form from "../Sections/Form/page";

const regularoffices = () => {
  const P2Data = [
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/vision4.JPG",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/vision4.JPG",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/vision4.JPG",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/vision4.JPG",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/vision4.JPG",
    },
    {
      name: "One-Three Person Offices",
      discription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
      source: "/vision4.JPG",
    },
  ];

  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isHorizontalScrollActive, setIsHorizontalScrollActive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false); // Whether the user is scrolling horizontally or vertically

  useEffect(() => {
    // Register Draggable plugin
    gsap.registerPlugin(Draggable);

    const container = scrollContainerRef.current;

    if (container) {
      // Create a draggable instance for horizontal scrolling
      Draggable.create(container, {
        type: "x",
        bounds: { minX: -container.scrollWidth + container.clientWidth, maxX: 0 },
        inertia: true,
        edgeResistance: 0.65,
        throwProps: true,
        onDrag: function () {
          // Use GSAP to animate the scroll position for smoother drag movement
          gsap.to(container, {
            scrollLeft: container.scrollLeft,
            duration: 0.5,
            ease: "power1.out",
          });
        },
      });

      // Add wheel event listener to handle mouse scroll for horizontal scroll
      const handleWheel = (e) => {
        if (container) {
          e.preventDefault(); // Prevent vertical scroll
          
          // Smooth horizontal scroll with GSAP
          gsap.to(container, {
            scrollLeft: container.scrollLeft + e.deltaY, // Adjust scrolling based on wheel movement
            duration: 0.5,
            ease: "power1.out",
          });

          // Mark horizontal scroll active
          setIsHorizontalScrollActive(true);
        }
      };

      container.addEventListener("wheel", handleWheel);

      // Intersection observer for detecting when the section is in view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsScrolling(true); // Activate horizontal scrolling when section comes into view
            } else {
              setIsScrolling(false); // Deactivate horizontal scroll once section is out of view
            }
          });
        },
        { threshold: 0.5 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current); // Observe the section
      }

      return () => {
        container.removeEventListener("wheel", handleWheel);
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, []);

  return (
    <section>
      <div className="w-full h-[100vh] bg-[url(/p2-banner2.JPG)] bg-cover bg-no-repeat ">
        <div className="filter p-[5%] w-full h-full flex items-center">
          <div className="flex flex-col gap-4">
            <h1 className="main_heading">
              <span className="yellow">P2</span> Offices
            </h1>
            <p className="text-white p2para">
              The P2 office at Businesshub Workspace is a collaborative space
              designed for freelancers and small teams, offering a productive
              environment for 5-6 people to work seamlessly together.
            </p>
            <div>
              <Button className="rounded-md yellow-bg font-bold text-whi">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex flex-col">
        <div className="sub_heading p-[5%]">
        Lets Build your
          <span className="yellow"> Career </span>
          with us!
        </div>

        <div className="overflow-hidden w-full">
          <div
            ref={sectionRef}
            className="overflow-hidden w-full"
            style={{
              paddingBottom: "20px",
            }}
          >
            <div
              ref={scrollContainerRef}
              className="flex  cursor-grab active:cursor-grabbing  border-gray-300 border-t px-[5%]"
              style={{
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {P2Data.map((data, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center bg-white overflow-hidden p-8 border-gray-300 border-r"
                  style={{ width: "calc(33.333% - 16px)" }} // Exactly 1/3 of container width minus gap
                >
                  <div className="">
                    <img className="w-full h-auto rounded-sm" src={data.source || "/placeholder.svg"} alt="" />
                  </div>
                  <div className="flex flex-col gap-3 rounded-sm p-3">
                    <strong className="font-bold text-xl">{data.name}</strong>
                    <p className="para text-sm">{data.discription}</p>
                    <Button className="yellow-bg text-white p-3 px-6 font-bold w-full rounded-sm">Book now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Form />
    </section>
  );
};

export default regularoffices;









// "use client"

// import { Button } from "@heroui/react";
// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { Draggable } from "gsap/Draggable";

// const regularoffices = () => {
//   // Data for the P2 Offices
//   const P2Data = [
//     {
//       name: "One-Three Person Offices",
//       discription:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
//       source: "/vision4.JPG",
//     },
//     {
//       name: "One-Three Person Offices",
//       discription:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
//       source: "/vision4.JPG",
//     },
//     {
//       name: "One-Three Person Offices",
//       discription:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
//       source: "/vision4.JPG",
//     },
//     {
//       name: "One-Three Person Offices",
//       discription:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
//       source: "/vision4.JPG",
//     },
//     {
//       name: "One-Three Person Offices",
//       discription:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
//       source: "/vision4.JPG",
//     },
//     {
//       name: "One-Three Person Offices",
//       discription:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam voluptas eos omnis. Unde, perspiciatis aliquam!",
//       source: "/vision4.JPG",
//     },
//   ];

//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     // Register Draggable plugin
//     gsap.registerPlugin(Draggable);

//     const container = scrollContainerRef.current;

//     if (container) {
//       // Create a draggable instance for horizontal scrolling
//       Draggable.create(container, {
//         type: "x",
//         bounds: { minX: -container.scrollWidth + container.clientWidth, maxX: 0 },
//         inertia: true,
//         edgeResistance: 0.65,
//         throwProps: true,
//         onDrag: function () {
//           // Use GSAP to animate the scroll position for smoother drag movement
//           gsap.to(container, {
//             scrollLeft: container.scrollLeft,
//             duration: 0.5,
//             ease: "power1.out",
//           });
//         },
//       });

//       // Add mouse wheel support for horizontal scrolling
//       const handleWheel = (e) => {
//         if (container) {
//           e.preventDefault();
//           // Smooth scroll with GSAP
//           gsap.to(container, {
//             scrollLeft: container.scrollLeft + e.deltaY,
//             duration: 0.5,
//             ease: "power1.out",
//           });
//         }
//       };

//       container.addEventListener("wheel", handleWheel);

//       return () => {
//         container.removeEventListener("wheel", handleWheel);
//       };
//     }
//   }, []);

//   return (
//     <section>
//       <div className="w-full h-[100vh] bg-[url(/p2-banner2.JPG)] bg-cover bg-no-repeat ">
//         <div className="filter p-[5%] w-full h-full flex items-center">
//           <div className="flex flex-col gap-4">
//             <h1 className="main_heading">
//               <span className="yellow">P2</span> Offices
//             </h1>
//             <p className="text-white p2para">
//               The P2 office at Businesshub Workspace is a collaborative space
//               designed for freelancers and small teams, offering a productive
//               environment for 5-6 people to work seamlessly together.
//             </p>
//             <div>
//               <Button className="rounded-md yellow-bg font-bold text-whi">
//                 Book Now
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full bg-white flex flex-col">
//         <div className="sub_heading p-[5%]">
//           <span className="yellow">P2</span> Offices
//         </div>

//         <div className="overflow-hidden w-full">
//           <div
//             ref={scrollContainerRef}
//             className="flex gap-4 cursor-grab active:cursor-grabbing  border-gray-300 border-t px-[5%]"
//             style={{
//               overflowX: "auto",
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//               WebkitOverflowScrolling: "touch",
//               paddingBottom: "20px",
//             }}
//           >
//             {P2Data.map((data, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 flex flex-col items-center bg-white overflow-hidden p-8 border-gray-300 border-r"
//                 style={{ width: "calc(33.333% - 16px)" }} // Exactly 1/3 of container width minus gap
//               >
//                 <div className="">
//                   <img className="w-full h-auto rounded-sm" src={data.source || "/placeholder.svg"} alt="" />
//                 </div>
//                 <div className="flex flex-col gap-3 rounded-sm p-3">
//                   <strong className="font-bold text-xl">{data.name}</strong>
//                   <p className="para text-sm">{data.discription}</p>
//                   <Button className="yellow-bg text-white p-3 px-6 font-bold w-full rounded-sm">Book now</Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// =============
// export default regularoffices;

// import { Button } from "@heroui/react";
// import { Section } from "lucide-react";
// import React from "react";
// import RegularofficesSpace from "./RegularofficesSpace/page";
// import Form from "../Sections/Form/page";

// const regularoffices = () => {
//   return (
//     <section>
//       <div className="w-full h-[100vh] bg-[url(/p2-banner2.JPG)] bg-cover bg-no-repeat ">
//         <div className="filter p-[5%] w-full h-full flex items-center">
//           <div className="flex flex-col gap-4">
//             <h1 className="main_heading">
//               <span className="yellow">P2</span> Offices
//             </h1>
//             <p className="text-white p2para">
//               The P2 office at Businesshub Workspace is a collaborative space
//               designed for freelancers and small teams, offering a productive
//               environment for 5-6 people to work seamlessly together.
//             </p>
//             <div>
//               <Button className="rounded-md yellow-bg font-bold text-whi">
//                 Book Now
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <RegularofficesSpace />
//       <Form />
//     </section>
//   );
// };

// export default regularoffices;
