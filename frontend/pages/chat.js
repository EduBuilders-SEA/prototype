import NavBar from "@/components/NavBar.jsx";
import ChatWidget from "@/components/ChatWidget.jsx";

export default function ChatPage() {
  return (
    <div>
      <NavBar />
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">AI Tutor Chat</h1>
        <ChatWidget />
      </main>
    </div>
  );
}
