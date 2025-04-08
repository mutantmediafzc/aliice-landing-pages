import ContactSection from "./_components/contact-section";
import FirstSection from "./_components/first-section";
import Footer from "./_components/footer";
import FormSection from "./_components/form-section";
import Header from "./_components/header";
import HeroSection from "./_components/hero-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FirstSection />
      <FormSection />
      <ContactSection />
      <Footer />
    </>
  );
}
