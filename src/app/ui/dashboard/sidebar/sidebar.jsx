import React from "react";
import styles from "./sidebar.module.css";
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
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytice",
    list: [
      {
        title: "Revenue",
        path: "/dasboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dasboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dasboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dasboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dasboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

function Sidebar() {
  return (
    <div className="top-[40px] sticky min-h-[96vh]">
      <div className="flex items-center gap-20 mb-[20]">
        <Image
          className="rounded-full object-cover"
          src="/icons8-user.png"
          width="50"
          height="50"
          alt=""
        />
        <div className="flex flex-col">
          <span className="font-medium">Meysam hasanzadeh</span>
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
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className="p-[20px] my-[5px]  flex items-center gap-[10px] cursor-pointer rounded-md bg-none border-none w-full hover:bg-[#2e374a] ">
        <MdLogout />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
