import React from "react";
import { MdPlayCircleFilled } from "react-icons/md";

function RightbarMobile() {
  return (
    <div className="fixed lg:hideen  flex top-auto bottom-0 overflow-y-auto">
      <div className="  mb-0.5 bg-linear-to-t p-2 to-[#182237] bg-no-repeat from-[#253352] h-">
        <div className="absolute bottom-0 mb-[20px] py-[10px] rounded-md right-0 w-full  h-[50%] "></div>
        <div className="flex flex-col gap-[10px] font-bold">
          <span className="font-bold text-[12px]">🔥َAvailable Now</span>
          <h3 className="font-extrabold  text-[9px] text-[#b7bac1]">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="z-10 text-[12px]">Takes 4 minutes to learn</span>
          <p className="text-[#b7bac1] text-[9px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quia
            magni perferendis consectetur, dolorem dolorum!
          </p>
          <button className="py-[5px] px-[5px] text-[12px] flex items-center gap-[8px] z-10 bg-[#5d57c9] absolute bottom-0 left-5 text-white border-none w-[80px] rounded-md cursor-pointer">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="relative  bg-linear-to-t p-2 to-[#182237] bg-no-repeat from-[#253352]">
        <div className="absolute bottom-0 mb-[20px] py-[20px] rounded-md right-0 w-full  h-[50%] "></div>
        <div className="flex flex-col gap-[10px] font-bold">
          <span className="font-bold text-[12px]">🚀Coming Soon</span>
          <h3 className="font-extrabold  text-[9px] text-[#b7bac1]">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="z-10 text-[12px]">boost your productivity</span>
          <p className="text-[#b7bac1] text-[9px] mb-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quia
            magni perferendis consectetur, dolorem dolorum!
          </p>
          <button className="py-[5px] px-[5px] text-[12px] flex items-center gap-[8px] z-10 bg-[#5d57c9] absolute bottom-1.5 left-5 text-white border-none w-[80px] rounded-md cursor-pointer">
            <MdPlayCircleFilled />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightbarMobile;
