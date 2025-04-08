export default function ContactSection() {
  return (
    <section className="cs_about cs_style_1" id="about">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40 ">
          <div className="col-lg-5">
            <div className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft">
              <img className="max-h-[451px] max-w-[436px]" src="/assets/images/doctor-girl-1.jpg" alt="About Thumb" />
            </div>
            <div className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft">
              <img className="mt-4 max-h-[451px] max-w-[436px]" src="/assets/images/doctor-girl-2.jpg" alt="About Thumb" />
            </div>
          </div>
          <div className="col-lg-7 cs_pl_30">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_title_up cs_accent_color_v4 cs_semibold cs_fs_24">
                Top 10 in Switzerland
              </h3>
              <h2 className="cs_section_title cs_semibold cs_fs_45 mb-0">
                . Led by professor of <br /> injections dr. Tenorio
              </h2>
            </div>
            <div className="cs_height_17 cs_height_lg_10" />
            <p className="cs_about_text cs_type_2">
              Our team is trained by our Swiss board certified Doctor, Xavier
              Tenorio. He is an expert in Plastic, Aesthetic & Reconstructive
              Surgery (FMH) and an international trainer and injections
              professor.
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              You will have the opportunity to experience a VISIA Scanner which
              will give you insights on the final your treatment plan.
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              At our clinic, Dr. Yulia Raspertova, an aesthetics doctor and
              dermatologist, and Dr. Monia Khedir, family doctor,
              micro-nutritionist and aesthetics doctor, will be conducting the
              treatments.
            </p>
            <p className="cs_about_text cs_type_2">
              They will be happy to assist you and answer all your questions.
            </p>
            <p
              style={{ fontWeight: "bold" }}
              className="cs_about_text cs_type_2"
            >
              To schedule an appointment, please click on the link below
            </p>
            <a href="#service" className="links-div-home-page-a">
              Online Booking
            </a>
            <p
              style={{ fontWeight: "bold", marginTop: 20 }}
              className="cs_about_text cs_type_2"
            >
              Or call us on the following number:
            </p>
            <div style={{ maxWidth: 250 }}>
              <div className="call-us-flex">
                <p className="cs_about_text cs_type_2 call-us">Geneva</p>
                <p className="cs_about_text cs_type_2 span-home-underline call-us-big">
                  <a href="tel:+41227322223">+41 22 732 22 23</a>
                </p>
              </div>
              <div className="call-us-flex">
                <p className="cs_about_text cs_type_2 call-us">Gstaad</p>
                <p className="cs_about_text cs_type_2 span-home-underline call-us-big">
                  <a href="tel:+41791969869">+41 79 196 98 69</a>
                </p>
              </div>
              <div className="call-us-flex">
                <p className="cs_about_text cs_type_2 call-us">Montreux </p>
                <p className="cs_about_text cs_type_2 span-home-underline call-us-big">
                  <a href="tel:+41799089898">+41 79 908 98 98</a>
                </p>
              </div>
            </div>
            <p className="cs_about_text cs_type_2">
              We would be happy to welcome you at Aesthetics Clinic!
            </p>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
}
