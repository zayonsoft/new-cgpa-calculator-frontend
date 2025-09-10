"use client";
import { JSX } from "react";
import Image from "next/image";
import { Inter, Poppins } from "next/font/google";
import Link from "next/link";
import OtherLoginInfo from "./components/OtherLoginInfo";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

const inter = Inter({
  subsets: ["latin"], // required
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"], // required
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function Login(): JSX.Element {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="grid grid-cols-2 gap-3 max-[760px]:grid-cols-1 h-full">
      <div className="bg-red-500 grid gap-3 h-auto grid-rows-[150px_1fr] max-[760px]:hidden">
        <div className="py-2 pt-5">
          <Image
            className="h-auto"
            src={"/logo.png"}
            alt="Logo"
            width={120}
            height={0}
          />
        </div>
        <div className={`${inter.className} bg-green-700 content-start`}>
          {/* Just to wrap the content */}
          <div className="grid gap-2">
            <h1 className="text-xl font-semibold">
              CGPA
              <br />
              CALCULATOR
            </h1>
            <p className="text-sm max-[950px]:text-xs pr-2">
              Track your Grade Point Average (GPA) and Cumulative Grade Point
              Average (CGPA) with ease with our software designed by some of the
              best around.
              <br />
              <br />
              It surely suits your purpose!
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${poppins.className} grid bg-lime-700 transition ease-in-out duration-900`}
      >
        {/* THE FORM SECTION */}
        <div
          className={
            "bg-white grid w-full max-w-[400px] p-7 m-auto text-[#111111] gap-10 font-semibold transition ease-in-out duration-900  rounded-xl dark:bg-[#1F1F1F]"
          }
        >
          <p
            className={
              "text-[#111111] text-center text-xl transition ease-in-out duration-900 dark:text-[#FFFFFF]"
            }
          >
            Welcome!
          </p>
          <form className="grid gap-3" action="">
            <div>
              <label
                className="relative top-[11px] left-2.5 inline-block text-[10px] font-normal bg-white p-0.5 py-[3px] transition ease-in-out duration-900 dark:bg-[#1F1F1F] dark:text-[#CBCBCB]"
                htmlFor="username"
              >
                Username or Email
              </label>
              <span className="text-[10px]">
                <input
                  id="username"
                  className="w-full outline-none border border-[#000000] dark:border-[#FFFFFF] text-[#0000009d] transition ease-in-out duration-900 dark:text-[#FFFFFF99] rounded-xl p-3 placeholder:text-[#00000099] dark:placeholder:text-[#FFFFFF99]  placeholder:font-normal placeholder:italic"
                  type="text"
                  placeholder="Enter your username or email"
                />
              </span>
            </div>

            <div>
              <label
                className="relative top-[11px] left-2.5 inline-block text-[10px] font-normal bg-white p-0.5 py-[3px] transition ease-in-out duration-900 dark:bg-[#1F1F1F] dark:text-[#CBCBCB]"
                htmlFor="username"
              >
                Password
              </label>
              <span className="grid gap-1 text-[10px]">
                <input
                  id="username"
                  className="w-full outline-none border border-[#000000] dark:border-[#FFFFFF] text-[#0000009d] transition ease-in-out duration-900 dark:text-[#FFFFFF99] rounded-xl p-3 placeholder:text-[#00000099] dark:placeholder:text-[#FFFFFF99]  placeholder:font-normal placeholder:italic"
                  type="text"
                  placeholder="Enter your password"
                />
                <p className="justify-self-end">
                  <Link
                    className={`${inter.className} font-normal text-[10px] underline transition ease-in-out duration-900 dark:text-[#FFFFFF]`}
                    href={""}
                  >
                    Forgot Password?
                  </Link>
                </p>
              </span>
            </div>

            <div>
              <button
                className="bg-[#9BF718] w-full rounded-xl text-xs box-border py-3"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
          <OtherLoginInfo text="Or Sign In with" />
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <Link
                className="grid rounded-[15px] justify-items-center  items-center p-2.5 border-black dark:border-[#CBCBCB] border transition ease-in-out duration-900"
                href={"#"}
              >
                <span className="grid gap-1 grid-cols-[auto_1fr] items-center transition ease-in-out duration-900 dark:text-[#CBCBCB]">
                  <FaApple />
                  <span className="text-xs font-normal max-[800px]:text-[10px] transition ease-in-out duration-900 dark:text-[#CBCBCB]">
                    Apple
                  </span>
                </span>
              </Link>
            </div>

            <div>
              <Link
                className="grid rounded-[15px] justify-items-center items-center p-2.5 border-black dark:border-[#CBCBCB] border transition ease-in-out duration-900"
                href={"#"}
              >
                <span className="grid gap-1 items-center grid-cols-[auto_1fr] transition ease-in-out duration-900 dark:text-[#CBCBCB]">
                  <FcGoogle />
                  <span className="text-xs font-normal max-[800px]:text-[10px] transition ease-in-out duration-900">
                    Google
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
