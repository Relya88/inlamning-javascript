import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BrandsSection from "../components/BrandsSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import "../styles/HeroSection.css";
import "../styles/AboutSection.css";
import "../styles/BrandsSection.css";
import "../styles/ServicesSection.css";
import "../styles/TestimonialsSection.css";
import "../styles/WhyChooseUsSection.css";
import PricingSection from "../components/PricingSection";
import FlexibleStorage from "../components/FlexibleStorage";
import BlogSection from "../components/BlogSection";
import SubscribeSection from "../components/SubscribeSection";

// Här har jag valt att returnera samtliga sektioner som ska synas på Home-page. De är länkade med mina komponenter inuti "components"-mappen. Tar jag bort exempelvis <HeroSection /> nedan så kommer min HeroSection.jsx inte fungera/synas på min Home-sida.
export default function Home() {
  return (
    <div className="home">
      <HeroSection />
      <AboutSection />
      <BrandsSection />
      <ServicesSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <PricingSection />
      <FlexibleStorage />
      <BlogSection />
      <SubscribeSection />
    </div>
  );
}
