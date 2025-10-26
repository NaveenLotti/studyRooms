import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "./joinRooms.css";

function JoinRooms() {
  const [search, setSearch] = useState("");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCodePopup, setShowCodePopup] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rooms/");
        setRooms(res.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const filteredRooms = rooms.filter(
    (room) =>
      rooms &&
      room.roomName.toLowerCase().includes(search.toLowerCase())
  );

  // Handle joining a room
  const handleJoin = (room) => {
    if (!room.isPrivate) {
      navigate(`/room/${room._id}`); // Public → directly go
    } else {
      setSelectedRoom(room);
      setShowCodePopup(true); // Private → show popup
    }
  };

  // Validate room code
  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (enteredCode === selectedRoom.roomCode) {
      setShowCodePopup(false);
      setEnteredCode("");
      navigate(`/room/${selectedRoom._id}`);
    } else {
      setError("Invalid room code. Try again.");
    }
  };

  const closePopup = () => {
    setShowCodePopup(false);
    setEnteredCode("");
    setError("");
  };

  return (
    <div className="joinRoomsWrapper">
      <h1>Available Study Rooms</h1>

      <div className="search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search rooms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <FaSearch color="#fff" style={{ backgroundColor: "#a970ff" }} size={20} />
          </button>
        </form>
      </div>

      <div className="roomsContainer">
        {loading ? (
          <p className="noRooms">Loading rooms...</p>
        ) : filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div className="roomCard" key={room._id}>
              <img
                src={room.image || "/Studyroom.jpg"}
                alt={room.roomName}
                className="roomImage"
              />
              <div className="roomInfo">
                <h2>{room.roomName}</h2>
                <p className="topics">Topics: {room.topics.join(", ")}</p>
                <p className={`privacy ${room.isPrivate ? "private" : "public"}`}>
                  {room.isPrivate ? "Private" : "Public"}
                </p>
                <button className="joinBtn" onClick={() => handleJoin(room)}>
                  Join
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="noRooms">No rooms found...</p>
        )}
      </div>

      {/* Popup for Private Rooms */}
      {showCodePopup && (
        <div className="popupOverlay">
          <div className="popupBox">
            <h3>Enter Room Code</h3>
            <form onSubmit={handleCodeSubmit}>
              <input
                type="text"
                value={enteredCode}
                onChange={(e) => setEnteredCode(e.target.value)}
                placeholder="Enter room code"
              />
              {error && <p className="error">{error}</p>}
              <div className="popupButtons">
                <button type="submit" className="joinBtn">Join</button>
                <button type="button" onClick={closePopup} className="cancelBtn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default JoinRooms;
