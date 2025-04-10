import Image from "next/image";
import Link from "next/link";

export default function SwiperSection() {
  return (
    <div className="gallery-container !relative">
      <p
        className="cs_about_text cs_type_2 galerie-title
      max-custom-semilg:!relative max-custom-semilg:!rotate-360 max-custom-semilg:!text-[44px] 
      max-custom-semilg:!left-auto max-custom-semilg:!text-start max-custom-semilg:w-full"
      >
        Galerie
      </p>
      <div
        className="swiper
      max-custom-semilg:!w-full !max-w-[620px] !max-h-[380px] max-custom-semilg:!mt-5"
      >
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <Image
              style={{ width: "100%" }}
              src="/assets/images/sample-img.png"
              width={620}
              height={379}
              alt="Image 1"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="swiper-slide">
            <Image
              style={{ width: "100%" }}
              src="/assets/images/sample-img.png"
              width={620}
              height={379}
              alt="Image 1"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
      {/* Navigation buttons */}
      <div
        className="custom-navigation 
        max-custom-semilg:!right-auto
        max-custom-semilg:!px-[15px]
        max-custom-semilg:!relative max-custom-semilg:!transform max-custom-semilg:!translate-y-0
        max-custom-semilg:!flex max-custom-semilg:!justify-between
        max-custom-semilg:!w-full"
      >
        <div
          className="nav-fraction
        max-custom-semilg:!relative max-custom-semilg:!mt-[10px]"
        >
          <h3 className="current" />
          <h3
            className="fraction-dash
          max-custom-semilg:!mt-[15px]"
          >
            /
          </h3>
          <h4
            className="total
          max-custom-semilg:!mt-[15px]"
          />
        </div>
        <div className="custom-btn-container">
          <button type="button" className="custom-prev-btn">
            <Image
              style={{ maxWidth: 50, maxHeight: 50 }}
              src="/assets/images/arrow-right.svg"
              width={13}
              height={13}
              alt="Right arrow"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
          <button type="button" className="custom-next-btn">
            <Image
              style={{ maxWidth: 50, maxHeight: 50 }}
              src="/assets/images/arrow-right.svg"
              width={13}
              height={13}
              alt="Right arrow"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        </div>
      </div>
      <div className="info-text">
        Réservez une consultation 3D GRATUITE et nous vous montrerons les
        résultats de nos <br /> clients qui sont proches de votre cas personnel
      </div>
      <div className="buttons
      max-custom-sm:!flex-col max-custom-semilg:!w-full">
        <button className="button
        max-custom-semilg:!w-full max-custom-semilg:!max-w-[300px]">RDV EN LIGNE</button>
        <div className="pipeline
        max-custom-sm:!hidden" />
        <div>
          <p className="cs_about_text cs_type_2 ">
            Remplissez le formulaire pour obtenir plus de <br /> photos avant et
            après
          </p>
          <Link href="#form-a" className="button uppercase">
            Aller au Formulaire
          </Link>
          <i className="fa-solid fa-arrow-down" />
        </div>
      </div>
      <div>
        <Image
          className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full
          max-custom-semilg:px-[10px]"
          src="/assets/images/slider_bg.svg"
          width={800}
          height={159}
          alt="Before and After Text"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
