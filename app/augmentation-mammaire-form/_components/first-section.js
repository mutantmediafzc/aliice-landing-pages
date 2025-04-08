export default function FirstSection() {
  return (
    <section
      style={{ background: "#f3f2f0", position: "relative" }}
      className="cs_about cs_style_1"
      id="about"
    >
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40 ">
          <div className="col-lg-5">
            <div className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft">
              <img src="/assets/images/image-one.jpg" alt="About Thumb" />
            </div>
          </div>
          <div className="col-lg-7 cs_pl_30">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_title_up cs_accent_color_v4 cs_semibold cs_fs_24">
                Visitez l’Aesthetics Clinic pour une consultation gratuite
              </h3>
              <h2 className="cs_section_title cs_semibold cs_fs_45 mb-0">
                et trouvons ce qui est <br />
                réalisable !
              </h2>
            </div>
            <div className="cs_height_17 cs_height_lg_10" />
            <p className="cs_about_text cs_type_2">
              — Trouvez le meilleur taille pour vous
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              — Visualisez les résultats possibles en 3D
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              — Posez toutes vos questions
            </p>
            <p className="cs_about_text cs_type_2">
              À la fin de la consultation, nous vous fournirons un
              <span style={{ fontWeight: "bold" }}>
                devis personnel qui détaille les coûts de votre projet
              </span>
            </p>
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
                  Réservation
                </a>
                <div className="pipeline" />
                <div>
                  <p
                    style={{ margin: "0 0 10px 0" }}
                    className="cs_about_text cs_type_2"
                  >
                    Remplissez le formulaire et nous vous rappellerons <br />{" "}
                    pour choisir un moment qui vous convient
                  </p>
                  <a href="#form-a" className="links-div-home-page-a">
                    Aller au Formulaire
                  </a>
                  <i className="fa-solid fa-arrow-down" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
