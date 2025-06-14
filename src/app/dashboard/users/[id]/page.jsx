import Image from "next/image";
import React from "react";

function SingleUserPage() {
  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1/4 text-[#b7bac1] bg-[#182237] p-[20px] rounded-md font-bold max-h-max">
        <div className="w-full h-[300px] relative rounded-md overflow-hidden mb-[20px] ">
          <Image src="/icons8-user.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className=" bg-[#182237] p-[20px] rounded-md flex-3/4">
        <form className="flex flex-col">
          <label className="text-[12px]">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Jhon Doe"
            className="p-[20px] border-2 my-[10px] border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          />
          <label className="text-[12px]">Email</label>
          <input
            type="email"
            name="email"
            placeholder="JhonDoe@gmail.com"
            className="p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          />
          <label className="text-[12px]">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          />
          <label className="text-[12px]">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="+1234567"
            className="p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          />
          <label className="text-[12px]">Address</label>
          <textarea
            type="text"
            name="address"
            placeholder="Please Enter Your Address"
            className="p-[20px]   my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          />
          <label className="text-[12px]">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label className="text-[12px]">Is Active?</label>
          <select
            name="isActive"
            id="isAcitve"
            className="p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className="w-full p-[20px] bg-teal-500 text-white border-none rounded-md cursor-pointer mt-[20px]">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingleUserPage;
