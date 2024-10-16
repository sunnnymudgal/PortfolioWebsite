import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`fixed z-50 w-full px-4 sm:px-8 py-4 bg-black/80 backdrop-blur-sm shadow-lg rounded-b-2xl transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-white">
          <h1 className="text-xl sm:text-2xl font-semibold">SUNNYMUDGAL</h1>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About Me", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
              className="text-lg font-light text-white hover:text-gray-300 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleNav}
            className="text-white transition duration-300 ease-linear"
          >
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-black/90 rounded-b-2xl overflow-hidden transition-all duration-500 ease-in-out ${
          navOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="w-full py-4 space-y-4 text-center">
          {["Home", "About Me", "Projects", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="block text-lg text-white font-light hover:text-gray-400 transition duration-300"
                onClick={toggleNav}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
