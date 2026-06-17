import React from 'react'

export default function Cta() {
  return (
    <section className="py-5 cta-section">
      <div className="container">
        <div className="cta-box">
          <div>
            <h3>Ücretsiz Keşif ve Teklif</h3>
            <p>Projeniz için hemen bizimle iletişime geçin, size en uygun çözümü sunalım.</p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <a href="tel:+905309235833" className="btn btn-accent">
              +90 530 923 58 33
            </a>
            <a
              href="mailto:fikretkayik.turna@gmail.com"
              className="btn btn-outline-accent cta-email-btn"
            >
              E-posta Gönder
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
