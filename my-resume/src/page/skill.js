import React from "react";
import Frontend from "../Picture/Frontend.png";
import Backend from "../Picture/Backend.png";
import OtherSkills from "../Picture/OtherSkills.png";

export const Skill = () => {
  return (
    <div class="w-screen h-screen bg-[#FFF5EA]">
      <div className="topic w-screen h-[42%] flex flex-row">
        <div className="topic w-1/5 h-[100%] bg-[#C89595] border-[1px] text-[10rem] flex flex-col justify-center ">
          <p className="topic hover:animate-spin cursor-pointer">S</p>
        </div>
        <div className="topic w-1/5 h-[100%] bg-[#C89595] border-[1px] text-[10rem] flex flex-col justify-end ">
          <p className="topic hover:animate-ping cursor-pointer">K</p>
        </div>
        <div className="topic w-1/5 h-[100%] bg-[#C89595] border-[1px] text-[10rem] flex flex-col justify-center ">
          <p className="topic hover:animate-pulse cursor-pointer">I</p>
        </div>
        <div className="topic w-1/5 h-[100%] bg-[#C89595] border-[1px] text-[10rem] flex flex-col justify-start ">
          <p className="topic hover:animate-bounce cursor-pointer">L</p>
        </div>
        <div className="topic w-1/5 h-[100%] bg-[#C89595] border-[1px] text-[10rem] flex flex-col justify-end">
          <p className="topic hover:animate-bounce cursor-pointer">L</p>
        </div>
      </div>
      <div className="flex flex-row justify-center m-[5%] mt-[8%]">
        <div className="w-[300px] h-[150px] bg-[rgba(200,149,149,0.5)] rounded-2xl relative hover:animate-pulse cursor-pointer">
          <img
            src={Frontend}
            className="w-[80px] h-[80px] absolute left-[36%] bottom-[85%]"
          />
          <div className="text-left p-[5%]">
            <p className="text-[2rem]">Frontend</p>
            <p className="text-[1.2rem]">
              HTML5 CSS3 JavaScript React Redux Tailwind
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[150px] bg-[rgba(200,149,149,0.5)] rounded-2xl ml-[5%] mr-[5%] relative hover:animate-pulse cursor-pointer">
          <img
            src={Backend}
            className="w-[80px] h-[80px] absolute left-[36%] bottom-[85%]"
          />
          <div className="text-left p-[5%]">
            <p className="text-[2rem]">Backend</p>
            <p className="text-[1.2rem]">
              Node.js , Express.js , MongoDB, PostgreSQL
            </p>
          </div>
        </div>
        <div className="w-[300px] h-[150px] bg-[rgba(200,149,149,0.5)] rounded-2xl relative hover:animate-pulse cursor-pointer">
          <img
            src={OtherSkills}
            className="w-[80px] h-[80px] absolute left-[36%] bottom-[85%]"
          />
          <div className="text-left p-[5%]">
            <p className="text-[2rem]">Other Skills</p>
            <p className="text-[1.2rem]">
              Git , Cypress , Agile methodology, figma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
