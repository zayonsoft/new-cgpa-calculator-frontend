import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

type ReceipientProps = {
  id: number | string;
  selected: boolean;
  email: string;
  updateSelection: (id: string | number) => void;
};

export default function Receipient({
  id,
  selected,
  email,
  updateSelection,
}: ReceipientProps) {
  return (
    <>
      <div
        className={`${
          selected
            ? "border-[#004bad] text-gray-900 bg-gray-100"
            : "border-[#586c86] text-gray-500"
        }  border-2 w-fit p-1.5 rounded-full grid gap-1 grid-cols-[auto_auto] items-center`}
      >
        <p className="text-sm">{email}</p>
        <button
          onClick={(e) => updateSelection(id)}
          type="button"
          className={`text-xl ${
            selected ? "text-red-600" : "text-gray-500"
          } cursor-pointer custom-transition hover:scale-125`}
        >
          {selected ? <HiMinusCircle /> : <HiPlusCircle />}
        </button>
      </div>
    </>
  );
}
