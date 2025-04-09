import FillersContactSection from "../_universal-component/fillers-contact-section";
import FirstSection from "../_universal-component/first-section";
import EnFooter from "../_universal-component/footers/en-footer";
import FormSection from "../_universal-component/form-section";
import Header from "../_universal-component/header";
import HeroSection from "../_universal-component/hero-section";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection
        title="The gold standard of"
        mainTitle={
          <>
            HYALURONIC <br className="max-custom-lg:!block" /> ACID FILLERS
          </>
        }
        subtitle=""
        location="in Geneva, Montreux and Gstaad"
        btnText="ONLINE BOOKING"
        video="/assets/images/fillers-booking-video.mp4"
      />
      <FirstSection
        img="/assets/images/girl-lips.jpg"
        mainTitle={
          <>
            Fillers made by <br />
            plastic surgeons
          </>
        }
        subTitle="We are happy to welcome you with:"
        paragraphOne={
          <>
            Free consultation with <b>VISIA SCANNER</b>
          </>
        }
        paragraphTwo="Say goodbye to wrinkles and sagging, add youth to your face!"
        paragraphThree=""
        paragraphFour=""
        btnText="ONLINE BOOKING"
        goToFormDescription={
          <>
            Fill out the form and we will call you back to choose <br /> a
            convenient time
          </>
        }
        goToFormText="GO TO FORM"
      />
      <FormSection
        title="Price list and consultation booking"
        subTitle={
          <>
            {" "}
            To schedule a FREE CONSULTATION or receive our detailed PRICE LIST
            by email, <br /> complete the form.
          </>
        }
        firstNameLabel="First Name*"
        lastNameLabel="Last Name*"
        emailLabel="Email*"
        phoneLabel="Phone number*"
        serviceLabel="I'm interested in the following service:*"
        locationLabel="My preferred location is:*"
        selectText="Please Select"
        haveAlreadyPatientCheckbox={true}
        questionLabel="If you have any further questions, please feel free to ask them here!"
        acceptTermsTextOne={
          <>
            Aesthetics Clinic Geneva needs the contact information you provide
            to us to contact you <br /> about our products and services.
          </>
        }
        acceptTermsTextTwo={
          <>
            {" "}
            By clicking on "Confirm", you are agreeing with the terms listed in
            our{" "}
            <span>
              <a href="#">privacy policy</a>
            </span>
          </>
        }
        btnText="CONFIRM"
        btnSubmittingText="Submitting..."
      />
      <FillersContactSection
        imgOne="/assets/images/doctor-girl-1.jpg"
        imgTwo="/assets/images/doctor-girl-2.jpg"
        title="Top 10 in Switzerland"
        subTitle={
          <>
            . Led by professor of <br /> injections dr. Tenorio
          </>
        }
        paragraphOne="Our team is trained by our Swiss board certified Doctor, Xavier
              Tenorio. He is an expert in Plastic, Aesthetic & Reconstructive
              Surgery (FMH) and an international trainer and injections
              professor."
        paragraphTwo="You will have the opportunity to experience a VISIA Scanner which
              will give you insights on the final your treatment plan."
        paragraphThree="At our clinic, Dr. Yulia Raspertova, an aesthetics doctor and
              dermatologist, and Dr. Monia Khedir, family doctor,
              micro-nutritionist and aesthetics doctor, will be conducting the
              treatments."
        paragraphFour="They will be happy to assist you and answer all your questions."
        appointmentText="To schedule an appointment, please click on the link below"
        btnText="Online Booking"
        callText="Or call us on the following number:"
        greetings="We would be happy to welcome you at Aesthetics Clinic!"
      />
      <EnFooter />
    </>
  );
}
