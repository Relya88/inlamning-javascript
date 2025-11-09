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
    <section
      className="subscribe-section"
      aria-labelledby="subscribe-heading"
      role="region"
    >
      <div className="container">
        <div className="subscribe-left">
          <h2 id="subscribe-heading">Subscribe to Our Newsletter</h2>
          <p>
            Subscribe to our newsletter to receive early discount offers, updates and info.
          </p>
        </div>

        <form
          className="subscribe-form"
          noValidate
          onSubmit={handleSubmit}
          aria-label="Newsletter subscription form"
        >
          <input
            type="email"
            id="subscribe-email"
            placeholder="Enter your email *"
            value={email}
            onChange={handleChange}
            className={error ? "error" : ""}
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
          />
          <button
            type="submit"
            aria-label="Submit your email to subscribe"
          >
            Submit
          </button>

          {error ? (
            <p className="error-message" role="alert" aria-live="assertive">
              {error}
            </p>
          ) : success ? (
            <p className="success-message" role="status" aria-live="polite">
              Thank you for subscribing!
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
