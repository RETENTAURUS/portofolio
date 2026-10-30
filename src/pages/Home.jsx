import { Link } from 'react-router-dom'
import { profile, projects, skills } from '../data/profile'

const rise = (d) => ({ '--d': `${d}s` })

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div>
          <h1 className="rise max-w-3xl text-5xl font-bold md:text-7xl" style={rise(0)}>
            Saya membuat aplikasi web yang dipakai orang sungguhan.
          </h1>
          <p className="rise mt-6 max-w-xl text-lg text-muted" style={rise(0.12)}>
            Saya {profile.name}, mahasiswa sekaligus web developer. Proyek skripsi saya, HafalQU, membantu guru di SDIT Ulul Albab Mataram memantau hafalan Al-Qur’an siswa.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3" style={rise(0.24)}>
            <Link to="/proyek" className="bg-ink px-6 py-3 font-semibold text-paper transition-opacity hover:opacity-85">Lihat proyek</Link>
            <Link to="/kontak" className="border border-ink px-6 py-3 font-semibold transition-colors hover:bg-ink hover:text-paper">Hubungi saya</Link>
          </div>
        </div>

        <aside className="rise self-start border border-line bg-panel p-6" style={rise(0.36)} aria-labelledby="sedang">
          <h2 id="sedang" className="text-xl font-bold">Sedang dikerjakan: HafalQU</h2>
          <dl className="mt-4 divide-y divide-line text-sm">
            {[
              ['Pengguna', 'Admin, guru, siswa'],
              ['Bank soal', 'Sekitar 1.200 soal, Juz 1, 27 sampai 30'],
              ['Tahap', 'Dokumentasi skripsi, pengujian'],
              ['Hosting', 'Hostinger'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-2.5">
                <dt className="text-muted">{k}</dt>
                <dd className="text-right font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="border-t border-line" aria-labelledby="terbaru">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="terbaru" className="text-3xl font-bold">Proyek terbaru</h2>
            <Link to="/proyek" className="font-semibold text-accent underline underline-offset-4">Semua proyek</Link>
          </div>
          <ul className="mt-8">
            {projects.slice(0, 3).map((p) => (
              <li key={p.id} className="grid gap-1 border-t border-line py-5 md:grid-cols-[13rem_1fr]">
                <span className="text-sm text-muted">{p.category}</span>
                <div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="max-w-prose text-muted">{p.summary.split('. ')[0]}.</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-panel" aria-labelledby="alat">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 id="alat" className="text-3xl font-bold">Alat yang saya pakai</h2>
          <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="font-semibold">{s.group}</dt>
                <dd className="mt-1 text-muted">{s.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
