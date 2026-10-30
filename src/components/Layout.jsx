import { Suspense, useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'
import { useTheme } from '../hooks/useTheme'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/', label: 'Beranda', end: true },
  { to: '/tentang', label: 'Tentang' },
  { to: '/proyek', label: 'Proyek' },
  { to: '/kontak', label: 'Kontak' },
]

const titles = {
  '/': 'M. Alfin Rido | Web developer',
  '/tentang': 'Tentang | M. Alfin Rido',
  '/proyek': 'Proyek | M. Alfin Rido',
  '/kontak': 'Kontak | M. Alfin Rido',
}

export default function Layout() {
  const [theme, toggleTheme] = useTheme()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] ?? 'Halaman tidak ditemukan | M. Alfin Rido'
    window.scrollTo(0, 0)
    setOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }) =>
    `block py-2 text-base transition-colors md:py-1 ${
      isActive ? 'border-b-2 border-mark font-semibold text-ink' : 'border-b-2 border-transparent text-muted hover:text-ink'
    }`

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#isi" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Lompat ke konten
      </a>

      <header className="sticky top-0 z-20 border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <Link to="/" className="font-display text-xl font-bold tracking-tight">
            {profile.name}
          </Link>

          <div className="flex items-center gap-3">
            <nav aria-label="Navigasi utama">
              <ul
                id="menu"
                className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-1 border-b border-line bg-paper px-5 pb-4 md:static md:flex md:flex-row md:gap-7 md:border-0 md:bg-transparent md:p-0`}
              >
                {links.map((l) => (
                  <li key={l.to}>
                    <NavLink to={l.to} end={l.end} className={linkClass}>
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-line md:hidden"
              aria-expanded={open}
              aria-controls="menu"
              aria-label={open ? 'Tutup menu' : 'Buka menu'}
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main id="isi" className="flex-1">
        <Suspense fallback={<p className="mx-auto max-w-6xl px-5 py-20 text-muted md:px-8">Memuat halaman…</p>}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {profile.name}. Dibuat dengan React dan Tailwind CSS.</p>
          <ul className="flex gap-5">
            {links.slice(1).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-ink">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  )
}
