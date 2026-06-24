import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Funktionen from './pages/Funktionen'
import Preise from './pages/Preise'
import Kontakt from './pages/Kontakt'

function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-black text-zinc-800 mb-4">404</p>
        <h1 className="text-2xl font-black text-white mb-4">Seite nicht gefunden</h1>
        <p className="text-zinc-500 mb-8">Diese Seite existiert nicht oder wurde verschoben.</p>
        <a href="/" className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold px-6 py-3 rounded-full transition-colors">
          Zurück zur Startseite
        </a>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Zum Hauptinhalt springen</a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/funktionen" element={<Funktionen />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
