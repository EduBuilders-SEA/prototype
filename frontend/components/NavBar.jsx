import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/translate">Translate</Link></li>
        <li><Link href="/quiz">Quiz</Link></li>
        <li><Link href="/chat">Chat</Link></li>
      </ul>
    </nav>
  );
}
