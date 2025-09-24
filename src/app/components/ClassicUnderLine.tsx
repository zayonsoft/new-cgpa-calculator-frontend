"use client";
import { useTheme } from "@/contexts/ThemeContext";

export default function ClassicUnderline({ text }: { text: String }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center content-center gap-2 **:transition ease-in-out duration-900">
      <span>
        <hr
          style={{
            background:
              theme == "light"
                ? "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 100%)"
                : "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
          }}
          className="block w-full max-w-full h-[3px] border-none bg-black"
        />
      </span>
      <span className="text-nowrap">{text}</span>
      <span className="min-h-auto">
        <hr
          style={{
            background:
              theme == "light"
                ? "linear-gradient(90deg,#000000 0%, rgba(0, 0, 0, 0) 100%)"
                : "linear-gradient(90deg,#FFFFFF 0%, rgba(255, 255, 255, 0)  100%)",
          }}
          className="block w-full max-w-full h-[3px] border-none bg-black"
        />
      </span>
    </div>
  );
}
