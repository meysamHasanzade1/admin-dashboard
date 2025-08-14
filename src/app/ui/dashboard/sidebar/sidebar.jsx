import React from "react";
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

import { useRouter } from "next/navigation";

const munuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "#",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytice",
    list: [
      {
        title: "Revenue",
        path: "#",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "#",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "#",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "#",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "#",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

function Sidebar({ onClose }) {
  const router = useRouter();

  const hadndleLogOut = () => {
    router.push("/login");
  };
  return (
    <div className="top-[40px]   min-h-[96vh] ">
      <button className="lg:hidden" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-right-expand"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm-3 2h-9a1 1 0 0 0 -.993 .883l-.007 .117v12a1 1 0 0 0 .883 .993l.117 .007h9v-14zm-3.293 4.293a1 1 0 0 1 .083 1.32l-.083 .094l-1.292 1.293l1.292 1.293a1 1 0 0 1 .083 1.32l-.083 .094a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 -.083 -1.32l.083 -.094l2 -2a1 1 0 0 1 1.414 0z" />
        </svg>
      </button>
      <div className="flex items-center gap-20 max-sm:gap-[10px] mb-[20]">
        <Image
          className="rounded-full object-cover "
          src="/icons8-user.png"
          width="50"
          height="50"
          alt=""
        />
        <div className="flex flex-col">
          <span className="font-medium max-sm:text-sm">Meysam hasanzadeh</span>
          <span className="text-[12px] text-[#b7bac1]">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {munuItems.map((cat) => (
          <li key={cat.title}>
            <span
              style={{ margin: "10px 0px" }}
              className={`text-[#b7bac1] font-bold  text-[13px]`}
            >
              <p className="text-xs">{cat.title}</p>
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button
        onClick={hadndleLogOut}
        className="p-[20px] my-[5px] max-sm:p-[8px] max-sm:text-sm flex items-center gap-[10px] cursor-pointer rounded-md bg-none border-none w-full hover:bg-[#2e374a] "
      >
        <MdLogout />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
