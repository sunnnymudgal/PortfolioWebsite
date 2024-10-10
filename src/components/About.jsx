import React from "react";
import { GoArrowUpRight } from "react-icons/go";

import Skills from "./Skills";

function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.02"
      className="w-full p-6 sm:p-10 lg:p-20 bg-[#EDF4F2] rounded-t-3xl text-black"
    >
      <h1 className="text-[5vw] md:text-[4vw] leading-[4vw] md:leading-[3.5vw] tracking-tight">
        A full-stack developer skilled in Java, Spring Boot, and frontend
        technologies like React and JavaScript. I love creating robust backends
        and dynamic interfaces, always eager to take on new challenges and
        collaborate on exciting projects!
      </h1>
      <div className="w-full pt-10 border-t-[1px] border-[#7b8f32] mt-10 flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/2">
          <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter">Skills i have;</div>
          <a target="_blank" href="https://drive.google.com/file/d/1rPNmeQSjUoR8R3uF5DMKJZPcFSbHhtI5/view?usp=sharing">
          <button className="flex gap-2 items-center pl-4 pr-1 py-2 mt-10 bg-zinc-900 rounded-full text-white transition duration-300 hover:bg-zinc-800">
            MY RESUME
            <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border-[1px] border-zinc-400 flex items-center justify-center">
              <GoArrowUpRight />
            </div>
          </button>
          </a>
        </div>
        <div className="w-full md:w-1/2 h-fit rounded-3xl bg-[#7b8f32]">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default About;
