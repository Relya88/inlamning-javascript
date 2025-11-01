import "../styles/PricingSection.css";
import checkGreen from "../assets/icons/pricing-checkmark-green.svg";
import checkYellow from "../assets/icons/pricing-checkmark-yellow.svg";

function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h4 className="pricing-plan">Pricing Plan</h4>
          <h2 className="pricing-title">
            Find the Perfect Plan for<br />Your Storage Needs
          </h2>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Small Unit</h3>
            <p className="price"><span>$</span>50<span>/month</span></p>
            <p className="desc">Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            <hr />
            <ul>
              <li><img src={checkGreen} alt="" className="check-icon" />Nam nec ipsum in dolor</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Fusce nec ligula ut arcu</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Aliquam pulvinar arcu in</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Duis gravida enim porta</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Etiam eget libero non ligula</li>
            </ul>
            <button>Rent Now</button>
          </div>

          <div className="pricing-card dark">
            <h3>Medium Unit</h3>
            <p className="price"><span>$</span>100<span>/month</span></p>
            <p className="desc">Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            <hr />
            <ul>
              <li><img src={checkYellow} alt="" className="check-icon" />Nam nec ipsum in dolor</li>
              <li><img src={checkYellow} alt="" className="check-icon" />Fusce nec ligula ut arcu</li>
              <li><img src={checkYellow} alt="" className="check-icon" />Aliquam pulvinar arcu in</li>
              <li><img src={checkYellow} alt="" className="check-icon" />Duis gravida enim porta</li>
              <li><img src={checkYellow} alt="" className="check-icon" />Etiam eget libero non ligula</li>
            </ul>
            <button>Rent Now</button>
          </div>

          <div className="pricing-card">
            <h3>Large Unit</h3>
            <p className="price"><span>$</span>150<span>/month</span></p>
            <p className="desc">Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            <hr />
            <ul>
              <li><img src={checkGreen} alt="" className="check-icon" />Nam nec ipsum in dolor</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Fusce nec ligula ut arcu</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Aliquam pulvinar arcu in</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Duis gravida enim porta</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Etiam eget libero non ligula</li>
            </ul>
            <button>Rent Now</button>
          </div>

          <div className="pricing-card">
            <h3>Executive Unit</h3>
            <p className="price"><span>$</span>200<span>/month</span></p>
            <p className="desc">Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</p>
            <hr />
            <ul>
              <li><img src={checkGreen} alt="" className="check-icon" />Nam nec ipsum in dolor</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Fusce nec ligula ut arcu</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Aliquam pulvinar arcu in</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Duis gravida enim porta</li>
              <li><img src={checkGreen} alt="" className="check-icon" />Etiam eget libero non ligula</li>
            </ul>
            <button>Rent Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
