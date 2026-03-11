import React from "react";
import AnImage from "./AnImage";
import { motion } from "framer-motion";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full min-h-screen bg-zinc-900 text-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        {/* HERO SECTION */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-28 md:pt-36 gap-12">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-3/5">

            {["Hello", "I'm Sunny", "Mudgal"].map((item, index) => (
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="uppercase font-[majormono] 
                text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]
                leading-tight tracking-[8px] md:tracking-[14px]"
              >
                {item}
              </motion.h1>
            ))}

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-zinc-400 text-lg md:text-xl max-w-xl"
            >
              Full Stack Java Developer building modern web applications
              using Java, Spring Boot, React and Cloud technologies.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5 mt-10"
            >
              <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
                View Projects
              </button>

              <button className="px-8 py-3 border border-zinc-600 rounded-full hover:bg-zinc-800 transition">
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px]">
              <AnImage />
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-zinc-800 mt-20"></div>

      </div>
    </div>
  );
}

export default LandingPage;
