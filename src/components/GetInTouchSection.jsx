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

  // Funktionen nedan kollar att allt i formuläret är ifyllt rätt, visar fel om något saknas, 
  // och skickar iväg meddelandet om allt ser bra ut.
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!nameRegex.test(formData.name))
      newErrors.name = "Name is too short";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (formData.subject.trim().length < 1)
      newErrors.subject = "This field is required";
    if (formData.comments.trim().length < 20)
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
    <section
      className="getintouch-section"
      aria-labelledby="contact-title"
      aria-describedby="contact-description"
      role="form"
    >
      <div className="getintouch-container">
        <div className="getintouch-left">
          <p className="getintouch-subtitle">Get in Touch</p>
          <h2 id="contact-title" className="getintouch-title">
            Get Personalized Assistance – Contact Us
          </h2>
          <p
            id="contact-description"
            className="getintouch-description"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
          </p>
          <div
            className="map-placeholder-getintouch"
            role="img"
            aria-label="Map showing our office location"
          ></div>
        </div>

        <div className="getintouch-right">
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="contact-description"
          >
            <div className="form-group">
              <div className="label-row">
                <label htmlFor="name">
                  Your Name <span aria-hidden="true">*</span>
                </label>
                {errors.name && (
                  <p className="error-text" aria-live="assertive" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="email">
                    Email <span aria-hidden="true">*</span>
                  </label>
                  {errors.email && (
                    <p className="error-text" aria-live="assertive" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                />
              </div>

              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="telephone">Telephone</label>
                  {errors.telephone && (
                    <p className="error-text" aria-live="assertive" role="alert">
                      {errors.telephone}
                    </p>
                  )}
                </div>
                <input
                  type="tel"
                  id="telephone"
                  placeholder="Telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  aria-invalid={errors.telephone ? "true" : "false"}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="subject">
                  Subject <span aria-hidden="true">*</span>
                </label>
                {errors.subject && (
                  <p className="error-text" aria-live="assertive" role="alert">
                    {errors.subject}
                  </p>
                )}
              </div>
              <input
                type="text"
                id="subject"
                placeholder="How can we help you"
                value={formData.subject}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.subject ? "true" : "false"}
              />
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="comments">
                  Comments / Questions <span aria-hidden="true">*</span>
                </label>
                {errors.comments && (
                  <p className="error-text" aria-live="assertive" role="alert">
                    {errors.comments}
                  </p>
                )}
              </div>
              <textarea
                id="comments"
                placeholder="Comments"
                value={formData.comments}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.comments ? "true" : "false"}
              ></textarea>
            </div>

            <div className="submit-row">
              <button
                type="submit"
                className="submit-btn"
                aria-label="Submit contact form"
              >
                Submit
              </button>
              {successMessage && (
                <p className="success-message-getintouch" role="status" aria-live="polite">
                  {successMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
