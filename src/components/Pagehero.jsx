import "../styles/PageHero.css";

// En återanvändbar hero för varje sida. Importerar den på de olika sidorna, 
// så som About Us, Contact Us, m.m, för att få en enhetlig "Hero".
// Den enda Hero-delen som är unik, är "HeroSection.jsx" och den laddas in till Home.jsx.
// Men just denna är en generell för övriga sidor.

export default function PageHero({ title, description }) {
  return (
    <section className="page-hero" aria-labelledby="page-hero-title">
      <div className="page-hero-content container">
        <h1 id="page-hero-title">{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}