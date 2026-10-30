import { useState } from 'react'
import { profile } from '../data/profile'
import { buildMailto, validateContact } from '../utils/validate'

const empty = { name: '', email: '', message: '' }
const field = 'mt-1 w-full border bg-panel px-4 py-3 text-ink placeholder:text-muted focus:border-accent'

export default function Contact({ onSend = (url) => { window.location.href = url } }) {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sent, setSent] = useState(false)

  const update = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    setSent(false)
    if (submitted) setErrors(validateContact(next)) // validasi langsung setelah percobaan kirim pertama
  }

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validateContact(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return
    onSend(buildMailto(profile.email, values))
    setSent(true)
    setValues(empty)
    setSubmitted(false)
  }

  const input = (name, label, props = {}) => {
    const Tag = props.as ?? 'input'
    return (
      <div>
        <label htmlFor={name} className="font-semibold">{label}</label>
        <Tag
          id={name}
          name={name}
          value={values[name]}
          onChange={update}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
          className={`${field} ${errors[name] ? 'border-red-600' : 'border-line'}`}
          {...props}
          as={undefined}
        />
        {errors[name] && (
          <p id={`${name}-error`} className="mt-1 text-sm font-medium text-red-700 dark:text-red-400">{errors[name]}</p>
        )}
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
      <div>
        <h1 className="text-5xl font-bold md:text-6xl">Kontak</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">Ada proyek atau pertanyaan? Tulis di sini, pesan akan terbuka di aplikasi email Anda.</p>

        <form onSubmit={submit} noValidate className="mt-8 grid max-w-xl gap-5" aria-label="Form kontak">
          {input('name', 'Nama', { type: 'text', autoComplete: 'name', placeholder: 'Nama lengkap' })}
          {input('email', 'Email', { type: 'email', autoComplete: 'email', placeholder: 'nama@domain.com' })}
          {input('message', 'Pesan', { as: 'textarea', rows: 6, placeholder: 'Ceritakan kebutuhan Anda' })}
          <div>
            <button type="submit" className="bg-ink px-7 py-3 font-semibold text-paper transition-opacity hover:opacity-85">Kirim pesan</button>
          </div>
          <p role="status" className="min-h-6 font-medium text-accent">
            {sent ? 'Aplikasi email Anda dibuka dengan pesan yang sudah terisi. Tekan kirim di sana.' : ''}
          </p>
        </form>
      </div>

      <aside aria-labelledby="langsung" className="self-start border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
        <h2 id="langsung" className="text-2xl font-bold">Langsung saja</h2>
        <ul className="mt-4 grid gap-3">
          <li><a className="text-accent underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a></li>
          {profile.github && <li><a className="text-accent underline underline-offset-4" href={profile.github} target="_blank" rel="noreferrer">GitHub</a></li>}
          {profile.linkedin && <li><a className="text-accent underline underline-offset-4" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>}
        </ul>
        <p className="mt-6 text-sm text-muted">Biasanya saya membalas dalam satu sampai dua hari kerja.</p>
      </aside>
    </div>
  )
}
