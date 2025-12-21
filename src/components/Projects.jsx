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
          <section class="max-w-6xl mx-auto px-6 py-20">
  
  <!-- Section Title -->
  <h2 class="text-4xl font-bold text-center mb-14 font-mono">
    Featured Project
  </h2>

  <!-- Project Card -->
  <div class="grid md:grid-cols-2 gap-10 items-center bg-white shadow-xl rounded-2xl p-8">

    <!-- Project Image -->
    <div class="relative group overflow-hidden rounded-xl">
      <img 
        src="./images/logo.png" 
        alt="BlueBird E-Commerce Project"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                  transition flex items-center justify-center">
        <span class="text-white text-lg font-semibold">
          BlueBird E-Commerce
        </span>
      </div>
    </div>

    <!-- Project Content -->
    <div>
      <h3 class="text-3xl font-bold text-[#324DAE] mb-4">
        BlueBird E-Commerce
      </h3>

      <p class="text-gray-600 mb-6 leading-relaxed">
        A full-stack fashion e-commerce platform built with modern web technologies.
        It supports product listing, wishlist, cart management, user authentication,
        and a clean responsive UI inspired by real-world e-commerce platforms.
      </p>

      <!-- Tech Stack -->
      <div class="flex flex-wrap gap-3 mb-6">
        <span class="px-3 py-1 bg-gray-200 rounded-full text-sm">Java</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full text-sm">Spring Boot</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full text-sm">Spring Security</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full text-sm">Thymeleaf</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full text-sm">MySQL</span>
        <span class="px-3 py-1 bg-gray-200 rounded-full text-sm">Tailwind CSS</span>
      </div>

      <!-- Buttons -->
      <div class="flex gap-4">
        <a href="#"
           class="px-6 py-2 bg-[#324DAE] text-white rounded-lg
                  hover:bg-black transition">
          Live Demo
        </a>

        <a href="#"
           class="px-6 py-2 border border-black rounded-lg
                  hover:bg-black hover:text-white transition">
          GitHub
        </a>
      </div>
    </div>

  </div>
</section>

          <div className="card w-full sm:w-1/2 h-[50vh] sm:h-[80vh] bg-red-600 rounded-lg flex items-center justify-center">loading....</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
