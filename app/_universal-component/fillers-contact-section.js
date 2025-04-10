import Image from "next/image";

export default function FillersContactSection({
  imgOne,
  imgTwo,
  title,
  subTitle,
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  appointmentText,
  btnText,
  callText,
  greetings,
}) {
  return (
    <section
      className="cs_about cs_style_1 bg-custom-white
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
        max-custom-md:!flex max-custom-md:!flex-col-reverse"
        >
          <div className="col-lg-5 flex flex-col items-center">
            <div
              className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft
            !max-w-[436px] !max-h-[451px] !h-full !w-full"
            >
              <Image
                className="!max-h-[451px] !max-w-[436px] !w-full !h-full"
                width={436}
                height={451}
                src={imgOne}
                alt="About Thumb"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div
              className="cs_about_thumb cs_version_4 position-relative wow fadeInLeft
            !max-w-[436px] !max-h-[451px] !h-full !w-full"
            >
              <Image
                className="mt-4 !max-h-[451px] !max-w-[436px] !w-full !h-full"
                width={436}
                height={451}
                src={imgTwo}
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
                {title}
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
            <p
              style={{ fontWeight: "bold" }}
              className="cs_about_text cs_type_2"
            >
              {appointmentText}
            </p>
            <a
              href="#service"
              className="links-div-home-page-a uppercase
            max-custom-sm:!w-full max-custom-sm:!block max-custom-sm:!max-w-none"
            >
              {btnText}
            </a>
            <p
              style={{ fontWeight: "bold", marginTop: 20 }}
              className="cs_about_text cs_type_2"
            >
              {callText}
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
            <p className="cs_about_text cs_type_2">{greetings}</p>
          </div>
        </div>
      </div>
      <div
        className="cs_height_120 cs_height_lg_80
      max-custom-sm:!hidden"
      />
    </section>
  );
}
