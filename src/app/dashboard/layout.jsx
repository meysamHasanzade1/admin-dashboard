"use client";
import React, { useState } from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";

function Layout({ children }) {
  const [isSidbarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden p-2 m-2 max-sm:m-0 max-sm:top-0  text-white rounded fixed top-2 left-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon  icon-tabler icons-tabler-filled icon-tabler-layout-sidebar-left-expand"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h12zm0 2h-9v14h9a1 1 0 0 0 .993 -.883l.007 -.117v-12a1 1 0 0 0 -.883 -.993l-.117 -.007zm-4.387 4.21l.094 .083l2 2a1 1 0 0 1 .083 1.32l-.083 .094l-2 2a1 1 0 0 1 -1.497 -1.32l.083 -.094l1.292 -1.293l-1.292 -1.293a1 1 0 0 1 -.083 -1.32l.083 -.094a1 1 0 0 1 1.32 -.083z" />
        </svg>
      </button>
      <div
        className={`flex-1  h-full max-sm:w-[250px] p-[20px] bg-[#182237] fixed transform transition-transform  duration-300 z-40 ${
          isSidbarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <Sidebar isOpen={isSidbarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
      <div className="p-[20px] max-sm:p-0 flex-1/4">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
