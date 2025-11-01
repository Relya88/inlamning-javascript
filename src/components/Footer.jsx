import "../styles/Footer.css";
import footerArrow from "../assets/icons/footer-arrow.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <p>© 2025 StorAid, All rights reserved.</p>
        </div>

        <div className="footer-right">
          <a href="#">
            <img src={footerArrow} className="arrow-icon" alt="" aria-hidden="true" />
            <span>Terms & Conditions</span>
          </a>
          <a href="#">
            <img src={footerArrow} className="arrow-icon" alt="" aria-hidden="true" />
            <span>Privacy Policy</span>
          </a>
        </div>
      </div>
    </footer>
  );
}





