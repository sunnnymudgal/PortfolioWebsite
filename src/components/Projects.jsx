import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";

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

        <section className="max-w-6xl mx-auto py-20">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Project 1 - BlueBird */}
            <div className="grid md:grid-cols-1 gap-10 items-center bg-white shadow-xl rounded-2xl p-8">

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="/images/logo.jpg"
                  alt="BlueBird E-Commerce Project"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#324DAE] mb-4 flex items-center gap-4">
                  <span>BlueBird E-Commerce</span>
                  <FaExternalLinkAlt />
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  A full-stack fashion e-commerce platform built using Java and Spring Boot.
                  It supports product listing, wishlist, cart management, authentication,
                  and a responsive UI styled with Tailwind CSS.
                </p>

                <div className="flex flex-wrap gap-3 text-black">
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

            {/* Project 2 - THE BRAND BIRD */}
            <div className="grid md:grid-cols-1 gap-10 items-center bg-white shadow-xl rounded-2xl p-8">

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="/images/brandbird.jpg"
                  alt="The Brand Bird Website"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-[#16a34a] mb-4 flex items-center gap-4">
                  <span>The Brand Bird</span>
                  <FaExternalLinkAlt />
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  A modern responsive business website built with React.js and Tailwind CSS.
                  The project features smooth animations, custom cursor effects,
                  reusable components, and interactive UI sections.
                </p>

                <div className="flex flex-wrap gap-3 text-black">
                  {[
                    "React.js",
                    "Tailwind CSS",
                    "JavaScript",
                    "Framer Motion",
                    "Responsive Design",
                    "Vite",
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

          </div>

        </section>
      </div>
    </div>
  );
}

export default Projects;
