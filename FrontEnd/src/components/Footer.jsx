import "./Footer.css"
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-content">
                <div className="logo">
                </div>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">AboutUs</a>
                    <a href="#">ContactUs</a>
                    <a href="#">Help</a>
                </div>
                <div className="social-links">
                    <a href="#" className="twitter"><FaTwitter /></a>
                    <a href="#" className="facebook"><FaFacebookF /></a>
                    <a href="#" className="instagram"><FaInstagram /></a>
                    <a href="#" className="linkedin"><FaLinkedinIn /></a>
                    <a href="#" className="whatsapp"><FaWhatsapp /></a>
                </div>
            </div>
        </footer>  
    )
}

export default Footer;