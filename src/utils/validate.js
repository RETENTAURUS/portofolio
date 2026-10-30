const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Mengembalikan objek error per field. Objek kosong berarti form valid. */
export function validateContact({ name = '', email = '', message = '' }) {
  const errors = {}
  const n = name.trim()
  const e = email.trim()
  const m = message.trim()

  if (!n) errors.name = 'Nama wajib diisi.'
  else if (n.length < 3) errors.name = 'Nama minimal 3 karakter.'

  if (!e) errors.email = 'Email wajib diisi.'
  else if (!EMAIL.test(e)) errors.email = 'Format email belum benar, contoh: nama@domain.com.'

  if (!m) errors.message = 'Pesan wajib diisi.'
  else if (m.length < 20) errors.message = 'Pesan minimal 20 karakter agar kebutuhan Anda jelas.'

  return errors
}

export function buildMailto(to, { name, email, message }) {
  const subject = encodeURIComponent(`Pesan dari ${name.trim()} lewat portofolio`)
  const body = encodeURIComponent(`${message.trim()}\n\n${name.trim()}\n${email.trim()}`)
  return `mailto:${to}?subject=${subject}&body=${body}`
}
