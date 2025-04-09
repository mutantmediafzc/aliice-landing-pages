import FrFooter from "../_universal-component/footers/fr-footer";
import Header from "../_universal-component/header";
import HeroSection from "../_universal-component/hero-section";
import BenefitSection from "./_components/benefit-section";
import ContactSection from "./_components/contact-section";
import FirstSection from "./_components/first-section";
import FormSection from "./_components/form-section";
import HowToBookSection from "./_components/how-to-book-section";
import SwiperSection from "./_components/swiper-section";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection
        title="Consultation offerte"
        mainTitle={
          <>
            LIPOFILLING <br className="max-custom-lg:!block" /> MAMMAIRE
          </>
        }
        subtitle="avec simulation 3D"
        location="à Genève, Gstaad et Montreux!"
        btnText="Réservation"
        video="/assets/images/lipofilling-mammaire-video.mp4"
      />
      <FirstSection />
      <SwiperSection />
      <BenefitSection />
      <FormSection />
      <HowToBookSection />
      <ContactSection />
      <FrFooter />
      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/animation.js" strategy="afterInteractive" />
    </>
  );
}
