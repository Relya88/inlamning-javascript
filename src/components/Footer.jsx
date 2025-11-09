import "../styles/Footer.css";
import footerArrow from "../assets/icons/footer-arrow.svg";

export default function Footer() {
  return (
<footer role="contentinfo">
  <div className="footer-container">
    <p className="footer-copy">© 2025 StorAid, All rights reserved.</p>

    <ul className="footer-links" aria-label="Legal links">
      <li>
        <a href="#">
          <img src={footerArrow} className="arrow-icon" alt="" aria-hidden="true" />
          <span>Terms & Conditions</span>
        </a>
      </li>
      <li>
        <a href="#">
          <img src={footerArrow} className="arrow-icon" alt="" aria-hidden="true" />
          <span>Privacy Policy</span>
        </a>
      </li>
    </ul>
  </div>
</footer>
  );
}
