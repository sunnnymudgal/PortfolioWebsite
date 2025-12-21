import React, { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Projects from "./components/Projects";
import LocomotiveScroll from "locomotive-scroll";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <>

      <Navbar />


      <main
        data-scroll-container
        className="w-full min-h-screen bg-zinc-900 text-white"
      >
        <section id="home">
          <LandingPage />
          <Marquee />
        </section>

        <section id="aboutme">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
