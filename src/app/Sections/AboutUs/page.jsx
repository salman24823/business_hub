import abt_img from "../../../../public/abt-hero.jpg";
import Image from "next/image";
import {
  HouseWifi,
  Projector,
  Building2,
  Cctv,
  MapPin,
  Clock,
  Phone,
} from "lucide-react";
import { Button } from "@heroui/react";

const AboutUs = () => {
  return (
    <div className="p-[5%]">
      <div className="flex justify-center items-center gap-10">
        {/* Left-side */}
        <div>
          <span className="yellow point">About Us</span>
          <h2 className="sub_blue">LEVELING UP YOUR CREATIVE MIND</h2>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            temporibus repudiandae culpa minus est aut provident dolore adipisci
            facilis ea quos eos sit accusamus modi commodi tenetur, distinctio
            qui rem!
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-8 justify-center items-center gap-10 my-10">
            <div className="flex col-span-4 gap-5">
              <div>
                <HouseWifi className="w-24 h-24 yellow" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="sub_blue">120</h2>
                <p className="para">Office Rooms</p>
              </div>
            </div>
            <div className="flex col-span-4 gap-5">
              <div>
                <Projector className="w-24 h-24 yellow" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="sub_blue">80</h2>
                <p className="para">Meeting Rooms</p>
              </div>
            </div>
            <div className="flex col-span-4 gap-5">
              <div>
                <Building2 className="w-24 h-24 yellow" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="sub_blue">6</h2>
                <p className="para">No. of Floors</p>
              </div>
            </div>
            <div className="flex col-span-4 gap-5">
              <div>
                <Cctv className="w-24 h-24 yellow" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="sub_blue">24/7</h2>
                <p className="para">CCTV Security</p>
              </div>
            </div>
          </div>

          <div>
            <Button className="web-btn yellow-bg">Read more</Button>
          </div>
        </div>

        {/* Right-side */}
        <div className="relative">
          <div className="flex flex-col justify-center items-center absolute w-[300px] h-[200px] top-0 right-0 yellow-bg ">
            <div className="space-y-2 p-3">
              <div className="flex justify-start items-start gap-2">
                <MapPin />
                <p className="para">Location: D-Ground, Satiyana Road</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Clock />
                <p className="para">Time : Mon - Sat : 7am - 8pm</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <Phone />
                <p className="para">Phone: +92 301 6669681</p>
              </div>
            </div>
          </div>
          <Image src={abt_img} className="p-10" alt="About Us Image" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
