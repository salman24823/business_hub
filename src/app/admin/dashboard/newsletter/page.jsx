"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [emails, setEmails] = useState([]);

  async function fetchEmails() {
    try {
      const response = await fetch("/api/handleNewletter", {
        method: GET,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (!response.ok) {
        toast.error(data.message || "Failed to fetch emails");
        return;
      }

      setEmails(data); // Assuming API returns an array of emails
    } catch (error) {
      toast.error("Failed to fetch data");
    }
  }

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Newsletter Subscribers</h2>
      {emails.length === 0 ? (
        <p>No subscribers yet.</p>
      ) : (
        <table className="min-w-full border border-gray-300 rounded-md shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 border-b">#</th>
              <th className="p-3 border-b">Email</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item,index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border-b">{index + 1}</td>
                <td className="p-3 border-b">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Newsletter;
