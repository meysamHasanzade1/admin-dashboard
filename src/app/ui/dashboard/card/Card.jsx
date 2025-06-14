import { MdSupervisedUserCircle } from "react-icons/md";

function Card() {
  return (
    <div className="bg-[#182237] p-[20px] rounded-md flex gap-[20px] cursor-pointer hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-[20px]">
        <span>Total uers</span>
        <span className="text-[24px] font-bold">10.273</span>
        <span className="text-[14px] font-light">
          <span className="text-lime-400">12%</span> more than preveious week
        </span>
      </div>
    </div>
  );
}

export default Card;
