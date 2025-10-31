import "../styles/PageHero.css";

// En återanvändbar hero för varje sida. Jag importerar denna på de olika sidorna, så som About Us, Contact Us, med mera, för att få en enhetlig "Hero".
// Den enda Hero-delen som är unik, är "HeroSection.jsx" och den laddas in till Home.jsx.
// Men denna är en generell för övriga sidor.
export default function PageHero({ title, description }) {
  return (
    <section className="page-hero">
      <div className="page-hero-content">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}