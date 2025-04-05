"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    formdata();
  }, []);

  async function formdata() {
    try {
      const response = await fetch("/api/handleForm", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("API Response:", data); // helpful for debugging

      if (!response.ok) {
        toast.error(data.message || "Failed to fetch contacts");
        setIsLoading(false);
        return;
      }

      // ✅ FIXED LINE
      setContacts(data.data || []);
    } catch (error) {
      toast.error("Failed to show data");
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No Contact Found
                  </td>
                </tr>
              ) : (
                contacts.map((contact, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 border">{contact.name}</td>
                    <td className="px-4 py-2 border">{contact.phone}</td>
                    <td className="px-4 py-2 border">{contact.email}</td>
                    <td className="px-4 py-2 border">{contact.message}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Contact;
