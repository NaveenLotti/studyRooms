import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import "./joinRooms.css";

function JoinRooms() {
  const [search, setSearch] = useState("");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rooms");
        setRooms(res.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const filteredRooms = rooms.filter((room) =>
    room.name.toLowerCase().includes(search.toLowerCase())
  );

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
                alt={room.name}
                className="roomImage"
              />
              <div className="roomInfo">
                <h2>{room.name}</h2>
                <p className="topics">Topics: {room.topics.join(", ")}</p>
                <p className={`privacy ${room.private ? "private" : "public"}`}>
                  {room.private ? "Private" : "Public"}
                </p>
                <button className="joinBtn">Join</button>
              </div>
            </div>
          ))
        ) : (
          <p className="noRooms">No rooms found...</p>
        )}
      </div>
    </div>
  );
}

export default JoinRooms;
