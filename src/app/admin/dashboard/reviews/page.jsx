"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Button, Table, TableCell, TableHeader } from "@heroui/react";
import { CldUploadWidget } from "next-cloudinary";

const ReviewsForm = () => {
  const [info, setInfo] = useState([]);
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

  useEffect(() => {
    fetchData();
  }, []);

  // Get request to show the data in the tabular form
  async function fetchData() {
    try {
      const response = await fetch("/api/handleTestimonials", {
        method: "GET",
      });
      const data = await response.json();
      console.log("API Response:", data);

      if (!response.ok) {
        toast.error(data.message || "Failed to fetch testimonials");
        return;
      }
      setInfo(data.data); // Access the 'data' field inside the response
    } catch (error) {
      toast.error("Failed to show testimonials");
    }
  }

  async function handleDelete(id) {
    try {
      const response = await fetch("/api/handleTestimonials", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete the review");
      }

      toast.success("Review deleted successfully!");

      // Refetch the data to update the table after deletion
      fetchData();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the review");
    }
  }

  return (
    <main className="w-full p-8 md:p-16 bg-gradient-to-b from-green-50 to-white min-h-screen">
      <div
        className="max-w-4xl mx-auto shadow-xl rounded-2xl bg-white p-10 space-y-8"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-center text-green-600">
          Add a Review
        </h2>
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
        {/* ====== Table Section Start ====== */}
        <div
          className="max-w-6xl mx-auto mt-12 bg-white p-8 rounded-2xl shadow-xl"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-green-600 mb-6 text-center">
            Reviews Table
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Message
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {info.length > 0 ? (
                  info.map((review) => (
                    <tr key={review._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {review.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {review.role}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {review.message}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-48 h-10 object-cover rounded-full border-2 border-green-400"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDelete(review._id)}
                          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full transition"
                        >
                          Delete
                        </button>

                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-6 text-gray-500">
                      No reviews found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        {/* ====== Table Section End ====== */}
      </div>
    </main>
  );
};

export default ReviewsForm;
