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

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ-]{2,}$/; // Namn måste innehålla bokstäver och minst 2 tecken
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
    if (formData.selectedUnit.trim().length < 1)
      newErrors.selectedUnit = "Please select or enter a unit";
    if (formData.purpose.trim().length < 20)
      newErrors.purpose = "Minimum 20 characters required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await postBooking(formData);

        // ✅ Vi kontrollerar att svaret innehåller "success" och "message"
        if (response.success) {
          setSuccessMessage(response.message); // Visa API-meddelandet
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
  <section id="booking-section" className="booking-section">
    <div className="booking-container">
      <div className="booking-left">
        <p className="booking-subtitle">Booking Unit</p>
        <h2 className="booking-title">
          Book Your Storage Unit Now & Simplify Your Life!
        </h2>
        <div className="map-placeholder"></div>
      </div>

      {/* Högerkolumn med beskrivning + vit box */}
      <div className="booking-right-column">
        <p className="booking-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
          ac blandit nisi non sodales augue. Phasellus eget elit gravida.
        </p>

        <div className="booking-right">
          <form className="booking-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
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
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

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
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="selectedUnit">
                  Choose Unit <span>*</span>
                </label>
                {errors.selectedUnit && (
                  <p className="error-text">{errors.selectedUnit}</p>
                )}
              </div>
              <input
                type="text"
                id="selectedUnit"
                placeholder="Choose Unit"
                value={formData.selectedUnit}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="purpose">
                  Storage purpose <span>*</span>
                </label>
                {errors.purpose && (
                  <p className="error-text">{errors.purpose}</p>
                )}
              </div>
              <textarea
                id="purpose"
                placeholder="Describe your storage purpose so that we can match your request"
                value={formData.purpose}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="submit-row">
              <button type="submit" className="submit-btn">
                Book Unit
              </button>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);
}
