import Image from "next/image";
import Link from "next/link";

export const Logo = (
  <Image
    width={120}
    height={50}
    src={"/logo_light_theme.png"}
    alt="logo"
  ></Image>
);

export default function Home() {
  return (
    <main className="bg-gray-500 max-h-screen grid grid-cols-[auto_1fr]">
      <aside className="bg-gray-200 text-white h-screen w-56 p-4">{Logo}</aside>
      {/* The righthand side of the dashboard */}
      <section className="grid grid-rows-[auto_1fr] relative">
        <div className="bg-white p-4">
          <h1>DASHBOARD NAME</h1>
        </div>
        <div className="p-4 max-h-full absolute top-18 bottom-0 left-0 right-0 custom-scrollbar bg-red-200 overflow-y-scroll">
          <div className="h-screen">
            <p>Dashboard Content Here...</p>
            <p>
              All these content should be pushed to "layout.tsx" once structure
              is done.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
