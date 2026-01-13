import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center">
      {/* MAIN NAV */}
      <nav
        className="
          flex items-center justify-between gap-4
          px-4 py-3 rounded-full
          bg-[#eef1ec]/90 backdrop-blur-md shadow-xl border border-black/5
          transition-all duration-300
          w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto
        "
      >
        {/* Logo */}
        <div
          className="w-9 h-9 flex items-center justify-center rounded-full
          bg-[#7a8f6a] text-white font-bold text-base"
        >
          S
        </div>

        {/* Desktop Links */}
        <ul
          className="
            hidden md:flex items-center gap-6
            text-sm lg:text-base font-semibold text-[#374151]
          "
        >
          {["Home", "About", "Projects", "Contact"].map((item) => (
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-[#374151] hover:text-[#5b6ee1] transition"
        >
          {navOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>

        {/* Email Pill (hidden on small) */}
        <div
          className="
            hidden sm:block px-4 py-2 rounded-full
            text-xs lg:text-sm font-semibold
            bg-[#f2e8e8] text-[#8b3a3a]
            hover:bg-[#5b6ee1] hover:text-white transition-all duration-300
          "
        >
          sunnyxmudgal@gmail.com
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden mt-3 rounded-2xl overflow-hidden
          bg-[#eef1ec]/95 backdrop-blur-md shadow-lg
          transition-all duration-300 ease-in-out
          w-[90%] sm:w-[80%] md:w-[70%]
          ${navOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-sm font-semibold text-[#374151]">
          {["Home", "About", "Projects", "Contact"].map((item) => (
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
    </header>
  );
};
