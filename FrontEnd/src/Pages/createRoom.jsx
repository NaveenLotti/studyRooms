import { useState } from "react";
import DarkVeil from "../ReactBits/DarkVeil.jsx";
import "./createRoom.css";

function CreateRooms() {
  const [roomName, setRoomName] = useState("");
  const [maxUsers, setMaxUsers] = useState("");
  const [Topics, setTopics] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roomName || !maxUsers) {
      setError("Please fill out all fields");
      return;
    }

    setError("");
    setSubmit(true);
  };

  const handleTopics = (e) => {
    const value = e.target.value;
    const topicsArray = value.split(",").map((topic) => topic.trim());
    setTopics(topicsArray);
  };

  return (
    <div className="createRoomWrapper">
      <DarkVeil /> {/* motion background */}
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
            value={Topics}
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

          <button type="submit">Create Room</button>
        </form>

        {error && <p className="error">{error}</p>}
        {submit && <p className="success">Room created successfully!</p>}
      </div>
    </div>
  );
}

export default CreateRooms;
