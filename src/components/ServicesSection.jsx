import "../styles/ServicesSection.css";
import ServiceImage from "../assets/images/services-image.svg";

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-header">
        <p className="services-subtitle">Our Services</p>
        <div className="services-intro">
          <h2 className="services-title">
            Specialized Storage for Every Special Item
          </h2>
          <p className="services-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>
        </div>
      </div>

      <div className="services-grid">

        {/* Vänster kolumn */}
        <div className="services-left">
          <div className="service-box">
            <h5>Diverse Unit Sizes</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="service-box">
            <h5>Moving Assistance</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        {/* Mittebild */}
        <div className="service-image">
          <img src={ServiceImage} alt="Storage service" />
        </div>

        {/* Höger kolumn */}
        <div className="services-right">
          <div className="service-box">
            <h5>Vehicle Storage</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="service-box">
            <h5>Top-Notch Security</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
