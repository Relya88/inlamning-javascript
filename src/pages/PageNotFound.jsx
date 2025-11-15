import { Link } from "react-router-dom";
import SubscribeSection from "../components/SubscribeSection";
import "../styles/PageNotFound.css";
import "../styles/SubscribeSection.css";

// page not found (404-sida) som visas när en sida inte hittas. Inkluderar då länk tillbaka till startsidan.
//försökt tillgänglighetsanpassa enligt wcag, men tog även hjälp av chat för att formulera vissa rätt.
//samma med aria attributet

export default function PageNotFound() {
  return (
    <main
      className="page-not-found-wrapper"
      aria-labelledby="notfound-heading"
      role="main"
    >
      <section
        className="page-not-found"
        aria-describedby="notfound-description"
      >
        <div className="container">
          <p className="oops-text" aria-hidden="true">Oops!</p>
          <h1 id="notfound-heading" className="notfound-title">
            Page Not Found
          </h1>
          <p id="notfound-description" className="notfound-description">
            Sorry, the page you are looking for does not exist. It may have been moved,
            removed altogether or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="back-home-btn"
            aria-label="Return to the homepage"
          >
            Back To Home
          </Link>
        </div>
      </section>
      <SubscribeSection />
    </main>
  );
}
