import "../styles/GetInTouchSection.css";

export default function GetInTouchSection() {
  return (
    <section className="getintouch-section">
      <div className="getintouch-container">

        <div className="getintouch-left">
          <p className="getintouch-subtitle">Get in Touch</p>
          <h2 className="getintouch-title">
            Get Personalized Assistance – Contact Us
          </h2>
          <p className="getintouch-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo
          </p>
          <div className="map-placeholder"></div>
        </div>

        <div className="getintouch-right">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name <span>*</span></label>
              <input type="text" id="name" placeholder="Your name" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email <span>*</span></label>
                <input type="email" id="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Telephone</label>
                <input type="tel" id="telephone" placeholder="Telephone" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject <span>*</span></label>
              <input type="text" id="subject" placeholder="How can we help you" />
            </div>

            <div className="form-group">
              <label htmlFor="comments">Comments / Questions <span>*</span></label>
              <textarea id="comments" placeholder="Comments"></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
}
