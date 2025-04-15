import Link from "next/link";
import FillersContactSection from "../_universal-component/fillers-contact-section";
import FirstSection from "../_universal-component/first-section";
import FormSection from "../_universal-component/form-section";
import Header from "../_universal-component/header";
import HeroSection from "../_universal-component/hero-section";
import FrFooter from "../_universal-component/footers/fr-footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection
        title="L'étalon-or de la"
        mainTitle={
          <>
            HYALURONIC <br className="max-custom-lg:!block" /> ACID FILLERS
          </>
        }
        subtitle=""
        location="à Genève, Gstaad et Montreux!"
        btnText="Réservation"
        video="/assets/images/fillers-reservation-video.mp4"
      />
      <FirstSection
        img="/assets/images/girl-lips.jpg"
        mainTitle={
          <>
            Fillers <br />
            réalisé par les chirurgiens plasticiens
          </>
        }
        subTitle={
          <>
            Nous sommes heureux de vous <br /> accueillir avec:
          </>
        }
        paragraphOne={
          <>
            — Consultation gratuite avec <b>VISIA SCANNER</b>
          </>
        }
        paragraphTwo={
          <>
            —{" "}
            <span className="font-bold">
              <Link href="#">20% de réduction</Link>
            </span>{" "}
            sur votre première séance de fillers chez nous
          </>
        }
        paragraphThree="Dites adieu aux rides et à l’affaissement, redonnez de la jeunesse à votre visage!"
        paragraphFour=""
        btnText="Réservation"
        goToFormDescription={
          <>
            Remplissez le formulaire et nous vous rappellerons <br /> pour
            choisir un moment qui vous convient
          </>
        }
        goToFormText="Aller au Formulaire"
      />
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
      <FillersContactSection
        imgOne="/assets/images/doctor-girl-1.jpg"
        imgTwo="/assets/images/doctor-girl-2.jpg"
        title="Top 10 en Suisse"
        subTitle={
          <>
            . Dirigé par le professeur <br /> d&apos;injections Dr. Tenorio
          </>
        }
        paragraphOne="Notre équipe est formée par notre médecin suisse diplômé, Xavier Tenorio. Il est expert en chirurgie plastique, esthétique et reconstructive (FMH), formateur international et professeur d’injections."
        paragraphTwo="Vous aurez l’occasion de faire l’expérience d’un scanner VISIA qui vous donnera des indications sur votre plan de traitement final."
        paragraphThree="Dans notre clinique, le Dr Yulia Raspertova, médecin esthétique et dermatologue, et le Dr Monia Khedir, également médecin esthétique, effectueront les traitements."
        paragraphFour="Ils seront heureux de vous aider et de répondre à toutes vos questions."
        appointmentText="Pour prendre un rendez-vous, veuillez cliquer sur le lien ci-dessous"
        btnText="Réservation"
        callText="Ou appelez-nous au numéro suivant:"
        greetings="Nous serons heureux de vous accueillir à Aesthetics Clinic!"
      />
      <FrFooter />
    </>
  );
}
