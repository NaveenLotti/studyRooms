import { useState, useRef } from "react";
// import { useEffect } from "react";
import "./StudyRoom.css";

function StudyRoom() {
  const [messages, setMessages] = useState([
    { sender: "Alice", text: "Hey everyone!" },
    { sender: "Bob", text: "Hi Alice, ready to study?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      sender: "You", // Replace with logged-in user's name later
      text: input,
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

  return (
    <div className="chat-container">
      <h2 className="chat-room-title">Study Room</h2>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.sender === "You" ? "own-message" : ""
            }`}
          >
            <span className="sender" style={{backgroundColor:"transparent"}}>{msg.sender}:</span>
            <span className="text" style={{backgroundColor:"transparent"}}>{msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default StudyRoom;
