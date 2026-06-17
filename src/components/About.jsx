import React from 'react'

const stats = [
  { number: '15+', label: 'Yıllık Tecrübe' },
  { number: '500+', label: 'Tamamlanan Proje' },
  { number: '%100', label: 'Müşteri Odaklı' },
]

export default function About() {
  return (
    <section id="hakkimizda" className="py-5 about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 fade-up">
            <div className="about-image-wrap">
              <img
                src="/img2/hakkimizda.jpg"
                alt="EKAK izolasyon çalışması"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="col-lg-6 fade-up">
            <span className="section-badge">Hakkımızda</span>
            <h2 className="section-title mb-3">Endüstriyel Yalıtımda Güvenilir Çözüm Ortağınız</h2>
            <p className="text-muted mb-3">
              EKAK Endüstriyel Yalıtım, uzun yıllardır izolasyon ve yalıtım alanında faaliyet
              göstermektedir. Polyurea su yalıtımı ve poliüretan köpük ısı yalıtımı uygulamalarında
              sektörün önde gelen markalarıyla çalışıyoruz.
            </p>
            <p className="text-muted mb-0">
              Kaliteli hizmet anlayışımız, uzman mühendis kadromuz ve deneyimli uygulama ekibimiz ile
              binalarınızı güvenle yalıtıyor, uzun ömürlü ve garantili çözümler sunuyoruz.
            </p>
            <div className="about-stats">
              {stats.map((s) => (
                <div className="stat-item" key={s.label}>
                  <span className="stat-number">{s.number}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
