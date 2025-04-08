export default function ContactSection() {
  return (
    <section className="cs_about cs_style_1" id="about">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40 ">
          <div className="col-lg-5">
            <div className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft">
              <img
                className="max-h-[451px] max-w-[436px]"
                src="/assets/images/doctor-girl-1.jpg"
                alt="About Thumb"
              />
            </div>
            <div className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft">
              <img
                className="mt-4 max-h-[451px] max-w-[436px]"
                src="/assets/images/doctor-girl-2.jpg"
                alt="About Thumb"
              />
            </div>
          </div>
          <div className="col-lg-7 cs_pl_30">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_title_up cs_accent_color_v4 cs_semibold cs_fs_24">
                Top 10 en Suisse
              </h3>
              <h2 className="cs_section_title cs_semibold cs_fs_45 mb-0">
                . Dirigé par le professeur <br /> d'injections Dr. Tenorio
              </h2>
            </div>
            <div className="cs_height_17 cs_height_lg_10" />
            <p className="cs_about_text cs_type_2">
              Notre équipe est formée par notre médecin suisse diplômé, Xavier
              Tenorio. Il est expert en chirurgie plastique, esthétique et
              reconstructive (FMH), formateur international et professeur
              d’injections.
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              Vous aurez l’occasion de faire l’expérience d’un scanner VISIA qui
              vous donnera des indications sur votre plan de traitement final.
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              Dans notre clinique, le Dr Yulia Raspertova, médecin esthétique et
              dermatologue, et le Dr Monia Khedir, également médecin esthétique,
              effectueront les traitements.
            </p>
            <p className="cs_about_text cs_type_2">
              Ils seront heureux de vous aider et de répondre à toutes vos
              questions.
            </p>
            <p
              style={{ fontWeight: "bold" }}
              className="cs_about_text cs_type_2"
            >
              Pour prendre un rendez-vous, veuillez cliquer sur le lien
              ci-dessous
            </p>
            <a href="#service" className="links-div-home-page-a uppercase">
              Réservation
            </a>
            <p
              style={{ fontWeight: "bold", marginTop: 20 }}
              className="cs_about_text cs_type_2"
            >
              Ou appelez-nous au numéro suivant:
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
              Nous serons heureux de vous accueillir à Aesthetics Clinic!
            </p>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
}
