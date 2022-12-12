import React from "react";
import SkillCover from "../Picture/SkillCover.jpg";

export const Skill = () => {
  return (
    <div class="w-screen h-screen">
      <div className="topic w-screen h-1/2 flex flex-row">
        <div className="topic w-1/5 h-[100%] bg-[#C89595] border-[1px] text-[10rem] flex flex-col justify-center">
          S
        </div>
        <div className="topic w-1/5 h-[100%] bg-[#C89595] border-[1px] text-[10rem] flex flex-col justify-end">
          K
        </div>
        <div className="topic w-1/5 h-[100%] bg-[#C89595] border-[1px] text-[10rem] flex flex-col justify-center">
          {/* <img src={SkillCover} class="h-screen" /> */}
          I
        </div>
        <div className="topic w-1/5 h-[100%] bg-[#C89595] border-[1px] text-[10rem] flex flex-col justify-start">
          L
        </div>
        <div className="topic w-1/5 h-[100%] bg-[#C89595] border-[1px] text-[10rem] flex flex-col justify-end">
          L
        </div>
      </div>
    </div>
  );
};
