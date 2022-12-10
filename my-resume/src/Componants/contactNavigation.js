import React from "react";
import Github from "../Picture/Github.png";
import Facebook from "../Picture/Facebook.png";
import Instragram from "../Picture/Instagram.png";
import Discord from "../Picture/Discord.png";
import LinkIn from "../Picture/LinkIn.png";
import { ParticleBg } from "../Componants/particle";


export const ContactNavigation = () => {
  return (
    <div className="Particle w-2/5 h-screen bg-[#C89595] relative flex flex-row justify-center items-end">
      <ParticleBg />
      <div className="contact-navigation w-[100%] flex direction-row">
        
        <button class="w-1/5 h-[3rem] bg-[#967E76]">
          <img src={Facebook} class="h-[2.6rem] w-[2.6rem] m-auto" />
        </button>
        <button class="w-1/5 h-[3rem] bg-[#886F6F]">
          <img src={Instragram} class="h-[2.6rem] w-[2.6rem] m-auto" />
        </button>
        <button class="w-1/5 h-[3rem] bg-[#967E76]">
          <img src={Discord} class="h-[2.6rem] w-[2.6rem] m-auto" />
        </button>
        <button class="w-1/5 h-[3rem] bg-[#886F6F]">
          <img src={LinkIn} class="h-[2.6rem] w-[2.6rem] m-auto" />
        </button>
        <button class="w-1/5 h-[3rem] bg-[#967E76]">
          <img src={Github} class="h-[2.6rem] w-[2.6rem] m-auto" />
        </button>
      </div>
    </div>
  );
};
