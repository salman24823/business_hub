import Image from "next/image";
import Link from "next/link";
import cafe_img1 from "../../../../public/cafe-1.jpg";
import { Button } from "@heroui/react";

export default function RooftopWorkspaceCafe() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative h-[100vh] overflow-hidden">
        <div className="absolute inset-0">
          {/* <Image
            src={cafe_img1}
            alt="Rooftop workspace cafe view"
            fill
            sizes="100vw"
            className="object-center object-cover"
            priority
          /> */}
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="text-yellow-300">Business Hub</span> Cafe
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Elevate Your Workspace Experience
          </p>
          <Button className="yellow-bg px-6 font-bold py-2 rounded-lg text-white">
            Coming Soon
          </Button>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Rooftop seating area"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    Rooftop Seating
                  </h3>
                  <p className="text-yellow-300">
                    Perfect for fresh air breaks
                  </p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Coffee bar"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">Coffee Bar</h3>
                  <p className="text-yellow-300">Premium brews all day</p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Collaborative workspace"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    Collaborative Space
                  </h3>
                  <p className="text-yellow-300">
                    Team meetings and brainstorming
                  </p>
                </div>
              </div>
            </div>

            {/* Image 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="City skyline view"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    Panoramic Views
                  </h3>
                  <p className="text-yellow-300">Inspiring city skyline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold yellow mb-6">
                A Workspace Above The City
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Perched atop our office building, SkyWork Café offers
                breathtaking panoramic views and a refreshing environment to
                boost your productivity. Our rooftop workspace combines
                comfortable seating, high-speed internet, and a relaxed
                atmosphere to help you do your best work.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Whether you need a change of scenery from your desk, a place for
                informal meetings, or simply want to enjoy your coffee with a
                view, SkyWork Café provides the perfect setting for all your
                workplace needs.
              </p>
              <div className="flex space-x-4">
                <div className="h-1 w-20 yellow-bg"></div>
                <div className="h-1 w-10 blue_bg"></div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Workspace seating area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden mt-8">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Coffee bar area"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold yellow mb-4">
              Workspace Amenities
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Our rooftop workspace is designed to provide everything you need
              for a productive and comfortable work experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Amenity 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 blue_bg text-yellow-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold yellow mb-4 text-center">
                High-Speed WiFi
              </h3>
              <p className="text-gray-600 text-center">
                Stay connected with our enterprise-grade WiFi, perfect for video
                calls and large file transfers.
              </p>
            </div>

            {/* Amenity 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 blue_bg text-yellow-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold yellow mb-4 text-center">
                Extended Hours
              </h3>
              <p className="text-gray-600 text-center">
                Access the workspace from 7 AM to 8 PM, giving you flexibility
                for early morning or evening work.
              </p>
            </div>

            {/* Amenity 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 blue_bg text-yellow-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold yellow mb-4 text-center">
                Power Everywhere
              </h3>
              <p className="text-gray-600 text-center">
                Multiple power outlets at every seating area ensure your devices
                stay charged all day.
              </p>
            </div>

            {/* Amenity 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 blue_bg text-yellow-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold yellow mb-4 text-center">
                Meeting Spaces
              </h3>
              <p className="text-gray-600 text-center">
                Informal meeting areas for team discussions, brainstorming
                sessions, or client meetings.
              </p>
            </div>

            {/* Amenity 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 blue_bg text-yellow-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold yellow mb-4 text-center">
                Comfort & Design
              </h3>
              <p className="text-gray-600 text-center">
                Ergonomic seating, adjustable tables, and thoughtful design to
                enhance productivity and comfort.
              </p>
            </div>

            {/* Amenity 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 blue_bg text-yellow-300 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold yellow mb-4 text-center">
                Printing Services
              </h3>
              <p className="text-gray-600 text-center">
                Access to wireless printing for documents, presentations, and
                other work materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      {/* <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold yellow mb-4">
              Café Menu
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Fuel your workday with our selection of premium coffees, teas, and
              light bites, all available without leaving the building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold yellow mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                Coffee & Beverages
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-blue-100 pb-2">
                  <div>
                    <h4 className="font-semibold yellow">Espresso</h4>
                    <p className="text-sm text-gray-600">Rich and bold</p>
                  </div>
                  <div className="text-yellow-600 font-bold">$2.50</div>
                </div>
                <div className="flex justify-between items-center border-b border-blue-100 pb-2">
                  <div>
                    <h4 className="font-semibold yellow">Cappuccino</h4>
                    <p className="text-sm text-gray-600">
                      Espresso with steamed milk and foam
                    </p>
                  </div>
                  <div className="text-yellow-600 font-bold">$3.75</div>
                </div>
                <div className="flex justify-between items-center border-b border-blue-100 pb-2">
                  <div>
                    <h4 className="font-semibold yellow">Latte</h4>
                    <p className="text-sm text-gray-600">
                      Espresso with steamed milk
                    </p>
                  </div>
                  <div className="text-yellow-600 font-bold">$3.75</div>
                </div>
                <div className="flex justify-between items-center border-b border-blue-100 pb-2">
                  <div>
                    <h4 className="font-semibold yellow">Cold Brew</h4>
                    <p className="text-sm text-gray-600">
                      Smooth, slow-steeped coffee
                    </p>
                  </div>
                  <div className="text-yellow-600 font-bold">$4.00</div>
                </div>
                <div className="flex justify-between items-center border-b border-blue-100 pb-2">
                  <div>
                    <h4 className="font-semibold yellow">Herbal Tea</h4>
                    <p className="text-sm text-gray-600">
                      Selection of premium teas
                    </p>
                  </div>
                  <div className="text-yellow-600 font-bold">$2.75</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold yellow">Fresh Juice</h4>
                    <p className="text-sm text-gray-600">
                      Orange, apple, or green blend
                    </p>
                  </div>
                  <div className="text-yellow-600 font-bold">$4.50</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold yellow mb-6 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Light Bites
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-yellow-100 pb-2">
                  <div>
                    <h4 className="font-semibold yellow">Avocado Toast</h4>
                    <p className="text-sm text-gray-600">
                      Whole grain toast with avocado and toppings
                    </p>
                  </div>
                  <div className="text-yellow-600 font-bold">$6.50</div>
                </div>
                <div className="flex justify-between items-center border-b border-yellow-100 pb-2">
                  <div>
                    <h4 className="font-semibold yellow">
                      Greek Yogurt Parfait
                    </h4>
                    <p className="text-sm text-gray-600">
                      With granola and fresh berries
                    </p>
                  </div>
                  <div className="text-yellow-600 font-bold">$5.25</div>
                </div>
                <div className="flex justify-between items-center border-b border-yellow-100 pb-2">
                  <div>
                    <h4 className="font-semibold yellow">Chicken Wrap</h4>
                    <p className="text-sm text-gray-600">
                      Grilled chicken with veggies and hummus
                    </p>
                  </div>
                  <div className="text-yellow-600 font-bold">$7.95</div>
                </div>
                <div className="flex justify-between items-center border-b border-yellow-100 pb-2">
                  <div>
                    <h4 className="font-semibold yellow">Quinoa Salad</h4>
                    <p className="text-sm text-gray-600">
                      With roasted vegetables and feta
                    </p>
                  </div>
                  <div className="text-yellow-600 font-bold">$8.50</div>
                </div>
                <div className="flex justify-between items-center border-b border-yellow-100 pb-2">
                  <div>
                    <h4 className="font-semibold yellow">Fresh Fruit Cup</h4>
                    <p className="text-sm text-gray-600">Seasonal selection</p>
                  </div>
                  <div className="text-yellow-600 font-bold">$4.25</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold yellow">Pastry Selection</h4>
                    <p className="text-sm text-gray-600">Daily baked goods</p>
                  </div>
                  <div className="text-yellow-600 font-bold">$3.50</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold yellow mb-4">
              Workspace Gallery
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Take a visual tour of our rooftop workspace and see the
              environment that awaits you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Workspace seating"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Coffee bar"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Meeting area"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="City view"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Lounge area"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Barista preparing coffee"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Outdoor seating"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Sunset view"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl yellow font-bold mb-4">
              What Our Team Says
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-yellow-400"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="blue_bg p-8 rounded-xl relative">
              <div className="text-yellow-300 text-6xl absolute -top-6 left-4 opacity-30">
                "
              </div>
              <p className="mb-6 para relative z-10">
                The rooftop workspace has transformed my workday. I'm more
                productive, and the change of scenery helps me think more
                creatively. Plus, the coffee is excellent!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-300 mr-4"></div>
                <div>
                  <div className="font-bold yellow">Alex Johnson</div>
                  <div className="yellow text-sm">Marketing Team</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="blue_bg p-8 rounded-xl relative">
              <div className="text-yellow-300 text-6xl absolute -top-6 left-4 opacity-30">
                "
              </div>
              <p className="mb-6 para relative z-10">
                The rooftop workspace has transformed my workday. I'm more
                productive, and the change of scenery helps me think more
                creatively. Plus, the coffee is excellent!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-300 mr-4"></div>
                <div>
                  <div className="font-bold yellow">Alex Johnson</div>
                  <div className="yellow text-sm">Marketing Team</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="blue_bg p-8 rounded-xl relative">
              <div className="text-yellow-300 text-6xl absolute -top-6 left-4 opacity-30">
                "
              </div>
              <p className="mb-6 para relative z-10">
                The rooftop workspace has transformed my workday. I'm more
                productive, and the change of scenery helps me think more
                creatively. Plus, the coffee is excellent!
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-yellow-300 mr-4"></div>
                <div>
                  <div className="font-bold yellow">Alex Johnson</div>
                  <div className="yellow text-sm">Marketing Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Hours Section */}
      <section id="contact" className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold yellow mb-6">
                Hours & Information
              </h2>
              <p className="text-gray-700 mb-8">
                Our rooftop workspace café is available to all employees during
                business hours. For special events or team bookings, please
                contact the facilities team.
              </p>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold yellow mb-4">
                  Operating Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold yellow mt-8 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 yellow mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>workspace@company.com</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 yellow mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>Ext. 4567</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 yellow mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>15th Floor, Main Building</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative h-96 md:h-full rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Workspace at sunset"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/60 flex flex-col justify-center items-center p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-yellow-300">
                    Workspace Policies
                  </h3>
                  <div className="space-y-4">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-yellow-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Clean up after yourself
                    </p>
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-yellow-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Be mindful of noise levels
                    </p>
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-yellow-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Respect the shared space
                    </p>
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-yellow-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Limit meeting times during peak hours
                    </p>
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-yellow-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Report any issues to facilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
