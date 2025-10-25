import React from "react";
import { Link } from "react-router-dom";
import './header.css';

function Header() {
    return (
        <>
        <div className="container">
            <div className="logo">
                <Link to = {"/"}><h2>StudyRooms</h2></Link>
            </div>
            <div className="concepts">
                <Link to = {"/createRoom"}> Create Room </Link>
                <Link to = {"/joinRoom"}> Join Room </Link>
                <Link to = {"/posts"}> Posts </Link>
                <Link to = {"/aboutUs"}> About Us </Link>
            </div>

            <div className="login">
                <Link to = {'/signup'}><button>Sign Up</button></Link>
                <Link to ={'/login'}><button>Login</button></Link>
            </div>
        </div>
        
        </>
    )
}

export default Header;