import { useState, useRef, useEffect } from "react";
import { RiRobot2Line } from "react-icons/ri";
import "./AIChat.css";
import { useAuth } from "../store/auth";

// Custom hook to track previous value
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const AIChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { API, authorizationToken } = useAuth();

  // Track previous messages
  const prevMessages = usePrevious(messages);

  // Scroll to bottom only when new message is added (not on first load)
  useEffect(() => {
    if (prevMessages && messages.length > prevMessages.length) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, prevMessages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API}/ai/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "AI request failed");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${error.message}` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section-ai">
      <div className="ai-outer-container">
        {/* Title Section with Icon */}
        <div className="ai-header">
          <RiRobot2Line className="ai-icon" />
          <h2>AI Assistant</h2>
          <p>Ask me anything about our services</p>
        </div>

        {/* Chat Container */}
        <div className="ai-chat-container">
          <div className="ai-messages">
            {messages.length === 0 ? (
              <div className="ai-welcome-message">
                <p>
                  <strong>Faisal Tech's AI:</strong> Hello! I'm here to help.
                  What would you like to know?
                </p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <div key={index} className={`ai-message ${msg.role}`}>
                  <div className="ai-message-content">{msg.content}</div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="ai-input-form">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
