import HeroSection from "../2-Sections/01-Home/01-Hero-section";
import BrandSection from "../2-Sections/01-Home/02-Brand-section";
import AppFeaturesSection from "../2-Sections/01-Home/03-App-features-section";
import HowItWorksSection from "../2-Sections/01-Home/04-How-it-works-section";
import ExplanationSection from "../2-Sections/01-Home/05-Explanation-section";
import ReviewsSection from "../2-Sections/01-Home/06-Reviews-section";
import QaSection from "../2-Sections/01-Home/07-QA-section";
import ContactSection from "../2-Sections/01-Home/08-Contact-section";
const Home = () => {
  return (
    <>
      <HeroSection />
      <BrandSection />
      <AppFeaturesSection />
      <HowItWorksSection />
      <ExplanationSection />
      <ReviewsSection />
      <QaSection />
      <ContactSection />
    </>
  );
};

export default Home;
