import PageHero from "../components/Pagehero";
import AboutSection from "../components/AboutSection";
import BrandsSection from "../components/BrandsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import SubScribeSection from "../components/SubscribeSection";
import "../styles/PageHero.css";
import "../styles/AboutSection.css";
import "../styles/TestimonialsSection.css";
import "../styles/BrandsSection.css";
import "../styles/WhyChooseUsSection.css";

export default function About() {
  return (
    <div className="about">
      {/* kan med hjälp av min Pagehero.jsx importera PageHero här för att få enhetliga Hero-bilder på samtliga sidor */}
      <PageHero
        title="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
      />
      <AboutSection />
      <BrandsSection />
      <TestimonialsSection />
      <WhyChooseUsSection bgColor="white" />
      <SubScribeSection />
    </div>
  );
}
