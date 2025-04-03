"use client";

import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { Button } from "@heroui/react";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function submitForm(e) {
    e.preventDefault();
    if (isLoading) return; // Prevent multiple submissions

    setIsLoading(true);
    try {
      if (!name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
        toast.error("All fields are required");
        setIsLoading(false);
        return;
      }

      const response = await fetch("/api/handleForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok && data.statusCode === 201) {
        toast.success("Form Submitted Successfully");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(data.message || "Failed to submit form");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main
      id="contact"
      className="Main_cnt !overflow-hidden sections w-full px-[5%] py-[10%] md:p-[5%]"
    >
      <div className="contact_section grid grid-rows-1 grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8">
        <div className="flex flex-col gap-12" data-aos="fade-right">
          <h2 className="text-white text-3xl font-bold blue" data-aos="fade-up">
            <span className="yellow">Have questions?</span> Fill out our form, and we’ll get back to you soon!
          </h2>
          <p className="text-white w-full md:w-[80%] blue" data-aos="fade-up" data-aos-delay="200">
            We're here to help! Find answers to common questions about our products, services, and processes.
          </p>
          <div className="ques_list text-white" data-aos="fade-up" data-aos-delay="400">
            <ul className="font-bold flex flex-col gap-4">
              <li className="flex items-center gap-2 blue">
                <FaRegCheckCircle className="blue" />
                How can I start with Business Hub workspace?
              </li>
              <li className="flex items-center gap-2 blue">
                <FaRegCheckCircle className="blue" />
                How can I book?
              </li>
              <li className="flex items-center gap-2 blue">
                <FaRegCheckCircle className="blue" />
                What's Your Terms and Conditions?
              </li>
              <li className="flex items-center gap-2 blue">
                <FaRegCheckCircle className="blue" />
                What kind of Services do you provide?
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-auto" data-aos="fade-left">
          <form className="contact_form flex flex-col items-center gap-4 p-8 bg-white justify-self-end w-full" 
            data-aos="zoom-in" 
            data-aos-delay="200" 
            onSubmit={submitForm}
          >
            <span className="text-3xl font-bold green" data-aos="fade-up">
              Get in touch.
            </span>

            <input
              className="p-2 w-full border-bottom border-gray-200 border-b font-light"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="p-2 w-full border-gray-200 border-b font-light"
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className="p-2 w-full border-gray-200 border-b font-light"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="p-2 w-full border-gray-200 border-b font-light"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="3"
            ></textarea>

            <Button className="w-full text-white rounded-[5px] py-2 font-bold yellow-bg" type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Form;
