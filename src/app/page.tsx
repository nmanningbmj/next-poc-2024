import Link from "next/link";
import "./globals.css";

// Your existing _app.js or _app.tsx code
export default function Home() {
  return (
    <main>
      <h1>BP Homepage</h1>
      <Link href="/specialites">Specialites</Link>
      <Link href="/topic">topic</Link>
      <Link href="/topic/1">topic 1</Link>
    </main>
  );
}
