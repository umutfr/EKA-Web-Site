import React, { useEffect, useState } from 'react'

const partnerLogos = [
  { href: 'https://tr.onduline.com/tr/son-kullanici', src: '/img2/onduline.svg', alt: 'Onduline' },
  { href: 'https://qisturkiye.com/', src: '/img2/qis.png', alt: 'QIS' },
  { href: '/', src: '/img2/izokem.jpg', alt: 'Izokem' },
  { href: 'https://www.mapei.com/tr/tr/ana-sayfa', src: '/img2/mapei.png', alt: 'Mapei' },
]

const navLinks = [
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#hizmetler', label: 'Hizmetler' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#nedenbiz', label: 'Neden Biz?' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top site-navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="/img2/logo-full.jpg"
            alt="EKAK Logo"
            className="logo me-2"
            style={{ height: 42, borderRadius: 6 }}
            loading="eager"
            decoding="async"
          />
          <span className="brand-name d-none d-sm-inline">EKAK Endüstriyel Yalıtım</span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Menüyü aç/kapat"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <div className="partner-logos">
                {partnerLogos.map((logo) => (
                  <a
                    key={logo.alt}
                    href={logo.href}
                    target={logo.href === '/' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="logo-link"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ height: 28 }}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ))}
              </div>
            </li>

            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}

            <li className="nav-item ms-lg-2">
              <a href="tel:+905309235833" className="btn btn-phone btn-sm">
                +90 530 923 58 33
              </a>
            </li>

            <li className="nav-item ms-lg-2 d-none d-lg-block">
              <img
                src="/img2/turkey-flag.svg"
                alt="Türkiye"
                style={{ height: 22, borderRadius: 3 }}
                loading="lazy"
                decoding="async"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
