import Image from "next/image";
import React from "react";

function SingelProductPage() {
  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-1/4 text-[#b7bac1] bg-[#182237] p-[20px] rounded-md font-bold max-h-max">
        <div className="w-full h-[300px] relative rounded-md overflow-hidden mb-[20px] ">
          <Image src="/icons8-user.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className=" bg-[#182237] p-[20px] rounded-md flex-3/4">
        <form className="flex flex-col">
          <label className="text-[12px]">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Jhon Doe"
            className="p-[20px] border-2 my-[10px] border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          />
          <label className="text-[12px]">Price</label>
          <input
            type="email"
            name="price"
            placeholder="Price"
            className="p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          />
          <label className="text-[12px]">Stock</label>
          <input
            type="password"
            name="stock"
            placeholder="Password"
            className="p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          />
          <label className="text-[12px]">Color</label>
          <input
            type="text"
            name="color"
            placeholder="red"
            className="p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          />
          <label className="text-[12px]">Size</label>
          <textarea
            type="text"
            name="size"
            placeholder=""
            className="p-[20px]   my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          />
          <label className="text-[12px]">Cat</label>
          <select
            name="cat"
            id="cat"
            className="p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          >
            <option value="kitchen">Kitchen</option>
            <option value="Computer">Computer</option>
          </select>
          <label className="text-[12px]">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="description"
            className="p-[20px] my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white"
          ></textarea>
          <button className="w-full p-[20px] bg-teal-500 text-white border-none rounded-md cursor-pointer mt-[20px]">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingelProductPage;
