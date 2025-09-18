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
    <div className="grid relative  grid-cols-2 gap-3 max-[760px]:grid-cols-1 h-full">
      <div className="grid gap-3 relative h-auto grid-rows-[150px_1fr]  max-[760px]:hidden">
        <div className="py-2 pt-17">
          <Image
            className="h-auto"
            src={"/logo.png"}
            alt="Logo"
            width={120}
            height={0}
          />
        </div>
        <div
          className={`${inter.className} -translate-y-1/2 top-1/2 absolute content-start`}
        >
          {/* Just to wrap the content */}
          <div className="grid gap-9 text-white">
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
        className={`${poppins.className} grid transition ease-in-out duration-900`}
      >
        {/* THE FORM SECTION */}
        <div
          className={
            "bg-white grid w-full max-w-[380px] p-6 m-auto text-[#111111] gap-7 font-semibold transition ease-in-out duration-900  rounded-xl dark:bg-[#1F1F1F]"
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
                    className={`${inter.className} font-normal text-[10px]  transition ease-in-out duration-900 hover:underline dark:text-[#FFFFFF]`}
                    href={""}
                  >
                    Forgot Password?
                  </Link>
                </p>
              </span>
            </div>
            {/* after:left-0 after:right-0 after:top-0 after:bottom-0 */}
            <div>
              <button
                className={`bg-[#9BF718] cursor-pointer relative custom-transition hover:bg-[#27f718] w-full rounded-xl text-xs box-border after:w-7 after:h-7 after:rounded-full after:border-gray-900 after:border-l-gray-400 after:border-5 after:-translate-1/2 after:left-1/2 after:top-1/2 py-3 after:absolute after:hidden after:bg-transparent after:animate-spin`}
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
                className="grid rounded-[15px] justify-items-center  items-center p-2.5 border-black dark:border-[#CBCBCB] hover:bg-[#03030321] hover:border-[#03030321] dark:hover:bg-[#9f9f9f21] dark:hover:border-[#9f9f9f21] border transition ease-in-out duration-900"
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
                className="grid rounded-[15px] justify-items-center items-center p-2.5 border-black dark:border-[#CBCBCB] hover:bg-[#03030321] hover:border-[#03030321] dark:hover:bg-[#9f9f9f21] dark:hover:border-[#9f9f9f21] border transition ease-in-out duration-900"
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
