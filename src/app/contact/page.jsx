"use client"

import { Mail, Phone, MapPin, Clock, Globe, Facebook, Instagram, Twitter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-[10%]">
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className="text-yellow-400">Contact</span> Us
      </h1>

      <div className="text-center mb-12 text-gray-600">
        <p>
          Have questions about our services? Need more information? We're here to help.
          <br />
          Use our contact information below to reach out to us.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <div className="w-full h-64 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6810.629943371382!2d73.108045!3d31.405447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269002508696b%3A0x543a6df9f9c321c7!2sBusiness%20Hub%20(Workspace)!5e0!3m2!1sen!2sus!4v1745336412876!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <MapPin className="h-5 w-5 text-yellow-400 mr-2" /> Our Location
            </h2>
            <p className="text-gray-700 mb-2">Business Hub (Workspace)</p>
            <p className="text-gray-700 mb-2">Faisalabad, Pakistan</p>
            <p className="text-gray-700">
              <a
                href="https://maps.google.com/?q=31.405447,73.108045"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-500 hover:underline"
              >
                Get Directions
              </a>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">Get In Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a href="mailto:businesshubworspace@gmail.com" className="text-gray-600 hover:text-yellow-500">
                    businesshubworspace@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a href="tel:+923007238256" className="text-gray-600 hover:text-yellow-500">
                    +923007238256
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Globe className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium">Website</h3>
                  <a href="https://www.businesshub.com" className="text-gray-600 hover:text-yellow-500">
                    www.businesshub.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-6 border-b pb-2 flex items-center">
              <Clock className="h-5 w-5 text-yellow-400 mr-2" /> Business Hours
            </h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span className="text-gray-600">10:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span className="text-gray-600">Closed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">Connect With Us</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://facebook.com/businesshub"
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors"
              >
                <Facebook className="h-5 w-5 text-blue-600" />
                <span>Facebook</span>
              </a>
              <a
                href="https://instagram.com/businesshub"
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors"
              >
                <Instagram className="h-5 w-5 text-pink-600" />
                <span>Instagram</span>
              </a>
              <a
                href="https://twitter.com/businesshub"
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors"
              >
                <Twitter className="h-5 w-5 text-blue-400" />
                <span>Twitter</span>
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-600">
                Follow us on social media to stay updated with our latest news, offers, and resources.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p>
          Need immediate assistance? Call our customer support line at{" "}
          <a href="tel:+923007238256" className="text-yellow-500 font-medium">
            +923007238256
          </a>
        </p>
      </div>
    </div>
  )
}
