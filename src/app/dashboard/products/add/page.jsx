import React from "react";

function AddProducts() {
  return (
    <div className="bg-[#182237] p-[20px] rounded-md mt-[20px]">
      <form className="flex justify-between flex-wrap">
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="text"
          placeholder="title"
          name="title"
          required
        />
        <select
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          name="cat"
          id="cat"
        >
          <option className="bg-[#182237]" value="general">
            Chose a Category
          </option>
          <option className="bg-[#182237]" value="kitchen">
            Kitchen
          </option>
          <option className="bg-[#182237]" value="phone">
            Phone
          </option>
          <option className="bg-[#182237]" value="computer">
            Computer
          </option>
        </select>
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="text"
          placeholder="price"
          name="price"
        />
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="number"
          placeholder="stock"
          name="stock"
        />
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="text"
          placeholder="color"
          name="color"
        />
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="text"
          placeholder="size"
          name="size"
        />
        <textarea
          className="p-[30px] w-full text-white border-2 border-[#2e374a] h-70 mb-6"
          rows={16}
          name="desc"
          id="desc"
          placeholder="Description"
        ></textarea>
        <button
          className="w-full p-[30px] bg-teal-500 text-white border-none rounded-md cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProducts;
