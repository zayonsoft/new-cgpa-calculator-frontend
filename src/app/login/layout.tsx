// app/layout.tsx  (for Next.js App Router)
import type { Metadata } from "next";
import Logo from "@/app/favicon.png";
import Image from "next/image";
import { Inter } from "next/font/google";
import "@/styles/styles.css";
import ThemeToggleButton from "../components/ThemeToggleButton";

export const metadata: Metadata = {
  title: "LOGIN | CGPA CALCULATOR ",
  icons: {
    icon: "/round_logo_t_w.png",
    shortcut: "/round_logo_t_w.png",
  },
};

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid px-10 max-[500px]:px-5 w-full h-screen login-form-bg">
      <div className="absolute z-10 left-10 right-10 max-[500px]:left-5 max-[500px]:right-5 py-2 grid max-[760px]:h-auto items-center grid-cols-[1fr_auto]">
        <Image
          className="h-auto min-[760px]:hidden"
          src={"/logo.png"}
          alt="Logo"
          width={100}
          height={0}
        />
        {/* section For the Toggle buttons */}
        <div className="justify-self-end py-1.5 self-center ">
          <p className={`${inter.className} flex items-center gap-2 text-sm`}>
            <span className="text-white">Theme</span>
            <ThemeToggleButton />
          </p>
        </div>
      </div>
      <div>{children}</div>
    </section>
  );
}
