import { useEffect, useState, useRef } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { useLanguage } from './contexts/LanguageContext'
import CardNav from './components/CardNav'
import Hero from './components/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Creative from './pages/Creative'
import { HiHome, HiRectangleGroup, HiCog6Tooth, HiEnvelope, HiLanguage, HiUser } from 'react-icons/hi2'

export default function App() {
  const { language, setLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [navVisible, setNavVisible] = useState(true)
  const [showCreative, setShowCreative] = useState(false)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

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
    const dark = saved ? saved === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // Offset for fixed nav
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      // Set as scrolling to prevent intermediate updates
      isScrollingRef.current = true
      
      // Immediately set the target section as active
      setActiveSection(sectionId)

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Re-enable tracking after scroll completes
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false
      }, 1000)
    }
  }

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Skip updates during programmatic scrolling
      if (isScrollingRef.current) return

      const sections = ['hero', 'about', 'projects', 'services', 'contact']
      const scrollPosition = window.scrollY + 150 // offset for better detection

      // Check each section's position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const sectionTop = section.offsetTop
          
          // If we've scrolled past this section's top, it's the active one
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    // Initial check
    handleScroll()

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const navItems = [
    {
      icon: <HiHome className="text-2xl" />,
      label: 'Home',
      onClick: () => scrollToSection('hero'),
      isActive: activeSection === 'hero'
    },
    {
      icon: <HiUser className="text-2xl" />,
      label: t('nav.about'),
      onClick: () => scrollToSection('about'),
      isActive: activeSection === 'about'
    },
    {
      icon: <HiRectangleGroup className="text-2xl" />,
      label: t('nav.projects'),
      onClick: () => scrollToSection('projects'),
      isActive: activeSection === 'projects'
    },
    {
      icon: <HiCog6Tooth className="text-2xl" />,
      label: t('services.title'),
      onClick: () => scrollToSection('services'),
      isActive: activeSection === 'services'
    },
    {
      icon: <HiEnvelope className="text-2xl" />,
      label: t('nav.contact'),
      onClick: () => scrollToSection('contact'),
      isActive: activeSection === 'contact'
    },
    {
      icon: <HiLanguage className="text-2xl" />,
      label: language === 'en' ? 'ES' : 'EN',
      onClick: () => setLanguage(language === 'en' ? 'es' : 'en'),
      isActive: false
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
        {/* Menu Toggle Button */}
        <button
          onClick={() => setNavVisible(!navVisible)}
          className="fixed top-4 right-4 z-[60] p-3 rounded-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800 hover:bg-white/90 dark:hover:bg-zinc-900/90 transition-all"
          aria-label={navVisible ? 'Hide menu' : 'Show menu'}
        >
          <img 
            src="/TriangularOrnament.svg" 
            alt="Toggle menu"
            className={`w-10 h-10 transition-transform duration-300 brightness-0 invert ${navVisible ? 'rotate-180' : ''}`}
          />
        </button>

        {/* CardNav Navigation */}
        <div 
          className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
            navVisible ? 'top-4' : '-top-[100px]'
          }`}
        >
          <CardNav
            items={navItems}
            className="bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800 rounded-2xl p-2"
          />
        </div>

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
          <div className="mx-auto max-w-6xl px-6 py-4 text-sm text-zinc-500 text-center">
            © {new Date().getFullYear()} Sol Serki. {t('footer.builtWith')}
          </div>
        </footer>
      </div>
      <Analytics />
    </>
  )
}
