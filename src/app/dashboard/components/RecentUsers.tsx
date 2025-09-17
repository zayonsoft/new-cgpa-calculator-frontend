import Link from "next/link";
import { JSX } from "react";
import { BiChevronDown } from "react-icons/bi";

export default function RecentUser(): JSX.Element {
  return (
    <div className="shadow shadow-gray-400 bg-gray-100 grid gap-0.5">
      <div className="px-2 py-1">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <td
                colSpan={2}
                className="py-1.5 px-2 text-left bg-[#004bad] text-gray-100 text-md max-[831px]:text-sm"
              >
                <span className="grid items-center grid-cols-2 gap-1">
                  <span className="block">Recently Registered Users</span>
                  <Link
                    href={"#"}
                    className="grid gap-0.5 grid-cols-[1fr_auto] items-center justify-self-end text-xs custom-transition bg-gray-200 p-1.5 rounded-xs text-[#004bad] hover:bg-gray-300"
                  >
                    <span>More</span>
                    <span className="text-sm">
                      <BiChevronDown />
                    </span>
                  </Link>
                </span>
              </td>
            </tr>
          </thead>

          <tbody>
            <tr className="p-2 nth-[even]:bg-gray-200 nth-[odd]:bg-gray-100">
              <td className="text-sm font-bold p-2">jackiechan</td>
              <td className="text-sm p-2">jackiechan@gmail.com</td>
            </tr>
            <tr className="p-2 nth-[even]:bg-gray-200 nth-[odd]:bg-gray-100">
              <td className="text-sm font-bold p-2">doejohn</td>
              <td className="text-sm p-2">johndoe@outlook.com</td>
            </tr>
            <tr className="p-2 nth-[even]:bg-gray-200 nth-[odd]:bg-gray-100">
              <td className="text-sm font-bold p-2">commando</td>
              <td className="text-sm p-2">commando@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
