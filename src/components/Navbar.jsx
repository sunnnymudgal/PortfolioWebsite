import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50
      transition-all duration-500 ease-in-out
      ${visible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}
      `}
    >
      {/* MAIN NAV */}
      <nav className="flex items-center gap-6 px-4 py-2 rounded-full
        bg-[#eef1ec]/80 backdrop-blur-md shadow-xl border border-black/5">

        {/* Logo */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full
          bg-[#7a8f6a] text-white font-semibold">
          S
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4b5563]">
          {["Home", "About Me", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="hover:text-[#5b6ee1] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-[#6b7280] hover:text-[#5b6ee1] transition"
        >
          {navOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>

        {/* Email Pill */}
        <div className="hidden sm:block px-4 py-1.5 rounded-full text-sm
          bg-[#f2e8e8] text-[#8b3a3a]
          hover:bg-[#5b6ee1] hover:text-white transition">
          sunny@gmail.com
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden mt-3 rounded-2xl overflow-hidden
        bg-[#eef1ec]/90 backdrop-blur-md shadow-lg
        transition-all duration-500 ease-in-out
        ${navOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-[#4b5563]">
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
    </header>
  );
};
