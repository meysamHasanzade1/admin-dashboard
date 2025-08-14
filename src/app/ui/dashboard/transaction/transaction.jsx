import Image from "next/image";
import React from "react";

function Transaction() {
  return (
    <div className="bg-[#182237] p-[20px] rounded-md max-sm:p-0 max-sm:w-[100%]">
      <h2 className="mb-[20px] max-sm:mb-[10px] font-extralight text-[#b7bac1]">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px] max-sm:text-[10px]">Name</td>
            <td className="p-[10px] max-sm:text-[10px]">Status</td>
            <td className="p-[10px] max-sm:text-[10px]">Date</td>
            <td className="p-[10px] max-sm:text-[10px]">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px] max-sm:text-[10px]">
              <div className="flex gap-[10px] items-center">
                <Image
                  className="object-cover rounded-full"
                  alt=""
                  width={40}
                  height={40}
                  src="/icons8-user.png"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px] ">
              <span className="rounded-md max-sm:text-[10px] p-[5px] text-[14px] text-white bg-[#f773f775]">
                Pendng
              </span>
            </td>
            <td className="max-sm:text-[10px]">14.02.2025</td>
            <td className="max-sm:text-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center max-sm:text-[10px]">
                <Image
                  className="object-cover rounded-full"
                  alt=""
                  width={40}
                  height={40}
                  src="/icons8-user.png"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="rounded-md max-sm:text-[10px] p-[5px] text-[14px] text-white bg-[#f7737375]">
                Pendng
              </span>
            </td>
            <td className="max-sm:text-[10px]">14.02.2025</td>
            <td className="max-sm:text-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px] max-sm:text-[10px]">
              <div className="flex gap-[10px] items-center">
                <Image
                  className="object-cover rounded-full  "
                  alt=""
                  width={40}
                  height={40}
                  src="/icons8-user.png"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="rounded-md max-sm:text-[10px] p-[5px] text-[14px] text-white bg-[#afd6ee75]">
                Pendng
              </span>
            </td>
            <td className="max-sm:text-[10px]">14.02.2025</td>
            <td className="max-sm:text-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px] max-sm:text-[10px]">
              <div className="flex gap-[10px] items-center">
                <Image
                  className="object-cover rounded-full"
                  alt=""
                  width={40}
                  height={40}
                  src="/icons8-user.png"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px] ">
              <span className="rounded-md max-sm:text-[10px] p-[5px] text-[14px] text-white bg-[#f7cb7375]">
                Pendng
              </span>
            </td>
            <td className="max-sm:text-[10px]">14.02.2025</td>
            <td className="max-sm:text-[10px]">$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
