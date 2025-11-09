import "../styles/PricingSection.css";
import checkGreen from "../assets/icons/pricing-checkmark-green.svg";
import checkYellow from "../assets/icons/pricing-checkmark-yellow.svg";

function PricingSection() {
  return (
    <section
      className="pricing-section"
      aria-labelledby="pricing-title"
      role="region"
    >
      <div className="container">
        <header className="pricing-header">
          <h4 className="pricing-plan">Pricing Plan</h4>
          <h2 id="pricing-title" className="pricing-title">
            Find the Perfect Plan for Your Storage Needs
          </h2>
        </header>

        <div className="pricing-cards" role="list">
          <article className="pricing-card" role="listitem" tabIndex="0">
            <h3>Small Unit</h3>
            <p className="price">
              <span>$</span>50<span>/month</span>
            </p>
            <p className="desc">
              Phasellus sollicitudin sapien eu massa accumsan, quis semper odio
              suscipit.
            </p>
            <hr />
            <ul>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Nam nec ipsum in dolor
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Fusce nec ligula ut arcu
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Aliquam pulvinar arcu in
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Duis gravida enim porta
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Etiam eget libero non ligula
              </li>
            </ul>
            <button aria-label="Rent a small storage unit now">Rent Now</button>
          </article>

          <article className="pricing-card" role="listitem" tabIndex="0">
            <h3>Medium Unit</h3>
            <p className="price">
              <span>$</span>100<span>/month</span>
            </p>
            <p className="desc">
              Phasellus sollicitudin sapien eu massa accumsan, quis semper odio
              suscipit.
            </p>
            <hr />
            <ul>
              <li>
                <img src={checkYellow} alt="" className="check-icon" />
                Nam nec ipsum in dolor
              </li>
              <li>
                <img src={checkYellow} alt="" className="check-icon" />
                Fusce nec ligula ut arcu
              </li>
              <li>
                <img src={checkYellow} alt="" className="check-icon" />
                Aliquam pulvinar arcu in
              </li>
              <li>
                <img src={checkYellow} alt="" className="check-icon" />
                Duis gravida enim porta
              </li>
              <li>
                <img src={checkYellow} alt="" className="check-icon" />
                Etiam eget libero non ligula
              </li>
            </ul>
            <button aria-label="Rent a medium storage unit now">Rent Now</button>
          </article>

          <article className="pricing-card" role="listitem" tabIndex="0">
            <h3>Large Unit</h3>
            <p className="price">
              <span>$</span>150<span>/month</span>
            </p>
            <p className="desc">
              Phasellus sollicitudin sapien eu massa accumsan, quis semper odio
              suscipit.
            </p>
            <hr />
            <ul>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Nam nec ipsum in dolor
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Fusce nec ligula ut arcu
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Aliquam pulvinar arcu in
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Duis gravida enim porta
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Etiam eget libero non ligula
              </li>
            </ul>
            <button aria-label="Rent a large storage unit now">Rent Now</button>
          </article>

          <article className="pricing-card" role="listitem" tabIndex="0">
            <h3>Executive Unit</h3>
            <p className="price">
              <span>$</span>200<span>/month</span>
            </p>
            <p className="desc">
              Phasellus sollicitudin sapien eu massa accumsan, quis semper odio
              suscipit.
            </p>
            <hr />
            <ul>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Nam nec ipsum in dolor
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Fusce nec ligula ut arcu
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Aliquam pulvinar arcu in
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Duis gravida enim porta
              </li>
              <li>
                <img src={checkGreen} alt="" className="check-icon" />
                Etiam eget libero non ligula
              </li>
            </ul>
            <button aria-label="Rent an executive storage unit now">
              Rent Now
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
