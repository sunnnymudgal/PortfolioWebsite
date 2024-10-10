import React from "react";
import { FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAws } from "react-icons/fa";

function TechLogo(props) {
  const { logo: Logo, logoName, bg, color } = props;
  return (
    <>
      <div
        className={`${bg}  text-white m-[2px] flex items-center w-fit px-3 py-1 gap-2 uppercase anton-sc-regular tracking-[1px] cursor-pointer`}
      >
        <Logo className={`${color}`} />
        {logoName}
      </div>
    </>
  );
}

function Skills() {
  return (
    <div id="skills">
      <div className=" bg-[#edf2fc00] p-10">
        <div className="flex flex-wrap">
          <TechLogo logo={FaJava} logoName="JAVA" bg="bg-[#B07219]" />
          <TechLogo
            logo={BiLogoSpringBoot}
            logoName="Spring Framework"
            bg="bg-[#69AD3C]"
            color="text-[#ffffff]"
          />
          <TechLogo
            logo={SiSpringboot}
            logoName="spring boot"
            bg="bg-[#69AD3C]"
          />
          <TechLogo logo={IoLogoHtml5} logoName="HTML" bg="bg-[#E34F26]" />
          <TechLogo logo={FaCss3Alt} logoName="CSS" bg="bg-[#1572B6]" />
          <TechLogo
            logo={RiJavascriptFill}
            logoName="JavaScript"
            bg="bg-[#323330]"
            color="text-[#F7DF1E]"
          />
          <TechLogo
            logo={FaReact}
            logoName="REACT"
            bg="bg-[#323330]"
            color="text-[#00FFFF]"
          />
          <TechLogo
            logo={FaAws}
            logoName="AWS"
            bg="bg-[#242F40]"
            color="text-[#ffffff]"
          />
          <TechLogo logo={FaBootstrap} logoName="BOOTSTRAP" bg="bg-[#563D7C]" />
          <TechLogo logo={SiMongodb} logoName="MongoBD" bg="bg-[#4EA94B]" />
          <TechLogo logo={TbBrandMysql} logoName="Mysql" bg="bg-[#0000FF]" />

          <TechLogo
            logo={RiTailwindCssFill}
            logoName="tailwind css"
            bg="bg-[#38B2AC]"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
