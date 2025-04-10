import Image from "next/image";

export default function BenefitSection() {
  return (
    <section
      style={{ background: "#f3f2f0" }}
      className="cs_about cs_style_1 max-custom-semilg:!px-[20px]"
      id="about"
    >
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="cs_height_120 cs_height_lg_80 max-custom-semilg:!hidden" />
      <div
        className="container
      max-custom-semilg:!max-w-[700px]"
      >
        <div
          className="row cs_gap_y_40 
        max-custom-semilg:!flex max-custom-semilg:!flex-col-reverse"
        >
          <div
            className="col-lg-5
          max-custom-semilg:!flex max-custom-semilg:!justify-center"
          >
            <div
              className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft
            max-custom-semilg:!max-w-[436px] !w-full"
            >
              <Image
                src="/assets/images/image-two.jpg"
                width={526}
                height={616}
                className="!w-full"
                alt="About Thumb"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className="col-lg-7 cs_pl_30">
            <div className="cs_section_heading cs_style_1">
              <h3
                className="cs_section_title_up cs_accent_color_v4 cs_semibold cs_fs_24
              max-custom-semilg:!text-[44px]"
              >
                Bénéficiez du fonds <br />
                Medcapital
              </h3>
              <h2
                className="cs_section_title cs_semibold cs_fs_45 mb-0
              max-custom-semilg:!text-[26px]"
              >
                Vous pouvez obtenir un financement <br />
                jusqu&apos;à 5 000 CHF.
              </h2>
            </div>
            <div className="cs_height_17 cs_height_lg_10" />
            <p className="cs_about_text cs_type_2">
              Nous vous invitions à réserver une <br />
              <span
                style={{
                  fontWeight: 600,
                  textDecoration: "underline",
                  textUnderlineOffset: 10,
                }}
              >
                <a href="#">CONSULTATION 3D GRATUITE.</a>
              </span>
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              Après la consultation, nous pouvons vous présenter un devis
              personnel.
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              Cela vous aidera à concrétiser votre projet en vous donnant une
              compréhension claire de la portée et de l’investissement requis.
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
                <div>
                  <p
                    style={{ margin: "0 0 10px 0" }}
                    className="cs_about_text cs_type_2"
                  >
                    Remplissez le formulaire de contact et nous vous <br />{" "}
                    enverrons notre prix commun.
                  </p>
                  <a
                    href="#form-a"
                    className="cs_btn cs_style_1 cs_accent_bg_v4 cs_white_color cs_fs_18 cs_medium uppercase"
                  >
                    Aller au Formulaire
                  </a>
                  <i className="fa-solid fa-arrow-down" />
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
