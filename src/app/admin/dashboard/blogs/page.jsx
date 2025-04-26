"use client";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { CldUploadWidget } from "next-cloudinary";

const blogs = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);

  const handleTitleChange = (e) => {
    setProductData({ ...productData, title: e.target.value });
  };

  const handleDescriptionChange = (value) => {
    setProductData({ ...productData, description: value });
  };

  const handleImageUpload = (result) => {
    setProductData({ ...productData, imageUrl: result.info.secure_url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !productData.title ||
      !productData.description ||
      !productData.imageUrl
    ) {
      alert("Please fill all fields and upload an image!");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/handleBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: productData.title,
          description: productData.description,
          avatar: productData.imageUrl,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Blog created successfully! 🎉");
        // Reset the form
        setProductData({
          title: "",
          description: "",
          imageUrl: "",
        });
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white shadow-lg rounded-lg"
    >
      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={productData.title}
          onChange={handleTitleChange}
          className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter product title"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <MDEditor
          value={productData.description}
          onChange={handleDescriptionChange}
          height={400}
          preview="edit"
          className="w-full"
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image
        </label>
        <CldUploadWidget
          uploadPreset="ml_default"
          options={{ sources: ["local", "url"] }}
          onSuccess={handleImageUpload}
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

        {/* Show uploaded image preview */}
        {productData.imageUrl && (
          <div className="mt-4">
            <img
              src={productData.imageUrl}
              alt="Uploaded"
              className="w-48 h-48 object-cover rounded-md"
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full text-white font-semibold py-2 px-4 rounded-md bg-green-600 hover:bg-green-700 disabled:bg-gray-400"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default blogs;
