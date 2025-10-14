import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useLanguage } from './contexts/LanguageContext'
import Home from './pages/Home'
import Contact from './pages/Contact'

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
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-10 backdrop-blur bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/50 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link to="/" className="font-semibold hover:text-accent transition">Sol Serki</Link>
            <div className="flex items-center gap-4">
              <nav className="flex gap-4 text-sm">
                <a href="#projects" className="hover:text-accent">{t('nav.projects')}</a>
                <a href="#stack" className="hover:text-accent">{t('nav.techStack')}</a>
                <Link to="/contact" className="hover:text-accent">{t('nav.contact')}</Link>
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

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
            © {new Date().getFullYear()} Sol Serki. {t('footer.builtWith')}
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
