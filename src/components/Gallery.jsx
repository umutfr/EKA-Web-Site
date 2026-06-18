import React, { useState, useEffect, useCallback } from "react";

const polyureaPhotos = [
  "duz1",
  "duz2",
  "duz3",
  "duz4",
  "duz6",
  "duz7",
  "duz8",
  "duz9",
  "duz10",
  "duz11",
  "duz12",
  "duz13",
  "duz14",
  "duz15",
  "duz16",
  "duz17",
  "duz18",
  "duz22",
  "duz23",
].map((name) => ({
  src: `/img2/${name}.jpg`,
  alt: `Polyurea uygulama ${name}`,
}));

const puPhotos = [
  { src: "/img2/duz19.jpg", alt: "Poliüretan köpük uygulama 1" },
  { src: "/img2/duz20.jpg", alt: "Poliüretan köpük uygulama 2" },
  { src: "/img2/duz21.jpg", alt: "Poliüretan köpük uygulama 3" },
  { src: "/img2/hakkimizda2.jpg", alt: "Poliüretan köpük uygulama 4" },
];

const polyureaVideos = ["video1", "video3", "video4", "video5", "video7"].map(
  (v) => `/videos/${v}.mp4`,
);
const puVideos = ["video51", "video57"].map((v) => `/videos/${v}.mp4`);

function Lightbox({ src, onClose }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="lightbox-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Kapat">
        &times;
      </button>
      <img
        src={src}
        alt="Büyütülmüş görsel"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function PhotoGrid({ photos, onOpen }) {
  return (
    <div className="row g-3">
      {photos.map((p) => (
        <div className="col-lg-3 col-md-4 col-6" key={p.src}>
          <img
            src={p.src}
            className="gallery-img"
            alt={p.alt}
            loading="lazy"
            decoding="async"
            onClick={() => onOpen(p.src)}
          />
        </div>
      ))}
    </div>
  );
}

function VideoGrid({ videos }) {
  return (
    <div className="video-grid">
      {videos.map((src) => (
        <div className="video-card" key={src}>
          <video controls preload="metadata" playsInline>
            <source src={src} type="video/mp4" />
          </video>
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [activeTab, setActiveTab] = useState("photos");

  // Ensure videos don't appear under multiple category headings
  const polyureaVideosList = polyureaVideos;
  const puVideosList = puVideos.filter((v) => !polyureaVideosList.includes(v));

  return (
    <section id="galeri" className="py-5 gallery-section">
      <div className="container">
        <div className="text-center mb-4">
          <span className="section-badge">Galeri</span>
          <h2 className="section-title">Projelerimizden Kareler</h2>
          <p className="section-subtitle mt-2">
            Gerçekleştirdiğimiz polyurea ve poliüretan uygulamalarından fotoğraf
            ve videolar.
          </p>
        </div>

        <div className="gallery-tabs">
          <button
            type="button"
            className={`gallery-tab${activeTab === "photos" ? " active" : ""}`}
            onClick={() => setActiveTab("photos")}
          >
            Fotoğraflarr
          </button>
          <button
            type="button"
            className={`gallery-tab${activeTab === "videos" ? " active" : ""}`}
            onClick={() => setActiveTab("videos")}
          >
            Videolar
          </button>
        </div>

        {activeTab === "photos" && (
          <>
            <h3 className="gallery-category-title">Polyurea Su Yalıtımı</h3>
            <PhotoGrid photos={polyureaPhotos} onOpen={setLightboxSrc} />

            <h3 className="gallery-category-title mt-5">
              Poliüretan Köpük Çatı Uygulaması
            </h3>
            <PhotoGrid photos={puPhotos} onOpen={setLightboxSrc} />
          </>
        )}

        {activeTab === "videos" && (
          <>
            <h3 className="gallery-category-title">Polyurea Su Yalıtımı</h3>
            <VideoGrid videos={polyureaVideosList} />

            <h3 className="gallery-category-title mt-5">
              Poliüretan Köpük Çatı Uygulaması
            </h3>
            <VideoGrid videos={puVideosList} />
          </>
        )}
      </div>

      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </section>
  );
}
