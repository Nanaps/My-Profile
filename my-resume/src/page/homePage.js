import React from "react";
import AboutMe from "../Picture/AboutMe.jpg";
import { NavigationBar } from "../Componants/navigationBar";
import { ContactNavigation } from "../Componants/contactNavigation";
import { MyInfo } from "../Componants/myInfo";

export const HomePage = () => {
  return (
    <div class="w-screen h-screen">
      <div class="flex flex-row justify-between items-center">
        <NavigationBar />
        <MyInfo />
        <ContactNavigation />
        <img
          src={AboutMe}
          class="w-[22rem] h-[23rem] absolute right-[26rem] border-8 border-[#FFF5EA]"
        />
      </div>
    </div>
  );
};
