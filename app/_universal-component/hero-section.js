"use client";

import { useRef } from "react";

export default function HeroSection({
  title,
  mainTitle,
  subtitle,
  location,
  btnText,
  video,
}) {
  const videoRef = useRef(null);

  function handlePlayClick(event) {
    event.preventDefault();
  
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
        videoRef.current.play();
      } else if (videoRef.current.muted) {
        videoRef.current.muted = false;
      } else {
        videoRef.current.pause();
      }
    }
  }

  return (
    <div
      className="cs_hero cs_style_6 cs_accent_v4_light cs_creative_dental cs_color_bg pb-90
      max-custom-sm:!pt-8 max-custom-sm:!pb-0 max-custom-sm:!px-3.5"
      id="home"
      style={{ backgroundColor: "#2c2c2c" }}
    >
      <div
        className="container
      max-custom-md:!max-w-none"
      >
        <div
          style={{ position: "relative" }}
          className="cs_hero_in
        max-custom-md:!flex max-custom-md:!flex-row max-custom-sm:!flex-col"
        >
          <div
            className="cs_hero_text
          max-custom-md:!w-full"
          >
            <h3
              className="cs_hero_mini_title cs_accent_color_v4 cs_fs_24 cs_semibold
            max-custom-lg:!text-[26px]"
            >
              {title}
            </h3>
            <h1
              className="cs_hero_title cs_fs_60 cs_semibold
            max-custom-lg:!text-[46px]"
            >
              {mainTitle}
            </h1>
            <p
              className="cs_hero_subtitle
            max-custom-lg:!text-[23px]"
            >
              {subtitle}
            </p>
            <p className="cs_hero_subtitle">{location}</p>
            <div className="cs_hero_btn_group">
              <a
                href="https://aliice.space/doctors"
                className="cs_btn cs_style_1 cs_accent_bg_v4 cs_white_color cs_fs_18 cs_medium uppercase
                max-custom-sm:!w-full"
              >
                {btnText}
              </a>
            </div>
          </div>
          <div
            className="w-full max-w-[830px] cs_hero_img
          max-custom-sm:!relative max-custom-sm:!top-10 max-custom-sm:!max-w-none
          max-custom-md:!max-w-[414px]
          max-custom-lg:!max-w-[550px]"
          >
            <video
              id="heroVideo"
              ref={videoRef}
              src={video}
              alt="Hero Image"
              autoPlay
              muted
              playsInline
              controls=""
            />
            <button
              type="button"
              className="cs_play_btn cs_style_1"
              id="playButton"
              onClick={handlePlayClick}
            >
              <svg
                width={49}
                height={49}
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_485_795)">
                  <path
                    d="M24.0625 48.125C17.6353 48.125 11.5925 45.622 7.04772 41.0773C2.50296 36.5325 0 30.4897 0 24.0625C0 17.6353 2.50296 11.5925 7.04772 7.04772C11.5925 2.50296 17.6353 0 24.0625 0C30.4897 0 36.5325 2.50296 41.0773 7.04772C45.622 11.5925 48.125 17.6353 48.125 24.0625C48.125 28.8121 46.7155 33.4314 44.048 37.4207C43.4712 38.2839 42.3036 38.5156 41.4404 37.9388C40.5776 37.3616 40.3455 36.194 40.9227 35.3312C43.1749 31.962 44.3652 28.0657 44.3652 24.0625C44.3652 12.8677 35.2573 3.75977 24.0625 3.75977C12.8677 3.75977 3.75977 12.8677 3.75977 24.0625C3.75977 35.2573 12.8677 44.3652 24.0625 44.3652C27.7756 44.3652 31.4076 43.3541 34.5652 41.4415C35.453 40.9036 36.6089 41.1874 37.1471 42.0756C37.685 42.9634 37.4012 44.1196 36.5131 44.6571C32.768 46.9258 28.4626 48.125 24.0625 48.125ZM22.0189 32.9255L31.3904 27.4962C32.6284 26.7788 33.3679 25.4952 33.3679 24.0625C33.3679 22.6298 32.6284 21.3462 31.39 20.6288L22.0189 15.1995C20.7797 14.4817 19.2989 14.4799 18.0583 15.1951C16.815 15.9114 16.073 17.1969 16.073 18.6332V29.4918C16.073 30.9281 16.815 32.2136 18.0583 32.9299C18.6777 33.2868 19.3562 33.4649 20.0347 33.4649C20.7162 33.4652 21.398 33.2853 22.0189 32.9255ZM20.1342 18.4526L29.5053 23.8819C29.5336 23.8984 29.6082 23.9413 29.6082 24.0625C29.6082 24.1837 29.5336 24.2266 29.5053 24.2431L20.1342 29.6724C20.1045 29.6893 20.0351 29.7297 19.9359 29.6724C19.8328 29.6129 19.8328 29.5281 19.8328 29.4918V18.6332C19.8328 18.5969 19.8328 18.5121 19.9359 18.4526C19.9741 18.4306 20.0079 18.4232 20.0365 18.4232C20.0824 18.4229 20.1158 18.4423 20.1342 18.4526Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_485_795">
                    <rect width="48.125" height="48.125" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
