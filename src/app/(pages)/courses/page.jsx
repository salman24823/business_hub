"use client";
import { FaMedal } from "react-icons/fa";
import { MdOutlineHeadphones } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import web from "../../../../public/web.jpg";
import mobile from "../../../../public/mobile.jpg";
import office from "../../../../public/office.jpg";
import ui from "../../../../public/ui.jpg";
import graphic from "../../../../public/graphics.jpg";
import seo from "../../../../public/seo.jpg";
import cyber from "../../../../public/cyber.jpg";
import shopify from "../../../../public/shopify.jpg";
import marketing from "../../../../public/marketing.webp";
import wordpress from "../../../../public/wordpress.png";
import amazon from "../../../../public/amazon.jpg";
import ai from "../../../../public/ai.jpeg";
import video from "../../../../public/video.webp";
import oracle from "../../../../public/oracle.jpg";
import game from "../../../../public/gaming.jpg";

const TrainingWebsite = () => {
  // Sample course data
  const courses = [
    {
      title: "Web Development Bootcamp",
      image: web,
      price: 99.99,
    },
    {
      title: "Mobile App Development",
      image: mobile,
      price: 89.99,
    },
    {
      title: "MS Office",
      image: office,
      price: 79.99,
    },
    {
      title: "UI/UX Design Masterclass",
      image: ui,
      price: 79.99,
    },
    {
      title: "Graphic Designing",
      image: graphic,
      price: 79.99,
    },
    {
      title: "Search Engine Optimization",
      image: seo,
      price: 69.99,
    },
    {
      title: "Cybersecurity Fundamentals",
      image: cyber,
      price: 139.99,
    },
    {
      title: "Shopify Store",
      image: shopify,
      price: 79.99,
    },
    {
      title: "Digital Marketing",
      image: marketing,
      price: 69.99,
    },
    {
      title: "WordPress Development",
      image: wordpress,
      price: 69.99,
    },
    {
      title: "Amazon Ecommerce",
      image: amazon,
      price: 69.99,
    },
    {
      title: "Artificial Intelligence Basics",
      image: ai,
      price: 199.99,
    },
    {
      title: "Video Editing",
      image: video,
      price: 129.99,
    },
    {
      title: "Oracle",
      image: oracle,
      price: 129.99,
    },
    {
      title: "Game Development",
      image: game,
      price: 129.99,
    },
  ];

  return (
    <div className="bg-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mt-60 text-center mb-12">
          <h1 className="text-3xl md:main_heading yellow sub_heading font-bold mb-4">
            Unmatchable Professional Trainings
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Enhance your skills with our industry-leading professional courses
            designed by experts
          </p>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FaMedal alt="Excellence" className="w-8 h-8" />
            </div>
            <h3 className="font-bold point mb-2">Excellence</h3>
            <p className="para">Top-quality training from industry experts</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <PiCertificateBold alt="Certified" className="w-8 h-8" />
            </div>
            <h3 className="font-bold point mb-2">Certified</h3>
            <p className="para">Globally recognized certifications</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MdOutlineHeadphones alt="Support" className="w-8 h-8" />
            </div>
            <h3 className="font-bold point mb-2">24/7 Support</h3>
            <p className="para">Round-the-clock assistance for all students</p>
          </div>
        </section>

        {/* Top Rated Courses */}
        <section className="mb-16">
          <h2 className="point font-bold yellow point mb-8 text-center">
            Our Top Rated Courses
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative">
                  <img
                    src={
                      typeof course.image === "string"
                        ? course.image
                        : course.image.src
                    }
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-indigo-900 mb-2 text-sm">
                    {course.title}
                  </h3>
                  <div className="flex items-center text-yellow-500 text-xs mb-2">
                    {"★".repeat(5)}{" "}
                    <span className="text-gray-500 ml-1">(4.8)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-700 font-bold">
                      ${course.price}
                    </span>
                    <button className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default TrainingWebsite;
