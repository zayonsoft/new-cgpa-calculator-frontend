import { JSX } from "react";

type StatDataProps = {
  name: string;
  count: number;
  icon: React.ReactNode;
};
export default function DashboardStatComponent({
  icon,
  name,
  count,
}: StatDataProps): JSX.Element {
  return (
    <div className="grid bg-gray-100 gap-3 shadow-xs shadow-gray-400 px-4 py-10 rounded-md">
      <div className="grid">
        <span className="grid justify-center border-4  w-35 h-35 rounded-full text-[#004bad] p-4 m-auto  text-5xl">
          <h2 className="font-bold text-center text-4xl">{count}</h2>
          {icon}
        </span>
      </div>
      <p className="text-center text-gray-700 py-3">{name}</p>
    </div>
  );
}
