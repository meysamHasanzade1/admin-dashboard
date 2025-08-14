import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import ProductsMobile from "@/app/ui/dashboard/productsMobile/page";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductsPage() {
  return (
    <div className="bg-[#182237]  ml-0 lg:ml-80 rounded-md mt-[20px] p-[20px]">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/products/add">
          <button className="p-[10px] bg-[#5d57c9] text-white border-none rounded-md cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full hidden lg:table">
        <thead>
          <tr>
            <td className="p-[10px]">Title</td>
            <td className="p-[10px]">Description</td>
            <td className="p-[10px]">Price</td>
            <td className="p-[10px]">Created At</td>
            <td className="p-[10px]">Stock</td>
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
                  src="/icons8-apple-inc.png"
                />
                IPhone
              </div>
            </td>
            <td className="p-[10px]">Desc</td>
            <td className="p-[10px]">$999</td>
            <td className="p-[10px]">13.01.2025</td>
            <td className="p-[10px]">active</td>
            <td className="p-[10px]">
              <div className="flex gap-[10px]">
                <Link href="/dashboard/products/test">
                  <button className="px-[10px] py-[10px] rounded-md text-white border-none cursor-pointer bg-teal-500">
                    View
                  </button>
                </Link>
                <button className="px-[10px] py-[10px] rounded-md text-white border-none cursor-pointer bg-red-500">
                  Remove
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <ProductsMobile />
    </div>
  );
}

export default ProductsPage;
