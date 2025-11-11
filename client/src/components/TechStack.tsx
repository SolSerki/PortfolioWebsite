import { useLanguage } from '../contexts/LanguageContext'
import LogoLoop, { type LogoItem } from './LogoLoop'
import { 
  SiNodedotjs, SiReact, SiTailwindcss, 
  SiDotnet, SiSpring, SiHibernate,
  SiJsonwebtokens, SiGit, SiJenkins, SiSitecore,
  SiJunit5
} from 'react-icons/si'
import { FaJava, FaCode, FaTasks } from 'react-icons/fa'

export default function TechStack() {
  const { t } = useLanguage()
  
  // Definir los logos de tecnologías
  const techLogos: LogoItem[] = [
    // Learning Now
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiNodedotjs className="text-green-500 text-2xl" />
          <span className="text-sm font-medium">Node.js</span>
        </div>
      ),
      title: 'Node.js'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiReact className="text-cyan-400 text-2xl" />
          <span className="text-sm font-medium">React</span>
        </div>
      ),
      title: 'React'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiTailwindcss className="text-sky-400 text-2xl" />
          <span className="text-sm font-medium">Tailwind CSS</span>
        </div>
      ),
      title: 'Tailwind CSS'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <FaCode className="text-purple-400 text-2xl" />
          <span className="text-sm font-medium">Anime.js</span>
        </div>
      ),
      title: 'Anime.js'
    },
    
    // Backend
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiDotnet className="text-purple-500 text-2xl" />
          <span className="text-sm font-medium">.NET MVC</span>
        </div>
      ),
      title: '.NET MVC'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiDotnet className="text-purple-500 text-2xl" />
          <span className="text-sm font-medium">Entity Framework</span>
        </div>
      ),
      title: 'Entity Framework'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <FaJava className="text-orange-500 text-2xl" />
          <span className="text-sm font-medium">Java</span>
        </div>
      ),
      title: 'Java'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiSpring className="text-green-500 text-2xl" />
          <span className="text-sm font-medium">Spring Boot</span>
        </div>
      ),
      title: 'Spring Boot'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiHibernate className="text-gray-400 text-2xl" />
          <span className="text-sm font-medium">Hibernate</span>
        </div>
      ),
      title: 'Hibernate'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <FaCode className="text-blue-400 text-2xl" />
          <span className="text-sm font-medium">REST APIs</span>
        </div>
      ),
      title: 'REST APIs'
    },
    
    // Auth/Security
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiJsonwebtokens className="text-pink-400 text-2xl" />
          <span className="text-sm font-medium">JWT</span>
        </div>
      ),
      title: 'JWT'
    },
    
    // Tools
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiGit className="text-orange-600 text-2xl" />
          <span className="text-sm font-medium">Git</span>
        </div>
      ),
      title: 'Git'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiJenkins className="text-red-500 text-2xl" />
          <span className="text-sm font-medium">Jenkins</span>
        </div>
      ),
      title: 'Jenkins'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiSitecore className="text-red-600 text-2xl" />
          <span className="text-sm font-medium">Sitecore</span>
        </div>
      ),
      title: 'Sitecore'
    },
    
    // Practices
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <SiJunit5 className="text-green-400 text-2xl" />
          <span className="text-sm font-medium">Unit Testing</span>
        </div>
      ),
      title: 'Unit Testing'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <FaCode className="text-indigo-400 text-2xl" />
          <span className="text-sm font-medium">Design Patterns</span>
        </div>
      ),
      title: 'Design Patterns'
    },
    { 
      node: (
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800">
          <FaTasks className="text-blue-400 text-2xl" />
          <span className="text-sm font-medium">Scrum, FDD</span>
        </div>
      ),
      title: 'Scrum, FDD'
    }
  ]

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-16">
      {/* <h2 className="text-3xl font-bold text-center mb-8">{t('stack.title')}</h2> */}
      
      <div className="space-y-8">
        <LogoLoop 
          logos={techLogos}
          speed={50}
          direction="left"
          logoHeight={15}
          gap={24}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          ariaLabel="Tech Stack"
        />
      </div>
    </section>
  )
}
