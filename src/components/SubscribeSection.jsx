import "../styles/SubscribeSection.css";

export default function SubscribeSection() {
  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="subscribe-left">
          <h2>Subscribe Our Newsletter</h2>
          <p>
            Subscribe to our newsletter to receive early discount offers, updates and info
          </p>
        </div>

        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email *"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}