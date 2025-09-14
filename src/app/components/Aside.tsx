"use client";
import Link from "next/link";
import { HiViewGrid } from "react-icons/hi";
import { MdCampaign, MdLogout } from "react-icons/md";
import AsideLink from "./AsideLink";
import Image from "next/image";
import { useAside } from "@/contexts/SidebarContext";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Aside() {
  const { asideOpened, toggleAsideOpened } = useAside();
  return (
    <aside
      className={`bg-[#004bad] relative grid gap-4 overflow-hidden content-start text-white h-screen custom-transition py-4 px-2.5 ${
        asideOpened ? "w-full" : "max-[651px]:w-0 max-[651px]:p-0"
      }`}
    >
      <div
        className={`grid items-center absolute  h-17 bg-[#004bad] left-0 right-0 top-0 bottom-0 ${
          asideOpened ? "" : "max-[651px]:right-full"
        } `}
      >
        <div className="grid gap-1.5 content-center py-2 w-full">
          {" "}
          <Link className="py-1 px-5 outline-none" href={"/"}>
            <Image
              height={asideOpened ? 20 : 20}
              width={asideOpened ? 100 : 20}
              src={asideOpened ? "/w_zayonsoft_z_beside.svg" : "/z_white.svg"}
              alt="Logo"
              className={`block ${
                asideOpened ? "" : "m-auto"
              } custom-transition`}
            />
          </Link>{" "}
        </div>
      </div>
      <div
        className={`grid gap-1.5 mt-15 shadow-sm w-11/12 m-auto  shadow-gray-400 rounded p-1.5`}
      >
        <div className="grid grid-cols-[auto_1fr] gap-1.5 items-center text-gray-200">
          <span className="rounded-full bg-gray-200 p-1.5 grid content-center justify-center text-[#004bad] text-xs">
            <FaUser />
          </span>
          <span
            className={`grid gap-0 custom-transition ${
              asideOpened ? "w-full" : "w-0 p-0 h-0"
            } overflow-hidden`}
          >
            <span className={`text-gray-100 text-xs font-bold`}>John Doe</span>
            <span className={`text-[10px]`}>User</span>
          </span>
        </div>
      </div>
      <div
        className={`custom-transition overflow-hidden grid gap-0.5 ${
          asideOpened ? "w-full" : "max-[651px]:w-0"
        }`}
      >
        <p
          className={`text-gray-300 text-xs text-left overflow-hidden custom-transition ${
            asideOpened ? "w-full h-full" : "w-0 h-0"
          }`}
        >
          General
        </p>
        <AsideLink name="Home" icon={<HiViewGrid size={22} />} />
        <AsideLink name="Announcements" icon={<MdCampaign size={22} />} />
      </div>

      <div
        className={`custom-transition overflow-hidden grid gap-0.5 ${
          asideOpened ? "w-full" : "max-[651px]:w-0"
        }`}
      >
        <p
          className={`text-gray-300 text-xs text-left overflow-hidden custom-transition ${
            asideOpened ? "w-full h-full" : "w-0 h-0"
          }`}
        >
          Security
        </p>
        <AsideLink name="Logout" icon={<MdLogout size={22} />} />
      </div>
    </aside>
  );
}
