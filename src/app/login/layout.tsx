// app/layout.tsx  (for Next.js App Router)
import type { Metadata } from "next";
import Logo from "@/app/favicon.png";
import "@/styles/styles.css";

export const metadata: Metadata = {
  title: "LOGIN | CGPA CALCULATOR ",
  icons: {
    icon: Logo.src,
    shortcut: Logo.src,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid px-10 grid-rows-[auto_1fr] w-full h-screen login-form-bg">
      <div className="w-full bg-gray-900 h-10 grid">
        {/* section For the Toggle buttons */}
        <div className="justify-self-end self-center p-2">
          <p>Theme</p>
        </div>
      </div>
      <div className="pt-15">{children}</div>
    </section>
  );
}
