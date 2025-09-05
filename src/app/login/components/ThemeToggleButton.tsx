"use client";
import { useState } from "react";
export default function ThemeToggleButton() {
  const [toggle, setToggle] = useState(false);
  return (
    <button
      onClick={() => setToggle(!toggle)}
      className={
        !toggle
          ? "cursor-pointer grid transition ease-in-out duration-900 outline-none bg-white w-12 h-auto p-1 rounded-3xl"
          : "cursor-pointer grid transition ease-in-out duration-900 outline-none bg-[#00000099] w-12 h-auto p-1 rounded-3xl"
      }
    >
      <span
        style={{ transform: toggle ? "translateX(100%)" : "translateX(0%)" }}
        className={
          !toggle
            ? "transition ease-in duration-500 block justify-self-start w-5 rounded-full h-5 bg-black"
            : "transition ease-in duration-500 block justify-self-start w-5 rounded-full h-5 bg-[#9BF718]"
        }
      ></span>
    </button>
  );
}
