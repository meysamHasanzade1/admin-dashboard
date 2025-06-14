"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

function MenuLink({ item }) {
  const pathname = usePathname();

  return (
    <Link
      style={{ margin: "0 0 8px 20px", padding: "15px" }}
      href={item.path}
      className={` rounded-md flex items-center py-5 gap-2 hover:bg-[#2e374a] ${
        pathname === item.path && "bg-[#2e374a]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLink;
