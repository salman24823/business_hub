"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "@heroui/react";
import { CldUploadWidget } from "next-cloudinary";

const ReviewsForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageURL) {
      toast.error("Please upload an image.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/handleTestimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, message, image: imageURL }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Form submitted successfully!");
        setName("");
        setRole("");
        setMessage("");
        setImageURL("");
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="form_main_div w-full p-[5%] big_screen">
      <div className="contact_section grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8">
        <form
          onSubmit={handleSubmit}
          className="contact_form flex flex-col items-center gap-4 p-8 bg-white w-full"
          data-aos="zoom-in"
        >
          <span className="text-3xl font-bold green">Add Any Review</span>

          <input
            className="p-2 w-full border-b border-gray-200 font-light"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="p-2 w-full border-b border-gray-200 font-light"
            type="text"
            placeholder="Role (e.g., Entrepreneur, Freelancer)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />

          <textarea
            className="p-2 w-full border-b border-gray-200 font-light"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={3}
          ></textarea>

          <CldUploadWidget
            uploadPreset="ml_default"
            options={{ sources: ["local", "url"] }}
            onSuccess={(result) => {
              setImageURL(result.info.secure_url);
            }}
          >
            {({ open }) => (
              <button
                type="button"
                onClick={() => open()}
                className="text-white font-semibold text-sm rounded-lg px-4 py-2 bg-blue-500"
              >
                Upload Image
              </button>
            )}
          </CldUploadWidget>

          {imageURL && <img src={imageURL} alt="Uploaded" className="w-36" />}

          <Button
            type="submit"
            className="w-full rounded-[5px] py-2 font-bold text-white bg-blue-500"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default ReviewsForm;
