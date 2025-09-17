import Link from "next/link";
import { JSX } from "react";
import { AiOutlineSetting } from "react-icons/ai";

export default function GradingSystemTable(): JSX.Element {
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
                  <span className="block">Grading Systems</span>
                  <Link
                    href={"#"}
                    className="grid gap-0.5 grid-cols-[auto_1fr] items-center justify-self-end text-xs custom-transition bg-gray-200 p-1.5 rounded-xs text-[#004bad] hover:bg-gray-300"
                  >
                    <span className="text-sm">
                      <AiOutlineSetting />
                    </span>
                    <span>Manage</span>
                  </Link>
                </span>
              </td>
            </tr>
          </thead>

          <tbody>
            <tr className="p-2 nth-[even]:bg-gray-200 nth-[odd]:bg-gray-100">
              <td className="text-sm p-2">5 Point</td>
              <td className="p-1 py-1.5">
                <Link
                  className="bg-[#004bad] text-xs text-center m-auto text-gray-100 rounded-xs py-1.5 px-4 block w-fit"
                  href={"#"}
                >
                  View
                </Link>
              </td>
            </tr>
            <tr className="p-2 nth-[even]:bg-gray-200 nth-[odd]:bg-gray-100">
              <td className="text-sm p-2">4 Point</td>
              <td className="p-1 py-1.5">
                <Link
                  className="bg-[#004bad] text-xs text-center m-auto text-gray-100 rounded-xs py-1.5 px-4 block w-fit"
                  href={"#"}
                >
                  View
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
