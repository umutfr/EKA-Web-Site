import React from 'react'

const socialLinks = [
  {
    href: 'https://www.instagram.com/ekak_endustiriyel_yalitim/',
    src: '/img2/instagram.webp',
    alt: 'Instagram',
    label: 'Instagram',
  },
  {
    href: 'https://www.tiktok.com/@fikret.kayik',
    src: '/img2/tiktok.png',
    alt: 'Tiktok',
    label: 'Tiktok',
  },
]

export default function Footer() {
  return (
    <>
      <footer className="site-footer pt-5 pb-3">
        <div className="container">
          <div className="row text-center text-md-start g-4">
            <div className="col-md-4">
              <h5>EKAK Endüstriyel Yalıtım</h5>
              <p className="mb-0" style={{ fontSize: '0.95rem' }}>
                Polyurea su yalıtımı ve poliüretan köpük ısı yalıtımında güvenilir çözüm ortağınız.
              </p>
            </div>

            <div className="col-md-4">
              <h5>İletişim</h5>
              <p className="mb-1" style={{ fontSize: '0.95rem' }}>
                Eyüp Sultan Mah. Alparslan Türkeş Cad. No:180, Osmaniye
              </p>
              <p className="mb-1" style={{ fontSize: '0.95rem' }}>
                <a href="tel:+905309235833">+90 530 923 58 33</a>
              </p>
              <p className="mb-0" style={{ fontSize: '0.95rem' }}>
                <a href="mailto:fikretkayik.turna@gmail.com">fikretkayik.turna@gmail.com</a>
              </p>
            </div>

            <div className="col-md-4">
              <h5>Sosyal Medya</h5>
              <div className="social-links">
                {socialLinks.map((s) => (
                  <a
                    key={s.alt}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={s.src} alt={s.alt} className="social-icon" loading="lazy" decoding="async" />
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <hr className="footer-divider" />
          <p className="mb-0 text-center" style={{ fontSize: '0.85rem', opacity: 0.7 }}>
            &copy; {new Date().getFullYear()} EKAK Endüstriyel Yalıtım — Tüm Hakları Saklıdır
          </p>
        </div>
      </footer>

      <div className="credit-bar">
        Site tasarımı:{' '}
        <a href="https://umutfr.dev/" target="_blank" rel="noopener noreferrer">
          umutfr
        </a>
      </div>
    </>
  )
}
