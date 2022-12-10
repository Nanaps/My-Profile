import React from "react";
import EducationCover from "../Picture/EducationCover.jpg";
import TechUp from "../Picture/TechUp.jpeg";
import TechnologySiam from "../Picture/TechnologySiam.png";
import PSU from "../Picture/PSU.gif";
import Shanghai from "../Picture/Shanghai.jpeg";
import Changzhou from "../Picture/Changzhou.png";
import Yunnan from "../Picture/Yunnan.jpeg";
export const Education = () => {
  return (
    <div class="w-screen h-screen bg-[#967E76] relative scroll-behavior: smooth;">
      <div className="educationContent w-[60%] absolute top-[5%] left-[2%] ml-[50%]">
        <h1 className="topic z-20 text-[2.3rem] text-left" >Education Background</h1>
        <div class="flex flex-row mt-[15px]">
          <img
            src={TechUp}
            className="techupLogo w-[5rem] h-[5rem] rounded-full"
          />
          <p className="content w-[100%] text-[1.2rem] text-left ml-[30px]">
            TechUp Bootcamp <br />
            Aug 2022-Dec 2022 <br />
            Full-Stack Software Developer
          </p>
        </div>
        <div class="flex flex-row mt-[15px]">
          <img src={TechnologySiam} className="techupLogo w-[5rem] h-[5rem] " />
          <p className="content w-[100%] text-[1.2rem] text-left ml-[30px]">
            Siam University <br />
            Aug 2019-Jan 2020 <br />
            Guide training program, tour guide license/ tour leader license.
          </p>
        </div>
        <div class="flex flex-row mt-[15px]">
          <img
            src={PSU}
            className="techupLogo w-[5rem] h-[5rem] rounded-full"
          />
          <p className="content w-[100%] text-[1.2rem] text-left ml-[30px]">
            Prince of Songkhla University <br />
            May 2014-July 2018 <br />
            Bachelor's degree in International Business China
          </p>
        </div>
        <div class="flex flex-row mt-[15px]">
          <img
            src={Shanghai}
            className="techupLogo w-[5rem] h-[5rem] rounded-full"
          />
          <p className="content w-[100%] text-[1.2rem] text-left ml-[30px]">
            Shanghai University <br />
            Aug 2017-Jan 2018 <br />
            Exchanged Student
          </p>
        </div>
        <div class="flex flex-row mt-[15px]">
          <img
            src={Changzhou}
            className="techupLogo w-[5rem] h-[5rem] rounded-full"
          />
          <p className="content w-[100%] text-[1.2rem] text-left ml-[30px]">
            Changzhou University <br />
            May 2016-Aug 2016 <br />
            Exchanged Student
          </p>
        </div>
        <div class="flex flex-row mt-[15px]">
          <img
            src={Yunnan}
            className="techupLogo w-[5rem] h-[5rem] rounded-full"
          />
          <p className="content w-[100%] text-[1.2rem] text-left ml-[30px]">
            Yunnan University <br />
            May 2015-Aug 2015 <br />
            Exchanged Student
          </p>
        </div>
      </div>
      <img src={EducationCover} class="h-screen " />
    </div>
  );
};
