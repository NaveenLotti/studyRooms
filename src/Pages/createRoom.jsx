import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkVeil from "../ReactBits/DarkVeil.jsx";
import "./CreateRoom.css";

function CreateRooms() {
  const [roomName, setRoomName] = useState("");
  const [maxUsers, setMaxUsers] = useState("");
  const [topics, setTopics] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!roomName || !maxUsers || topics.length === 0) {
      setError("Please fill all fields");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You must be logged in to create a room");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://studybackend-ctkm.onrender.com/api/rooms/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ roomName, topics, maxUsers, isPrivate }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Failed to create room");
        setLoading(false);
        return;
      }

      setSuccess("Room created successfully!");
      setLoading(false);

      navigate("/joinRoom");
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again later.");
      setLoading(false);
    }
  };

  const handleTopics = (e) => {
    const value = e.target.value;
    setTopics(value.split(",").map((t) => t.trim()));
  };

  return (
    <div className="createRoomWrapper">
      <DarkVeil />
      <div className="createRoomContainer">
        <h1>Create a Room</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Enter Room Name"
          />
          <input
            type="text"
            value={topics.join(", ")}
            onChange={handleTopics}
            placeholder="Enter Topics (comma-separated)"
          />
          <input
            type="number"
            value={maxUsers}
            onChange={(e) => setMaxUsers(e.target.value)}
            placeholder="Enter Max Users"
            min={1}
          />

          <div className="radioGroup">
            <label>
              <input
                type="radio"
                name="privacy"
                checked={!isPrivate}
                onChange={() => setIsPrivate(false)}
              />
              Public
            </label>

            <label>
              <input
                type="radio"
                name="privacy"
                checked={isPrivate}
                onChange={() => setIsPrivate(true)}
              />
              Private
            </label>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Creating room..." : "Create Room"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
}

export default CreateRooms;
