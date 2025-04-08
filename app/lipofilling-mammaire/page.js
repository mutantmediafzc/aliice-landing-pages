import BenefitSection from "./_components/benefit-section";
import ContactSection from "./_components/contact-section";
import FirstSection from "./_components/first-section";
import Footer from "./_components/footer";
import FormSection from "./_components/form-section";
import Header from "./_components/header";
import HeroSection from "./_components/hero-section";
import HowToBookSection from "./_components/how-to-book-section";
import SwiperSection from "./_components/swiper-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FirstSection />
      <SwiperSection />
      <BenefitSection />
      <FormSection />
      <HowToBookSection />
      <ContactSection />
      <Footer />
    </>
  );
}
