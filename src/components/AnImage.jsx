import React from "react";
import { LiaJava } from "react-icons/lia";
import { FaReact } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

function AnImage() {
  return (
    <>
      <div className="max-lg:w-full flex items-center justify-center bg-[#0000ff00]">
        <div className="flex justify-center relative max-md:w-fit">
          <motion.div
            className="bg-[#edf2fc00] flex items-center justify-center z-[1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn" }}
          >
            <img src="./images/x.png" className="h-[90%] z-0" alt="" />
          </motion.div>

          <div className="absolute top-5 z-[9999] flex gap-3 md:gap-6  justify-between w-full lg:text-5xl md:4xl text-5xl text-[#b03131]">
            <motion.div
              className="mt-16"
              initial={{ y: 0 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <LiaJava />
            </motion.div>
            <motion.div
              className="mb-1"
              initial={{ y: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <FaReact />
            </motion.div>
            <motion.div
              className="mt-1"
              initial={{ y: 0 }}
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <SiSpring />
            </motion.div>
            <motion.div
              className="mt-16 mr-10"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <SiSpringboot />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnImage;
