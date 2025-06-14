import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function UsersPage() {
  return (
    <div className="bg-[#182237] rounded-md mt-[20px] p-[20px]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="p-[10px] bg-[#5d57c9] text-white border-none rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Email</td>
            <td className="p-[10px]">Created At</td>
            <td className="p-[10px]">Role</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px]">
              <div className="flex items-center gap-[10px]">
                <Image
                  className="rounded-full object-cover"
                  alt=""
                  width={40}
                  height={40}
                  src="/icons8-user.png"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">meysam.hasanzadeh0101@gmail.com</td>
            <td className="p-[10px]">13.7.2025</td>
            <td className="p-[10px]">Admin</td>
            <td className="p-[10px]">active</td>
            <td className="p-[10px]">
              <div className="flex gap-[10px]">
                <Link href="/dashboard/users/test">
                  <button className="px-[10px] py-[10px] rounded-md text-white border-none cursor-pointer bg-teal-500">
                    View
                  </button>
                </Link>
                <button className="px-[10px] py-[10px] rounded-md text-white border-none cursor-pointer bg-red-500">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
}

export default UsersPage;
