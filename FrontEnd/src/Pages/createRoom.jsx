import { useState } from "react";
import "./createRoom.css";

function CreateRooms() {
  const [roomName, setRoomName] = useState("");
  const [maxUsers, setMaxUsers] = useState("");
  const [Topics, setTopics] = useState([])
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
        const topicsArray = value.split(',').map(topic => topic.trim());
        setTopics(topicsArray);
    }

  return (
    <div className="createRoomContainer">
      <h1>Create Room</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter Room Name"
        />

        <input type="text"
            value={Topics}
            onChange={handleTopics}
            placeholder="Enter Topics separated by commas"
        
        />

        <input
          type="number"
          value={maxUsers}
          onChange={(e) => setMaxUsers(e.target.value)}
          placeholder="Enter Max Users"
        />

        <div className="radioGroup" style={{backgroundColor:'#0d0d0d'}}>
          <label style={{backgroundColor:'#0d0d0d'}}>
            <input 
            
              type="radio"
              name="privacy"
              checked={!isPrivate}
              onChange={() => setIsPrivate(false)}
            />
            Public
          </label>

          <label style={{backgroundColor:'#0d0d0d'}}>
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
  );
}

export default CreateRooms;
