import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "../card/card.module.css";

function Card() {
  return (
    <div
      className={`bg-[#182237] ${styles.span} p-[20px] max-sm:p-[5px]  rounded-md flex gap-[20px] max-sm:gap-[10px] cursor-pointer hover:bg-[#2e374a]`}
    >
      <div className="max-sm:hidden">
        <MdSupervisedUserCircle size={24} />
      </div>
      <div className="flex flex-col gap-[20px]">
        <span>Total uers</span>
        <span className=" font-bold">10.273</span>
        <span className=" font-light">
          <span className="text-lime-400">12%</span> more than preveious week
        </span>
      </div>
    </div>
  );
}

export default Card;
