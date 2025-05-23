"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, X, Contact, Mail, BookCheck } from "lucide-react"; // Assuming you're using Lucide icons
import { Home } from "lucide-react";
import { Button } from "@heroui/react";
import { MdAddComment } from "react-icons/md";
import { RiBloggerFill } from "react-icons/ri";

const Layout = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    // Add a class to the body based on the current path
    if (pathname.includes("admin")) {
      document.body.classList.add("hide-header");
      document.body.classList.add("hide-footer");
    } else {
      document.body.classList.remove("hide-header");
      document.body.classList.remove("hide-footer");
    }
  }, [pathname]);

  const isAdmin = pathname.includes("admin"); // Check if the path contains "admin"

  useEffect(() => {
    if (isAdmin) {
      document.body.classList.add("admin-page");
    } else {
      document.body.classList.remove("admin-page");
    }
  }, [isAdmin]);

  // State for controlling the sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const routes = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <Home className="w-5 h-5 text-gray-600" />,
    },
    {
      name: "Contact",
      path: "/admin/dashboard/contact",
      icon: <Contact className="w-5 h-5 text-gray-600" />,
    },
    {
      name: "NewsLetter",
      path: "/admin/dashboard/newsletter",
      icon: <Mail className="w-5 h-5 text-gray-600" />,
    },
    {
      name: "Reviews",
      path: "/admin/dashboard/reviews",
      icon: <MdAddComment className="w-5 h-5 text-gray-600" />,
    },
    {
      name: "blogs",
      path: "/admin/dashboard/blogs",
      icon: <RiBloggerFill className="w-5 h-5 text-gray-600" />,
    },
  ];

  const logout = () => {
    // Add your logout logic here
    console.log("Logged out");
  };

  return (
    <>
      <div className="w-full min-h-screen bg-white flex">
        {/* Sidebar */}
        {pathname !== "/panel/change-password" && (
          <>
            {/* Overlay for mobile */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black/50 lg:hidden z-20"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            <aside
              className={`fixed w-[15%] pt-2 lg:sticky lg:top-0 lg:left-0 lg:h-screen  h-full bg-white border-r border-gray-200 z-30 transform transition-transform duration-300 ease-in-out ${
                sidebarOpen ? "translate-x-0" : "-translate-x-full"
              } lg:translate-x-0`}
            >
              <ul>
                {/* Close button for mobile */}
                <li
                  className="lg:hidden w-full p-4 border-b border-gray-200 flex justify-end"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                </li>

                {/* Navigation Links */}
                {routes.map((route) => (
                  <li key={route.path}>
                    <Button
                      className="p-0 w-full bg-white hover:bg-gray-50 transition-all duration-300 ease-in-out"
                      radius="none"
                      onPress={route.onClick} // Attach the onClick handler here
                    >
                      <Link
                        href={route.path}
                        className={`flex items-center gap-3 p-3 w-full text-sm ${
                          pathname === route.path
                            ? "font-semibold text-blue-600 bg-blue-50 border-r-4 border-blue-500"
                            : "text-gray-600 hover:text-blue-500"
                        }`}
                      >
                        {route.icon}
                        {route.name}
                      </Link>
                    </Button>
                  </li>
                ))}

                {/* Logout Button */}
                <li>
                  <Button
                    className="w-full bg-white text-gray-600 flex justify-start p-3 text-sm hover:bg-gray-50 hover:text-blue-500 transition-all duration-300 ease-in-out"
                    radius="none"
                    onPress={logout}
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </Button>
                </li>
              </ul>
            </aside>
          </>
        )}

        {/* Main Content */}
        <div className="p-4 w-[85%] bg-gray-50 min-h-screen">
          {/* Mobile Menu Toggle Button */}
          <Button
            className="lg:hidden p-2 bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 mb-4"
            onPress={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </Button>

          {/* Page Content */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
