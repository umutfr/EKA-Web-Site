import React from 'react'

const reasons = [
  {
    icon: '🛡️',
    title: 'Uzman Kadro',
    text: 'Yılların tecrübesine sahip mühendis ve uygulama ekibiyle her projede profesyonel çözümler sunuyoruz.',
  },
  {
    icon: '🏗️',
    title: 'Kaliteli Malzeme',
    text: 'Onduline, Mapei, QIS ve Izokem gibi uluslararası markalarla garantili uygulamalar yapıyoruz.',
  },
  {
    icon: '🤝',
    title: 'Müşteri Memnuniyeti',
    text: 'Her projede müşteri memnuniyetini ön planda tutuyor, uzun vadeli iş birlikleri kuruyoruz.',
  },
]

export default function WhyUs() {
  return (
    <section id="nedenbiz" className="py-5 why-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}>
            Neden Biz?
          </span>
          <h2 className="section-title">Neden EKAK&apos;ı Tercih Etmelisiniz?</h2>
          <p className="section-subtitle mt-2">
            Tecrübe, kalite ve güvenilirlik — yalıtım projelerinizde yanınızdayız.
          </p>
        </div>
        <div className="row g-4">
          {reasons.map((r) => (
            <div className="col-md-4" key={r.title}>
              <div className="why-card">
                <div className="why-icon">{r.icon}</div>
                <h5>{r.title}</h5>
                <p>{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
