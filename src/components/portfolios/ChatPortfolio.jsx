import { motion } from "framer-motion";
import { useState } from "react";

export default function ChatPortfolio({ onBack }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! 👋 I'm Sritharan's AI assistant. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: "Thanks for your interest! This feature is coming soon." }]);
    }, 500);
  };

  return (
    <div className="w-full min-h-screen flex flex-col" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Header */}
      <div className="p-4 border-b" style={{ borderColor: "var(--border)" }}>
        <button onClick={onBack} className="text-sm font-semibold" style={{ color: "#9d4edd" }}>
          ← Back
        </button>
        <h1 className="text-2xl font-bold mt-2" style={{ color: "var(--text-primary)" }}>Chat Portfolio</h1>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className="max-w-xs p-4 rounded-lg"
              style={{
                backgroundColor: msg.sender === "user" ? "#9d4edd" : "var(--bg-card)",
                color: msg.sender === "user" ? "#fff" : "var(--text-primary)",
              }}>
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t" style={{ borderColor: "var(--border)" }}>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-lg outline-none"
            style={{ backgroundColor: "var(--bg-card)", color: "var(--text-primary)" }}
          />
          <button
            onClick={handleSend}
            className="px-6 py-2 rounded-lg font-bold text-white"
            style={{ background: "linear-gradient(135deg, #9d4edd, #c77dff)" }}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
