import PageHero from "../components/Pagehero";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import FlexibleStorage from "../components/FlexibleStorage";
import SubscribeSection from "../components/SubscribeSection";
import FaqSection from "../components/FaqSection";
import BookingSection from "../components/BookingSection";

import "../styles/WhyChooseUsSection.css";
import "../styles/FlexibleStorage.css";
import "../styles/FaqSection.css";
import "../styles/SubscribeSection.css";

export default function Booking() {
  return (
    <div className="booking">
      <PageHero
        title="Booking"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <BookingSection />
      <WhyChooseUsSection />
      <FlexibleStorage />
      <FaqSection />
      <SubscribeSection />
    </div>
  );
}
