import React from "react";
import { Button } from "@heroui/react";

const ServiceSection = () => {
  return (
    <main className="p-[5%] w-full">
      <div className="p-[5%]">
        <h2 className="main_blue uppercase w-full">
          what <span className="yellow">we</span> Offers{" "}
          <span className="yellow">...</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-auto md:grid-rows-3 gap-5">
        {/* 1st-div */}
        <div className="card_hover md:col-span-5 md:row-span-2 h-[50vh] md:h-[100vh] bg-[url(/menu1.jpg)] bg-cover bg-no-repeat">
          <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
            <div className="space-y-3">
              <h3 className="text-xl md:text-3xl font-bold text-white">
                Executive Offices
              </h3>
              <p className="text-white w-full md:w-[80%]">
                Premium executive offices with modern furnishings, advanced
                amenities, and a professional environment designed for business
                success.
              </p>
            </div>
          </div>
        </div>
        {/* 2nd-div */}
        <div className="card_hover md:col-span-4 md:row-span-1 h-[30vh] md:h-auto bg-[url(/menu2.jpg)] bg-cover bg-no-repeat">
          <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
            <div className="space-y-3">
              <h3 className="text-xl md:text-3xl font-bold text-white">
                Meeting Rooms
              </h3>
              <p className="text-white w-full md:w-[80%]">
                Fully equipped meeting rooms with modern technology, comfortable
                seating, and a professional atmosphere for productive
                discussions.
              </p>
            </div>
          </div>
        </div>
        {/* 3rd-div */}
        <div className="card_hover md:col-span-3 md:row-span-1 h-[30vh] md:h-auto bg-[url(/menu3.jpg)] bg-cover bg-no-repeat">
          <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
            <div className="space-y-3">
              <h3 className="text-xl md:text-3xl font-bold text-white">
                Conference Hall
              </h3>
              <p className="text-white w-full md:w-[80%]">
                Spacious and well-equipped conference hall, perfect for hosting
                corporate meetings, seminars, and large business events
                professionally.
              </p>
            </div>
          </div>
        </div>
        {/* 4th-div */}
        <div className="ser_card md:col-span-3 md:row-span-1 p-5 md:p-10 rounded-lg">
          <div className="flex flex-col gap-10 md:justify-between w-[100%] h-[100%]">
            <span className="text-xl md:text-3xl font-bold">THE SERVICE</span>
            <p className="text-start">
              Discover a variety of office spaces tailored to your needs From
              executive suites to open workspaces, find the perfect fit.
            </p>
            <Button className="yellow-bg rounded-lg text-white font-bold text-lg">
              Explore More
            </Button>
          </div>
        </div>
        {/* 5th-div */}
        <div className="card_hover md:col-span-4 md:row-span-1 h-[30vh] md:h-auto bg-[url(/menu4.jpg)] bg-cover bg-no-repeat">
          <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
            <div className="space-y-3">
              <h3 className="text-xl md:text-3xl font-bold text-white">
                Regular Offices
              </h3>
              <p className="text-white w-full md:w-[80%]">
                Comfortable and functional regular offices with essential
                amenities, ideal for businesses seeking a productive and
                professional workspace.
              </p>
            </div>
          </div>
        </div>
        {/* 6th-div */}
        <div className="card_hover md:col-span-8 md:row-span-1 h-[30vh] md:h-auto bg-[url(/im.JPG)] bg-cover bg-no-repeat">
          <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
            <div className="space-y-3">
              <h3 className="text-xl md:text-3xl font-bold text-white">
                Open Workspace
              </h3>
              <p className="text-white w-full md:w-[80%]">
                Collaborative open workspace with modern design, flexible
                seating, and a dynamic environment to enhance creativity and
                productivity.
              </p>
            </div>
          </div>
        </div>
        {/* 7th-div */}
        <div className="card_hover md:col-span-4 md:row-span-1 h-[30vh] md:h-auto bg-[url(/slider3.jpg)] bg-cover bg-no-repeat">
          <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
            <div className="space-y-3">
              <h3 className="text-xl md:text-3xl font-bold text-white">
                Shops
              </h3>
              <p className="text-white w-full md:w-[80%]">
                Prime retail shops in a high-traffic location, offering
                excellent visibility and a perfect space to grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceSection;

// import React from "react";
// import { Button } from "@heroui/react";

// const ServiceSection = () => {
//   return (
//     <main className="p-[5%] w-full">
//       <div className="p-[5%]">
//         <h2 className="main_blue uppercase w-full ">
//           what <span className="yellow">we</span> Offers{" "}
//           <span className="yellow">...</span>
//         </h2>
//       </div>
//       <div className="grid grid-cols-12 grid-rows-3 gap-5">
//         {/* 1st-div */}
//         <div className="card_hover col-span-5 row-span-2 h-[100vh] bg-[url(/menu1.jpg)] bg-cover bg-no-repeat">
//           <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
//             <div className="space-y-3">
//               <h3 className="text-3xl font-bold text-white">Executive Offices</h3>
//               <p className=" text-white w-[80%]">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
//                 aperiam vitae! Impedit ducimus, placeat sunt at nisi totam?
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* 2nd-div */}

//         <div className="card_hover col-span-4 row-span-1 bg-[url(/menu2.jpg)] bg-cover bg-no-repeat">
//           <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
//             <div className="space-y-3">
//               <h3 className="text-3xl font-bold text-white">Meeting Rooms</h3>
//               <p className=" text-white w-[80%]">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* 3rd-div */}

//         <div className="card_hover col-span-3 row-span-1 bg-[url(/menu3.jpg)] bg-cover bg-no-repeat">
//           <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
//             <div className="space-y-3">
//               <h3 className="text-3xl font-bold text-white">Conference Hall</h3>
//               <p className=" text-white w-[80%]">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* 4th-div */}

//         <div className="ser_card col-span-3 row-span-1  p-10 rounded-lg ">
//           <div className="flex flex-col justify-between w-[100%] h-[100%] ">
//             <span className="text-3xl font-bold">THE SERVICE</span>
//             <p className="text-start">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
//               commodi!
//             </p>
//             <Button className=" yellow-bg rounded-lg text-white font-bold text-lg">
//               Explore More
//             </Button>
//           </div>
//         </div>
//         {/* 5th-div */}

//         <div className="card_hover col-span-4 row-span-1 bg-[url(/menu4.jpg)] bg-cover bg-no-repeat">
//           <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
//             <div className="space-y-3">
//               <h3 className="text-3xl font-bold text-white">
//                 Regular Offices
//               </h3>
//               <p className=" text-white w-[80%]">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
//                 aperiam vitae!
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* 6th-div */}
//         <div className="card_hover col-span-8 row-span-1 bg-[url(/im.JPG)] bg-cover bg-no-repeat">
//           <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
//             <div className="space-y-3">
//               <h3 className="text-3xl font-bold text-white">
//                 Executive Lounges
//               </h3>
//               <p className=" text-white w-[80%]">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
//                 aperiam vitae!
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* 7th-div */}
//         <div className="card_hover col-span-4 row-span-1 bg-[url(/slider3.jpg)] bg-cover bg-no-repeat">
//           <div className="card_hover_animation filter w-full h-[100%] flex flex-col justify-end gap-5 p-[5%]">
//             <div className="space-y-3">
//               <h3 className="text-3xl font-bold text-white">
//                 Shops
//               </h3>
//               <p className=" text-white w-[80%]">
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
//                 aperiam vitae!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ServiceSection;
