import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  FileText, PieChart, CreditCard, Clock, Receipt, BarChart3,
  Download, Mail, Bell, Lock, Smartphone, RefreshCw,
  CheckCircle2, ArrowRight,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

function PageHero() {
  return (
    <section aria-labelledby="funk-heading" className="bg-zinc-950 border-b border-zinc-800 pt-28 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-400/8 blur-3xl rounded-full" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4 block">Funktionen</span>
        <h1 id="funk-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
          Alles für deine Buchhaltung.
        </h1>
        <p className="text-lg text-zinc-500 max-w-xl mx-auto">
          Moneo bündelt alle Tools, die Selbstständige und kleine Teams brauchen — in einer durchdachten, deutschen App.
        </p>
      </div>
    </section>
  )
}

function FeatureBlock({ icon: Icon, title, desc, points, flip }) {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current, { opacity: 0, x: flip ? 50 : -50 }, {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: leftRef.current, start: 'top 80%', once: true },
      })
      gsap.fromTo(rightRef.current, { opacity: 0, x: flip ? -50 : 50 }, {
        opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: rightRef.current, start: 'top 80%', once: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div ref={leftRef}>
        <div className="h-12 w-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-6" aria-hidden="true">
          <Icon className="h-6 w-6 text-cyan-400" strokeWidth={1.8} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">{title}</h2>
        <p className="text-zinc-500 leading-relaxed mb-6">{desc}</p>
        <ul className="flex flex-col gap-3 list-none">
          {points.map(p => (
            <li key={p} className="flex items-start gap-3 text-sm text-zinc-300">
              <CheckCircle2 className="h-4 w-4 text-cyan-400 mt-0.5 shrink-0" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      {/* Visual card */}
      <div ref={rightRef} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex items-center justify-center min-h-[280px]">
        <div className="h-20 w-20 rounded-3xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center" aria-hidden="true">
          <Icon className="h-10 w-10 text-cyan-400/60" strokeWidth={1.2} />
        </div>
      </div>
    </div>
  )
}

function MainFeatures() {
  const blocks = [
    {
      icon: FileText,
      title: 'Professionelle Rechnungen',
      desc: 'Erstelle rechtskonforme Rechnungen nach deutschem Recht in unter 60 Sekunden. Mit eigenem Logo, anpassbarer Vorlage und automatischer Rechnungsnummer.',
      points: [
        'Alle Pflichtangaben nach §14 UStG automatisch',
        'PDF-Versand direkt per E-Mail',
        'Zahlungserinnerungen auf Knopfdruck',
        'Wiederkehrende Rechnungen automatisieren',
        'QR-Code für einfache Bezahlung',
      ],
    },
    {
      icon: PieChart,
      title: 'Ausgaben & Belege',
      desc: 'Fotografiere Belege mit der Moneo-App — der Rest geht automatisch. OCR-Erkennung liest alle relevanten Daten aus und kategorisiert sie korrekt.',
      points: [
        'Belegerfassung per Foto (iOS & Android)',
        'Automatische Kategorisierung',
        'Betriebsausgaben-Übersicht nach Steuerrecht',
        'Jahresauswertung für den Steuerberater',
        'DATEV-Export auf einen Klick',
      ],
      flip: true,
    },
    {
      icon: BarChart3,
      title: 'Finanzübersicht & Reports',
      desc: 'Verstehe deine Zahlen auf einen Blick. Moneo zeigt dir Einnahmen, Ausgaben und deinen Gewinn als interaktive Charts — täglich, monatlich, jährlich.',
      points: [
        'Einnahmen-Ausgaben-Rechnung (EÜR)',
        'Umsatzsteuer-Voranmeldung',
        'Cashflow-Prognose',
        'Kunden-Ranking nach Umsatz',
        'Export als PDF oder Excel',
      ],
    },
    {
      icon: CreditCard,
      title: 'Online-Zahlungen',
      desc: 'Deine Kunden bezahlen Rechnungen direkt online — mit Kreditkarte, SEPA-Lastschrift oder PayPal. Das Geld ist schneller auf deinem Konto.',
      points: [
        'Zahlungslink in jeder Rechnung',
        'SEPA, Visa, Mastercard, PayPal',
        'Automatische Zahlungsbestätigung',
        'Geringere Außenstände',
        'Keine Einrichtungsgebühr',
      ],
      flip: true,
    },
  ]

  return (
    <section aria-labelledby="main-features-heading" className="py-20 lg:py-28 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="main-features-heading" className="sr-only">Hauptfunktionen im Detail</h2>
        <div className="flex flex-col gap-24">
          {blocks.map(b => <FeatureBlock key={b.title} {...b} />)}
        </div>
      </div>
    </section>
  )
}

function AdditionalFeatures() {
  const ref = useRef(null)
  useEffect(() => {
    if (prefersReducedMotion) return
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-addcard]', { opacity: 0, y: 30, scale: 0.97 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.45, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const items = [
    { icon: Clock, title: 'Zeiterfassung', desc: 'Stunden tracken und direkt in Rechnungen umwandeln.' },
    { icon: Receipt, title: 'Angebote & Kostenvoranschläge', desc: 'Professionelle Angebote erstellen und mit einem Klick zur Rechnung konvertieren.' },
    { icon: Mail, title: 'E-Mail-Integration', desc: 'Rechnungen direkt aus Moneo per E-Mail versenden. Mit deiner eigenen Absenderadresse.' },
    { icon: Bell, title: 'Mahnwesen', desc: 'Automatische Zahlungserinnerungen — freundlich, bestimmt, zu Zeiten, die du festlegst.' },
    { icon: Download, title: 'ELSTER & DATEV', desc: 'Direkter Export für dein Steuerberater-Programm oder die Finanzbehörde.' },
    { icon: Smartphone, title: 'Mobile App', desc: 'Alles auch unterwegs — iOS und Android App kostenlos im Store.' },
    { icon: Lock, title: 'DSGVO-konform', desc: 'Alle Daten auf deutschen Servern. Vollständig konform mit der Datenschutz-Grundverordnung.' },
    { icon: RefreshCw, title: 'Automatisierungen', desc: 'Wiederkehrende Rechnungen, Erinnerungen und Reports — alles automatisch.' },
  ]
  return (
    <section aria-labelledby="add-features-heading" className="py-16 bg-zinc-900/50 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 id="add-features-heading" className="text-2xl font-black text-white tracking-tight mb-10 text-center">Und noch mehr…</h2>
        <ul ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
          {items.map(it => (
            <li key={it.title} data-addcard>
              <article className="bg-zinc-900 border border-zinc-800 hover:border-cyan-400/30 rounded-xl p-5 h-full transition-colors group">
                <it.icon className="h-5 w-5 text-cyan-400 mb-3" strokeWidth={1.8} aria-hidden="true" />
                <h3 className="font-semibold text-white text-sm mb-1">{it.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{it.desc}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function FunkCTA() {
  return (
    <section className="py-16 bg-zinc-950" aria-labelledby="funk-cta-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 id="funk-cta-heading" className="text-2xl font-black text-white mb-4">Bereit, alles auszuprobieren?</h2>
        <p className="text-zinc-500 mb-8">30 Tage kostenlos — alle Funktionen, keine Einschränkungen.</p>
        <Link
          to="/preise"
          className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold px-7 py-3.5 rounded-full transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 cursor-pointer"
        >
          Plan wählen <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}

export default function Funktionen() {
  return (
    <>
      <PageHero />
      <MainFeatures />
      <AdditionalFeatures />
      <FunkCTA />
    </>
  )
}
