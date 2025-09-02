import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello Next.js 🚀</h1>
      <Link className="bg-red-500" href="/login">
        Go to login
      </Link>
    </main>
  );
}
