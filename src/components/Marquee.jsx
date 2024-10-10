import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.01"
      className="w-full py-20 text-white rounded-tl-3xl rounded-tr-3xl bg-[#31473A]"
    >
      <div className="text border-t-2 border-b-2 whitespace-nowrap overflow-hidden border-zinc-300 flex">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="text-[10vw] sm:text-[15vw] md:text-[17vw] pr-10 leading-none font-extrabold"
        >
          full stack developer
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="text-[10vw] sm:text-[15vw] md:text-[17vw] pr-10 leading-none font-extrabold"
        >
          full stack developer
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
