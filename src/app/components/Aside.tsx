"use client";
import Link from "next/link";
import { HiViewGrid } from "react-icons/hi";
import { MdCampaign } from "react-icons/md";
import AsideLink from "./AsideLink";
import Image from "next/image";
import { useAside } from "@/contexts/SidebarContext";

export default function Aside() {
  const { asideOpened, toggleAsideOpened } = useAside();
  return (
    <aside
      className={`aside-bg relative grid gap-4 overflow-hidden content-start bg-gray-100 text-white h-screen custom-transition py-4 px-2.5 ${
        asideOpened ? "w-full" : "max-[651px]:w-0 max-[651px]:p-0"
      }`}
    >
      <div
        className={`grid items-center absolute py-2 h-17 left-0 right-0 top-0 bottom-0 shadow ${
          asideOpened ? "" : "max-[651px]:right-full"
        } `}
      >
        <div className="grid gap-0.5 content-center py-4 m-auto">
          {" "}
          <Link
            className="justify-self-center justify-items-center outline-none"
            href={"/"}
          >
            <Image
              height={asideOpened ? 20 : 20}
              width={asideOpened ? 95 : 20}
              src={
                asideOpened ? "/logo_light_theme.png" : "/z_of_zayonsoft.png"
              }
              alt="Logo"
              className={`${
                asideOpened ? "h-auto" : "w-auto"
              } custom-transition`}
            />
          </Link>{" "}
          <hr className="block bg-gray-200 w-full h-0.5" />
          <p className="text-gray-700 text-xs text-center">Cgpa Calculator</p>
        </div>
      </div>
      <div
        className={`mt-17.5 custom-transition overflow-hidden grid gap-0.5 ${
          asideOpened ? "w-full" : "max-[651px]:w-0"
        }`}
      >
        <p
          className={`text-gray-600 text-xs text-left overflow-hidden custom-transition ${
            asideOpened ? "w-full h-full" : "w-0 h-0"
          }`}
        >
          General
        </p>
        <AsideLink name="Home" icon={<HiViewGrid size={23} />} />
        <AsideLink name="Announcements" icon={<MdCampaign size={23} />} />
      </div>
    </aside>
  );
}
