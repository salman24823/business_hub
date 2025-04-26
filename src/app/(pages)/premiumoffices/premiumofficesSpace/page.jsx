"use client"

import { Button } from "@heroui/react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import Image from "next/image"

const PremiumOfficeSpace = () => {
  const scrollContainerRef = useRef(null)

  const Edata = [
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
  ]

  useEffect(() => {
    // Register Draggable plugin
    gsap.registerPlugin(Draggable)

    const container = scrollContainerRef.current

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
          })
        },
      })

      // Add mouse wheel support for horizontal scrolling
      const handleWheel = (e) => {
        if (container) {
          e.preventDefault()
          // Smooth scroll with GSAP
          gsap.to(container, {
            scrollLeft: container.scrollLeft + e.deltaY,
            duration: 0.5,
            ease: "power1.out",
          })
        }
      }

      container.addEventListener("wheel", handleWheel)

      return () => {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])

  return (
    <div className="w-full  bg-white  flex flex-col">
      <div className="sub_heading p-[5%]">
        <span className="yellow">P2</span> Offices
      </div>

      <div className="overflow-hidden w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 cursor-grab active:cursor-grabbing  border-gray-300 border-t px-[5%]"
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            paddingBottom: "20px",
          }}
        >
          {Edata.map((data, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center bg-white overflow-hidden p-8 border-gray-300 border-r"
              style={{ width: "calc(33.333% - 16px)" }} // Exactly 1/3 of container width minus gap
            >
              <div className="">
                <Image className="w-full h-auto rounded-sm" src={data.source || "/placeholder.svg"} alt="" />
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
  )
}

export default PremiumOfficeSpace



