import React from "react";
import Home from "../Picture/Home.png";
import Education from "../Picture/Education.png";
import Working from "../Picture/Working.png";
import Skill from "../Picture/Skill.png";
import Projects from "../Picture/Projects.png";

export const NavigationBar = () => {
  return (
    <div class="w-[4rem] h-screen bg-[#8F5B4A] flex flex-col justify-evenly items-center">
      <div class="w-[3rem] h-[17rem] flex flex-col justify-between items-center">
        <div class="w-[4rem] h-[6rem] bg-[#A77979]/50">
          <img src={Home} class="h-[2rem] w-[2rem] m-auto" />
        </div>
        <div class="w-[4rem] h-[2.5rem] bg-[#A77979]/50">
          <img src={Education} class="h-[2rem] w-[2rem] m-auto" />
        </div>
        <div class="w-[4rem] h-[2.5rem] bg-[#A77979]/50">
          <img src={Working} class="h-[2rem] w-[2rem] m-auto" />
        </div>
        <div class="w-[4rem] h-[2.5rem] bg-[#A77979]/50">
          <img src={Skill} class="h-[2rem] w-[2rem] m-auto" />
        </div>
        <div class="w-[4rem] h-[2.5rem] bg-[#A77979]/50">
          <img src={Projects} class="h-[2rem] w-[2rem] m-auto" />
        </div>
      </div>
    </div>
  );
};
