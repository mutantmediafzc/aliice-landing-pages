export default function SwiperSection() {
  return (
    <div className="gallery-container">
      <p className="cs_about_text cs_type_2 galerie-title">Galerie</p>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img
              style={{ width: "100%" }}
              src="assets/images/sample-img.png"
              alt="Image 1"
            />
          </div>
          <div className="swiper-slide">
            <img
              style={{ width: "100%" }}
              src="assets/images/sample-img.png"
              alt="Image 1"
            />
          </div>
        </div>
      </div>
      {/* Navigation buttons */}
      <div className="custom-navigation">
        <div className="nav-fraction">
          <h3 className="current" />
          <h3 className="fraction-dash">/</h3>
          <h4 className="total" />
        </div>
        <div className="custom-btn-container">
          <button type="button" className="custom-prev-btn">
            <img
              style={{ maxWidth: 50, maxHeight: 50 }}
              src="assets/images/arrow-right.svg"
              alt="Right arrow"
            />
          </button>
          <button type="button" className="custom-next-btn">
            <img
              style={{ maxWidth: 50, maxHeight: 50 }}
              src="assets/images/arrow-right.svg"
              alt="Right arrow"
            />
          </button>
        </div>
      </div>
      <div className="info-text">
        Réservez une consultation 3D GRATUITE et nous vous montrerons les
        résultats de nos <br /> clients qui sont proches de votre cas personnel
      </div>
      <div className="buttons">
        <button className="button">RDV EN LIGNE</button>
        <div className="pipeline" />
        <div>
          <p className="cs_about_text cs_type_2 ">
            Remplissez le formulaire pour obtenir plus de <br /> photos avant et
            après
          </p>
          <a href="#form-a" className="button">
            Aller au Formulaire
          </a>
          <i className="fa-solid fa-arrow-down" />
        </div>
      </div>
    </div>
  );
}
