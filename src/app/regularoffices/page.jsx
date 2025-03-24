import { Button } from "@heroui/react";
import { Section } from "lucide-react";
import React from "react";

const regularoffices = () => {
  return (
    <section>
      <div className="w-full h-[100vh] bg-[url(/p2-banner2.JPG)] bg-cover bg-no-repeat ">
          <div className="filter p-[5%] w-full h-full flex items-center">
            <div className="flex flex-col gap-4" >
            <h1 className="main_heading"><span className="yellow">P2</span> Offices</h1>
            <p className="text-white p2para">
            The P2 office at Businesshub Workspace is a collaborative space designed for freelancers and small teams, offering a productive environment for 5-6 people to work seamlessly together.
            </p>
            <div>
            <Button className="rounded-md yellow-bg font-bold text-whi">Book Now</Button>
            </div>
            </div>

          </div>
      </div>
      <div className="p2contant">
        
      </div>
    </section>
  );
};

export default regularoffices;
