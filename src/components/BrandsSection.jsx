import "../styles/BrandsSection.css";
import Logo1 from "../assets/images/Logoipsum1.svg";
import Logo2 from "../assets/images/Logoipsum2.svg";
import Logo3 from "../assets/images/Logoipsum3.svg";
import Logo4 from "../assets/images/Logoipsum4.svg";
import Logo5 from "../assets/images/Logoipsum5.svg";


export default function BrandsSection() {
  return (
    <section className="brands-section">
      <div className="brands-container">
        <img src={Logo1} alt="Brand logo 1" />
        <img src={Logo2} alt="Brand logo 2" />
        <img src={Logo3} alt="Brand logo 3" />
        <img src={Logo4} alt="Brand logo 4" />
        <img src={Logo5} alt="Brand logo 5" />
      </div>
    </section>
  );
}
