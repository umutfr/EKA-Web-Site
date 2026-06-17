# EKAK Endüstriyel Yalıtım — React Projesi

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda otomatik olarak `http://localhost:5173` açılır.

## Build (yayına almak için)

```bash
npm run build
# dist/ klasörü oluşur, bunu hosting'e yükle
```

## Klasör Yapısı

```
ekak-web/
├── index.html              ← Vite giriş noktası
├── vite.config.js
├── package.json
├── public/
│   ├── img2/               ← Tüm görseller buraya kopyalanacak
│   └── videos/             ← Tüm videolar buraya kopyalanacak
└── src/
    ├── main.jsx            ← React mount noktası
    ├── App.jsx             ← Tüm componentleri bir araya getirir
    ├── index.css           ← Global stiller (eski style.css)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── Gallery.jsx     ← Lightbox dahil
        ├── WhyUs.jsx
        └── Footer.jsx
```

## Önemli Not — Dosyaları Taşıma

`img2/` ve `videos/` klasörlerini **`public/`** altına kopyala:

```bash
cp -r img2   ekak-web/public/img2
cp -r videos ekak-web/public/videos
```

Vite, `public/` içindeki dosyaları `/img2/duz1.jpg` gibi kök URL'den sunar.

## Component Rehberi

| Component | Dosya | Ne değiştirirsin |
|-----------|-------|-----------------|
| Navbar | `Navbar.jsx` | `partnerLogos`, `navLinks` dizileri |
| Hero | `Hero.jsx` | `slides` dizisi (resim + başlık) |
| Hakkımızda | `About.jsx` | Metin ve resim |
| Hizmetler | `Services.jsx` | `services` dizisi |
| Galeri | `Gallery.jsx` | `polyureaPhotos`, `puPhotos`, `polyureaVideos`, `puVideos` |
| Neden Biz | `WhyUs.jsx` | `reasons` dizisi |
| Footer | `Footer.jsx` | Adres, telefon, e‑posta, sosyal medya |
