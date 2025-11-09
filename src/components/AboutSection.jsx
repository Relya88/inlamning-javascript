import "../styles/AboutSection.css";
import AboutImage from "../assets/images/aboutussection-img.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";

export default function AboutSection() {
  return (
    <section className="about-section" aria-labelledby="about-title" role="region">
      <div className="about-left">
        <img
          src={AboutImage}
          alt="Modern storage facility with organized shelves"
          className="about-image"
          role="img"
        />

        <div className="stats-box" aria-label="Company statistics" role="group">
          <div className="stat-item" role="group" aria-labelledby="years-experience">
            <h3 id="years-experience">12+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item" role="group" aria-labelledby="satisfied-clients">
            <h3 id="satisfied-clients">150K+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat-item" role="group" aria-labelledby="warehouses">
            <h3 id="warehouses">35+</h3>
            <p>Warehouse</p>
          </div>
        </div>
      </div>

      <div className="about-right">
        <h4 className="about-subtitle">About Us</h4>
        <h2 id="about-title" className="about-title">
          Providing a Safe Space for Your Treasured Items
        </h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi, non sodales augue. Phasellus eget elit gravida.
        </p>

        <div className="vision-mission">
          <div className="info-box" role="group" aria-labelledby="vision-heading">
            <h5 id="vision-heading">Vision</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
          <div className="info-box" role="group" aria-labelledby="mission-heading">
            <h5 id="mission-heading">Mission</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>

        <div className="actions">
          <button className="discover-btn" aria-label="Discover more about our company">Discover More</button>

          <div className="contact-info" role="contentinfo">
            <div className="phone-icon">
              <img src={PhoneIcon} alt="" aria-hidden="true" />
            </div>
            <div>
              <p className="contact-title">More Information</p>
              <p className="contact-number">
                <a href="tel:+46812312244" aria-label="Call us at plus four six eight one two three one two two four four">
                  +46 8 123 122 44
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
