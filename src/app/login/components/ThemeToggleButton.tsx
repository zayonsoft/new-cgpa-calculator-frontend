"use client";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, []);

  return (
    <button
      onClick={() => toggleTheme()}
      className={
        theme != "dark"
          ? "cursor-pointer grid transition ease-in-out duration-900 outline-none bg-white w-12 h-auto p-1 rounded-3xl"
          : "cursor-pointer grid transition ease-in-out duration-900 outline-none bg-[#00000099] w-12 h-auto p-1 rounded-3xl"
      }
    >
      <span
        style={{
          transform: theme == "dark" ? "translateX(100%)" : "translateX(0%)",
        }}
        className={
          theme != "dark"
            ? "transition ease-in duration-500 block justify-self-start w-5 rounded-full h-5 bg-black"
            : "transition ease-in duration-500 block justify-self-start w-5 rounded-full h-5 bg-[#9BF718]"
        }
      ></span>
    </button>
  );
}
