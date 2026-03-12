import React, { useState } from "react";
import { FaRobot, FaMicrophone } from "react-icons/fa";

const AiChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // 🎤 Voice recognition
  const recognition =
    new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  recognition.lang = "en-US";

  // 🗣 Bot speaking
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
  };

  const getReply = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("order"))
      return "You can track your order in the orders page.";

    if (msg.includes("cart"))
      return "Your cart is available in the cart page.";

    if (msg.includes("hello") || msg.includes("hi"))
      return "Hello! How can I help you today?";

    if (msg.includes("payment"))
      return "We support UPI, Card and Cash on Delivery.";

    if (msg.includes("thank you"))
      return "You're welcome! Happy to help.";
    
    if (msg.includes("Have a good day"))
      return "You too";
    
    if (msg.includes("bye"))
      return "Goodbye! Have a great day.";

    return "Sorry, I didn't understand that.";
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = { text, sender: "user" };
    const reply = getReply(text);
    const botMsg = { text: reply, sender: "bot" };

    setMessages((prev) => [...prev, userMsg, botMsg]);

    speak(reply);
    setInput("");
  };

  // 🎤 Start voice
  const startVoice = () => {
    recognition.start();

    recognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript;
      sendMessage(speechText);
    };
  };

  return (
    <>
      {/* Floating button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "linear-gradient(90deg,#6366f1,#ec4899)",
          color: "white",
          padding: "14px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: 1000
        }}
      >
        <FaRobot size={22} />
      </div>

      {/* Chat window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "320px",
            maxWidth: "90vw",
            height: "420px",
            maxHeight: "70vh",
            background: "white",
            borderRadius: "15px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1000
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px",
              background: "linear-gradient(90deg,#6366f1,#ec4899)",
              color: "white",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            AI Assistant 🤖
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
              fontSize: "14px"
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  marginBottom: "8px"
                }}
              >
                <span
                  style={{
                    background:
                      msg.sender === "user" ? "#6366f1" : "#f1f5f9",
                    color: msg.sender === "user" ? "white" : "black",
                    padding: "6px 10px",
                    borderRadius: "10px",
                    display: "inline-block",
                    maxWidth: "80%"
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              padding: "10px",
              borderTop: "1px solid #eee"
            }}
          >
            <input
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                outline: "none"
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
            />

            <button
              onClick={() => sendMessage(input)}
              style={{
                marginLeft: "6px",
                padding: "8px 12px",
                border: "none",
                borderRadius: "8px",
                background: "#6366f1",
                color: "white",
                cursor: "pointer"
              }}
            >
              Send
            </button>

            {/* 🎤 Mic button */}
            <button
              onClick={startVoice}
              style={{
                marginLeft: "6px",
                padding: "8px",
                border: "none",
                borderRadius: "8px",
                background: "#ec4899",
                color: "white",
                cursor: "pointer"
              }}
            >
              <FaMicrophone />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AiChatBox;