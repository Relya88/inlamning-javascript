import { useState } from "react";
import { postBooking } from "../api/api";
import "../styles/BookingSection.css";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    selectedUnit: "",
    purpose: "",
  });

  //hanterar felmeddelanden och sparar statusmeddelande

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}$/; // Här satte jag att ett namn måste innehålla vanliga bokstäver och minst 2 tecken
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Supersimpel e-post validering för a@a.se

  //hanterar om förändringar i inputfälten uppstår (tog lite hjälp av chat)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
    setSuccessMessage("");
  };

  //hanterar det som händer när man bokar och validerar först alla fält och skickar sen till api:et
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!nameRegex.test(formData.name)) newErrors.name = "Name is too short";
    if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (formData.selectedUnit.trim().length < 1)
      newErrors.selectedUnit = "Please select or enter a unit";
    if (formData.purpose.trim().length < 20)
      newErrors.purpose = "Minimum 20 characters required";

    setErrors(newErrors);

    //om inga fel hittas skickas formuläret till api:et (tog lite hjälp av chatgpt)

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await postBooking(formData);
        if (response.success) {
          setSuccessMessage(response.message);
          setFormData({
            name: "",
            email: "",
            selectedUnit: "",
            purpose: "",
          });
        } else {
          setSuccessMessage("Something went wrong. Please try again.");
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
      id="booking-section"
      className="booking-section"
      aria-labelledby="booking-heading" // WCAG. Gör så besökaren hör "Book Your Storage Unit Now..."
      role="form"
    >
      <div className="booking-container">
        <div className="booking-left">
          <p className="booking-subtitle">Booking Unit</p>
          <h2 id="booking-heading" className="booking-title">
            Book Your Storage Unit Now & Simplify Your Life!
          </h2>
          <div
            className="map-placeholder"
            role="img"
            aria-label="Map showing available storage locations"
          ></div>
        </div>

        <div className="booking-right-column">
          <p className="booking-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>

          <div className="booking-right">
            <form
              className="booking-form"
              onSubmit={handleSubmit}
              noValidate
              aria-describedby="booking-heading"
            >
              <div className="form-row">
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
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                </div>

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
              </div>

              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="selectedUnit">
                    Choose Unit <span aria-hidden="true">*</span>
                  </label>
                  {errors.selectedUnit && (
                    <p className="error-text" aria-live="assertive" role="alert">
                      {errors.selectedUnit}
                    </p>
                  )}
                </div>
                <input
                  type="text"
                  id="selectedUnit"
                  placeholder="Choose Unit"
                  value={formData.selectedUnit}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.selectedUnit ? "true" : "false"}
                />
              </div>

              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="purpose">
                    Storage purpose <span aria-hidden="true">*</span>
                  </label>
                  {errors.purpose && (
                    <p className="error-text" aria-live="assertive" role="alert">
                      {errors.purpose}
                    </p>
                  )}
                </div>
                <textarea
                  id="purpose"
                  placeholder="Describe your storage purpose so that we can match your request"
                  value={formData.purpose}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={errors.purpose ? "true" : "false"}
                ></textarea>
              </div>

              <div className="submit-row">
                <button
                  type="submit"
                  className="submit-btn"
                  aria-label="Submit booking form"
                >
                  Book Unit
                </button>
                {successMessage && (
                  <p className="success-message-booking" aria-live="polite" role="status">
                    {successMessage}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
