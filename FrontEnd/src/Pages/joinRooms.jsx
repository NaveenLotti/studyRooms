import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./joinRooms.css";

function JoinRooms() {
  const [search, setSearch] = useState("");

  // Example rooms data
  const rooms = [
    {
      id: 1,
      name: "Math Wizards",
      topics: ["Algebra", "Calculus", "Geometry"],
      private: false,
      image: "/Studyroom.jpg",
    },
    {
      id: 2,
      name: "Physics Enthusiasts",
      topics: ["Mechanics", "Optics", "Thermodynamics"],
      private: true,
      image: "/Studyroom.jpg",
    },
    {
      id: 3,
      name: "Programming Hub",
      topics: ["JavaScript", "React", "Node.js"],
      private: false,
      image: "/Studyroom.jpg",
    },
    {
      id: 4,
      name: "Chemistry Lab",
      topics: ["Organic", "Inorganic", "Biochemistry"],
      private: true,
      image: "/Studyroom.jpg",
    },
    {
      id: 5,
      name: "Artistic Expressions",
      topics: ["Painting", "Sculpture", "Dance"],
      private: false,
      image: "/Studyroom.jpg",
    },
    {
      id: 6,
      name: "Musician's Haven",
      topics: ["Piano", "Guitar", "Violin"],
      private: true,
      image: "/Studyroom.jpg",
    },
  ];

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
            <FaSearch color="#fff" style={{backgroundColor:"#a970ff"}} size={20} />
          </button>
        </form>
      </div>

      <div className="roomsContainer">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div className="roomCard" key={room.id}>
              <img src={room.image} alt={room.name} className="roomImage" />
              <div className="roomInfo">
                <h2>{room.name}</h2>
                <p className="topics">
                  Topics: {room.topics.join(", ")}
                </p>
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
