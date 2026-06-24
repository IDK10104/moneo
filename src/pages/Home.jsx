import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight, CheckCircle2, FileText, PieChart, CreditCard,
  Star, ChevronRight, Receipt, BarChart3, Clock, Users, Zap,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })
      tl.fromTo('.hero-badge',   { opacity: 0, y: -24 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
        .fromTo('.hero-h1',      { opacity: 0, y: 64 },  { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.2')
        .fromTo('.hero-sub',     { opacity: 0, y: 32 },  { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.35')
        .fromTo('.hero-ctas',    { opacity: 0, y: 20 },  { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.25')
        .fromTo('.hero-mockup',  { opacity: 0, y: 80, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }, '-=0.35')
        .fromTo('.hero-badge-float', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.5')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-zinc-950 pt-28 pb-0"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-cyan-400 opacity-[0.06] blur-[140px]" />
        <div className="absolute top-60 -left-40 w-[400px] h-[400px] rounded-full bg-cyan-400 opacity-[0.03] blur-3xl" />
        <div className="absolute top-40 -right-40 w-[300px] h-[300px] rounded-full bg-cyan-400 opacity-[0.03] blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="hero-badge flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 border border-cyan-400/30 text-cyan-400 text-xs font-semibold px-4 py-1.5 rounded-full bg-cyan-400/5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
            Neu: Automatischer Steuerexport für DATEV
          </span>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1
            id="hero-heading"
            className="hero-h1 text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Buchhaltung,{' '}
            <span className="text-cyan-400">
              die nicht<br />wehtut.
            </span>
          </h1>
          <p className="hero-sub text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Rechnungen erstellen, Ausgaben erfassen und deine Finanzen im Blick behalten — alles in einer App. Speziell für Freiberufler und kleine Unternehmen in Deutschland.
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-ctas flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <Link
            to="/preise"
            className="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold px-7 py-3.5 rounded-full transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 cursor-pointer"
          >
            Kostenlos starten <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/funktionen"
            className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-7 py-3.5 rounded-full transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          >
            Alle Funktionen ansehen
          </Link>
        </div>
        <p className="text-center text-sm text-zinc-600 mb-16 hero-ctas">Keine Kreditkarte nötig · 30 Tage kostenlos testen</p>

        {/* Dashboard mockup */}
        <div className="hero-mockup relative max-w-4xl mx-auto" aria-hidden="true">
          {/* Glow under mockup */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-cyan-400/20 blur-3xl rounded-full" />

          {/* Floating orbital elements */}
          <div className="absolute -top-6 -left-8 h-12 w-12 rounded-full bg-zinc-900 border border-cyan-400/30 flex items-center justify-center shadow-lg shadow-cyan-400/10 animate-[float_4s_ease-in-out_infinite]">
            <BarChart3 className="h-5 w-5 text-cyan-400" strokeWidth={1.5} />
          </div>
          <div className="absolute top-10 -right-6 h-10 w-10 rounded-full bg-zinc-900 border border-cyan-400/20 flex items-center justify-center shadow-lg animate-[float_5s_ease-in-out_0.8s_infinite]">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" strokeWidth={1.5} />
          </div>
          <div className="absolute -bottom-6 -left-4 h-8 w-8 rounded-full bg-cyan-400/20 border border-cyan-400/40 animate-[float_6s_ease-in-out_0.4s_infinite]" />
          <div className="absolute top-1/2 -right-10 h-6 w-6 rounded-full bg-cyan-400/10 border border-cyan-400/30 animate-[float_4.5s_ease-in-out_1.2s_infinite]" />

          {/* Mockup window */}
          <div className="relative bg-zinc-900 rounded-2xl border border-zinc-700/60 overflow-hidden shadow-2xl shadow-black/60 anim-float">
            {/* Topbar */}
            <div className="bg-zinc-800/80 border-b border-zinc-700/60 px-4 py-3 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs text-zinc-500 font-mono">app.moneo.de</span>
            </div>
            {/* Content */}
            <div className="p-6 grid grid-cols-3 gap-4">
              {[
                { label: 'Einnahmen', value: '€12.840', change: '+18%', color: 'text-emerald-400', bg: 'bg-emerald-400/10 border border-emerald-400/20' },
                { label: 'Ausgaben',  value: '€4.320',  change: '-5%',  color: 'text-red-400',    bg: 'bg-red-400/10 border border-red-400/20' },
                { label: 'Netto',    value: '€8.520',  change: '+24%', color: 'text-cyan-400',   bg: 'bg-cyan-400/10 border border-cyan-400/20' },
              ].map(c => (
                <div key={c.label} className={`${c.bg} rounded-xl p-4`}>
                  <p className="text-xs text-zinc-500 mb-1">{c.label}</p>
                  <p className={`text-xl font-bold ${c.color}`}>{c.value}</p>
                  <p className="text-xs text-zinc-600 mt-1">{c.change} diesen Monat</p>
                </div>
              ))}
              {/* Bar chart */}
              <div className="col-span-2 bg-zinc-800/60 border border-zinc-700/40 rounded-xl p-4">
                <p className="text-xs font-semibold text-zinc-300 mb-3">Umsatz 2026</p>
                <div className="flex items-end gap-1 h-20">
                  {[40,65,45,70,55,85,75,90,60,80,95,88].map((h,i) => (
                    <div key={i} className={`flex-1 rounded-t-sm transition-all ${i===11?'bg-cyan-400':'bg-zinc-600'}`} style={{height:`${h}%`}} />
                  ))}
                </div>
                <div className="flex justify-between mt-1">
                  {['Jan','Mar','Mai','Jul','Sep','Nov'].map(m=>(
                    <span key={m} className="text-[9px] text-zinc-600">{m}</span>
                  ))}
                </div>
              </div>
              {/* Invoices */}
              <div className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl p-4">
                <p className="text-xs font-semibold text-zinc-300 mb-3">Letzte Rechnungen</p>
                <div className="flex flex-col gap-2">
                  {[
                    { name:'Müller GmbH', amount:'€1.800', paid:true },
                    { name:'Weber AG',    amount:'€960',   paid:false },
                    { name:'Schmidt KG', amount:'€2.400',  paid:true },
                  ].map(r=>(
                    <div key={r.name} className="flex justify-between items-center">
                      <div>
                        <p className="text-xs font-medium text-zinc-300">{r.name}</p>
                        <p className={`text-[10px] ${r.paid?'text-emerald-400':'text-amber-400'}`}>{r.paid?'Bezahlt':'Offen'}</p>
                      </div>
                      <span className="text-xs font-semibold text-white">{r.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="hero-badge-float absolute -bottom-4 -right-4 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl px-4 py-3 flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-400/20 flex items-center justify-center">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Rechnung versendet</p>
              <p className="text-[10px] text-zinc-500">Müller GmbH · €1.800</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fade to next section */}
      <div className="h-32 bg-gradient-to-b from-transparent to-zinc-950 mt-8" aria-hidden="true" />
    </section>
  )
}

/* ── Stats ────────────────────────────────────────────────────── */
function Stats() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-stat]',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const stats = [
    { value: '12.000+', label: 'Aktive Nutzer' },
    { value: '€2,4 Mrd.', label: 'Verarbeitete Rechnungen' },
    { value: '4,9 / 5', label: 'Kundenbewertung' },
    { value: '99,9 %', label: 'Verfügbarkeit' },
  ]

  return (
    <section ref={ref} aria-labelledby="stats-heading" className="py-16 border-y border-zinc-800 bg-zinc-950">
      <h2 id="stats-heading" className="sr-only">Moneo in Zahlen</h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-zinc-800">
          {stats.map(s => (
            <div key={s.label} data-stat className="text-center lg:px-8">
              <dd className="text-4xl font-black text-white mb-1">{s.value}</dd>
              <dt className="text-zinc-500 text-sm">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ── Logos ────────────────────────────────────────────────────── */
function Logos() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-logo]',
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  const companies = ['Freelancer.de','DATEV','Elster','Sevdesk','Lexware','WISO']
  return (
    <section ref={ref} className="py-14 bg-zinc-950" aria-label="Vertrauenspartner">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs text-zinc-600 font-semibold mb-8 uppercase tracking-widest">
          Vertraut von über 12.000 Selbstständigen in Deutschland
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {companies.map(c => (
            <span key={c} data-logo className="text-zinc-700 font-bold text-lg tracking-tight hover:text-zinc-400 transition-colors cursor-default">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Features ─────────────────────────────────────────────────── */
function Features() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-fhdr]',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true } }
      )
      gsap.fromTo(
        '[data-card]',
        { opacity: 0, y: 50, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true } }
      )
    })
    return () => ctx.revert()
  }, [])

  const features = [
    { icon: FileText,  title: 'Rechnungen in Sekunden',  desc: 'Professionelle Rechnungen mit deinem Logo erstellen, per E-Mail versenden und den Status in Echtzeit verfolgen.' },
    { icon: PieChart,  title: 'Ausgaben im Griff',        desc: 'Belege fotografieren, automatisch erfassen und kategorisieren. Perfekt vorbereitet für deinen Steuerberater.' },
    { icon: BarChart3, title: 'Finanzen auf einen Blick', desc: 'Einnahmen, Ausgaben und Gewinn jederzeit im Überblick. Interaktive Charts für jede Zeitspanne.' },
    { icon: Receipt,   title: 'USt-Voranmeldung',         desc: 'Automatische Berechnung der Umsatzsteuer und direkter Export ins ELSTER-Format. Steuern leicht gemacht.' },
    { icon: CreditCard,title: 'Zahlungen akzeptieren',    desc: 'Kunden zahlen direkt per Klick — mit SEPA-Lastschrift, Kreditkarte oder PayPal. Sofort auf deinem Konto.' },
    { icon: Clock,     title: 'Zeiterfassung',             desc: 'Arbeitszeit direkt in Moneo tracken und automatisch in abrechenbare Rechnungen umwandeln.' },
  ]

  return (
    <section aria-labelledby="features-heading" className="py-20 lg:py-28 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-16">
          <span data-fhdr className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4 block">Funktionen</span>
          <h2 data-fhdr id="features-heading" className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Alles, was du brauchst.
          </h2>
          <p data-fhdr className="text-zinc-500 leading-relaxed">
            Von der Rechnung bis zur Steuer — Moneo deckt deinen gesamten Buchhaltungs-Workflow ab.
          </p>
        </div>

        <ul ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none" role="list">
          {features.map(f => (
            <li key={f.title} data-card>
              <article className="bg-zinc-900 border border-zinc-800 hover:border-cyan-400/30 rounded-2xl p-6 hover:-translate-y-0.5 transition-all duration-200 h-full group">
                <div className="h-10 w-10 rounded-xl bg-cyan-400/10 group-hover:bg-cyan-400/15 flex items-center justify-center mb-4 transition-colors" aria-hidden="true">
                  <f.icon className="h-5 w-5 text-cyan-400" strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
              </article>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10">
          <Link to="/funktionen" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded">
            Alle Funktionen entdecken <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── How it works ─────────────────────────────────────────────── */
function HowItWorks() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-step]', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const steps = [
    { n: '01', title: 'Konto erstellen',   desc: 'In 2 Minuten registriert — keine Kreditkarte, keine versteckten Kosten.' },
    { n: '02', title: 'Daten importieren', desc: 'Bestehende Rechnungen, Kunden und Ausgaben einfach hochladen oder manuell eingeben.' },
    { n: '03', title: 'Loslegen',          desc: 'Erste Rechnung erstellen, per E-Mail versenden und Zahlungseingang live verfolgen.' },
  ]

  return (
    <section ref={ref} aria-labelledby="how-heading" className="py-20 bg-zinc-900/50 border-y border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span data-step className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4 block">So funktioniert's</span>
          <h2 data-step id="how-heading" className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            In 3 Schritten loslegen.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} data-step className="flex flex-col items-start relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-0 h-px border-t border-dashed border-zinc-700" aria-hidden="true" />
              )}
              <div className="h-12 w-12 rounded-2xl border-2 border-cyan-400 text-cyan-400 font-black text-lg flex items-center justify-center mb-5 shrink-0">
                {s.n}
              </div>
              <h3 className="font-semibold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Testimonials ─────────────────────────────────────────────── */
function Testimonials() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-tcard]', { opacity: 0, y: 50, scale: 0.97 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 78%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const testimonials = [
    { name: 'Laura Becker',    role: 'Grafikdesignerin, München', stars: 5,
      text: 'Moneo hat mir buchstäblich Stunden pro Monat gespart. Ich erstelle Rechnungen jetzt in unter 2 Minuten und vergesse nie mehr eine offene Zahlung.' },
    { name: 'Tobias Richter',  role: 'Webentwickler, Berlin',     stars: 5,
      text: 'Endlich eine Buchhaltungs-App, die auf Deutsch gedacht ist. DATEV-Export, ELSTER — alles drin. Mein Steuerberater ist begeistert.' },
    { name: 'Sandra Hoffmann', role: 'Marketing-Beraterin, Hamburg', stars: 5,
      text: 'Die Ausgabenerfassung per Foto ist ein Gamechanger. Kein Schuhkarton mit Belegen mehr. Einfach fotografieren, fertig.' },
  ]

  return (
    <section aria-labelledby="testimonials-heading" className="py-20 lg:py-28 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4 block">Kundenstimmen</span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Was unsere Nutzer sagen.
          </h2>
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-5 list-none" role="list">
          {testimonials.map(t => (
            <li key={t.name} data-tcard>
              <blockquote className="bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 h-full flex flex-col transition-colors">
                <div className="flex gap-0.5 mb-4" aria-label={`${t.stars} von 5 Sternen`}>
                  {Array.from({length:t.stars}).map((_,i)=>(
                    <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6 flex-1">"{t.text}"</p>
                <footer>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-zinc-600 mt-0.5">{t.role}</p>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── CTA ──────────────────────────────────────────────────────── */
function CTA() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-cta]', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section aria-labelledby="cta-heading" className="py-20 lg:py-28 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="relative rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent px-8 py-16 lg:px-16 text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-400/10 blur-3xl rounded-full" />
          </div>
          <div className="relative">
            <h2 data-cta id="cta-heading" className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Bereit, Zeit zu sparen?
            </h2>
            <p data-cta className="text-zinc-500 mb-10 max-w-md mx-auto">
              Starte kostenlos — ohne Kreditkarte. In 2 Minuten eingerichtet.
            </p>
            <div data-cta className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/preise" className="inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold px-8 py-4 rounded-full transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer">
                Jetzt kostenlos starten <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white font-semibold px-8 py-4 rounded-full transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer">
                Demo anfragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Logos />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  )
}
