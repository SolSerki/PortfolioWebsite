import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

type Translations = {
  // Header/Nav
  'nav.projects': string
  'nav.techStack': string
  'nav.contact': string
  
  // Hero
  'hero.title': string
  'hero.subtitle': string
  'hero.cta.projects': string
  'hero.cta.stack': string
  
  // Tech Stack
  'stack.title': string
  'stack.learningNow': string
  'stack.backend': string
  'stack.authSecurity': string
  'stack.tools': string
  'stack.practices': string
  'stack.languages': string
  
  // Contact
  'contact.title': string
  'contact.description': string
  'contact.form.name': string
  'contact.form.email': string
  'contact.form.message': string
  'contact.form.send': string
  
  // Footer
  'footer.builtWith': string
}

const translations: Record<Language, Translations> = {
  en: {
    'nav.projects': 'Projects',
    'nav.techStack': 'Tech Stack',
    'nav.contact': 'Contact',
    
    'hero.title': 'Back End Developer learning Node.js & React',
    'hero.subtitle': '5+ years building reliable web backends (.NET, Java/Spring). Now expanding into Node.js, React, Tailwind, and delightful UI animations.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.stack': 'My Tech Stack',
    
    'stack.title': 'Tech Stack',
    'stack.learningNow': 'Learning Now',
    'stack.backend': 'Backend',
    'stack.authSecurity': 'Auth/Security',
    'stack.tools': 'Tools',
    'stack.practices': 'Practices',
    'stack.languages': 'Languages',
    
    'contact.title': 'Contact',
    'contact.description': 'No backend needed — this uses your email client.',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.message': 'Your message',
    'contact.form.send': 'Send',
    
    'footer.builtWith': 'Built with React, Tailwind, Anime.js.'
  },
  es: {
    'nav.projects': 'Proyectos',
    'nav.techStack': 'Stack Técnico',
    'nav.contact': 'Contacto',
    
    'hero.title': 'Desarrolladora Back End aprendiendo Node.js y React',
    'hero.subtitle': '5+ años construyendo backends web confiables (.NET, Java/Spring). Ahora expandiéndome a Node.js, React, Tailwind y animaciones UI encantadoras.',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.stack': 'Mi Stack Técnico',
    
    'stack.title': 'Stack Técnico',
    'stack.learningNow': 'Aprendiendo Ahora',
    'stack.backend': 'Backend',
    'stack.authSecurity': 'Auth/Seguridad',
    'stack.tools': 'Herramientas',
    'stack.practices': 'Prácticas',
    'stack.languages': 'Idiomas',
    
    'contact.title': 'Contacto',
    'contact.description': 'Sin backend necesario — esto usa tu cliente de correo.',
    'contact.form.name': 'Tu nombre',
    'contact.form.email': 'Tu correo',
    'contact.form.message': 'Tu mensaje',
    'contact.form.send': 'Enviar',
    
    'footer.builtWith': 'Construido con React, Tailwind, Anime.js.'
  }
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof Translations) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get saved language from localStorage, default to browser language or 'en'
    const saved = localStorage.getItem('language') as Language | null
    if (saved && (saved === 'en' || saved === 'es')) return saved
    
    const browserLang = navigator.language.toLowerCase()
    return browserLang.startsWith('es') ? 'es' : 'en'
  })

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: keyof Translations): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
