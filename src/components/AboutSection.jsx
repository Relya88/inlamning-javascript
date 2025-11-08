import "../styles/AboutSection.css";
import AboutImage from "../assets/images/aboutussection-img.svg";
import PhoneIcon from "../assets/icons/phone-icon.svg";


export default function AboutSection() {
  return (
    <section className="about-section">

      <div className="about-left">

        <img src={AboutImage} alt="Storage facility" className="about-image" />

        {/* Den gröna rektangulära rutan med statistik */}
        <div className="stats-box">
          <div className="stat-item">
            <h3>12+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-item">
            <h3>150K+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat-item">
            <h3>35+</h3>
            <p>Warehouse</p>
          </div>
        </div>
      </div>

      {/* den högra sidan med rubriker, text, vision/mission och knappar */}
      <div className="about-right">
        <h4 className="about-subtitle">About Us</h4>
        <h2 className="about-title">
          Providing a Safe Space for Your Treasured Items
        </h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac
          blandit nisi, non sodales augue. Phasellus eget elit gravida.
        </p>

        {/* Vision och mission */}
        <div className="vision-mission">
          <div className="info-box">
            <h5>Vision</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
          <div className="info-box">
            <h5>Mission</h5>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>

        {/* Knappen och kontakt */}
        <div className="actions">
          <button className="discover-btn">Discover More</button>

          <div className="contact-info">
            <div className="phone-icon">
              <img src={PhoneIcon} alt="Phone icon" />
            </div>
            <div>
              <p className="contact-title">More Information</p>
              <p className="contact-number">+46 8 123 122 44</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
