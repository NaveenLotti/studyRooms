import "./Footer.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-logo">
          <img src="/logos/StudySphere_Header.png" alt="StudySphere Logo" />
          <p>Empowering collaborative learning through virtual study spaces.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/createRoom">Create Room</Link>
          <Link to="/joinRoom">Join Room</Link>
          <Link to="/aboutUs">About Us</Link>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} StudySphere. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
