import { useEffect, useState } from "react";
import { getFaqs } from "../api/api";
import "../styles/FaqSection.css";

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
    <section className="faq-section" aria-labelledby="faq-heading" role="region">
      <div className="faq-container">
        <div className="faq-left">
          <p className="faq-subtitle">FAQ</p>
          <h2 id="faq-heading" className="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="faq-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="faq-right">
          <div
            className="faq-accordion"
            role="list"
            aria-label="Frequently asked questions and answers"
          >
            {faqs.map((faq) => (
              <article
                key={faq.id}
                className={`faq-item ${activeId === faq.id ? "active" : ""}`}
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={activeId === faq.id}
                role="button"
                tabIndex={0}
                aria-controls={`faq-answer-${faq.id}`}
                aria-labelledby={`faq-question-${faq.id}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleAccordion(faq.id);
                }}
              >
                <header className="faq-question" id={`faq-question-${faq.id}`}>
                  <span>{faq.title}</span>
                  <span className="faq-icon" aria-hidden="true">
                    {activeId === faq.id ? "˄" : "˅"}
                  </span>
                </header>
                {activeId === faq.id && (
                  <p
                    id={`faq-answer-${faq.id}`}
                    className="faq-answer"
                    aria-live="polite"
                    role="region"
                  >
                    {faq.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
