"use client";

import { FaUsers } from "react-icons/fa6";
import DashboardStatComponent from "./components/DashboardStatComponent";
import { GrUserAdmin } from "react-icons/gr";
import { PiShieldCheckFill } from "react-icons/pi";
import GradingSystemTable from "./components/GradingSystemTable";
import RecentUser from "./components/RecentUsers";

// MOBILE VIEW STARTS AT 650px FOR DASHBOARD

export default function AdminDashboard() {
  return (
    <div className="grid gap-4.5 pb-4">
      <div className="w-fit">
        <h1 className="text-xl p-0 font-semibold text-gray-900">
          Welcome, John Doe!
        </h1>
        {/* <p className="text-[11px] p-1.5 rounded bg-[#004bad] w-fit text-gray-100">
          CGPA CALCULATOR
        </p> */}
        <p className="text-[11px] px-0.5 rounded w-fit text-gray-900">
          CGPA CALCULATOR
        </p>
      </div>
      {/* Info Cover */}
      <div className="grid gap-3 grid-cols-3 max-[831px]:grid-cols-2 max-[641px]:grid-cols-1">
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
      <div className="grid grid-cols-2 gap-3 items-start max-[831px]:grid-cols-1 max-[831px]:gap-5">
        <GradingSystemTable />
        <RecentUser />
      </div>
    </div>
  );
}
