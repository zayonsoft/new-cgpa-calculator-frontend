import Link from "next/link";

import { useAside } from "@/contexts/SidebarContext";

type LinkProps = {
  name: string;
  icon: React.ReactNode;
};
export default function AsideLink({ name, icon }: LinkProps) {
  const { asideOpened } = useAside();
  return (
    <div>
      <p className={`text-gray-700`}>
        <Link
          className={`custom-transition grid items-center rounded-md hover:bg-gray-200
            ${asideOpened ? "gap-0.5" : ""} ${
            asideOpened
              ? "grid-cols-[auto_1fr] grid-rows-1"
              : "grid-cols-1 grid-rows-1"
          }`}
          href={"#"}
        >
          <span className={`p-2`}>{icon}</span>

          <span
            className={`text-gray-800 custom-transition text-sm overflow-hidden  ${
              asideOpened ? "opacity-100" : "opacity-0"
            } ${asideOpened ? "w-40" : "w-0 h-0"}`}
          >
            {name}
          </span>
        </Link>
      </p>
    </div>
  );
}
