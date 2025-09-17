"use client";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

type ThemeToggleButtonProps = {
  offColor?: string;
  onColor?: string;
  offBorderColor?: string;
  onBorderColor?: string;
  offBackground?: string;
  onBackground?: string;
};

export default function ThemeToggleButton({
  offColor = "black",
  onColor = "#9BF718",
  offBorderColor = "none",
  onBorderColor = "none",
  offBackground = "white",
  onBackground = "#00000099",
}: ThemeToggleButtonProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => toggleTheme()}
      style={{
        borderWidth:
          theme == "dark"
            ? onBorderColor == "none"
              ? "0px"
              : "1px"
            : offBorderColor == "none"
            ? "0px"
            : "1px",
      }}
      className={
        theme != "dark"
          ? `cursor-pointer border-[${offBorderColor}] grid transition ease-in-out duration-900 outline-none bg-[${offBackground}] w-12 h-auto p-1 rounded-3xl`
          : `cursor-pointer border-[${onBorderColor}] grid transition ease-in-out duration-900 outline-none bg-[${onBackground}] w-12 h-auto p-1 rounded-3xl`
      }
    >
      {/* The spans are to make Tailwind compile used colours */}
      <span className="hidden bg-[black]"></span>
      <span className="hidden bg-[#9BF718]"></span>
      <span className="hidden bg-[white]"></span>
      <span className="hidden bg-[#00000099]"></span>
      {/* Spans end - Just for style generation by tailwind */}
      <span
        style={{
          transform: theme == "dark" ? "translateX(140%)" : "translateX(0%)",
        }}
        className={
          theme != "dark"
            ? `transition ease-in duration-500 block justify-self-start w-4 h-4 rounded-full bg-[${offColor}]`
            : `transition ease-in duration-500 block justify-self-start w-4 h-4 rounded-full bg-[${onColor}]`
        }
      ></span>
    </button>
  );
}
