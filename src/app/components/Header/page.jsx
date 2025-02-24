import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <main className="">
      <header className="px-[5%] py-4 font-bold">
        <nav className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl">Logo</h1>
          </div>
          <div className="nav-links flex gap-6">
            <Link href={"/About"} className="fade_right">Home</Link>
            <Link href={"/About"} className="fade_right">About</Link>
            <Link href={"/About"} className="fade_right">Services</Link>
            <Link href={"/About"} className="fade_right">Blogs</Link>
            <Link href={"/About"} className="fade_right">Contact Us</Link>
          </div>
          <div>
            <Link href={"/"}>
              <button className="bg-[#f9d229] px-12 py-2 rounded-lg">
                Help
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </main>
  );
};

export default Header;
