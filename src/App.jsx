import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

// Code splitting: setiap halaman dimuat hanya saat dibuka.
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tentang" element={<About />} />
        <Route path="proyek" element={<Projects />} />
        <Route path="kontak" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
