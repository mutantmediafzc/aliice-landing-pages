export default function HowToBookSection() {
  return (
    <section
      style={{ background: "#f3f2f0" }}
      className="cs_about cs_style_1"
      id="about"
    >
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40 ">
          <div className="col-lg-5">
            <div className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft">
              <img
                style={{ marginBottom: 20 }}
                src="assets/images/image-three.jpg"
                alt="About Thumb"
              />
              <img src="assets/images/image-four.jpg" alt="About Thumb" />
            </div>
          </div>
          <div className="col-lg-7 cs_pl_30">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_title_up cs_accent_color_v4 cs_semibold cs_fs_24">
                Comment réserver une consultation en ligne ?
              </h3>
              <h2 className="cs_section_title cs_semibold cs_fs_45 mb-0">
                Choisissez la ville où vous souhaitez rencontrer un expert.
              </h2>
            </div>
            <div className="cs_height_17 cs_height_lg_10" />
            <p className="cs_about_text cs_type_2">
              Nous vous offrons le meilleur environnement <br />
              luxueux et convivial à
            </p>
            <div className="links-div-home-page">
              <a href="#" className="places">
                GENEVA
              </a>
              <a href="#" className="places">
                MONTREUX
              </a>
              <a href="#" className="places">
                GSTAAD
              </a>
            </div>
            <p className="cs_about_text cs_type_2 click-choose-p">
              — Cliquez sur
              <span style={{ fontWeight: 600 }}>«CONSEIL ESTHÉTIQUE»</span>
            </p>
            <p className="cs_about_text cs_type_2 click-choose-p">
              — Choisissez{" "}
              <span style={{ fontWeight: 600 }}>
                «SIMULATION 3D CHIRURGIE PLASTIQUE/Offerte»
              </span>
            </p>
            <p className="cs_about_text cs_type_2 click-choose-p">
              — Choisissez une date et une heure et obtenez une confirmation
            </p>
            {/* PUT HERE */}
            <img
              className="book-appointment"
              src="assets/images/book-appointment.png"
              alt="Appointment steps"
            />
            <div className="cs_author_card cs_version_4 position-relative">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: 20,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                className="cs_hero_btn_group"
              >
                <a
                  href="#service"
                  className="cs_btn cs_style_1 cs_accent_bg_v4 cs_white_color cs_fs_18 cs_medium"
                >
                  RDV EN LIGNE
                </a>
                <div className="pipeline" />
                <div>
                  <p
                    style={{ margin: "0 0 10px 0" }}
                    className="cs_about_text cs_type_2"
                  >
                    Remplissez le formulaire et nous vous contacterons <br /> pour choisir un moment qui vous convient


                  </p>
                  <a href="#form-a" className="links-div-home-page-a uppercase">
                  Aller au Formulaire
                  </a>
                  <i className="fa-solid fa-arrow-up" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
}
