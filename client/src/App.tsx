import { useEffect } from 'react'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import { useLanguage } from './contexts/LanguageContext'

export default function App() {
  const { language, setLanguage, t } = useLanguage()

  // Basic dark-mode toggle persisted in localStorage (simple demo)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/50 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <span className="font-semibold">Sol Serki</span>
          <div className="flex items-center gap-4">
            <nav className="flex gap-4 text-sm">
              <a href="#projects" className="hover:text-accent">{t('nav.projects')}</a>
              <a href="#stack" className="hover:text-accent">{t('nav.techStack')}</a>
              <a href="#contact" className="hover:text-accent">{t('nav.contact')}</a>
            </nav>
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="px-2 py-1 text-xs font-medium rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <TechStack />
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-4">{t('contact.title')}</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">{t('contact.description')}</p>
          <ContactForm />
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Sol Serki. {t('footer.builtWith')}
        </div>
      </footer>
    </div>
  )
}

function ContactForm() {
  const { t } = useLanguage()
  
  function openMailto(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') || '')
    const email = String(fd.get('email') || '')
    const message = String(fd.get('message') || '')

    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    // TODO: set your email address below
    const to = 'you@example.com'
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={openMailto} className="grid gap-3 max-w-xl">
      <input className="px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" name="name" placeholder={t('contact.form.name')} required />
      <input className="px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" name="email" placeholder={t('contact.form.email')} type="email" required />
      <textarea className="px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" name="message" placeholder={t('contact.form.message')} rows={5} required />
      <button className="px-4 py-2 rounded bg-accent text-white font-medium hover:opacity-90 transition">{t('contact.form.send')}</button>
    </form>
  )
}
