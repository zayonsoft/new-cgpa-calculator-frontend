// app/layout.tsx  (for Next.js App Router)
import type { Metadata } from "next";
import Logo from "@/app/favicon.png";
import "@/styles/styles.css";
import DashboardLayout from "./DashboardLayout";
import SidebarProvider from "@/contexts/SidebarProvider";

export const metadata: Metadata = {
  title: "LOGIN | CGPA CALCULATOR ",
  icons: {
    icon: "/round_logo_t_w.png",
    shortcut: "/round_logo_t_w.png",
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardLayout> {children}</DashboardLayout>
    </SidebarProvider>
  );
}
