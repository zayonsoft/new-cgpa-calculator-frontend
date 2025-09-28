// app/layout.tsx  (for Next.js App Router)
import type { Metadata } from "next";
import "@/styles/styles.css";
import DashboardLayout from "./DashboardLayout";
import SidebarProvider from "@/contexts/SidebarProvider";
import UserProvider from "@/contexts/UserProvider";

export const metadata: Metadata = {
  title: "DASHBOARD | CGPA CALCULATOR ",
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
    <UserProvider>
      <SidebarProvider>
        <DashboardLayout> {children}</DashboardLayout>
      </SidebarProvider>
    </UserProvider>
  );
}
