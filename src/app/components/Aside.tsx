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
    <aside className=" relative grid gap-7 content-start bg-gray-100 text-white h-screen custom-transition py-4 px-2.5">
      <div className="grid content-center py-6 m-auto">
        {" "}
        <Link
          className="justify-self-center justify-items-center outline-none"
          href={"/"}
        >
          <Image
            height={30}
            width={asideOpened ? 110 : 30}
            src={asideOpened ? "/logo_light_theme.png" : "/z_of_zayonsoft.png"}
            alt="Logo"
            className="w-auto  custom-transition"
          />
        </Link>{" "}
      </div>
      <div className="grid gap-1.5">
        <p className="text-gray-600 text-xs text-left">General</p>
        <AsideLink name="Home" icon={<HiViewGrid size={27} />} />
        <AsideLink name="Announcements" icon={<MdCampaign size={27} />} />
      </div>
    </aside>
  );
}
