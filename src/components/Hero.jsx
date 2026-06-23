import React from "react";

const slides = [
  {
    src: "/img2/yandan1.jpg",
    alt: "Su geçirmez çatı uygulaması",
    title: "Su Geçirmez Çatılar",
    subtitle:
      "Modern polyurea sistemleri ile teras, çatı ve temellerde tam su yalıtımı.",
  },
  {
    src: "/img2/guzel1.jpg",
    alt: "Polyurea su yalıtımı uygulaması",
    title: "Güvenilir İzolasyon Çözümleri",
    subtitle:
      "Profesyonel ekip, kaliteli malzeme ve uzun ömürlü yalıtım ile binalarınızı koruyoruz.",
  },

  {
    src: "/img2/anasayfa2.jpg",
    alt: "Isı yalıtımlı çatı uygulaması",
    title: "Isı Yalıtımlı Çatılar",
    subtitle:
      "Poliüretan köpük ile enerji tasarrufu sağlayan, konforlu yaşam alanları.",
  },
];

export default function Hero() {
  return (
    <header
      id="heroCarousel"
      className="carousel slide hero-section"
      data-bs-ride="carousel"
      data-bs-interval="5500"
    >
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slayt ${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div className={`carousel-item${i === 0 ? " active" : ""}`} key={i}>
            <img
              src={slide.src}
              className="d-block w-100 hero-img"
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="carousel-caption hero-caption d-none d-md-block">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <div className="hero-actions">
                <a href="#hizmetler" className="btn btn-accent">
                  Hizmetlerimiz
                </a>
                <a href="tel:+905309235833" className="btn btn-outline-accent">
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Önceki</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Sonraki</span>
      </button>
    </header>
  );
}
