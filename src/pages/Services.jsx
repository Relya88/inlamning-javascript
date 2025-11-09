import PageHero from "../components/Pagehero";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import FlexibleStorage from "../components/FlexibleStorage";
import SubscribeSection from "../components/SubscribeSection";

import "../styles/ServicesSection.css";
import "../styles/TestimonialsSection.css";
import "../styles/FaqSection.css";
import "../styles/FlexibleStorage.css";
import "../styles/SubscribeSection.css";


export default function Services() {
  return (
    <div className="services">
      <PageHero
        title="Our Services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <FlexibleStorage />
      <SubscribeSection />
    </div>
  );
}
