import React from "react";
import WorkingMe01 from "../Picture/WorkingMe01.jpg";
import WorkingMe02 from "../Picture/WorkingMe02.jpg";
import WorkingMe03 from "../Picture/WorkingMe03.jpg";

export const WorkingExperience = () => {
  return (
    <div class="w-screen h-screen flex flex-row bg-[#FFF5EA]">
      <div>
        <div class="flex flex-row justify-start items-start">
          <img src={WorkingMe01} class="w-[16rem] h-[14rem]" />
          <p class="w-[12rem] h-[14rem] bg-[#C89595] p-5"></p>
        </div>
        <p class="w-[28rem] h-[12rem] bg-[#C1A3A3] text-[3rem] text-right pr-[10%] pt-[13%]">
          Working Experience
        </p>
        <p class="w-[24.5rem] h-[7.5rem] pl-[15%] pb-5 text-left">
          <br />
          <p className="company text-[1.5rem]">
            <strong> J&T Express Company</strong> <br />
          </p>
          <p class="text-[1.2rem]"></p>
          <strong> GM Asistance | Feb 2021 - Mar 2022 </strong>
          <ul class="list-disc text-[1.2rem]">
            <li>
              Administrated a total of 36 branches with 14 branches in Trat and
              22 in Chanthaburi.
            </li>
            <li>Implemented assignment from general management</li>
            <li>
              Motivated dispense parcels rate of 36 branches more than 70%
            </li>
          </ul>
        </p>
      </div>
      <div>
        <div class="flex flex-row">
          <div class="w-[8rem] h-[10rem] bg-[#835858]"></div>
          <p class="w-[25rem] h-[17rem] bg-[#C89595] pt-[10%] pl-[7%]">
            <p className="company text-[1.5rem] text-left">
              <strong> SCB Protect Company</strong> <br />
            </p>
            <p class="text-[1.2rem] text-left">
              <strong> Protection Consultant | Nov 2020 - Feb 2021 </strong>
            </p>
            <ul class="list-disc text-[1.2rem] text-left">
              <li>Offered financial planning for customer</li>
              <li>Promoted insurant products and service</li>
              <li>Operated exhibition booth to financial consultant</li>
            </ul>
          </p>
        </div>
        <img src={WorkingMe02} class="w-[23rem] h-[15rem]" />
      </div>
      <div>
        <p class="w-[18rem] h-[10rem] bg-[#835858] pt-9 pb-5 pl-5 pr-5">
          <strong>2019 - J&T Express, Trainer</strong>
          <br />
          Train new employee, design study plan and solve problem.
        </p>
        <div class="flex flex-row">
          <div class="h-[10rem] w-[10rem] bg-[#AC7C7C]"></div>
          <div class="w-[8rem] h-[10rem]"></div>
        </div>
        <p class="w-[18rem] h-[9rem] bg-[#C1A3A3] p-5">
          <strong>2022 - J&T Express, General Manager Asistant</strong>
          <br />
          Manage branch work , and solve problem.
        </p>
      </div>
      <div>
        <img src={WorkingMe03} class="w-[11rem] h-[14rem]" />
        <p class="w-[21rem] h-[17rem] bg-[#C89595] p-5">
          <strong>2021 - SCB Protect Company, Protection consultant </strong>
          <br />
          Make financial plan for custome and offer saving insurance.
        </p>
        <div class="w-[11rem] h-[4.5rem] bg-[#F2B4B4]"></div>
      </div>
    </div>
  );
};
