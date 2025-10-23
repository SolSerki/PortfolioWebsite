import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { useLanguage } from './contexts/LanguageContext'
import Hero from './components/Hero'
import Contact from './pages/Contact'

type Section = 'hero' | 'contact'

export default function App() {
  const { language, setLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState<Section>('hero')

  // Basic dark-mode toggle persisted in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  return (
    <>
      {/* Outer Frame Container */}
      <div className="fixed inset-0 pointer-events-none z-[100]">
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-6 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800" />
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-6 bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800" />
        {/* Left border */}
        <div className="absolute top-0 bottom-0 left-0 w-6 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800" />
        {/* Right border */}
        <div className="absolute top-0 bottom-0 right-0 w-6 bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800" />
      </div>

      <div className="min-h-screen flex flex-col">
        {/* Static Navigation Header - Fixed at top */}
        <header className="fixed top-6 left-6 right-6 z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border border-zinc-200/50 dark:border-zinc-800 rounded-2xl pointer-events-auto">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Sol Serki" className="w-10 h-10" />
              <span className="font-bold text-lg">Sol Serki</span>
            </div>

            {/* Navigation Buttons */}
            <nav className="flex items-center gap-2">
              <button
                onClick={() => setActiveSection('hero')}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeSection === 'hero'
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setActiveSection('contact')}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeSection === 'contact'
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {t('nav.contact')}
              </button>
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="ml-2 px-4 py-2 rounded-full font-medium bg-transparent text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                aria-label="Toggle language"
              >
                {language === 'en' ? 'ES' : 'EN'}
              </button>
            </nav>
          </div>
        </header>

        {/* Content Area with rounded border */}
        <main className="flex-1 mt-[96px] mb-[80px] mx-6 overflow-auto rounded-2xl border border-zinc-200 dark:border-zinc-800">
          {activeSection === 'hero' && <Hero />}
          {activeSection === 'contact' && <Contact />}
        </main>

        {/* Footer - Fixed at bottom */}
        <footer className="fixed bottom-6 left-6 right-6 z-50 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur pointer-events-auto">
          <div className="mx-auto max-w-6xl px-6 py-4 text-sm text-zinc-500 text-center">
            © {new Date().getFullYear()} Sol Serki. {t('footer.builtWith')}
          </div>
        </footer>
      </div>
      <Analytics />
    </>
  )
}
