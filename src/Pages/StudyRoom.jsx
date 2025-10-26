import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./StudyRoom.css";
import { useParams } from "react-router-dom";

function StudyRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [room, setRoom] = useState(null);
  const [timer, setTimer] = useState(0); // seconds
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const {roomId: id} = useParams();
  console.log(id)

  const messagesEndRef = useRef(null);

  // Fetch room data
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/rooms/${id}`);
        setRoom(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRoom();
  }, [id]);

  // Auto-delete room after 1 hour
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    if (timer >= 3600) {
      axios.delete(`http://localhost:5000/api/rooms/${id}`).then(() => {
        window.location.href = "/";
      });
    }

    return () => clearInterval(interval);
  }, [timer, id]);

  // Chat scrolling
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { sender: "You", text: input };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  // To-Do Handlers
  const addTodo = () => {
    if (!todoInput.trim()) return;
    setTodos([...todos, { id: Date.now(), text: todoInput }]);
    setTodoInput("");
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  if (!room) return <p style={{ color: "#fff" }}>Loading...</p>;

  return (
    <div className="studyroom-container">
      {/* Header */}
      <div className="studyroom-header">
        <div className="room-code">Room Code: {room.roomCode || "N/A"}</div>
        <div className="timer">{formatTime(timer)}</div>
      </div>

      <div className="studyroom-main">
        {/* Left: To-Do */}
        <div className="todo-container">
          <h3>To-Do List</h3>
          <div className="todo-input">
            <input
              type="text"
              placeholder="Add a task..."
              value={todoInput}
              onChange={(e) => setTodoInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
            />
            <button onClick={addTodo}>Add</button>
          </div>
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => updateTodo(todo.id, e.target.value)}
                />
                <button style={{color:"Red"}} onClick={() => deleteTodo(todo.id)}>X</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: Chat */}
        <div className="chat-container">
          <h2 className="chat-room-title">{room.roomName}</h2>
          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.sender === "You" ? "own-message" : ""}`}>
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
      </div>
    </div>
  );
}

export default StudyRoom;
