import "../styles/BrandsSection.css";
import Logo1 from "../assets/images/Logoipsum1.svg";
import Logo2 from "../assets/images/Logoipsum2.svg";
import Logo3 from "../assets/images/Logoipsum3.svg";
import Logo4 from "../assets/images/Logoipsum4.svg";
import Logo5 from "../assets/images/Logoipsum5.svg";

//tagit koden från min siliconuppgift, dock utan (href) för att länka de

export default function BrandsSection() {
  return (
    <section
      className="brands-section"
      aria-labelledby="brands-heading"
      role="region"
    >
      <h2 id="brands-heading" className="visually-hidden">
        Partner brands
      </h2>
      <div
        className="brands-container"
        role="list"
        aria-label="List of partner brand logos"
      >
        <img src={Logo1} alt="Logo of partner brand 1" role="listitem" />
        <img src={Logo2} alt="Logo of partner brand 2" role="listitem" />
        <img src={Logo3} alt="Logo of partner brand 3" role="listitem" />
        <img src={Logo4} alt="Logo of partner brand 4" role="listitem" />
        <img src={Logo5} alt="Logo of partner brand 5" role="listitem" />
      </div>
    </section>
  );
}
