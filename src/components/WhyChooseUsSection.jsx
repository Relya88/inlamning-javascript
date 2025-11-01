import "../styles/WhyChooseUsSection.css";
import lockIcon from "../assets/icons/lock-icon.svg";
import moneyIcon from "../assets/icons/moneybag-icon.svg";
import cleaningIcon from "../assets/icons/cleaning-icon.svg";
import clockIcon from "../assets/icons/clock-icon.svg";
import rightImage from "../assets/images/whychooseuse-img.svg";

export default function WhyChooseUsSection() {
  return (
    <section className="whychooseus-section">
      <div className="whychooseus-container">
        
        <div className="whychooseus-left">
          <p className="whychooseus-subtitle">Why Choose Us</p>
          <h2 className="whychooseus-title">
            Choose Us for Exceptional <br /> Storage Solutions
          </h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <img src={lockIcon} alt="Security icon" />
              </div>
              <div>
                <h5>Security and Safety</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src={moneyIcon} alt="Money icon" />
              </div>
              <div>
                <h5>Flexible and Affordable</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src={cleaningIcon} alt="Cleaning icon" />
              </div>
              <div>
                <h5>Clean and Well-Maintained Facilities</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img src={clockIcon} alt="Clock icon" />
              </div>
              <div>
                <h5>24/7 and Convenient Access</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="whychooseus-right">
          <p className="whychooseus-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
          <img
            src={rightImage}
            alt="Storage facility"
            className="whychooseus-image"
          />
        </div>
      </div>
    </section>
  );
}
