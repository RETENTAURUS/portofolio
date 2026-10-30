import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('Routing dan navigasi', () => {
  it('membuka halaman Proyek dari URL dan menandai menu aktif', async () => {
    render(<MemoryRouter initialEntries={['/proyek']}><App /></MemoryRouter>)
    expect(await screen.findByRole('heading', { level: 1, name: 'Proyek' })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Navigasi utama' })
    expect(within(nav).getByRole('link', { name: 'Proyek' })).toHaveAttribute('aria-current', 'page')
  })

  it('memfilter proyek berdasarkan kategori', async () => {
    render(<MemoryRouter initialEntries={['/proyek']}><App /></MemoryRouter>)
    await userEvent.click(await screen.findByRole('button', { name: 'Landing page' }))
    expect(screen.getByText('1 proyek ditampilkan')).toBeInTheDocument()
  })
})
