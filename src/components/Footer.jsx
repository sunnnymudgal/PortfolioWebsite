import React from "react";
import SocialLinks from "./SocialLinks"; 

const Footer = () => {
  return (
    <footer className="bg-[#EDF4F2] text-black pt-5 pb-2 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h2 className="text-3xl md:text-5xl font-bold">Contact Me;</h2>
        </div>

        <SocialLinks />

        <div className="mt-4">
          <p className="text-xs font-extralight text-[#000000a8]">© 2024 Sunny Mudgal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
