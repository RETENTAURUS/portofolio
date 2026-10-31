# Portofolio M. Alfin Rido (React SPA)

Aplikasi web portofolio dengan halaman Beranda, Tentang, Proyek, dan Kontak.

## Teknologi
React 18, React Router 6, Vite, Tailwind CSS 3, Vitest + Testing Library.



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

