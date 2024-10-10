import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

function SocialLinkCard({ Icon, link, msg }) {
  return (
    <div className="hover:text-[#000000] text-[#3b3b3b] hover:scale-90 transform duration-200 ease-out">
      <a target="_blank" href={link} rel="noopener noreferrer">
        <div className="flex flex-col items-center justify-center">
          <Icon className="text-3xl md:text-5xl" /> {/* Responsive icon size */}
          <div className="text-xs font-mono">{msg}</div>
        </div>
      </a>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="bg-[#edf2fc00]">
      <div className="flex flex-wrap justify-center items-center py-[3vh] gap-6 rounded-3xl bg-[#edf2fc00] text-[#474849]">
        {/* Using the reusable SocialLinkCard */}
        {[
          { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/sunny-mudgal/", msg: "LinkedIn" },
          { Icon: FaXTwitter, link: "https://x.com/sunnnymudgal", msg: "Twitter" },
          { Icon: SiGmail, link: "mailto:sunnyxmudgal@gmail.com", msg: "Email" },
        ].map(({ Icon, link, msg }, index) => (
          <motion.div
            key={index}
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeIn", delay: index * 0.2 }} // Slight delay for staggered effect
          >
            <SocialLinkCard Icon={Icon} link={link} msg={msg} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
