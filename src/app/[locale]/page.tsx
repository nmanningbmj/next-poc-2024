"use client";
import Link from "next/link";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <main>
      <div className="container">
        <Link href={`${pathname}/specialites`}>Specialites</Link>
        <Link href="/topic">topic</Link>
        <Link href={`${pathname}/about`}>About</Link>
      </div>
    </main>
  );
}
