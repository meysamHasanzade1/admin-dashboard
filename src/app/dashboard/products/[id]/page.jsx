import Image from "next/image";
import React from "react";
import styles from "../../users/add/dashbord.module.css";

function SingelProductPage() {
  return (
    <div className="flex max-lg:items-center gap-[50px] mt-[20px] ml-0 lg:ml-80 lg:flex-row flex-col">
      <div className="flex-1/4 max-lg:w-[70%] text-[#b7bac1] bg-[#182237] p-[20px] rounded-md font-bold max-h-max">
        <div className="w-full  max-sm:h-[150px] h-[300px] relative rounded-md overflow-hidden mb-[20px] ">
          <Image src="/icons8-user.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className=" max-lg:w-full bg-[#182237] p-[20px] rounded-md flex-3/4">
        <form className="flex flex-col">
          <label className="text-[12px]">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Jhon Doe"
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          />
          <label className="text-[12px]">Price</label>
          <input
            type="email"
            name="price"
            placeholder="Price"
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          />
          <label className="text-[12px]">Stock</label>
          <input
            type="password"
            name="stock"
            placeholder="Password"
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          />
          <label className="text-[12px]">Color</label>
          <input
            type="text"
            name="color"
            placeholder="red"
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          />
          <label className="text-[12px]">Size</label>
          <textarea
            type="text"
            name="size"
            placeholder=""
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          />
          <label className="text-[12px]">Cat</label>
          <select
            name="cat"
            id="cat"
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
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
            className={`${styles.input} p-[20px]  my-[10px] border-2 border-[#2e374a] rounded-md bg-[#151c2c] text-white`}
          ></textarea>
          <button className="mt-2 w-full max-sm:p-2.5 p-[30px] bg-teal-500 text-white border-none rounded-md cursor-pointer">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingelProductPage;
