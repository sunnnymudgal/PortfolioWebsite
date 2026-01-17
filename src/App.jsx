import React, { useEffect, useRef, useState } from "react";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import { FaBars, FaTimes } from "react-icons/fa";
import LocomotiveScroll from "locomotive-scroll";
import "./index.css";

function App() {
  const scrollRef = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-[9999] pointer-events-auto">
        <nav
          className="
            flex items-center justify-between gap-4
            px-6 py-3 rounded-full
            bg-[#eef1ec]/95 backdrop-blur-md
            shadow-xl border border-black/10
            w-[90vw] sm:w-auto
          "
        >
          {/* Logo */}
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full
            bg-[#7a8f6a] text-white font-bold text-lg"
          >
            S
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-base font-semibold text-[#374151]">
            {["Home", "About Me", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                  className="hover:text-[#5b6ee1] transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden text-[#374151]"
          >
            {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Email Pill */}
          <div
            className="
              hidden sm:block px-5 py-2 rounded-full text-sm font-semibold
              bg-[#f2e8e8] text-[#8b3a3a]
              hover:bg-[#5b6ee1] hover:text-white transition
            "
          >
            sunnyxmudgal@gmail.com
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden mt-3 rounded-2xl overflow-hidden
            bg-[#eef1ec]/95 backdrop-blur-md shadow-lg
            transition-all duration-300
            ${navOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="flex flex-col items-center gap-5 py-5 text-base font-semibold text-[#374151]">
            {["Home", "About Me", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                  onClick={() => setNavOpen(false)}
                  className="hover:text-[#5b6ee1]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
      {/* =============== END NAVBAR =============== */}

      {/* ============ LOCOMOTIVE SCROLL CONTENT ============ */}
      <main
        ref={scrollRef}
        data-scroll-container
        className="bg-zinc-900 text-white"
      >
        <section id="home" data-scroll-section>
           {/*  <LandingPage />*/}
             <Marquee />
        </section>

        <section id="aboutme" data-scroll-section>
            <About /> 
        </section>

        <section id="projects" data-scroll-section>
         <Projects />
        </section>

        <section id="contact" data-scroll-section>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
