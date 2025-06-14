import React from "react";

function AddUsers() {
  return (
    <div className="bg-[#182237] p-[20px] rounded-md mt-[20px]">
      <form className="flex justify-between flex-wrap">
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="text"
          placeholder="username"
          name="username"
          required
        />
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          type="number"
          placeholder="Phone"
          name="phone"
        />
        <select
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          name="isAdmin"
          id="isAdmin"
        >
          <option className="bg-[#182237]" value={false} selected>
            Is Admin?
          </option>
          <option className="bg-[#182237]" value={true}>
            Yes
          </option>
          <option className="bg-[#182237]" value={false}>
            No
          </option>
        </select>
        <select
          className="p-[30px] w-[45%] rounded-md mb-[30px] text-white border-2 border-[#2e374a]"
          name="isActive"
          id="isActive"
        >
          <option className="bg-[#182237]" value={true} selected>
            Is Active?
          </option>
          <option className="bg-[#182237]" value={true}>
            Yes
          </option>
          <option className="bg-[#182237]" value={false}>
            No
          </option>
        </select>

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

export default AddUsers;
