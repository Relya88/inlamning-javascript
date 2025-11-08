import { useEffect, useState } from "react";
import { getTestimonials } from "../api/api";
import "../styles/TestimonialsSection.css";
import bgImage from "../assets/images/testimonials-bg-img.svg";
import quoteIcon from "../assets/icons/quote-icon.svg";
import ratingIcon from "../assets/icons/rating-icon.svg";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getTestimonials().then(setTestimonials);
  }, []);
  
// Såg till att id, comment, name, companyName, avatarUrl och rating skulle hämtas från api:et
// tog dock sen hjälp av ChatGPT för att lägga till en array med lika många platser som betyget
// (item.rating) från apiet, så att det loopar igenom betyget och visar rätt antal stjärnor
  return (
    <section className="testimonials-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="overlay"></div>

      <div className="testimonials-content">
        <p className="testimonials-subtitle">Testimonials</p>
        <h2 className="testimonials-title">See What Our Client Have to Say</h2>
        <p className="testimonials-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="testimonial-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <img key={i} src={ratingIcon} alt="star" className="rating-star" />
                ))}
              </div>
              <p className="testimonial-comment">"{item.comment}"</p>
              <div className="testimonial-footer">
                <div className="testimonial-user">
                  <img src={item.avatarUrl} alt={item.name} className="testimonial-avatar" />
                  <div>
                    <h5 className="testimonial-name">{item.name}</h5>
                    <p className="testimonial-company">{item.companyName}</p>
                  </div>
                </div>
                <img src={quoteIcon} alt="" aria-hidden="true" className="quote-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
