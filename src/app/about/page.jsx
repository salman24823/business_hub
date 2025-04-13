import Image from "next/image"
import { Award, Users, MessageSquare } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative ">
        
        <div className="w-full">
          <div className="h-[90vh] flex justify-center items-center bg-[linear-gradient(to_top,_#0A0C20_60%,_#1A1C33_90%,_#f5f5f5_100%)]">
            <div className="max-w-2xl">
              <h1 className="sub_heading w-full text-center yellow">
                <span className="">About</span> Us
              </h1>
              <p className="text-xl text-gray-400 mb-8">Creating innovative workspaces for tomorrow's visionaries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="p-[5%]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gray-800">Our Story</h2>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-gray-600 mb-6">
                Founded in 2015, Business Hub began with a simple vision: to create workspaces that inspire creativity,
                foster collaboration, and empower businesses to reach their full potential.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a single coworking space in the heart of the city has grown into a network of premium
                business hubs across the country, each designed with the modern professional in mind.
              </p>
              <p className="text-gray-600">
                Our journey has been defined by innovation, quality, and an unwavering commitment to our members'
                success. As we continue to grow, we remain dedicated to providing exceptional workspaces that adapt to
                the evolving needs of today's businesses.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Office Space 1"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-8 shadow-md">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Office Space 2"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-8 shadow-md">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Office Space 3"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Office Space 4"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Our Core Values</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600">
              At Business Hub, our values guide everything we do. They shape our culture, inform our decisions, and
              define our approach to creating exceptional workspace experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg hover:transform hover:-translate-y-2">
              <div className="text-yellow-400 mb-4">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our business, from the design of our spaces to the quality
                of our services and the experiences we create for our members.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg hover:transform hover:-translate-y-2">
              <div className="text-yellow-400 mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Community</h3>
              <p className="text-gray-600">
                We believe in the power of community and connection. Our spaces are designed to bring people together,
                foster collaboration, and create opportunities for meaningful relationships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg hover:transform hover:-translate-y-2">
              <div className="text-yellow-400 mb-4">
                <MessageSquare className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and continuously seek new ways to enhance our spaces, services, and member
                experiences. We're committed to staying ahead of trends and anticipating the future needs of businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-gray-800">10+</div>
              <div className=" text-lg font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-gray-800">15</div>
              <div className=" text-lg font-medium">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-gray-800">5,000+</div>
              <div className=" text-lg font-medium">Happy Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2 text-gray-800">98%</div>
              <div className=" text-lg font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Meet Our Leadership Team</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Our diverse team of experts brings together decades of experience in real estate, hospitality, technology,
              and business management to create exceptional workspace solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="text-center">
                <div className="rounded-full overflow-hidden h-48 w-48 mx-auto mb-6 shadow-md">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Team Member ${member}`}
                    alt={`Team Member ${member}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Team Member {member}</h3>
                <p className=" font-medium mb-4">Position Title</p>
                <p className="text-gray-600">
                  Brief description about the team member and their expertise in the industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
     
    </div>
  )
}









// import React from "react";
// import AboutUs from "../Sections/AboutUs/page";
// import HeroSection from "../Sections/HeroSection/page";
// import VisionSection from "../Sections/VisionSection/page";
// import AboutEndSection from "../Sections/AboutEndSection/page";
// import { Button } from "@heroui/react";

// const about = () => {
//   return (
//     <>
//       <div className="w-full h-[90vh] bg-gradient-to-r from-slate-200 to-gray-500 bg-cover bg-no-repeat ">
//         <div className="filter p-[5%] w-full h-full flex items-center">
//           <div className="flex flex-col gap-4 w-full">
//             <h1 className="main_heading">
//               <span className="yellow">About</span> Us
//             </h1>
//             <p className="text-white p2para">
//               Our business hub is a dynamic ecosystem designed to empower
//               entrepreneurs, startups, and enterprises with smart rental spaces,
//               cutting-edge IT solutions, expert financial guidance, and
//               strategic advisory. We provide the tools, support, and environment
//               to transform ideas into impactful ventures and help businesses
//               grow, innovate, and lead confidently.
//             </p>
//             <div>
//               <Button className="rounded-md yellow-bg font-bold">
//                 Book Now
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <AboutUs />
//       <VisionSection />
//       <AboutEndSection />
//     </>
//   );
// };

// export default about;
