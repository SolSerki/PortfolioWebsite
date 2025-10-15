import { useLanguage } from '../contexts/LanguageContext'
import MagicBento, { type BentoCardProps } from './MagicBento'
import { 
  SiNodedotjs, SiReact, SiTailwindcss, 
  SiDotnet, SiSpring, SiHibernate,
  SiJsonwebtokens, SiGit, SiJenkins, SiSitecore,
  SiJunit5
} from 'react-icons/si'
import { FaJava, FaCode, FaLanguage, FaTasks } from 'react-icons/fa'

export default function TechStack() {
  const { t } = useLanguage()
  
  // Definir las cards con iconos y contenido personalizado
  const stackCards: BentoCardProps[] = [
    { 
      color: '#1a0b2e',
      label: <h3 className="font-semibold text-lg mb-3">{t('stack.learningNow')}</h3>,
      colspan: 1,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-2 text-sm">
              <SiNodedotjs className="text-green-500 text-xl flex-shrink-0" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <SiReact className="text-cyan-400 text-xl flex-shrink-0" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <SiTailwindcss className="text-sky-400 text-xl flex-shrink-0" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaCode className="text-purple-400 text-xl flex-shrink-0" />
              <span>Anime.js</span>
            </div>
          </div>
        </div>
      )
    },
    { 
      color: '#1a0b2e',
      label: <h3 className="font-semibold text-lg mb-3">{t('stack.backend')}</h3>,
      colspan: 1,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-2 text-sm">
              <SiDotnet className="text-purple-500 text-xl flex-shrink-0" />
              <span>.NET MVC, Entity Framework</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaJava className="text-orange-500 text-xl flex-shrink-0" />
              <span>Java</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <SiSpring className="text-green-500 text-xl flex-shrink-0" />
              <span>Spring Boot</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <SiHibernate className="text-gray-400 text-xl flex-shrink-0" />
              <span>Hibernate</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaCode className="text-blue-400 text-xl flex-shrink-0" />
              <span>REST APIs</span>
            </div>
          </div>
        </div>
      )
    },
    { 
      color: '#1a0b2e',
      label: <h3 className="font-semibold text-lg mb-3">{t('stack.authSecurity')}</h3>,
      colspan: 1,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 text-sm">
            <SiJsonwebtokens className="text-pink-400 text-xl flex-shrink-0" />
            <span>JWT</span>
          </div>
        </div>
      )
    },
    { 
      color: '#1a0b2e',
      label: <h3 className="font-semibold text-lg mb-3">{t('stack.tools')}</h3>,
      colspan: 1,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm">
              <SiGit className="text-orange-600 text-xl flex-shrink-0" />
              <span>Git</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <SiJenkins className="text-red-500 text-xl flex-shrink-0" />
              <span>Jenkins</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <SiSitecore className="text-red-600 text-xl flex-shrink-0" />
              <span>Sitecore</span>
            </div>
          </div>
        </div>
      )
    },
    { 
      color: '#1a0b2e',
      label:  <h3 className="font-semibold text-lg mb-3">{t('stack.practices')}</h3>,
      colspan: 1,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm">
              <SiJunit5 className="text-green-400 text-xl flex-shrink-0" />
              <span>Unit Testing</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaCode className="text-indigo-400 text-xl flex-shrink-0" />
              <span>Design Patterns</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaTasks className="text-blue-400 text-xl flex-shrink-0" />
              <span>Scrum, FDD</span>
            </div>
          </div>
        </div>
      )
    },
    { 
      color: '#1a0b2e',
      label: <h3 className="font-semibold text-lg mb-3">{t('stack.languages')}</h3>,
      content: (
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm">
              <FaLanguage className="text-blue-400 text-xl flex-shrink-0" />
              <span>English (C2)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaLanguage className="text-yellow-400 text-xl flex-shrink-0" />
              <span>Spanish (Native)</span>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-16">
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
