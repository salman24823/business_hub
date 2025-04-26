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


  // Get request to show the data in the tabular form 
  async function fetchData(){
    try {
      
    } catch (error) {
      toast.error("Failed to show data")
    }
  }
  return (
    <main className="w-full p-8 md:p-16 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <div className="max-w-4xl mx-auto shadow-xl rounded-2xl bg-white p-10 space-y-8" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-green-600">Add a Review</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            type="text"
            placeholder="Your Role (e.g., Entrepreneur, Freelancer)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />

          <textarea
            className="p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={4}
          ></textarea>

          <div className="flex flex-col items-center gap-4">
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
                  className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
                >
                  Upload Image
                </button>
              )}
            </CldUploadWidget>

            {imageURL && (
              <img
                src={imageURL}
                alt="Uploaded"
                className="w-32 h-32 rounded-full object-cover border-2 border-green-400 shadow-md"
              />
            )}
          </div>

          <Button
            type="submit"
            className="mt-4 w-full rounded-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 text-lg transition"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default ReviewsForm;
