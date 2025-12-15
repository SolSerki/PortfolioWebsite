import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { useLanguage } from './contexts/LanguageContext'
import { NavigationWrapper } from './components/navigation'
import Hero from './components/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Creative from './pages/Creative'
import { HiHome, HiRectangleGroup, HiCog6Tooth, HiEnvelope, HiLanguage, HiUser } from 'react-icons/hi2'

export default function App() {
  const { language, setLanguage, t } = useLanguage()
  const [showCreative, setShowCreative] = useState(false)

  // Check for creative mode in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('creative') === 'true') {
      setShowCreative(true)
    }
  }, [])

  // Basic dark-mode toggle persisted in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : (saved === null ? true : prefersDark)
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  const navItems = [
    {
      icon: <HiHome className="text-2xl" />,
      label: 'Home',
      onClick: () => {},
      className: 'nav-hero'
    },
    {
      icon: <HiUser className="text-2xl" />,
      label: t('nav.about'),
      onClick: () => {},
      className: 'nav-about'
    },
    {
      icon: <HiRectangleGroup className="text-2xl" />,
      label: t('nav.projects'),
      onClick: () => {},
      className: 'nav-projects'
    },
    {
      icon: <HiCog6Tooth className="text-2xl" />,
      label: t('services.title'),
      onClick: () => {},
      className: 'nav-services'
    },
    {
      icon: <HiEnvelope className="text-2xl" />,
      label: t('nav.contact'),
      onClick: () => {},
      className: 'nav-contact'
    },
    {
      icon: <HiLanguage className="text-2xl" />,
      label: language === 'en' ? 'ES' : 'EN',
      onClick: () => setLanguage(language === 'en' ? 'es' : 'en'),
      className: 'nav-language'
    }
  ]

  // If creative mode is active, show only the Creative page
  if (showCreative) {
    return (
      <>
        <Creative />
        <Analytics />
      </>
    )
  }

  return (
    <>
      <div className="min-h-screen">
        {/* Navigation Wrapper */}
        <NavigationWrapper
          items={navItems}
          initialStyle="hamburger"
          showStyleSelector={false}
          className="bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800 rounded-2xl p-2"
        />

        {/* All Sections in Single Page */}
        <main>
          <section id="hero">
            <Hero />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="services">
            <Services />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-6 text-xs sm:text-sm text-zinc-500">
            <div className="text-center mb-2 sm:mb-3">
              {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
            </div>
            <div className="text-center text-xs text-zinc-400 dark:text-zinc-600 mb-1.5 sm:mb-2 px-2">
              {t('footer.creativeRights')}
            </div>
            <div className="text-center text-xs">
              {t('footer.builtWith')}
            </div>
          </div>
        </footer>
      </div>
      <Analytics />
    </>
  )
}
