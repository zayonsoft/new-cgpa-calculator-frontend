import ClassicUnderline from "@/app/components/ClassicUnderline";
import { HiCheck, HiMinusCircle, HiPlus, HiSearch } from "react-icons/hi";
import Receipient from "./Receipient";
import { UserResponseType } from "@/contexts/UserContext";
import { v4 } from "uuid";

type ListProps = {
  receipientList: UserResponseType[];
  search: string;
  selectedIds: Record<string, any>;
  updateSearch: (search: string) => void;
  updateSelection: (id: string | number) => void;
};

export default function ReceipientComponent({
  receipientList,
  search,
  selectedIds,
  updateSearch,
  updateSelection,
}: ListProps) {
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
        <div className="flex gap-1 px-2 py-2 rounded-full items-center border-2 border-[#004bad]">
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
            onChange={(e) => updateSearch(e.target.value)}
            value={search}
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
        {receipientList.map((each) => {
          const userId = each.id!;
          let isSelected = userId in selectedIds && selectedIds[userId];
          return (
            <Receipient
              updateSelection={updateSelection}
              id={userId}
              key={v4()}
              email={each.email}
              selected={isSelected}
            />
          );
        })}
      </div>
    </div>
  );
}
