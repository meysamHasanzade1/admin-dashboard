"use client";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <div className="p-5 rounded-md bg-[#182237] flex items-center m-auto max-sm:p-[2px] justify-between lg:ml-80 max-sm:flex-col max-sm:w-[95%]">
      <div className="ml-5 text-[#b7bac1] font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-[20px] py-1.5 max-sm:w-[96%] max-sm:justify-between">
        <div className="flex items-center gap-[10px] bg-[#2e374a] py-1 rounded-md">
          <MdSearch />
          <input
            className="text-white max-sm:text-[10px] border-none outline-0  max-sm:w-[140px]"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex gap-5 max-sm:gap-0.5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
