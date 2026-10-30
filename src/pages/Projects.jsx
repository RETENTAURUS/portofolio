import { useMemo, useState } from 'react'
import ProjectRow from '../components/ProjectRow'
import { projects } from '../data/profile'

const ALL = 'Semua'

export default function Projects() {
  const [active, setActive] = useState(ALL)
  const categories = useMemo(() => [ALL, ...new Set(projects.map((p) => p.category))], [])
  const shown = active === ALL ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <h1 className="text-5xl font-bold md:text-6xl">Proyek</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">Aplikasi yang pernah saya bangun, dari proyek skripsi sampai situs usaha kecil.</p>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter kategori">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={`border px-4 py-1.5 text-sm font-semibold transition-colors ${
              active === c ? 'border-ink bg-ink text-paper' : 'border-line hover:border-ink'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">{shown.length} proyek ditampilkan</p>
      <div className="mt-2 border-b border-line">
        {shown.map((p) => (
          <ProjectRow key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
