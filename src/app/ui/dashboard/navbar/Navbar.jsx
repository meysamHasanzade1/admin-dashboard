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
    <div className="p-5 rounded-md bg-[#182237] flex items-center justify-between">
      <div className="text-[#b7bac1] font-bold capitalize">
        {pathname.split("/").pop()}
      </div>
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center gap-[10px] bg-[#2e374a] p-[10px] rounded-md">
          <MdSearch />
          <input
            className="text-white border-none outline-0"
            type="text"
            placeholder="Search..."
          />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
