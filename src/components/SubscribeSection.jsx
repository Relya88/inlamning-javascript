import { useState } from "react";
import { subscribe } from "../api/api";
import "../styles/SubscribeSection.css";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setSuccess(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kollar att mejladressen har rätt format, alltså något som liknar "namn@exempel.se"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Woops. Please check your email and try again.");
      setSuccess(false);
      return;
    }

    try {
      await subscribe(email);
      setSuccess(true);
      setEmail("");
      setError("");
    } catch {
      setError("Something went wrong. Please try again later.");
      setSuccess(false);
    }
  };

  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="subscribe-left">
          <h2>Subscribe Our Newsletter</h2>
          <p>
            Subscribe to our newsletter to receive early discount offers, updates and info
          </p>
        </div>

        <form className="subscribe-form" noValidate onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter your email *"
              value={email}
              onChange={handleChange}
              className={error ? "error" : ""}
            />

            {/* Den här delen säkerställer att bara en text visas. Antingen error-text eller tack för registrering */}
            {error ? (
              <p className="error-message">{error}</p>
            ) : success ? (
              <p className="success-message">Thank you for subscribing!</p>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
