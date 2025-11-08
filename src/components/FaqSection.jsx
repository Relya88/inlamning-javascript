import { useEffect, useState } from "react";
import { getFaqs } from "../api/api";
import "../styles/FaqSection.css"

const FaqSection = () => {
  // Här sparas FAQ-listan från API:t.
  const [faqs, setFaqs] = useState([]);

  // Sparar vilken fråga som är öppen (active).
  const [activeId, setActiveId] = useState(null);

  // Koden säger 'hämta FAQ-listan från API:t" när sidan laddas.'
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getFaqs();
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };
    fetchFaqs();
  }, []);

    // Här öppnas och stängs en fråga när man klickar på den
  const toggleAccordion = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

    // HTML-delen (JSX) som visar min FAQ-sektionen
  return (
<section className="faq-section">
  <div className="faq-container">
    <div className="faq-left">
      <p className="faq-subtitle">FAQ</p>
      <h2 className="faq-title">Frequently Ask Question</h2>
      <p className="faq-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </div>

    <div className="faq-right">
        <div className="faq-accordion">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`faq-item ${activeId === faq.id ? "active" : ""}`}
              onClick={() => toggleAccordion(faq.id)}
            >
              <div className="faq-question">
                <span>{faq.title}</span>
                <span className="faq-icon">{activeId === faq.id ? "˄" : "˅"}</span>
              </div>
              {activeId === faq.id && <p className="faq-answer">{faq.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default FaqSection;
