import type { Metadata } from "next";
import "./globals.css";

import Logo from "@/app/favicon.png";

export const metadata: Metadata = {
  title: "CGPA CALCULATOR | POWERED BY ZAYONSOFT",
  icons: {
    icon: Logo.src,
    shortcut: Logo.src,
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
      <body>{children}</body>
    </html>
  );
}
