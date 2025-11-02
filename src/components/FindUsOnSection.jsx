import "../styles/FindUsOnSection.css";
import findUsOnImage from "../assets/images/find-us-on-image.svg";
import phoneIcon from "../assets/icons/find-us-on-phone-icon.svg";
import emailIcon from "../assets/icons/find-us-on-email-icon.svg";
import locationIcon from "../assets/icons/find-us-on-location-icon.svg";
import facebookIcon from "../assets/icons/Facebook.svg";
import humbleIcon from "../assets/icons/Humble.svg";
import instagramIcon from "../assets/icons/Instagram.svg";
import youtubeIcon from "../assets/icons/Youtube.svg";

export default function FindUsOnSection() {
  return (
    <section className="finduson">
      <div className="finduson-left">
        <img
          src={findUsOnImage}
          alt="Find Us On illustration"
          className="finduson-image"
        />
      </div>

      <div className="finduson-right">
        <div className="finduson-content">
          <h3>Find Us On:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div className="info-group">
            <div className="info-item">
              <img src={phoneIcon} alt="Phone icon" className="icon" />
              <div className="info-text">
                <h5>Call Center</h5>
                <p>+46 8 123 122 44</p>
              </div>
            </div>

            <div className="info-item">
              <img src={emailIcon} alt="Email icon" className="icon" />
              <div className="info-text">
                <h5>Email Address</h5>
                <p>contact@domain.com</p>
              </div>
            </div>

            <div className="info-item">
              <img src={locationIcon} alt="Location icon" className="icon" />
              <div className="info-text">
                <h5>Location</h5>
                <p>Klarabergsviadukten 90, Stockholm</p>
              </div>
            </div>
          </div>

          <div className="social-row">
            <span>Our Social Media</span>
            <div className="line"></div>
            <div className="social-icons">
              <img src={facebookIcon} alt="Facebook" />
              <img src={humbleIcon} alt="Humble" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={youtubeIcon} alt="YouTube" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
