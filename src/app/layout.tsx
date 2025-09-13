import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/contexts/ThemeProvider";

import SidebarProvider from "@/contexts/SidebarProvider";
import DashboardTemplate from "./DashboardTemplate";

export const metadata: Metadata = {
  title: "CGPA CALCULATOR | POWERED BY ZAYONSOFT",
  icons: {
    icon: "/round_logo_t_w.png",
  },
  description:
    "The latest update or rebranded version of the CGPA calculator developed by TONY-AKINLOSOTU, Favour Adeniran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <DashboardTemplate>{children}</DashboardTemplate>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
