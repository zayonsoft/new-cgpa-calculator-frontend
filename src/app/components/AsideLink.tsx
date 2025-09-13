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
      <p className="text-gray-700">
        <Link
          className={`grid bg-gray-200 ${
            asideOpened ? "gap-1" : ""
          } custom-transition  ${
            asideOpened ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_0px]"
          } items-center rounded-md hover:bg-gray-300`}
          href={"#"}
        >
          <span className="p-2">{icon}</span>

          <span
            className={`text-gray-800 custom-transition text-md overflow-hidden  ${
              asideOpened ? "opacity-100" : "opacity-0"
            } ${asideOpened ? "w-40" : "w-0"}`}
          >
            {name}
          </span>
        </Link>
      </p>
    </div>
  );
}
