import { Link } from "react-router-dom";
import SubscribeSection from "../components/SubscribeSection";
import "../styles/PageNotFound.css";
import "../styles/SubscribeSection.css";

export default function PageNotFound() {
  return (
    <div className="page-not-found-wrapper">
      <section className="page-not-found">
        <div className="container">
          <p className="oops-text">Oops!</p>
          <h1 className="notfound-title">Page Not Found</h1>
          <p className="notfound-description">
            Sorry, the page you are looking for does not exist. It may have been moved,
            removed altogether or is temporarily unavailable.
          </p>

          <Link to="/" className="back-home-btn">
            Back To Home
          </Link>
        </div>
      </section>
      <SubscribeSection />
    </div>
  );
}
