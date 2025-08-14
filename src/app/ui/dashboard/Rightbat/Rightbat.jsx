import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";

function Rightbar() {
  return (
    <div className="fixed lg:block hidden  ">
      <div className="relative mb-0.5 bg-linear-to-t p-2 to-[#182237] bg-no-repeat from-[#253352]">
        <div className="absolute bottom-0 mb-[20px] py-[20px] rounded-md right-0 w-full  h-[50%] "></div>
        <div className="flex flex-col gap-[24px] font-bold">
          <span className="font-bold">🔥َAvailable Now</span>
          <h3 className="font-extrabold  text-[12px] text-[#b7bac1]">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="z-10">Takes 4 minutes to learn</span>
          <p className="text-[#b7bac1]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quia
            magni perferendis consectetur, dolorem dolorum!
          </p>
          <button className="p-[10px] flex items-center gap-[10px] z-10 bg-[#5d57c9] text-white border-none w-[100px] rounded-md cursor-pointer">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="relative  bg-linear-to-t p-2 to-[#182237] bg-no-repeat from-[#253352]">
        <div className="absolute bottom-0 mb-[20px] py-[20px] rounded-md right-0 w-full  h-[50%] "></div>
        <div className="flex flex-col gap-[24px] font-bold">
          <span className="font-bold">🚀Coming Soon</span>
          <h3 className="font-extrabold  text-[12px] text-[#b7bac1]">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="z-10">boost your productivity</span>
          <p className="text-[#b7bac1]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quia
            magni perferendis consectetur, dolorem dolorum!
          </p>
          <button className="p-[10px] flex items-center gap-[10px] z-10 bg-[#5d57c9] text-white border-none w-[100px] rounded-md cursor-pointer">
            <MdPlayCircleFilled />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
