import PageHero from "../components/Pagehero";
import GetInTouchSection from "../components/GetInTouchSection";
import FindUsOnSection from "../components/FindUsOnSection";
import "../styles/Contact.css";
import SubscribeSection from "../components/SubscribeSection";

export default function Contact() {
  return (
    <div className="contact">
      {/* Med Pagehero.jsx kan jag importera PageHero här för att få enhetliga Hero-bilder på samtliga sidor */}
      <PageHero
        title="Contact Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
      />
      <GetInTouchSection />
      <FindUsOnSection />
      <SubscribeSection />
    </div>
  );
}
