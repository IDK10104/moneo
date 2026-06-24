import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight, MessageSquare, Book, Headphones } from 'lucide-react'

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', msg: '' })
  const update = (f) => (e) => setForm({ ...form, [f]: e.target.value })

  const inputClass = 'w-full border border-zinc-700 bg-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all min-h-[44px]'
  const labelClass = 'block text-sm font-medium text-zinc-400 mb-1.5'

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 lg:p-10">
      {sent ? (
        <div className="py-12 text-center" role="alert" aria-live="assertive">
          <div className="h-14 w-14 mx-auto rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-5" aria-hidden="true">
            <CheckCircle2 className="h-7 w-7 text-cyan-400" />
          </div>
          <h3 className="text-xl font-black text-white mb-2">Nachricht gesendet!</h3>
          <p className="text-zinc-500 text-sm">Wir melden uns innerhalb von 24 Stunden bei dir.</p>
        </div>
      ) : (
        <form onSubmit={(e) => { e.preventDefault(); setSent(true) }} noValidate aria-label="Kontaktformular">
          <h2 className="text-xl font-black text-white mb-6">Schreib uns</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="k-name" className={labelClass}>
                Name <span aria-label="Pflichtfeld">*</span>
              </label>
              <input
                id="k-name" type="text" required autoComplete="name"
                placeholder="Max Mustermann"
                value={form.name} onChange={update('name')}
                className={inputClass} aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="k-email" className={labelClass}>
                E-Mail <span aria-label="Pflichtfeld">*</span>
              </label>
              <input
                id="k-email" type="email" required autoComplete="email" inputMode="email"
                placeholder="max@beispiel.de"
                value={form.email} onChange={update('email')}
                className={inputClass} aria-required="true"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="k-subject" className={labelClass}>Betreff</label>
            <select
              id="k-subject"
              value={form.subject} onChange={update('subject')}
              className={inputClass}
            >
              <option value="">Bitte wählen…</option>
              <option value="sales">Vertrieb & Demo</option>
              <option value="support">Support</option>
              <option value="billing">Abrechnung</option>
              <option value="other">Sonstiges</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="k-msg" className={labelClass}>
              Nachricht <span aria-label="Pflichtfeld">*</span>
            </label>
            <textarea
              id="k-msg" required rows={5}
              placeholder="Wie können wir dir helfen?"
              value={form.msg} onChange={update('msg')}
              className={`${inputClass} resize-none`} aria-required="true"
            />
          </div>
          <p className="text-xs text-zinc-600 mb-5">Mit * markierte Felder sind Pflichtfelder.</p>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold py-3.5 rounded-full transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 cursor-pointer min-h-[44px]"
          >
            Nachricht senden <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  )
}

function ContactInfo() {
  const channels = [
    {
      icon: Mail,
      title: 'E-Mail',
      value: 'hello@moneo.de',
      href: 'mailto:hello@moneo.de',
      desc: 'Antwort innerhalb von 24 Stunden',
    },
    {
      icon: Phone,
      title: 'Telefon',
      value: '+49 89 123 456 78',
      href: 'tel:+4989123456789',
      desc: 'Mo–Fr, 9:00–17:00 Uhr',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Maximilianstr. 10, 80539 München',
      href: '#',
      desc: 'Moneo GmbH',
    },
  ]
  return (
    <div>
      <h2 className="text-2xl font-black text-white mb-2">Wir sind für dich da.</h2>
      <p className="text-zinc-500 mb-10 leading-relaxed">
        Egal ob du eine Demo willst, Fragen zum Produkt hast oder Support brauchst — schreib uns einfach.
      </p>
      <address className="not-italic flex flex-col gap-5 mb-10">
        {channels.map(c => (
          <a
            key={c.title}
            href={c.href}
            className="flex items-start gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl p-3 -m-3 hover:bg-zinc-900 transition-colors"
          >
            <div className="h-10 w-10 rounded-xl bg-cyan-400/10 group-hover:bg-cyan-400/15 border border-cyan-400/20 flex items-center justify-center shrink-0 transition-colors" aria-hidden="true">
              <c.icon className="h-5 w-5 text-cyan-400" strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-semibold text-white text-sm">{c.title}</p>
              <p className="text-cyan-400 text-sm">{c.value}</p>
              <p className="text-xs text-zinc-600 mt-0.5">{c.desc}</p>
            </div>
          </a>
        ))}
      </address>

      {/* Quick links */}
      <div className="border-t border-zinc-800 pt-8">
        <p className="text-sm font-semibold text-zinc-400 mb-4">Schnelle Hilfe</p>
        <div className="flex flex-col gap-3">
          {[
            { icon: Book, label: 'Dokumentation & Hilfe-Center', href: '#' },
            { icon: MessageSquare, label: 'Community-Forum', href: '#' },
            { icon: Headphones, label: 'Live-Chat öffnen', href: '#' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-3 text-sm text-zinc-500 hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function OpeningHours() {
  return (
    <section aria-labelledby="hours-heading" className="py-12 bg-zinc-900/50 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-zinc-500">
          <Clock className="h-4 w-4 text-cyan-400" aria-hidden="true" />
          <h2 id="hours-heading" className="font-semibold text-zinc-300">Support-Zeiten:</h2>
          <span>Mo–Fr 9:00–17:00 Uhr</span>
          <span className="hidden sm:block text-zinc-700">·</span>
          <span>Durchschnittliche Antwortzeit: unter 4 Stunden</span>
        </div>
      </div>
    </section>
  )
}

export default function Kontakt() {
  return (
    <>
      {/* Page hero */}
      <section aria-labelledby="kontakt-heading" className="bg-zinc-950 border-b border-zinc-800 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-cyan-400/8 blur-3xl rounded-full" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4 block">Kontakt</span>
          <h1 id="kontakt-heading" className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
            Frag uns alles.
          </h1>
          <p className="text-lg text-zinc-500 max-w-md mx-auto">
            Unser Team antwortet werktags innerhalb von 24 Stunden.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section aria-label="Kontaktformular und Informationen" className="py-16 lg:py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <OpeningHours />
    </>
  )
}
