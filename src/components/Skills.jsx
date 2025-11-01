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
// import { FaAws } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiThymeleaf } from "react-icons/si";

function TechLogo(props) {
  const { logo: Logo, logoName, bg, color } = props;
  return (
    <>
      <div
        className={`${bg} text-white rounded-md m-[2px] flex items-center w-fit px-3 py-1 gap-2 uppercase anton-sc-regular tracking-[1px] cursor-pointer`}
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
      <div className=" bg-[#9652E3] p-10 rounded-lg ">
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

          <TechLogo logo={IoLogoHtml5} logoName="HTML5" bg="bg-[#E34F26]" />
          <TechLogo logo={FaCss3Alt} logoName="CSS3" bg="bg-[#1572B6]" />
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
          <TechLogo logo={SiThymeleaf} logoName="thymeleaf" bg="bg-[#005F0F]" />
          {/* <TechLogo
            logo={FaAws}
            logoName="AWS"
            bg="bg-[#242F40]"
            color="text-[#ffffff]"
          /> */}
          <TechLogo logo={FaBootstrap} logoName="BOOTSTRAP" bg="bg-[#563D7C]" />
          <TechLogo logo={SiMongodb} logoName="Mongo DB" bg="bg-[#4EA94B]" />
          <TechLogo logo={TbBrandMysql} logoName="Mysql" bg="bg-[#0000FF]" />
          <TechLogo
            logo={RiTailwindCssFill}
            logoName="tailwind css"
            bg="bg-[#38B2AC]"
          />
          <TechLogo logo={FaPython} logoName="Python" bg="bg-[#3975A7]" />
          <TechLogo logo={FaFileExcel} logoName="Excel" bg="bg-[#3f933f]" />
          <div className="text-white bg-[#3a4b2b] m-[2px] flex items-center w-fit px-3 py-1 gap-2 uppercase anton-sc-regular tracking-[1px] cursor-pointer rounded-lg transition-all duration-300">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
              alt="Power BI"
              className="w-4 h-4"
            />
            <span>Power BI</span>
          </div>

          <div className="bg-[#3f933f]"></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
