import DarkVeil from '../ReactBits/DarkVeil.jsx';
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Background */}
      <div className="darkveil-bg">
        <DarkVeil>
        </DarkVeil>
      </div>

      {/* Foreground hero content */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to <span>StudySphere</span></h1>
          <p>
            Collaborate, focus, and learn together in real-time. <br />
            Create or join a virtual study room and stay productive.
          </p>
          <div className="hero-buttons">
            <Link to="/createRoom">
              <button className="btn-filled">Create Room</button>
            </Link>
            <Link to="/joinRoom">
              <button className="btn-outline">Join Room</button>
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src="/Studyroom.jpg" alt="Study Together" />
        </div>
      </section>
    </div>
  );
}

export default Home;
