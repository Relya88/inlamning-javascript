import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.svg";
import FacebookIcon from "../assets/icons/Facebook.svg";
import HumbleIcon from "../assets/icons/Humble.svg";
import InstagramIcon from "../assets/icons/Instagram.svg";
import YoutubeIcon from "../assets/icons/Youtube.svg";
import NavPhoneIcon from "../assets/icons/nav-phone-icon.svg";
import NavEmailIcon from "../assets/icons/nav-email-icon.svg";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="header-wrapper">
      {/* Topbar – kontaktinfo */}
      <div className="topbar" role="banner">
        <div className="container">
          <div className="contact-info" aria-label="Contact information">
            <a href="tel:+46812312244" className="contact-link">
              <img src={NavPhoneIcon} alt="" aria-hidden="true" className="nav-icon" />
              <span>+46 8 123 122 44</span>
            </a>
            <a href="mailto:contact@domain.com" className="contact-link">
              <img src={NavEmailIcon} alt="" aria-hidden="true" className="nav-icon" />
              <span>contact@domain.com</span>
            </a>
          </div>

          <ul className="social-icons" aria-label="Social media links">
            <li>
              <a href="#" aria-label="Facebook">
                <img src={FacebookIcon} alt="" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Humble">
                <img src={HumbleIcon} alt="" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <img src={InstagramIcon} alt="" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <img src={YoutubeIcon} alt="" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Huvudnavigation */}
      <nav className="navbar" role="navigation" aria-label="Main menu">
        <div className="container">
          <a href="/" className="logo-link">
            <img src={Logo} alt="StorAid logo" className="logo-img" />
          </a>

          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>

          <button
            className="btn book-button"
            onClick={() => navigate("/booking#booking-section")}
          >
            Book Now
          </button>
        </div>
      </nav>
    </header>
  );
}
