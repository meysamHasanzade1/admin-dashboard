import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductsMobile() {
  return (
    <div className=" lg:hidden space-y-4 mt-4">
      <table className="w-full border border-slate-700 rounded-lg overflow-hidden">
        <tbody>
          <tr className="bg-slate-800">
            <td className="px-4 py-2 font-bold w-1/3">Name</td>
            <td className="px-4 py-2">
              <div className="flex items-center gap-2">
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
          </tr>
          <tr className="bg-slate-700">
            <td className="px-4 py-2 font-bold">Description</td>
            <td className="px-4 py-2">des</td>
          </tr>
          <tr className="bg-slate-800">
            <td className="px-4 py-2 font-bold">Price</td>
            <td className="px-4 py-2">$999</td>
          </tr>
          <tr className="bg-slate-700">
            <td className="px-4 py-2 font-bold">Created At</td>
            <td className="px-4 py-2">13.01.25</td>
          </tr>
          <tr className="bg-slate-800">
            <td className="px-4 py-2 font-bold">Stock</td>
            <td className="px-4 py-2">active</td>
          </tr>
          <tr>
            <td colSpan="2" className="px-4 py-3 text-center bg-slate-900">
              <Link href={`#`}>
                <button className="bg-teal-500 text-white px-4 py-1 rounded mr-2">
                  View
                </button>
              </Link>
              <button className="bg-red-500 text-white px-4 py-1 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductsMobile;
