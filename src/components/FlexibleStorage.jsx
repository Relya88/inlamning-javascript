import { useNavigate } from "react-router-dom";
import "../styles/FlexibleStorage.css";

function FlexibleStorage() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking#booking-section"); //Lade in denna så att när man trycker på "Book Now" på någon sida, så skrollar man automatiskt till bokningsformuläret
    setTimeout(() => {
      const section = document.getElementById("booking-section");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <section
      className="flexible-storage"
      aria-labelledby="flexible-storage-heading"
      role="region"
    >
      <div className="container">
        <h2 id="flexible-storage-heading">
          Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie
          nisi sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi
          non sodales augue. Phasellus eget elit gravida.
        </p>
        <button
          onClick={handleBookingClick}
          aria-label="Book your storage unit now"
        >
          Book Now
        </button>
      </div>
    </section>
  );
}

export default FlexibleStorage;
