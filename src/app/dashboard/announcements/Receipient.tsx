import { HiPlusCircle } from "react-icons/hi";

export default function Receipient() {
  return (
    <div className="border-[#586c86] border-2 w-fit p-1.5 text-gray-500 rounded-full grid gap-1 grid-cols-[auto_auto] items-center">
      <p className="text-sm"> zayonsoft@gmail.com</p>
      <button
        type="button"
        className="text-xl text-gray-500 cursor-pointer custom-transition hover:scale-125"
      >
        {" "}
        <HiPlusCircle />{" "}
      </button>
    </div>
  );
}
