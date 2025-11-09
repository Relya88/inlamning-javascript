import { useState } from "react";
import { sendContactForm } from "../api/api";
import "../styles/GetInTouchSection.css";

export default function GetInTouchSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}$/; // Här satte jag att ett namn måste innehålla vanliga bokstäver och minst 2 tecken
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Supersimpel e-post validering för a@a.se

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!nameRegex.test(formData.name))
      newErrors.name = "Name is too short";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (formData.subject.trim().length < 1) // Mindre än 1 tecken är ej giltigt här, så man måste skriva någonting
      newErrors.subject = "This field is required";
    if (formData.comments.trim().length < 20) // Här satte jag minst 20 tecken för en kommentar
      newErrors.comments = "Minimum 20 characters required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await sendContactForm(formData);
        if (response.success) {
          setSuccessMessage(response.message);
          setFormData({
            name: "",
            email: "",
            telephone: "",
            subject: "",
            comments: "",
          });
        }
      } catch (error) {
        setSuccessMessage("Something went wrong. Please try again.");
      }
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <section className="getintouch-section">
      <div className="getintouch-container">
        <div className="getintouch-left">
          <p className="getintouch-subtitle">Get in Touch</p>
          <h2 className="getintouch-title">
            Get Personalized Assistance – Contact Us
          </h2>
          <p className="getintouch-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
          </p>
          <div className="map-placeholder"></div>
        </div>

        <div className="getintouch-right">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <div className="label-row">
                <label htmlFor="name">
                  Your Name <span>*</span>
                </label>
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="telephone">Telephone</label>
                  {errors.telephone && (
                    <p className="error-text">{errors.telephone}</p>
                  )}
                </div>
                <input
                  type="text"
                  id="telephone"
                  placeholder="Telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="subject">
                  Subject <span>*</span>
                </label>
                {errors.subject && (
                  <p className="error-text">{errors.subject}</p>
                )}
              </div>
              <input
                type="text"
                id="subject"
                placeholder="How can we help you"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="comments">
                  Comments / Questions <span>*</span>
                </label>
                {errors.comments && (
                  <p className="error-text">{errors.comments}</p>
                )}
              </div>
              <textarea
                id="comments"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="submit-row">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
