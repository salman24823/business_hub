import { Button } from "@heroui/react";
import React from "react";
import Form from "../Sections/Form/page";

const openspaces = () => {
  return (
    <section>
      <div className="w-full h-[100vh] bg-[url(/mazer9.JPG)] bg-cover bg-no-repeat ">
        <div className="filter p-[5%] w-full h-full flex items-center">
          <div className="flex flex-col gap-4">
            <h1 className="main_heading">
              <span className="yellow">Open</span> Spaces
            </h1>
            <p className="text-white p2para">
              Open spaces provide a collaborative and flexible work environment,
              promoting creativity and teamwork. With modern amenities and a
              dynamic atmosphere, they are ideal for startups, freelancers, and
              innovative professionals seeking productivity and networking
              opportunities.
            </p>
            <div>
              <Button className="rounded-md yellow-bg font-bold text-whi">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="p2contant">
        
      </div>
      <Form />
    </section>
  );
};

export default openspaces;
