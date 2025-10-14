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
  
  // Budget Form
  'contact.budget.intro': string
  'contact.budget.name': string
  'contact.budget.email': string
  'contact.budget.projectType': string
  'contact.budget.budgetRange': string
  'contact.budget.description': string
  'contact.budget.namePlaceholder': string
  'contact.budget.emailPlaceholder': string
  'contact.budget.descriptionPlaceholder': string
  'contact.budget.selectOption': string
  'contact.budget.submit': string
  'contact.budget.submitted': string
  'contact.budget.successMessage': string
  'contact.budget.emailSubject': string
  'contact.budget.projectTypes.webApp': string
  'contact.budget.projectTypes.api': string
  'contact.budget.projectTypes.migration': string
  'contact.budget.projectTypes.consulting': string
  'contact.budget.projectTypes.maintenance': string
  'contact.budget.projectTypes.other': string
  'contact.budget.budgetRanges.under1k': string
  'contact.budget.budgetRanges.range1k3k': string
  'contact.budget.budgetRanges.range3k5k': string
  'contact.budget.budgetRanges.range5k10k': string
  'contact.budget.budgetRanges.over10k': string
  
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
    
    'contact.budget.intro': 'Tell me about your project and I\'ll get back to you with a personalized quote.',
    'contact.budget.name': 'Full Name',
    'contact.budget.email': 'Email Address',
    'contact.budget.projectType': 'Project Type',
    'contact.budget.budgetRange': 'Budget Range',
    'contact.budget.description': 'Project Description',
    'contact.budget.namePlaceholder': 'John Doe',
    'contact.budget.emailPlaceholder': 'john@example.com',
    'contact.budget.descriptionPlaceholder': 'Describe your project, requirements, timeline, etc.',
    'contact.budget.selectOption': 'Select an option',
    'contact.budget.submit': 'Request Quote',
    'contact.budget.submitted': 'Sent!',
    'contact.budget.successMessage': 'Your email client should open. Send the email to complete your request.',
    'contact.budget.emailSubject': 'Budget Request',
    'contact.budget.projectTypes.webApp': 'Web Application',
    'contact.budget.projectTypes.api': 'REST API / Backend',
    'contact.budget.projectTypes.migration': 'Migration / Modernization',
    'contact.budget.projectTypes.consulting': 'Consulting / Code Review',
    'contact.budget.projectTypes.maintenance': 'Maintenance / Support',
    'contact.budget.projectTypes.other': 'Other',
    'contact.budget.budgetRanges.under1k': 'Less than $1,000',
    'contact.budget.budgetRanges.range1k3k': '$1,000 - $3,000',
    'contact.budget.budgetRanges.range3k5k': '$3,000 - $5,000',
    'contact.budget.budgetRanges.range5k10k': '$5,000 - $10,000',
    'contact.budget.budgetRanges.over10k': 'More than $10,000',
    
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
    
    'contact.budget.intro': 'Cuéntame sobre tu proyecto y te responderé con un presupuesto personalizado.',
    'contact.budget.name': 'Nombre Completo',
    'contact.budget.email': 'Correo Electrónico',
    'contact.budget.projectType': 'Tipo de Proyecto',
    'contact.budget.budgetRange': 'Rango de Presupuesto',
    'contact.budget.description': 'Descripción del Proyecto',
    'contact.budget.namePlaceholder': 'María García',
    'contact.budget.emailPlaceholder': 'maria@ejemplo.com',
    'contact.budget.descriptionPlaceholder': 'Describe tu proyecto, requisitos, plazos, etc.',
    'contact.budget.selectOption': 'Selecciona una opción',
    'contact.budget.submit': 'Solicitar Presupuesto',
    'contact.budget.submitted': '¡Enviado!',
    'contact.budget.successMessage': 'Tu cliente de correo debería abrirse. Envía el email para completar tu solicitud.',
    'contact.budget.emailSubject': 'Solicitud de Presupuesto',
    'contact.budget.projectTypes.webApp': 'Aplicación Web',
    'contact.budget.projectTypes.api': 'REST API / Backend',
    'contact.budget.projectTypes.migration': 'Migración / Modernización',
    'contact.budget.projectTypes.consulting': 'Consultoría / Revisión de Código',
    'contact.budget.projectTypes.maintenance': 'Mantenimiento / Soporte',
    'contact.budget.projectTypes.other': 'Otro',
    'contact.budget.budgetRanges.under1k': 'Menos de $1,000',
    'contact.budget.budgetRanges.range1k3k': '$1,000 - $3,000',
    'contact.budget.budgetRanges.range3k5k': '$3,000 - $5,000',
    'contact.budget.budgetRanges.range5k10k': '$5,000 - $10,000',
    'contact.budget.budgetRanges.over10k': 'Más de $10,000',
    
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
