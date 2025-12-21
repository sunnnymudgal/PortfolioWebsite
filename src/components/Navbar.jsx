import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Wrapper gives spacing */}
      <div className="sticky top-0 z-50 flex justify-center pt-4">
        <nav
          className="flex items-center gap-6 px-6 py-3 rounded-full
          bg-[#eef1ec]/95 backdrop-blur-md shadow-xl border border-black/5"
        >
          {/* Logo */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full
            bg-[#7a8f6a] text-white font-bold text-lg">
            S
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-base font-semibold text-[#374151]">
            {["Home", "About Me", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                  className="hover:text-[#5b6ee1] transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden text-[#374151] hover:text-[#5b6ee1] transition"
          >
            {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Email Pill */}
          <div
            className="hidden sm:block px-5 py-2 rounded-full text-sm font-semibold
            bg-[#f2e8e8] text-[#8b3a3a]
            hover:bg-[#5b6ee1] hover:text-white transition-all duration-300"
          >
            sunny@gmail.com
          </div>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden flex justify-center
        transition-all duration-300 ease-in-out
        ${navOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="mt-3 w-fit rounded-2xl bg-[#eef1ec]/95 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-center gap-5 py-5 px-10 text-base font-semibold text-[#374151]">
            {["Home", "About Me", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                  onClick={() => setNavOpen(false)}
                  className="hover:text-[#5b6ee1] transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
