"use client";

import { FaUsers } from "react-icons/fa6";
import DashboardStatComponent from "./components/DashboardStatComponent";
import { GrUserAdmin } from "react-icons/gr";
import { RiAdminFill, RiAdminLine } from "react-icons/ri";
import { SiAdminer } from "react-icons/si";
import { PiShieldCheckFill, PiUserCheckFill } from "react-icons/pi";
import { GiCheckeredDiamond } from "react-icons/gi";
import { BiCheckShield } from "react-icons/bi";

// MOBILE VIEW STARTS AT 650px FOR DASHBOARD

export default function Home() {
  return (
    <div className="grid gap-4.5">
      <h1 className="text-xl font-semibold text-gray-900">
        Welcome, John Doe!
      </h1>
      {/* Info Cover */}
      <div className="grid gap-3 grid-cols-3">
        <DashboardStatComponent
          count={9}
          icon={<FaUsers />}
          name="Registered Users"
        />
        <DashboardStatComponent
          count={4}
          icon={<PiShieldCheckFill />}
          name="Updated User Profiles"
        />
        <DashboardStatComponent
          count={1}
          icon={<GrUserAdmin />}
          name="Admins"
        />
      </div>
    </div>
  );
}
