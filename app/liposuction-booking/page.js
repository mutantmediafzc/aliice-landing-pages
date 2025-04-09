import Link from "next/link";
import ContactSection from "../_universal-component/contact-section";
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
        title="Free consultation"
        mainTitle="Liposuction"
        subtitle="with 3D simulation"
        location="in Geneva, Montreux and Gstaad"
        btnText="ONLINE BOOKING"
        video="/assets/images/liposuction-booking-video.mp4"
      />
      <FirstSection
        img="/assets/images/image-one.jpg"
        mainTitle="Visit Aesthetics Clinic for a free consultation"
        subTitle="and find out what is feasible!"
        paragraphOne="— Exam the excess of fat and skin. Measure your proportions"
        paragraphTwo="— Visualize possible results in 3D"
        paragraphThree="— Ask all your questions"
        paragraphFour={
          <>
            At the end of the consultation, we will provide you with a{" "}
            <b>Personal Quote that outlines the costs of your project.</b>
          </>
        }
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
              <Link href="#">privacy policy</Link>
            </span>
          </>
        }
        btnText="CONFIRM"
        btnSubmittingText="Submitting..."
      />
      <ContactSection
        img="/assets/images/image-five.jpg"
        title="Top 10 in Switzerland"
        subTitleOne=". 2000+ successful cases"
        subTitleTwo=". Private operating block"
        paragraphOne="The surgery is performed by our Swiss board certified Doctor,
                    Xavier Tenorio. He is an expert in Plastic, Aesthetic &
                    Reconstructive Surgery (FMH) and an international trainer and has
                    more than 2000 successful cases."
        paragraphTwo="In his examination you will have the opportunity to experience a
                    3D visualization which will give you insights on the final
                    results."
        paragraphThree="The surgery will be performed in his own private operating block
                    which gives you an advantage of time, privacy and comfort. In our
                    clinic, you will have an operating room just for you."
        paragraphFour=" Dr. Tenorio will be happy to assist you and answer all your
                    questions."
        appointmentText="To schedule an appointment, please click on the link below"
        btnText="Online Booking"
        callText="Or call us on the following number:"
        greetings="We would be happy to welcome you at Aesthetics Clinic!"
        note={
          <>
            {" "}
            <span>NOTE: </span> The consultation with Dr. Tenorio cost 150CHF
          </>
        }
      />
      <EnFooter />
    </>
  );
}
