import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Projects() {
  return (
    <div className="w-full py-10 sm:py-20">
      <div className="w-full px-6 sm:px-10 lg:px-20">

        {/* Heading */}
        <div className="text-5xl sm:text-6xl lg:text-7xl tracking-tight text-center py-4">
            Featured Projects;
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/sunnnymudgal"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-end gap-1 my-4"
        >
          <div className="px-4 py-2 border border-zinc-400 text-xs md:text-sm uppercase rounded-full">
            GitHub Link
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-400 flex items-center justify-center">
            <GoArrowUpRight />
          </div>
        </a>

        {/* Project Card */}
        <section className="max-w-6xl mx-auto py-20">

          <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-xl rounded-2xl p-8">

            {/* Image */}
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src="/images/logo.jpg"
                alt="BlueBird E-Commerce Project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

            
            </div>

            {/* Content */}
            <div>
              <a href="https://bluebirdproduction.up.railway.app/" target="_blank">
              <h3 className="text-3xl font-bold text-[#324DAE] mb-4">
                BlueBird E-Commerce
              </h3>
              </a>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A full-stack fashion e-commerce platform built using Java and Spring Boot.
                It supports product listing, wishlist, cart management, authentication,
                and a fully responsive UI styled with Tailwind CSS.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-6 text-[#000]">
                {[
                  "Java",
                  "Spring Boot",
                  "Spring Security",
                  "Thymeleaf",
                  "MySQL",
                  "Tailwind CSS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

           
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
