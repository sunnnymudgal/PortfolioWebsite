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
      className={`fixed z-[999] w-full px-8 py-6 bg-[#0000007f] shadow-lg rounded-3xl transition-transform duration-500 ease-in-out ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-white">
          <h1>SUNNYMUDGAL</h1>
        </div>

        <div className="hidden md:flex space-x-10">
          {["Home", "About Me", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.replace(/\s+/g, "").toLowerCase()}`} 
              className="text-lg cursor-pointer font-light text-white hover:text-gray-600"
            >
              {item}
            </a>
          ))}
        </div>


        <div className="md:hidden">
          <button
            onClick={toggleNav}
            className="text-white transition-all duration-1000 ease-linear"
          >
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>


      <div
        className={`md:hidden text-center overflow-hidden transition-all duration-700 ease-in-out ${
          navOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-4 py-4 bg-[#000000bd] rounded-3xl">
          {["Home", "About Me", "Projects", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`} 
                className="text-lg font-light cursor-pointer text-white hover:text-gray-400"
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
