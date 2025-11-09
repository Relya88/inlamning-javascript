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
    <section
      className="finduson"
      aria-labelledby="finduson-heading"
      role="region"
    >
      <div className="finduson-left">
        <img
          src={findUsOnImage}
          alt="Illustration showing our storage service"
          className="finduson-image"
          role="img"
        />
      </div>

      <div className="finduson-right">
        <div className="finduson-content">
          <h3 id="finduson-heading">Find Us On:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          <div
            className="info-group"
            aria-label="Contact information"
            role="list"
          >
            <div className="info-item" role="listitem" tabIndex="0">
              <img
                src={phoneIcon}
                alt=""
                aria-hidden="true"
                className="icon"
              />
              <div className="info-text">
                <h5>Call Center</h5>
                <p>
                  <a
                    href="tel:+46812312244"
                    aria-label="Call us at plus four six eight one two three one two two four four"
                  >
                    +46 8 123 122 44
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item" role="listitem" tabIndex="0">
              <img
                src={emailIcon}
                alt=""
                aria-hidden="true"
                className="icon"
              />
              <div className="info-text">
                <h5>Email Address</h5>
                <p>
                  <a
                    href="mailto:contact@domain.com"
                    aria-label="Send email to contact at domain dot com"
                  >
                    contact@domain.com
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item" role="listitem" tabIndex="0">
              <img
                src={locationIcon}
                alt=""
                aria-hidden="true"
                className="icon"
              />
              <div className="info-text">
                <h5>Location</h5>
                <address>Klarabergsviadukten 90, Stockholm</address>
              </div>
            </div>
          </div>

          <div
            className="social-row"
            aria-label="Social media links"
            role="navigation"
          >
            <span>Our Social Media</span>
            <div className="line" aria-hidden="true"></div>
            <div className="social-icons" role="list">
              <a
                href="#"
                aria-label="Visit our Facebook page"
                role="listitem"
                tabIndex="0"
              >
                <img src={facebookIcon} alt="Facebook icon" />
              </a>
              <a
                href="#"
                aria-label="Visit our Humble page"
                role="listitem"
                tabIndex="0"
              >
                <img src={humbleIcon} alt="Humble icon" />
              </a>
              <a
                href="#"
                aria-label="Visit our Instagram profile"
                role="listitem"
                tabIndex="0"
              >
                <img src={instagramIcon} alt="Instagram icon" />
              </a>
              <a
                href="#"
                aria-label="Visit our YouTube channel"
                role="listitem"
                tabIndex="0"
              >
                <img src={youtubeIcon} alt="YouTube icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
