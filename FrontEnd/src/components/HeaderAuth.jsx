import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./headerAuth.css";

function HeaderAuth() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="/logos/StudySphere_Header.png" alt="Logo"/>
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/createRoom">Create Room</NavLink>
        <NavLink to="/joinRoom">Join Room</NavLink>
        {/* <NavLink to="/posts">Posts</NavLink> */}
        <NavLink to="/aboutUs">About Us</NavLink>
      </div>

      <div className="auth-buttons">
        <div className="logo">
        <img src="/default_profile.png" alt="profile" />
        </div>
        <p style={{marginTop: '10px'}}>User Name</p>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default HeaderAuth;
