import Image from "next/image";

export default function HowToBookSection() {
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
          max-custom-semilg:!flex max-custom-semilg:!flex-col max-custom-semilg:!items-center"
          >
            <div
              className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft
            max-custom-semilg:!max-w-[436px] !w-full"
            >
              <Image
                style={{ marginBottom: 20 }}
                src="/assets/images/image-three.jpg"
                className="!w-full"
                width={526}
                height={330}
                alt="About Thumb"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <Image
                className="max-custom-semilg:!max-w-[436px] !w-full"
                src="/assets/images/image-four.jpg"
                width={526}
                height={275}
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
                Comment réserver une consultation en ligne ?
              </h3>
              <h2
                className="cs_section_title cs_semibold cs_fs_45 mb-0
              max-custom-semilg:!text-[26px]"
              >
                Choisissez la ville où vous souhaitez rencontrer un expert.
              </h2>
            </div>
            <div className="cs_height_17 cs_height_lg_10" />
            <p className="cs_about_text cs_type_2">
              Nous vous offrons le meilleur environnement <br />
              luxueux et convivial à
            </p>
            <div
              className="links-div-home-page
            max-custom-semilg:!gap-[10px]"
            >
              <a href="#" className="places max-custom-semilg:!flex-1">
                GENEVA
              </a>
              <a href="#" className="places max-custom-semilg:!flex-1">
                MONTREUX
              </a>
              <a href="#" className="places max-custom-semilg:!flex-1">
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
            <p className="cs_about_text cs_type_2 click-choose-p !font-light">
              — Choisissez une date et une heure et obtenez une confirmation
            </p>
            {/* PUT HERE */}
            <Image
              className="book-appointment"
              src="/assets/images/book-appointment.png"
              width={403}
              height={473}
              alt="Appointment steps"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="cs_author_card cs_version_4 position-relative">
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: 20,
                }}
                className="cs_hero_btn_group !justify-between !items-center
                max-custom-md:!flex-col"
              >
                <a
                  href="https://aliice.space/doctors"
                  className="cs_btn cs_style_1 cs_accent_bg_v4 cs_white_color cs_fs_18 cs_medium
                  max-custom-semilg:!w-full max-custom-semilg:!max-w-[300px]"
                >
                  RDV EN LIGNE
                </a>
                <div className="pipeline max-custom-md:!hidden" />
                <div className="max-custom-semilg:!text-center">
                  <p
                    style={{ margin: "0 0 10px 0" }}
                    className="cs_about_text cs_type_2
                    max-custom-semilg:!mt-[20px]"
                  >
                    Remplissez le formulaire et nous vous contacterons <br />{" "}
                    pour choisir un moment qui vous convient
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
