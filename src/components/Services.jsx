import React from 'react'

const services = [
  {
    img: '/img2/suyalitimi3.jpg',
    alt: 'Su yalıtımı uygulaması',
    badge: 'Su Yalıtımı',
    title: 'Polyurea Su Yalıtımı',
    text: 'Çatı, teras, temel ve su depolarında modern polyurea sistemleriyle su yalıtımı yapıyoruz. Esnek, dayanıklı ve uzun ömürlü çözümlerle yapınızı nem ve sızıntılara karşı koruyoruz.',
  },
  {
    img: '/img2/cati-resmi.jpg',
    alt: 'Isı yalıtımı uygulaması',
    badge: 'Isı Yalıtımı',
    title: 'Poliüretan Köpük Yalıtımı',
    text: 'Binaların dış cephe, çatı ve duvarlarında poliüretan köpük ile enerji tasarrufu sağlayan ısı yalıtım uygulamaları yapıyoruz. Konforlu ve ekonomik yaşam alanları oluşturuyoruz.',
  },
]

export default function Services() {
  return (
    <section id="hizmetler" className="py-5 services-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Hizmetlerimiz</span>
          <h2 className="section-title">Profesyonel Yalıtım Çözümleri</h2>
          <p className="section-subtitle mt-2">
            Su ve ısı yalıtımında en güncel teknolojilerle, anahtar teslim uygulama hizmeti sunuyoruz.
          </p>
        </div>
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-lg-6" key={s.title}>
              <div className="service-card">
                <div className="card-img-wrap">
                  <span className="card-img-overlay-badge">{s.badge}</span>
                  <img src={s.img} alt={s.alt} loading="lazy" decoding="async" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{s.title}</h5>
                  <p className="card-text text-muted mb-0">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
