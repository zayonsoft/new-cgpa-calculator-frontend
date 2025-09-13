"use client";
import Aside from "./components/Aside";
import { HiMenu } from "react-icons/hi";
// import { useRouter } from "next/navigation";
import { useAside } from "@/contexts/SidebarContext";

// MOBILE VIEW STARTS AT 650px FOR DASHBOARD

export default function Home() {
  const { asideOpened, toggleAsideOpened } = useAside();
  return (
    <main
      className={`bg-gray-500 custom-transition max-h-screen grid grid-cols-[auto_1fr]  ${
        asideOpened ? "" : "max-[651px]:grid-cols-[0_1fr]"
      }`}
    >
      <Aside />
      {/* The righthand side of the dashboard */}
      <section className="grid grid-rows-[auto_1fr] relative">
        <div className="bg-gray-100 p-4 h-17 grid items-center shadow">
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => toggleAsideOpened()}
              className="cursor-pointer custom-transition bg-gray-200  rounded outline-none p-1.5 hover:bg-gray-300 active:bg-gray-200"
            >
              <HiMenu size={21} />
            </button>
          </div>
        </div>
        <div className="p-4 max-h-full custom-transition absolute top-18 bottom-0 left-0 right-0 custom-scrollbar bg-red-200 overflow-y-scroll">
          <div className="h-screen">
            <p>Dashboard Content Here...</p>
            <p>
              All these content should be pushed to "layout.tsx" once structure
              is done.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
