import { useLanguage } from '../contexts/LanguageContext'
import MagicBento, { type BentoCardProps } from './MagicBento'

export default function TechStack() {
  const { t } = useLanguage()
  
  // Definir las cards con colores y estilos personalizados para cada categoría
  const stackCards: BentoCardProps[] = [
    { 
      color: '#1a0b2e',
      title: t('stack.learningNow'), 
      description: 'Node.js, React, Tailwind CSS, Anime.js',
      label: '🚀 Learning',
      colspan: 1,
      rowspan: 2
    },
    { 
      color: '#1a0b2e',
      title: t('stack.backend'), 
      description: '.NET MVC, Entity Framework, Java, Spring Boot, Hibernate, REST APIs',
      label: '⚙️ Backend',
      colspan: 1,
      rowspan: 2
    },
    { 
      color: '#1a0b2e',
      title: t('stack.authSecurity'), 
      description: 'JWT',
      label: '🔒 Security',
      colspan: 1,
      rowspan: 1
    },
    { 
      color: '#1a0b2e',
      title: t('stack.tools'), 
      description: 'Git, Jenkins, Sitecore',
      label: '🛠️ Tools',
      colspan: 1,
      rowspan: 1
    },
    { 
      color: '#1a0b2e',
      title: t('stack.practices'), 
      description: 'Unit Testing, Design Patterns, Scrum, FDD',
      label: '📋 Practices',
      colspan: 1,
      rowspan: 1
    },
    { 
      color: '#1a0b2e',
      title: t('stack.languages'), 
      description: 'English (C2), Spanish (Native)',
      label: '🌍 Languages'
    }
  ]

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">{t('stack.title')}</h2>
      <div className="flex justify-center">
        <MagicBento 
          cards={stackCards}
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={15}
          glowColor="99, 102, 241"
        />
      </div>
    </section>
  )
}
