import "../styles/HeroSection.css";
import HeroImage from "../assets/images/Rectangle2.svg";


// exporterar med funktionen HeroSection med "export default function", så att andra filer kan använda den. 
// I det här fallet kan t.ex. Home.jsx importera och visa denna HeroSection på sidan genom att kalla på funktionen.
// Med andra ord så pratar den här filen med olika "pages", om jag väljer att lägga till dem där
export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-panel">
        <div className="hero-content">
          <div className="hero-text">
            <p className="welcome-text">Welcome to StorAid</p>
            <h1>
              Space Simplified,<br />Storage Perfected
            </h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna.
              Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis
              luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.
            </p>
            <button className="discover-btn">Discover More</button>
          </div>
          <div className="hero-image">
            <img src={HeroImage} alt="Person holding a box" />
          </div>
        </div>
      </div>
    </section>
  );
}
