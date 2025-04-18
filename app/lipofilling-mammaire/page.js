import Link from "next/link";
import FirstSection from "../_universal-component/first-section";
import FrFooter from "../_universal-component/footers/fr-footer";
import FormSection from "../_universal-component/form-section";
import Header from "../_universal-component/header";
import HeroSection from "../_universal-component/hero-section";
import BenefitSection from "./_components/benefit-section";
import HowToBookSection from "./_components/how-to-book-section";
import SwiperSection from "./_components/swiper-section";
import Script from "next/script";
import ContactSection from "../_universal-component/contact-section";

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
      <FirstSection
        img="/assets/images/image-one.jpg"
        mainTitle={
          <>
            Le lipofilling <br /> mammaire est un art !
          </>
        }
        subTitle={
          <>
            Nous vous invitons pour une <br /> consultation sans frais
          </>
        }
        paragraphOne="— Examinez l’excès de graisse et de peau. Mesurez vos proportions."
        paragraphTwo="— Visualisez les résultats possibles en 3D"
        paragraphThree="— Posez toutes vos questions"
        paragraphFour={
          <>
            À la fin de la consultation, nous vous fournirons un{" "}
            <b>devis personnel qui détaille les coûts de votre projet.</b>
          </>
        }
        btnText="Réservation"
        goToFormDescription={
          <>
            Remplissez le formulaire et nous vous rappellerons <br /> pour
            choisir un moment qui vous convient
          </>
        }
        goToFormText="Aller au Formulaire"
      />
      <SwiperSection />
      <BenefitSection />
      <FormSection
        title="Liste de prix et réservation de consultation"
        subTitle={
          <>
            {" "}
            Pour planifier une CONSULTATION GRATUITE <br />
            ou recevoir notre LIST DE PRIX détaillée par email, remplissez le
            formulaire.
          </>
        }
        firstNameLabel="Prénom*"
        lastNameLabel="Nom*"
        emailLabel="E-mail*"
        phoneLabel="Numéro de téléphone*"
        serviceLabel="Je suis intéressé par le service suivant :*"
        locationLabel="Mon lieu préféré est :*"
        selectText="Veuillez sélectionner"
        haveAlreadyPatientCheckbox={false}
        questionLabel="Avez-vous des questions ? N'hésitez pas à les poser ici !"
        acceptTermsTextOne={
          <>
            Aesthetics Clinic Geneva a besoin des coordonnées que vous nous
            fournissez pour vous <br /> contacter au sujet de nos produits et
            services. En cliquant sur « Soumettre », vous
          </>
        }
        acceptTermsTextTwo={
          <>
            {" "}
            acceptez les conditions énumérées dans notre{" "}
            <span>
              <Link href="#">politique de confidentialité.</Link>
            </span>
          </>
        }
        btnText="SOUMETTRE"
        btnSubmittingText="SOUMISSION..."
        language="french"
      />
      <HowToBookSection />
      <ContactSection
        img="/assets/images/image-five.jpg"
        title="Top 10 en Suisse"
        subTitleOne=". Plus de 2000 cas réussis"
        subTitleTwo=". Bloc opératoire privé"
        paragraphOne={
          <>
            La chirurgie est réalisée par notre médecin suisse certifié, Dr.
            Xavier Tenorio. <br /> <br /> Il est un expert en chirurgie
            plastique, esthétique et reconstructrice (FMH) et formateur
            international, et compte plus de 2000 cas réussis.
          </>
        }
        paragraphTwo="Lors de son examen, vous aurez la possibilité de vivre une visualisation en 3D qui vous donnera un aperçu des résultats finaux."
        paragraphThree="La chirurgie sera réalisée dans son propre bloc opératoire privé, ce qui vous offre un avantage en termes de temps, de confidentialité et de confort. Dans notre clinique, vous disposerez d’une salle d’opération rien que pour vous."
        paragraphFour="Le Dr Tenorio sera ravi de vous aider et de répondre à toutes vos questions."
        appointmentText="Vous pouvez prendre rendez-vous avec Dr.Tenorio en suivant le lien ci-dessous"
        btnText="RDV en ligne"
        callText="Ou appelez-nous au numéro suivant:"
        greetings="Nous serions ravis de vous accueillir à l´Aesthetics clinic!"
        note={
          <>
            {" "}
            <span>NOTE: </span> La consultation avec le Dr Tenorio coûte 150 CHF
          </>
        }
      />
      <FrFooter />
      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
        strategy="afterInteractive"
      />
      <Script src="/assets/js/animation.js" strategy="afterInteractive" />
    </>
  );
}
