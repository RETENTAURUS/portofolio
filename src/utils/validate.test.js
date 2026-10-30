import { describe, expect, it } from 'vitest'
import { buildMailto, validateContact } from './validate'

const valid = { name: 'Alfin Rido', email: 'alfin@mail.com', message: 'Saya ingin membuat aplikasi web untuk sekolah.' }

describe('validateContact', () => {
  it('lolos untuk data yang benar', () => {
    expect(validateContact(valid)).toEqual({})
  })
  it('menolak field kosong', () => {
    const errors = validateContact({ name: '', email: '', message: '' })
    expect(Object.keys(errors)).toEqual(['name', 'email', 'message'])
  })
  it('menolak email tanpa domain', () => {
    expect(validateContact({ ...valid, email: 'alfin@mail' }).email).toMatch(/Format email/)
  })
  it('menolak pesan yang terlalu pendek', () => {
    expect(validateContact({ ...valid, message: 'halo' }).message).toMatch(/minimal 20/)
  })
})

describe('buildMailto', () => {
  it('menyusun tautan mailto yang ter-encode', () => {
    const url = buildMailto('a@b.com', valid)
    expect(url.startsWith('mailto:a@b.com?subject=')).toBe(true)
    expect(url).not.toContain(' ')
  })
})
