import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, X, ArrowRight, HelpCircle } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    desc: 'Für Einsteiger und Neugierige.',
    cta: 'Kostenlos starten',
    ctaTo: '/kontakt',
    featured: false,
    features: [
      { label: '5 Rechnungen pro Monat', ok: true },
      { label: 'Basisvorlagen', ok: true },
      { label: 'Ausgabenerfassung', ok: true },
      { label: 'PDF-Export', ok: true },
      { label: 'Zahlungserinnerungen', ok: false },
      { label: 'Online-Zahlungen', ok: false },
      { label: 'DATEV-Export', ok: false },
      { label: 'Zeiterfassung', ok: false },
      { label: 'Prioritäts-Support', ok: false },
    ],
  },
  {
    name: 'Pro',
    monthly: 19,
    yearly: 15,
    desc: 'Für aktive Freiberufler.',
    cta: '30 Tage kostenlos testen',
    ctaTo: '/kontakt',
    featured: true,
    features: [
      { label: 'Unbegrenzte Rechnungen', ok: true },
      { label: 'Alle Vorlagen & Branding', ok: true },
      { label: 'Ausgabenerfassung', ok: true },
      { label: 'PDF & Excel Export', ok: true },
      { label: 'Zahlungserinnerungen', ok: true },
      { label: 'Online-Zahlungen', ok: true },
      { label: 'DATEV-Export', ok: true },
      { label: 'Zeiterfassung', ok: true },
      { label: 'Prioritäts-Support', ok: false },
    ],
  },
  {
    name: 'Business',
    monthly: 49,
    yearly: 39,
    desc: 'Für Teams und Agenturen.',
    cta: 'Kontakt aufnehmen',
    ctaTo: '/kontakt',
    featured: false,
    features: [
      { label: 'Unbegrenzte Rechnungen', ok: true },
      { label: 'Alle Vorlagen & Branding', ok: true },
      { label: 'Ausgabenerfassung', ok: true },
      { label: 'PDF & Excel Export', ok: true },
      { label: 'Zahlungserinnerungen', ok: true },
      { label: 'Online-Zahlungen', ok: true },
      { label: 'DATEV-Export', ok: true },
      { label: 'Zeiterfassung', ok: true },
      { label: 'Prioritäts-Support', ok: true },
    ],
  },
]

const FAQ_ITEMS = [
  { q: 'Kann ich jederzeit kündigen?', a: 'Ja. Moneo ist monatlich kündbar — ohne Mindestlaufzeit und ohne Kündigungsfristen.' },
  { q: 'Was passiert nach dem Testzeitraum?', a: 'Nach 30 Tagen wirst du gefragt, ob du weitermachen möchtest. Ohne Angabe einer Zahlungsmethode wechselst du automatisch in den Starter-Plan.' },
  { q: 'Ist Moneo DSGVO-konform?', a: 'Ja. Alle Daten werden ausschließlich auf deutschen Servern gespeichert. Wir verarbeiten keine Daten außerhalb der EU.' },
  { q: 'Gibt es Rabatte für Studenten oder NGOs?', a: 'Ja. Schreib uns einfach an hello@moneo.de — wir finden eine faire Lösung.' },
  { q: 'Welche Zahlungsmethoden akzeptiert ihr?', a: 'Kreditkarte (Visa, Mastercard), SEPA-Lastschrift und PayPal. Rechnungskauf ist auf Anfrage möglich.' },
]

function PricingToggle({ yearly, setYearly }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-12">
      <span className={`text-sm font-medium ${!yearly ? 'text-white' : 'text-zinc-500'}`}>Monatlich</span>
      <button
        onClick={() => setYearly(y => !y)}
        role="switch"
        aria-checked={yearly}
        aria-label="Jährliche Abrechnung umschalten"
        className={`relative w-11 h-6 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 cursor-pointer ${yearly ? 'bg-cyan-400' : 'bg-zinc-700'}`}
      >
        <span className={`absolute top-1 left-1 h-4 w-4 rounded-full bg-zinc-950 shadow transition-transform ${yearly ? 'translate-x-5' : 'translate-x-0'}`} aria-hidden="true" />
      </button>
      <span className={`text-sm font-medium ${yearly ? 'text-white' : 'text-zinc-500'}`}>
        Jährlich
        <span className="ml-2 inline-block bg-cyan-400/20 text-cyan-400 text-xs font-semibold px-2 py-0.5 rounded-full border border-cyan-400/30">−20%</span>
      </span>
    </div>
  )
}

