import React from "react";
import AnImage from "./AnImage";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-auto bg-zinc-900"
    >
   

      <div className="textstructure flex max-md:flex-col items-center pt-36 max-md:pt-20">
        <div className="masker flex flex-col items-start justify-start w-4/6">
          {["Hello", "I'm Sunny", "Mudgal"].map((item, index) => (
            <h1
              key={index}
              className="text-5xl md:text-6xl lg:text-8xl xl:text-9xl uppercase leading-[60px] md:leading-[70px] tracking-[10px] md:tracking-[15px] px-4 md:px-20 founders font-[1000]"
            >
              {item}
            </h1>
          ))}
        </div>
        <div className="md:w-2/6 w-full flex items-center justify-center md:items-end md:justify-start ">
          { /*  <AnImage /> */}
        </div>
      </div>
      <div className="border-t-[1px] border-zinc-800 mb-6 md:mb-2 flex flex-col md:flex-row items-center justify-end py-5 px-4 md:px-20">
        
      </div>
    </div>
  );
}

export default LandingPage;
