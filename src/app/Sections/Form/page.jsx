"use client";

import React, { useState, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
// import { toast } from "react-toastify";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { Button } from "@heroui/react";

const Form = () => {
  //   useEffect(() => {
  //     AOS.init({ duration: 1000, once: true });
  //   }, []);

  //   const [name, setName] = useState("");
  //   const [company, setCompany] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [subject, setSubject] = useState("");
  //   const [message, setMessage] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);

  //   async function submitForm(e) {
  //     e.preventDefault();
  //     setIsLoading(true);

  //     try {
  //       const response = await fetch("/api/Contact", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ name, company, phone, email, subject, message }),
  //       });

  //       console.log(response, "response");

  //       if (response.ok) {
  //         const successAudio = new Audio("/mp3/successRing.mp3");
  //         successAudio.play();

  //         toast.success("Form Submitted Successfully");
  //         setName("");
  //         setCompany("");
  //         setPhone("");
  //         setEmail("");
  //         setSubject("");
  //         setMessage("");

  //       } else {
  //         toast.error("Failed to submit form");
  //       }
  //     } catch (error) {
  //       toast.error("Something went wrong");
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  return (
    <main
      id="contact"
      className="Main_cnt !overflow-hidden sections w-full px-[5%] py-[10%]  md:p-[5%] blue_bg"
    >
      <div className="contact_section grid grid-rows-1 grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8">
        <div className="flex flex-col gap-12" data-aos="fade-right">
          <h2 className="text-white text-3xl font-bold" data-aos="fade-up">
            <span className="yellow">Have questions?</span> Fill out our form, and we’ll get back to you soon!
          </h2>
          <p
            className="text-white w-full md:w-[80%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We're here to help! Find answers to common questions about our
            products, services, and processes. If you need further assistance,
            reach out to us anytime.
          </p>
          <div
            className="ques_list text-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <ul className="font-bold flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="yellow" />
                How can I start with Business Hub workspace?
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="yellow" />
                How can I book?
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="yellow" />
                 Whats Your Terms and Conditions?
              </li>
              <li className="flex items-center gap-2">
                <FaRegCheckCircle className="yellow" />
                What kind of Services you provide?
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-auto" data-aos="fade-left">
          <form
            className="contact_form flex flex-col items-center gap-4 p-8 bg-white justify-self-end w-full"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="text-3xl font-bold green" data-aos="fade-up">
              Get in touch.
            </span>
            
              <input
                className="p-2 w-full border-bottom border-gray-200 border-b font-light"
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
                data-aos="fade-up"
                data-aos-delay="200"
              />
             
            
            
              <input
                className="p-2 w-full border-gray-200 border-b font-light"
                type="text"
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
                required
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <input
                className="p-2 w-full border-gray-200 border-b font-light"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                data-aos="fade-up"
                data-aos-delay="600"
              />

            <textarea
              className="p-2 w-full border-gray-200 border-b font-light"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="3"
              data-aos="fade-up"
              data-aos-delay="700"
            ></textarea>

            <Button
              className="w-full text-white rounded-[5px] py-2 font-bold yellow-bg"
              type="submit"
              data-aos="fade-up"
              data-aos-delay="800"
            >
                Submit
              {/* {isLoading ? "Submitting..." : "Submit"} */}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Form;
