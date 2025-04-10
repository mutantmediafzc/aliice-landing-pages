import Image from "next/image";
import Link from "next/link";

export default function FirstSection({
  img,
  mainTitle,
  subTitle,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  btnText,
  goToFormDescription,
  goToFormText,
}) {
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
      <div
        className="container
        max-custom-md:!max-w-none"
      >
        <div
          className="row cs_gap_y_40 
          max-custom-sm:!flex max-custom-md:!flex-col-reverse max-custom-sm:!mt-8"
        >
          <div
            className="col-lg-5
            max-custom-md:!flex max-custom-md:!justify-center"
          >
            <div
              className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft
              max-custom-md:!max-w-[436px] !w-full"
            >
              <Image
                src={img}
                width={526}
                height={519}
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
                max-custom-lg:!text-[44px]"
              >
                {mainTitle}
              </h3>
              <h2
                className="cs_section_title cs_semibold cs_fs_45 mb-0
                max-custom-lg:!text-[26px]"
              >
                {subTitle}
              </h2>
            </div>
            <div className="cs_height_17 cs_height_lg_10" />
            <p className="cs_about_text cs_type_2">{paragraphOne}</p>
            <p className="cs_about_text cs_type_2 pl-0">{paragraphTwo}</p>
            <p className="cs_about_text cs_type_2 pl-0">{paragraphThree}</p>
            <p className="cs_about_text cs_type_2">{paragraphFour}</p>
            <div className="cs_author_card cs_version_4 position-relative">
              <div
                className="!flex !justify-between !items-center !w-full !gap-5 cs_hero_btn_group
                  max-custom-sm:!flex-col max-custom-sm:!justify-center"
              >
                <Link
                  href="#service"
                  className="cs_btn cs_style_1 cs_accent_bg_v4 cs_white_color cs_fs_18 cs_medium uppercase
                    max-custom-sm:!w-full"
                >
                  {btnText}
                </Link>
                <div
                  className="pipeline
                  max-custom-sm:!hidden"
                />
                <div className="max-custom-sm:!flex max-custom-sm:!flex-col max-custom-sm:!justify-center max-custom-sm:!items-center">
                  <p
                    style={{ margin: "0 0 10px 0" }}
                    className="cs_about_text cs_type_2
                      max-custom-sm:!text-center max-custom-sm:!mt-0"
                  >
                    {goToFormDescription}
                  </p>
                  <a
                    href="#form-a"
                    className="links-div-home-page-a uppercase
                    max-custom-sm:!p-0"
                  >
                    {goToFormText}
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
