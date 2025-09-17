"use client";
import Aside from "./components/Aside";
import { HiMenu } from "react-icons/hi";
// import { useRouter } from "next/navigations";
import { useAside } from "@/contexts/SidebarContext";
import { ReactNode } from "react";
import ThemeToggleButton from "./login/components/ThemeToggleButton";
import Image from "next/image";
import Link from "next/link";

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
        <div className="bg-gray-100 relative z-20 custom-transition p-4 h-17 grid grid-cols-2 items-center shadow">
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => toggleAsideOpened()}
              className="cursor-pointer custom-transition bg-[#004bad] text-gray-200  rounded outline-none p-1 hover:bg-[#003d8e] active:bg-gray-200"
            >
              <HiMenu size={21} />
            </button>
          </div>
          <div className="grid justify-end">
            {/* HIDDEN STYLES FOR TAILWIND TO LOAD */}
            <span className="hidden bg-[#2c2c2c]"></span>
            <span className="hidden bg-[#004bad]"></span>
            <span className="hidden border-[#2c2c2c]"></span>
            <span className="hidden border-[#004bad]"></span>
            <span className="hidden bg-[transparent]"></span>
            {/* HIDDEN STYLES ENDDDDDDD */}
            <p className="text-gray-700 text-sm flex gap-2 items-center">
              Dark Mode:
              <ThemeToggleButton
                offColor="#2c2c2c"
                onColor="#004bad"
                offBorderColor="#2c2c2c"
                offBackground="transparent"
                onBackground="transparent"
                onBorderColor="#004bad"
              />
            </p>
          </div>
        </div>
        {/* PAGE CONTENT START */}
        <div className="p-4 max-h-full custom-transition absolute top-17 bottom-11 left-0 right-0 custom-scrollbar overflow-y-scroll">
          <div className="h-[90vh]">{children}</div>
        </div>
        {/* PAGE CONTENT STOP */}

        <footer className="absolute grid justify-center content-center py-1 pt-2 bottom-0 shadow left-0 right-0 h-10 bg-gray-100 text-gray-700">
          <div className="grid gap-1.5 grid-cols-[auto_auto] items-center text-sm ">
            <span className="align-middle pb-1">Powered by</span>
            <Link
              className="flex items-center"
              href={"https://wa.me/+2348104465980"}
            >
              <span>
                <Image
                  className="w-20 h-auto"
                  src={"/b_zayonsoft_z_beside.svg"}
                  alt="zayonSoft"
                  height={0}
                  width={100}
                />
              </span>

              <span className="flex pb-1">, 2024 - 2025</span>
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
