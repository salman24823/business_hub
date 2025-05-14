import Image from "next/image";
import { Award, Users, MessageSquare } from "lucide-react";
import image1 from "../../../../public/pic-1.jpg";
import image2 from "../../../../public/pic-2.jpg";
import image3 from "../../../../public/pic-3.jpg";
import image4 from "../../../../public/pic-4.jpg";
import ceo from "../../../../public/ceo.jpg";
import ceo2 from "../.../../../../../public/ceo-2.jpg";
import director from "../../../../public/ceo-img.jpg";

export default function AboutUsPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Abdur Rehman",
      position: "Director",
      image: director,
      description:
        "Tech innovator and IT expert with a decade of leadership in workspace solutions and digital transformation.",
    },
    {
      id: 2,
      name: "Mehboob Anjum",
      position: "CEO",
      image: ceo,
      description:
        "Leader with a decade of experience in workspace innovation and real estate solutions.",
    },
    {
      id: 3,
      name: "Naeem ur Rehman",
      position: "Managing Head",
      image: ceo2,
      description:
        "Expert in operational excellence and customer-centric workspace management.",
    },
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative ">
        <div className="w-full flex flex-col items-center">
          <div className="h-[80vh] flex justify-center items-center lightblue_bg w-[150%] bottom_style">
            <div className="max-w-2xl">
              <h1 className="sub_heading w-full text-center yellow">
                <span className="">About</span> Us
              </h1>
              <p className="text-xl text-white mb-8 text-center px-2">
                Creating innovative workspaces for tomorrow&rsquo;s visionaries
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="p-[5%] big_screen">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-yellow-400 flex flex-col gap-"></div>
              <div className="flex flex-col gap-4 lg:w-[90%] py-3">
                <p className="text-gray-600 ">
                  At Business Hub, we don&rsquo;t just build businesses — we
                  build futures.
                </p>
                <p className="text-gray-600 ">
                  It all started with a simple idea: create a space where fresh
                  talent turns into future leaders. A place where ambition is
                  guided, and dreams are shaped into reality.
                </p>
                <p className="text-gray-600">
                  More than just an office, Business Hub is a culture — of
                  growth, collaboration, and transformation. With 24/7 power,
                  security, and inspiring coworking spaces, we offer everything
                  you need to rise.
                </p>
                <p className="text-gray-600">
                  Led by a visionary CEO driven by innovation and
                  entrepreneurship, we&rsquo;re here to support every step of
                  your journey — from your first day to your biggest
                  breakthrough.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <Image
                  src={image1}
                  alt="Office Space 1"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-8 shadow-md">
                <Image
                  src={image2}
                  alt="Office Space 2"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 mt-8 shadow-md">
                <Image
                  src={image3}
                  alt="Office Space 3"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64 shadow-md">
                <Image
                  src={image4}
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
      <section className="p-[5%] big_screen bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600">
              At Business Hub, our values guide everything we do. They shape our
              culture, inform our decisions, and define our approach to creating
              exceptional workspace experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg hover:transform hover:-translate-y-2">
              <div className="text-yellow-400 mb-4">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our business, from
                the design of our spaces to the quality of our services and the
                experiences we create for our members.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg hover:transform hover:-translate-y-2">
              <div className="text-yellow-400 mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Community
              </h3>
              <p className="text-gray-600">
                We believe in the power of community and connection. Our spaces
                are designed to bring people together, foster collaboration, and
                create opportunities for meaningful relationships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover:shadow-lg hover:transform hover:-translate-y-2">
              <div className="text-yellow-400 mb-4">
                <MessageSquare className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace innovation and continuously seek new ways to enhance
                our spaces, services, and member experiences. W&rsquo;re
                committed to staying ahead of trends and anticipating the future
                needs of businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="p-[5%] big_screen">
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
              <div className="text-5xl font-bold mb-2 text-gray-800">
                5,000+
              </div>
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
      <section className="p-[5%] big_screen bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Meet Our Leadership Team
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Our diverse team of experts brings together decades of experience
              in real estate, hospitality, technology, and business management
              to create exceptional workspace solutions.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300"
              >
                {/* Image */}
                <div className="rounded-full overflow-hidden h-40 w-40 mx-auto mb-6">
                  <Image
                    src={
                      member.image ||
                      `/placeholder.svg?height=200&width=200&text=${encodeURIComponent(
                        member.name
                      )}`
                    }
                    alt={member.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>

                {/* Position */}
                <p className="text-yellow-500 font-medium mb-4">
                  {member.position}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
