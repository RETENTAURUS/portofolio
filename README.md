# Portofolio M. Alfin Rido (React SPA)

Aplikasi web portofolio dengan halaman Beranda, Tentang, Proyek, dan Kontak.

## Teknologi
React 18, React Router 6, Vite, Tailwind CSS 3, Vitest + Testing Library.

## Menjalankan
```bash
npm install
npm run dev        # http://localhost:5173
npm test           # unit + integration test
npm run build      # hasil di folder dist
```

## Ganti data pribadi (wajib sebelum deploy)
Buka `src/data/profile.js`, lalu ubah `email`, `github`, `linkedin`, dan tambahkan `repo` / `demo` pada tiap proyek jika ada.

## Pemenuhan kriteria
| Kriteria | Lokasi |
|---|---|
| HTML semantik (`header`, `nav`, `main`, `footer`) | `src/components/Layout.jsx` |
| CSS manual halaman About | `src/pages/about.css` |
| JavaScript validasi form | `src/utils/validate.js`, `src/pages/Contact.jsx` |
| Tailwind untuk Project dan Contact | `Projects.jsx`, `ProjectRow.jsx`, `Contact.jsx` |
| Routing, komponen modular, state | `App.jsx` (React Router), `useState` untuk menu, filter, form, tema |
| Lazy load / code splitting | `React.lazy` + `Suspense` di `App.jsx` dan `Layout.jsx` |
| Testing | `validate.test.js`, `Contact.test.jsx`, `App.test.jsx` |
| Fitur tambahan | Mode gelap tersimpan di localStorage (`useTheme.js`) |
| Responsif | Menu hamburger di mobile, grid adaptif |

## Push ke GitHub
```bash
git init
git add . && git commit -m "feat: inisialisasi proyek React + Vite + Tailwind"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio-alfin.git
git push -u origin main
```
Gunakan pesan commit yang jelas, misalnya `feat:`, `fix:`, `style:`, `test:`, `docs:`.

## Deploy
**Vercel (disarankan):** import repo di vercel.com, framework Vite, build `npm run build`, output `dist`. File `vercel.json` sudah menangani routing SPA.

**Netlify:** build `npm run build`, publish `dist`. File `public/_redirects` sudah disiapkan.

**GitHub Pages:** perlu `base` di `vite.config.js` dan `HashRouter`, karena Pages tidak mendukung rewrite SPA.
