import React from "react";

function Pagination() {
  return (
    <div className="p-[10px] flex justify-between">
      <button
        disabled
        className="py-[5px] px-[10px] text-black cursor-pointer bg-amber-50 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Previous
      </button>
      <button className="py-[5px] px-[10px] text-black cursor-pointer bg-amber-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
}

export default Pagination;
