import Link from "next/link";

import { useAside } from "@/contexts/SidebarContext";

type LinkProps = {
  name: string;
  icon: React.ReactNode;
  url: string;
};
export default function AsideLink({ name, icon, url }: LinkProps) {
  const { asideOpened } = useAside();
  return (
    <div>
      <p className={`text-gray-200`}>
        <Link
          className={`custom-transition grid items-center rounded-md hover:bg-gray-200 hover:text-[#005acf]
            ${asideOpened ? "gap-1" : ""} ${
            asideOpened
              ? "grid-cols-[auto_1fr] grid-rows-1"
              : "grid-cols-1 grid-rows-1"
          }`}
          href={url}
        >
          <span
            className={`p-2 font-bold w-10 text-center grid justify-center `}
          >
            {icon}
          </span>

          <span
            className={`custom-transition text-sm overflow-hidden  ${
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