function FAQSection() {
  const [open, setOpen] = useState(null)
  return (
    <section aria-labelledby="faq-heading" className="py-16 bg-zinc-900/50 border-y border-zinc-800">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 id="faq-heading" className="text-2xl font-black text-white text-center mb-10">Häufige Fragen</h2>
        <dl>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i
            const btnId = `faq-btn-${i}`
            const panelId = `faq-panel-${i}`
            return (
              <div key={i} className="border-b border-zinc-800 first:border-t">
                <dt>
                  <button
                    id={btnId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex justify-between items-center py-5 text-left gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  >
                    <span className="font-medium text-zinc-200">{item.q}</span>
                    <HelpCircle className={`h-4 w-4 shrink-0 transition-colors ${isOpen ? 'text-cyan-400' : 'text-zinc-600'}`} aria-hidden="true" />
                  </button>
                </dt>
                <dd id={panelId} role="region" aria-labelledby={btnId} hidden={!isOpen} className="pb-5">
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.a}</p>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}

export default function Preise() {
  const [yearly, setYearly] = useState(false)

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="preise-heading" className="bg-zinc-950 border-b border-zinc-800 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-400/8 blur-3xl rounded-full" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4 block">Preise</span>
          <h1 id="preise-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
            Einfach. Transparent. Fair.
          </h1>
          <p className="text-lg text-zinc-500 max-w-xl mx-auto">
            Kein Abo-Chaos. Wähle den Plan, der zu dir passt — und wechsle jederzeit.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section aria-label="Preispläne" className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <PricingToggle yearly={yearly} setYearly={setYearly} />

          <div className="grid lg:grid-cols-3 gap-6">
            {PLANS.map(plan => {
              const price = yearly ? plan.yearly : plan.monthly
              return (
                <article
                  key={plan.name}
                  className={`rounded-2xl border p-8 flex flex-col relative transition-all ${
                    plan.featured
                      ? 'bg-cyan-400/10 border-cyan-400/50 shadow-2xl shadow-cyan-400/10 scale-[1.02]'
                      : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                  }`}
                  aria-label={`${plan.name}-Plan${plan.featured ? ' – empfohlen' : ''}`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full">
                      Beliebtester Plan
                    </span>
                  )}
                  <h2 className="font-black text-xl text-white mb-1">{plan.name}</h2>
                  <p className={`text-sm mb-6 ${plan.featured ? 'text-cyan-300/70' : 'text-zinc-500'}`}>{plan.desc}</p>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-black text-white">€{price}</span>
                    <span className="text-sm text-zinc-500">/Monat</span>
                  </div>

                  <Link
                    to={plan.ctaTo}
                    className={`flex items-center justify-center gap-2 font-bold py-3 rounded-full text-sm mb-8 transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 cursor-pointer ${
                      plan.featured
                        ? 'bg-cyan-400 text-zinc-950 hover:bg-cyan-300 focus-visible:ring-cyan-400'
                        : 'border border-zinc-700 text-white hover:border-zinc-500 focus-visible:ring-zinc-400'
                    }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>

                  <ul className="flex flex-col gap-3 list-none">
                    {plan.features.map(f => (
                      <li key={f.label} className={`flex items-center gap-3 text-sm ${!f.ok ? 'opacity-30' : ''} ${plan.featured ? 'text-zinc-200' : 'text-zinc-400'}`}>
                        {f.ok
                          ? <CheckCircle2 className={`h-4 w-4 shrink-0 ${plan.featured ? 'text-cyan-400' : 'text-zinc-500'}`} aria-hidden="true" />
                          : <X className="h-4 w-4 shrink-0" aria-hidden="true" />
                        }
                        {f.label}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>

          <p className="text-center text-sm text-zinc-600 mt-10">
            Alle Preise zzgl. MwSt. · Monatlich kündbar · Keine Einrichtungsgebühr
          </p>
        </div>
      </section>

      <FAQSection />

      {/* Enterprise CTA */}
      <section aria-labelledby="enterprise-heading" className="py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 transition-colors bg-zinc-900">
            <div>
              <h2 id="enterprise-heading" className="text-xl font-black text-white mb-2">Für größere Teams</h2>
              <p className="text-zinc-500 text-sm">Ab 10 Nutzer? Wir erstellen gerne ein individuelles Angebot mit dediziertem Support.</p>
            </div>
            <Link
              to="/kontakt"
              className="shrink-0 inline-flex items-center gap-2 border border-zinc-700 hover:border-cyan-400/50 text-zinc-300 hover:text-cyan-400 font-semibold text-sm px-6 py-3 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Kontakt aufnehmen <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
