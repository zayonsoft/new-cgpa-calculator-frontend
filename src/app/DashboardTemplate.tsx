"use client";
import Aside from "./components/Aside";
import { HiMenu } from "react-icons/hi";
// import { useRouter } from "next/navigations";
import { useAside } from "@/contexts/SidebarContext";
import { ReactNode } from "react";

export default function DashboardTemplate({
  children,
}: {
  children: ReactNode;
}) {
  const { asideOpened, toggleAsideOpened } = useAside();
  return (
    <main
      className={`bg-gray-200 custom-transition max-h-screen grid grid-cols-[auto_1fr]  ${
        asideOpened ? "" : "max-[651px]:grid-cols-[0_1fr]"
      }`}
    >
      <Aside />
      {/* The righthand side of the dashboard */}
      <section className="grid grid-rows-[auto_1fr] relative">
        <div className="bg-gray-100 custom-transition p-4 h-17 grid items-center shadow">
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => toggleAsideOpened()}
              className="cursor-pointer custom-transition bg-[#004badeb] text-gray-200  rounded outline-none p-1.5 hover:bg-[#004bad] active:bg-gray-200"
            >
              <HiMenu size={21} />
            </button>
          </div>
        </div>
        {/* PAGE CONTENT START */}
        <div className="p-4 max-h-full custom-transition absolute top-18 bottom-0 left-0 right-0 custom-scrollbar overflow-y-scroll">
          <div className="h-screen">{children}</div>
        </div>
        {/* PAGE CONTENT STOP */}
      </section>
    </main>
  );
}
