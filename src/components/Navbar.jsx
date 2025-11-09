import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import Logo from "../assets/Logo.svg";
import FacebookIcon from "../assets/icons/Facebook.svg";
import HumbleIcon from "../assets/icons/Humble.svg";
import InstagramIcon from "../assets/icons/Instagram.svg";
import YoutubeIcon from "../assets/icons/Youtube.svg";
import NavPhoneIcon from "../assets/icons/nav-phone-icon.svg";
import NavEmailIcon from "../assets/icons/nav-email-icon.svg";
 
export default function Navbar() {
  return (
    <header className="header-wrapper">
      <div className="topbar">
        <div className="container">
          <div className="contact-info">
            <span><img src={NavPhoneIcon} alt="Phone" className="nav-phone-icon" /> +46 8 123 122 44</span>
            <span><img src={NavEmailIcon} alt="Email" className="nav-email-icon" /> contact@domain.com</span>
          </div>

          <div className="social-icons">
            <a href="#">
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a href="#">
              <img src={HumbleIcon} alt="Humble" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="#">
              <img src={YoutubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>
      </div>


      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="StorAid logo" className="logo-img" />
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
                        <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          <button className="book-button">Book Now</button>
        </div>
      </nav>
    </header>
  );
}
