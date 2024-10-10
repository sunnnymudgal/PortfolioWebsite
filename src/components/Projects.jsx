import React from "react";
import { GoArrowUpRight } from "react-icons/go";


function Projects() {
  return (
    <div className="w-full py-10 sm:py-20">
      <div className="w-full px-6 sm:px-10 lg:px-20">
        <div className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-center py-4">Projects;</div>
          <a href="https://github.com/sunnnymudgal">
        <div className="start flex items-center justify-end gap-1 my-2 md:mt-0">
            <div className="px-4 py-2 max-md:py-1 max-md:px-2 border-[1px] border-zinc-400 font-light text-xs md:text-md uppercase rounded-full flex items-center justify-center">
              GIT HUB Link
            </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[1px] border-zinc-400 flex items-center justify-center">
            <GoArrowUpRight />
          </div>
        </div>
          </a>
        <div className="cards w-full flex flex-col sm:flex-row gap-4">
          <div className="card w-full sm:w-1/2 h-[50vh] sm:h-[80vh] bg-red-600 rounded-lg flex items-center justify-center">loading...</div>
          <div className="card w-full sm:w-1/2 h-[50vh] sm:h-[80vh] bg-red-600 rounded-lg flex items-center justify-center">loading...</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
