"use client";

import Search from "./Search/SearchBar";
import handleDelete from "../../../lib/HandleDelete";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import UsersMobile from "@/app/ui/dashboard/usersMobile/UsersMobile";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("خطا در دریافت کاربران:", data.error || data);
          setUsers([]);
        }
      })
      .catch((err) => {
        console.error("خطا در fetch کاربران:", err);
        setUsers([]);
      });
  }, []);

  const filteredUsers = Array.isArray(users)
    ? users.filter(
        (user) =>
          user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="bg-[#182237] rounded-md mt-[20px] p-[20px] lg:ml-80 overflow-x-auto">
      <div className="flex items-center justify-between">
        <Search
          placeholder="Search for a user..."
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Link href="/dashboard/users/add">
          <button className="p-[10px] bg-[#5d57c9] text-white border-none rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>

      <table className="w-full min-w-full hidden lg:table">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Email</td>
            <td className="p-[10px]">Created At</td>
            <td className="p-[10px]">Role</td>
            <td className="p-[10px] max-lg:hidden">Action</td>
          </tr>
        </thead>
        {(searchQuery ? filteredUsers : users).map((user) => (
          <tbody key={user.id}>
            <tr>
              <td className="p-[10px] hidden lg:table-cell">
                <div className="flex items-center gap-[10px]">
                  <Image
                    className="rounded-full object-cover"
                    alt=""
                    width={40}
                    height={40}
                    src="/icons8-user.png"
                  />
                  {user.name || "-"}
                </div>
              </td>
              <td className="p-[10px]">{user.email || "-"}</td>
              <td className="p-[10px]">
                {user.createdAt ? user.createdAt.slice(0, 10) : "-"}
              </td>
              <td className="p-[10px]">
                {user.isAdmin ? "isAdmin" : "notAdmin"}
              </td>
              <td className="p-[10px]">
                {user.isActive ? "isActive" : "notActive"}
              </td>
              <td className="p-[10px] max-lg:hidden">
                <div className="flex gap-[10px]">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="px-[10px] py-[10px] rounded-md text-white border-none cursor-pointer bg-teal-500">
                      View
                    </button>
                  </Link>
                  <button
                    onClick={() =>
                      handleDelete(user.id, () =>
                        setUsers((prev) => prev.filter((u) => u.id !== user.id))
                      )
                    }
                    className="px-[10px] py-[10px] rounded-md text-white border-none cursor-pointer bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            <tr className="lg:hidden">
              <td colSpan={6}>
                <div className="flex gap-[10px] justify-center mt-[10px]">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="px-[10px] py-[10px] rounded-md text-white border-none cursor-pointer bg-teal-500">
                      View
                    </button>
                  </Link>
                  <button
                    onClick={() =>
                      handleDelete(user.id, () =>
                        setUsers((prev) => prev.filter((u) => u.id !== user.id))
                      )
                    }
                    className="px-[10px] py-[10px] rounded-md text-white border-none cursor-pointer bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className="lg:hidden">
        <UsersMobile
          users={searchQuery ? filteredUsers : users}
          handleDelete={handleDelete}
          setUsers={setUsers}
        />
      </div>
    </div>
  );
}

export default UsersPage;
