import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, TrendingUp } from 'lucide-react'

const NAV = [
  { label: 'Funktionen', to: '/funktionen' },
  { label: 'Preise', to: '/preise' },
  { label: 'Kontakt', to: '/kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 ${
      isActive ? 'text-cyan-400' : 'text-zinc-400 hover:text-white'
    }`

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800'
            : 'bg-zinc-950'
        }`}
      >
        <nav
          aria-label="Hauptnavigation"
          className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        >
          <Link
            to="/"
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
            aria-label="Moneo – Startseite"
          >
            <div className="h-8 w-8 rounded-lg bg-cyan-400 flex items-center justify-center" aria-hidden="true">
              <TrendingUp className="h-4 w-4 text-zinc-950" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">moneo</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV.map(n => (
              <NavLink key={n.to} to={n.to} className={linkClass}>{n.label}</NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/kontakt"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1"
            >
              Anmelden
            </Link>
            <Link
              to="/preise"
              className="inline-flex items-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 text-sm font-bold px-5 py-2 rounded-full transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Kostenlos starten
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Menü öffnen"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-zinc-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg cursor-pointer"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-200 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-zinc-950 flex flex-col px-6 pt-5 pb-10">
          <div className="flex justify-between items-center mb-10">
            <span className="font-bold text-lg text-white">moneo</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
              className="p-2 text-zinc-400 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile Navigation">
            <ul className="flex flex-col gap-1 list-none">
              {NAV.map(n => (
                <li key={n.to}>
                  <NavLink
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                        isActive ? 'bg-cyan-400/10 text-cyan-400' : 'text-zinc-300 hover:bg-zinc-800'
                      }`
                    }
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto flex flex-col gap-3">
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="block text-center py-3 rounded-xl border border-zinc-700 text-sm font-medium text-zinc-300 hover:border-zinc-500 transition-colors"
            >
              Anmelden
            </Link>
            <Link
              to="/preise"
              onClick={() => setOpen(false)}
              className="block text-center py-3 rounded-full bg-cyan-400 text-zinc-950 text-sm font-bold hover:bg-cyan-300 transition-colors"
            >
              Kostenlos starten
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
