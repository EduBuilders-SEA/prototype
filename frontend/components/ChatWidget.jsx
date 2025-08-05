import { useState } from "react";
import { Input } from "./ui/Input.jsx";
import { Button } from "./ui/Button.jsx";

const chatResponses = [
  {
    user: "What is Newton's first law?",
    ai: "Newton's first law states that an object will remain at rest or in uniform motion unless acted upon by a force.",
  },
  {
    user: "Can you explain more?",
    ai: "Sure! It’s also called the law of inertia.",
  },
];

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input) return;
    const ai = chatResponses[index]?.ai || "I'm out of responses.";
    setMessages((msgs) => [
      ...msgs,
      { role: "user", text: input },
      { role: "ai", text: ai },
    ]);
    setInput("");
    setIndex((i) => i + 1);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="border p-4 h-64 overflow-y-auto mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`my-2 ${m.role === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block px-2 py-1 rounded ${m.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {m.text}
            </span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="flex space-x-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1"
        />
        <Button type="submit" className="px-4 py-1">
          Send
        </Button>
      </form>
    </div>
  );
}
