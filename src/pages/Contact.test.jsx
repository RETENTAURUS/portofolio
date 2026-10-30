import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import Contact from './Contact'

describe('Form kontak', () => {
  it('menampilkan pesan error saat form kosong dikirim', async () => {
    const onSend = vi.fn()
    render(<Contact onSend={onSend} />)
    await userEvent.click(screen.getByRole('button', { name: /kirim pesan/i }))
    expect(screen.getByText('Nama wajib diisi.')).toBeInTheDocument()
    expect(screen.getByText('Email wajib diisi.')).toBeInTheDocument()
    expect(onSend).not.toHaveBeenCalled()
  })

  it('mengirim saat data valid', async () => {
    const onSend = vi.fn()
    render(<Contact onSend={onSend} />)
    await userEvent.type(screen.getByLabelText('Nama'), 'Alfin Rido')
    await userEvent.type(screen.getByLabelText('Email'), 'alfin@mail.com')
    await userEvent.type(screen.getByLabelText('Pesan'), 'Saya butuh aplikasi web untuk sekolah kami.')
    await userEvent.click(screen.getByRole('button', { name: /kirim pesan/i }))
    expect(onSend).toHaveBeenCalledTimes(1)
    expect(onSend.mock.calls[0][0]).toMatch(/^mailto:/)
  })
})
