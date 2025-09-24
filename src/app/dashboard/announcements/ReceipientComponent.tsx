import ClassicUnderline from "@/app/components/ClassicUnderline";
import { HiCheck, HiMinusCircle, HiPlus, HiSearch } from "react-icons/hi";
import { HiPlusCircle } from "react-icons/hi2";
import Receipient from "./Receipient";
type ListProps = {
  receipientList: [];
};
export default function ReceipientComponent({ receipientList }: ListProps) {
  return (
    <div className="p-4 py-5.5 grid gap-5 content-start">
      <div>
        <h1 className="text-xl font-semibold">
          <ClassicUnderline text={"Receipients"} />
        </h1>
        <p className="text-xs text-center">
          You can Deselect any recipient you don't want
        </p>
      </div>

      {/* SEARCH */}
      <div>
        <div className="flex gap-1 px-2 py-1.5 rounded-full items-center border-2 border-[#004bad]">
          <span className="text-[#004bad]">
            <label htmlFor="search">
              <HiSearch strokeWidth={0.5} />
            </label>
          </span>
          <input
            id="search"
            type="search"
            className="outline-none w-full text-sm"
            placeholder="Search"
          />
        </div>
      </div>
      {/* SEARCH ENDS */}

      <div className="grid justify-end">
        <p className="flex gap-1 items-center">
          <span className="text-sm">Select All</span>
          <span>
            {" "}
            <button
              type="button"
              className="text-[#004bad] hover:text-gray-200 hover:bg-[#004bad] custom-transition cursor-pointer text-xs rounded-full p-0.5 border border-[#004bad]"
            >
              <HiCheck />
            </button>{" "}
          </span>
        </p>
      </div>
      <div className="flex gap-1.5 flex-wrap">
        <div className="border-[#004bad] bg-gray-100  border-2 w-fit p-1.5 text-gray-900 rounded-full grid gap-1 grid-cols-[auto_auto] items-center">
          <p className="text-sm"> favourlosotu@gmail.com</p>
          <button
            type="button"
            className="text-xl text-red-600 cursor-pointer custom-transition hover:scale-125"
          >
            {" "}
            <HiMinusCircle />{" "}
          </button>
        </div>
        <Receipient />
      </div>
    </div>
  );
}
