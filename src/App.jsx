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
     
      {/* =============== END NAVBAR =============== */}

      {/* ============ LOCOMOTIVE SCROLL CONTENT ============ */}
      <main
        ref={scrollRef}
        data-scroll-container
        className="bg-zinc-900 text-white"
      >
        <section id="home" data-scroll-section>
          <LandingPage />
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
