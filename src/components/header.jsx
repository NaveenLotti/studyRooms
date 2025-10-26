import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

function Header() {
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
        <NavLink to="/aboutUs">About Us</NavLink>
        <NavLink to="/room">Demo Study Room</NavLink>
      </div>

      <div className="auth-buttons">
        <Link to="/signup"><button className="btn-outline">Sign Up</button></Link>
        <Link to="/login"><button className="btn-filled">Login</button></Link>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;
