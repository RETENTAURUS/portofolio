import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <h1 className="text-5xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-4 text-muted">Alamat yang Anda buka tidak ada. Kembali ke beranda atau lihat proyek saya.</p>
      <Link to="/" className="mt-6 inline-block bg-ink px-6 py-3 font-semibold text-paper">Ke beranda</Link>
    </div>
  )
}
