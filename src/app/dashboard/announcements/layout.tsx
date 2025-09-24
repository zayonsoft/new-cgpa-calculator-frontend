import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ANNOUNCEMENTS | CGPA CALCULATOR ",
};

type LayoutChildProps = {
  children: React.ReactNode;
};

export default function layout({ children }: LayoutChildProps) {
  return <div>{children}</div>;
}
