import "../styles/ServicesSection.css";
import ServiceImage from "../assets/images/services-image.svg";

export default function ServicesSection() {
  return (
    <section
      className="services-section"
      aria-labelledby="services-title"
      role="region"
    >
      <div className="services-header">
        <p className="services-subtitle">Our Services</p>

        <div className="services-intro">
          <h2 id="services-title" className="services-title">
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
        <div
          className="services-left"
          aria-label="Left service column"
          role="list"
        >
          <article className="service-box" tabIndex="0" role="listitem">
            <h3>Diverse Unit Sizes</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </article>

          <article className="service-box" tabIndex="0" role="listitem">
            <h3>Moving Assistance</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </article>
        </div>

        {/* Mittebild */}
        <figure className="service-image">
          <img
            src={ServiceImage}
            alt="Storage worker organizing boxes in facility"
          />
        </figure>

        {/* Höger kolumn */}
        <div
          className="services-right"
          aria-label="Right service column"
          role="list"
        >
          <article className="service-box" tabIndex="0" role="listitem">
            <h3>Vehicle Storage</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </article>

          <article className="service-box" tabIndex="0" role="listitem">
            <h3>Top-Notch Security</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
