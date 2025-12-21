import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setVisible(false);
      } else {
        // scrolling up
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
      transition-all duration-500 ease-in-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}
      `}
    >
      {/* MAIN NAV */}
      <nav className="flex items-center gap-6 bg-[#1f2933]/90 backdrop-blur-md px-4 py-2 rounded-full shadow-2xl">

        {/* Logo */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#7c9cff] text-white font-bold">
          S
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-[#dbe4ff]">
          {["Home", "About Me", "Projects", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-white transition duration-300 cursor-pointer"
            >
              <a href={`#${item.replace(/\s+/g, "").toLowerCase()}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-[#dbe4ff] hover:text-white transition"
        >
          {navOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>

        {/* Email / CTA */}
        <div className="hidden sm:block bg-[#2d3a46] text-[#dbe4ff] px-4 py-1.5 rounded-full text-sm hover:bg-[#7c9cff] hover:text-white transition">
          sunnyxmudgal@gmail.com
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden mt-3 bg-[#1f2933]/95 backdrop-blur-md rounded-2xl shadow-xl
        transition-all duration-500 ease-in-out overflow-hidden
        ${navOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-[#dbe4ff]">
          {["Home", "About Me", "Projects", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                onClick={() => setNavOpen(false)}
                className="hover:text-white transition"
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
