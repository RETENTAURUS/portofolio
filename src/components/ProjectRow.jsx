export default function ProjectRow({ project }) {
  const { title, category, year, status, summary, tags, repo, demo } = project
  return (
    <article className="grid gap-4 border-t border-line py-8 md:grid-cols-[13rem_1fr] md:gap-10">
      <div className="text-sm text-muted">
        <p className="font-semibold text-ink">{category}</p>
        <p>{status}, {year}</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="mt-3 max-w-prose text-muted">{summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Teknologi ${title}`}>
          {tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-0.5 text-sm">{t}</li>
          ))}
        </ul>
        {(repo || demo) && (
          <p className="mt-4 flex gap-5 text-sm font-semibold">
            {demo && <a className="text-accent underline underline-offset-4" href={demo} target="_blank" rel="noreferrer">Buka demo</a>}
            {repo && <a className="text-accent underline underline-offset-4" href={repo} target="_blank" rel="noreferrer">Lihat kode</a>}
          </p>
        )}
      </div>
    </article>
  )
}
