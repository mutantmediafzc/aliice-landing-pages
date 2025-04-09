export default function FirstSection() {
  return (
    <section
      style={{ background: "#f3f2f0", position: "relative" }}
      className="cs_about cs_style_1
      max-custom-sm:!px-[26px]
      max-custom-md:!px-[12px]"
      id="about"
    >
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="cs_height_120 cs_height_lg_80" />
      <div className="container
      max-custom-md:!max-w-none">
        <div className="row cs_gap_y_40 
        max-custom-sm:!flex max-custom-md:!flex-col-reverse max-custom-sm:!mt-8">
          <div className="col-lg-5
          max-custom-md:!flex max-custom-md:!justify-center">
            <div className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft
            max-custom-md:!max-w-[436px]">
              <img src="/assets/images/image-one.jpg" alt="About Thumb" />
            </div>
          </div>
          <div className="col-lg-7 cs_pl_30">
            <div className="cs_section_heading cs_style_1">
              <h3 className="cs_section_title_up cs_accent_color_v4 cs_semibold cs_fs_24
              max-custom-lg:!text-[44px]">
                Visit Aesthetics Clinic for a free consultation
              </h3>
              <h2 className="cs_section_title cs_semibold cs_fs_45 mb-0
              max-custom-lg:!text-[26px]">
                and find out what is feasible!
              </h2>
            </div>
            <div className="cs_height_17 cs_height_lg_10" />
            <p className="cs_about_text cs_type_2">
              — Find the best size for you
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              — Visualize possible results in 3D
            </p>
            <p className="cs_about_text cs_type_2 pl-0">
              — Ask all your questions
            </p>
            <p className="cs_about_text cs_type_2">
              At the end of the consultation, we will provide you with a{" "}
              <span style={{ fontWeight: "bold" }}>
                Personal Quote that outlines the costs of your project.
              </span>
            </p>
            <div className="cs_author_card cs_version_4 position-relative">
              <div
                className="!flex !justify-between !items-center !w-full !gap-5 cs_hero_btn_group
                max-custom-sm:!flex-col max-custom-sm:!justify-center"
              >
                <a
                  href="#service"
                  className="cs_btn cs_style_1 cs_accent_bg_v4 cs_white_color cs_fs_18 cs_medium
                  max-custom-sm:!w-full"
                >
                  ONLINE BOOKING
                </a>
                <div className="pipeline
                max-custom-sm:!hidden" />
                <div className="max-custom-sm:!flex max-custom-sm:!flex-col max-custom-sm:!justify-center max-custom-sm:!items-center">
                  <p
                    style={{ margin: "0 0 10px 0" }}
                    className="cs_about_text cs_type_2
                    max-custom-sm:!text-center max-custom-sm:!mt-0"
                  >
                    Fill out the form and we will call you back to choose <br />{" "}
                    a convenient time
                  </p>
                  <a href="#form-a" className="links-div-home-page-a
                  max-custom-sm:!p-0">
                    GO TO FORM
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
