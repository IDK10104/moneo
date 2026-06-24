import { Link } from 'react-router-dom'
import { TrendingUp, Globe, MessageCircle, Rss } from 'lucide-react'

const LINKS = {
  Produkt: [
    { label: 'Funktionen', to: '/funktionen' },
    { label: 'Preise', to: '/preise' },
    { label: 'Changelog', to: '#' },
    { label: 'Roadmap', to: '#' },
  ],
  Unternehmen: [
    { label: 'Über uns', to: '#' },
    { label: 'Blog', to: '#' },
    { label: 'Karriere', to: '#' },
    { label: 'Presse', to: '#' },
  ],
  Support: [
    { label: 'Hilfe-Center', to: '#' },
    { label: 'Kontakt', to: '/kontakt' },
    { label: 'Status', to: '#' },
    { label: 'Community', to: '#' },
  ],
  Rechtliches: [
    { label: 'Datenschutz', to: '#' },
    { label: 'Impressum', to: '#' },
    { label: 'AGB', to: '#' },
    { label: 'Cookie-Richtlinie', to: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-500" aria-label="Seitenende">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg">
              <div className="h-8 w-8 rounded-lg bg-cyan-400 flex items-center justify-center" aria-hidden="true">
                <TrendingUp className="h-4 w-4 text-zinc-950" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white text-lg">moneo</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Buchhaltung für Selbstständige und kleine Unternehmen in Deutschland.
            </p>
            <div className="flex gap-3" role="list" aria-label="Social Media">
              {[
                { Icon: MessageCircle, label: 'Community' },
                { Icon: Rss, label: 'Blog' },
                { Icon: Globe, label: 'Website' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  role="listitem"
                  rel="noopener noreferrer"
                  className="h-8 w-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-white mb-4">{group}</h3>
              <ul className="flex flex-col gap-3 list-none">
                {items.map(item => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 Moneo GmbH · Alle Rechte vorbehalten</p>
          <p>Gemacht mit ♥ in Deutschland</p>
        </div>
      </div>
    </footer>
  )
}
