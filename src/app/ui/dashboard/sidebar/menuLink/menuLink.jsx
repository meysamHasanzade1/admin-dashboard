"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

function MenuLink({ item }) {
  const pathname = usePathname();

  return (
    <Link
      // style={{ margin: "0 0 8px 20px" }}
      href={item.path}
      className={`mb-[8px] ml-[20px] max-sm:ml-0 rounded-md max-sm:text-[10px] flex items-center py-5 px-2 max-sm:py-3  gap-2 hover:bg-[#2e374a] ${
        pathname === item.path && "bg-[#2e374a]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLink;
