export default function ContactSection() {
  return (
    <section className="cs_about cs_style_1" id="about">
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container">
        <div className="row cs_gap_y_40 ">
          <div className="col-lg-5">
            <div className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft">
              <img src="/assets/images/image-five.jpg" alt="About Thumb" />
            </div>
          </div>
          <div className="col-lg-7 cs_pl_30">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_title_up cs_accent_color_v4 cs_semibold cs_fs_24">
                Top 10 en Suisse
              </h3>
              <h2 className="cs_section_title cs_semibold cs_fs_45 mb-0">
                . Plus de 2000 cas réussis
              </h2>
              <h2 className="cs_section_title cs_semibold cs_fs_45 mb-0">
                . Bloc opératoire privé
              </h2>
            </div>
            <div className="cs_height_17 cs_height_lg_10" />
            <p className="cs_about_text cs_type_2">
              La chirurgie est réalisée par notre médecin suisse certifié, Dr.
              Xavier Tenorio.
              <br /> <br />
              Il est un expert en chirurgie plastique, esthétique et
              reconstructrice (FMH) et formateur international, et compte plus
              de 2000 cas réussis.
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              Lors de son examen, vous aurez la possibilité de vivre une
              visualisation en 3D qui vous donnera un aperçu des résultats
              finaux.
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              La chirurgie sera réalisée dans son propre bloc opératoire privé,
              ce qui vous offre un avantage en termes de temps, de
              confidentialité et de confort. Dans notre clinique, vous
              disposerez d’une salle d’opération rien que pour vous.
            </p>
            <p className="cs_about_text cs_type_2">
            Le Dr Tenorio sera ravi de vous aider et de répondre à toutes vos questions.
            </p>
            <p
              style={{ fontWeight: "bold" }}
              className="cs_about_text cs_type_2"
            >
              Vous pouvez prendre rendez-vous avec Dr.Tenorio en suivant le lien ci-dessous
            </p>
            <a href="#service" className="links-div-home-page-a">
            RDV en ligne
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
            Nous serions ravis de vous accueillir à l´Aesthetics clinic!
            </p>
            <div className="note-div-home">
              <p className="cs_about_text cs_type_2">
                {" "}
                <span>NOTE: </span> La consultation avec le Dr Tenorio coûte 150 CHF
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80" />
    </section>
  );
}
