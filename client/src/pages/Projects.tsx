import { useLanguage } from '../contexts/LanguageContext'
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiVite,
  SiNodedotjs,
  SiPostgresql,
  SiStripe,
  SiFirebase,
  SiMaterialdesign,
  SiSpringboot,
  SiThymeleaf,
  SiBootstrap,
  SiMysql
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { type IconType } from 'react-icons'

type ProjectStatus = 'completed' | 'development' | 'on-hold' | 'planned'

// Technology icons mapping
const techIcons: Record<string, IconType> = {
  'React': SiReact,
  'TypeScript': SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  'Vite': SiVite,
  'Node.js': SiNodedotjs,
  'PostgreSQL': SiPostgresql,
  'Stripe': SiStripe,
  'Firebase': SiFirebase,
  'Material-UI': SiMaterialdesign,
  'Java': FaJava,
  'Spring Boot': SiSpringboot,
  'Thymeleaf': SiThymeleaf,
  'Bootstrap': SiBootstrap,
  'MySQL': SiMysql
}

const techColors: Record<string, string> = {
  'React': 'text-cyan-400',
  'TypeScript': 'text-blue-500',
  'Tailwind CSS': 'text-sky-400',
  'Vite': 'text-purple-500',
  'Node.js': 'text-green-500',
  'PostgreSQL': 'text-blue-600',
  'Stripe': 'text-purple-600',
  'Firebase': 'text-orange-500',
  'Material-UI': 'text-blue-400',
  'Java': 'text-orange-600',
  'Spring Boot': 'text-green-600',
  'Thymeleaf': 'text-green-500',
  'Bootstrap': 'text-purple-500',
  'MySQL': 'text-blue-500'
}

interface Project {
  id: string
  title: string
  description: string
  status: ProjectStatus
  progress: number // 0-100
  technologies: string[]
  link?: string
  github?: string
}

const statusConfig: Record<ProjectStatus, { 
  labelEN: string
  labelES: string
  color: string
  bgColor: string
  progressColor: string
}> = {
  'completed': { 
    labelEN: 'Completed',
    labelES: 'Completado',
    color: 'text-green-700 dark:text-green-400',
    bgColor: 'bg-green-100 dark:bg-green-950/30 border-green-200 dark:border-green-900',
    progressColor: 'bg-green-500'
  },
  'development': { 
    labelEN: 'In Development',
    labelES: 'En Desarrollo',
    color: 'text-blue-700 dark:text-blue-400',
    bgColor: 'bg-blue-100 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900',
    progressColor: 'bg-blue-500'
  },
  'on-hold': { 
    labelEN: 'On Hold',
    labelES: 'En Espera',
    color: 'text-yellow-700 dark:text-yellow-400',
    bgColor: 'bg-yellow-100 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900',
    progressColor: 'bg-yellow-500'
  },
  'planned': { 
    labelEN: 'Planned',
    labelES: 'Planificado',
    color: 'text-zinc-700 dark:text-zinc-400',
    bgColor: 'bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800',
    progressColor: 'bg-zinc-500'
  }
}

export default function Projects() {
  const { language } = useLanguage()

  const projects: Project[] = [
    {
      id: '1',
      title: 'Vetty',
      description: language === 'en'
        ? 'Veterinary management system with appointment scheduling, medical records, and client management. Built with Spring Boot and modern web technologies.'
        : 'Sistema de gestión veterinaria con agenda de turnos, historias clínicas y gestión de clientes. Construido con Spring Boot y tecnologías web modernas.',
      status: 'development',
      progress: 60,
      technologies: ['Java', 'Spring Boot', 'Thymeleaf', 'Bootstrap', 'MySQL'],
      github: 'https://github.com/SolSerki/Vetty'
    },
    {
      id: '2',
      title: 'Portfolio Website',
      description: language === 'en'
        ? 'Personal portfolio built with React, TypeScript, and Tailwind CSS featuring animated backgrounds and modern UI components.'
        : 'Portafolio personal construido con React, TypeScript y Tailwind CSS con fondos animados y componentes UI modernos.',
      status: 'completed',
      progress: 100,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/SolSerki/PortfolioWebsite'
    }
  ]

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 transition-language">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'en' ? 'Projects' : 'Proyectos'}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            {language === 'en' 
              ? 'A collection of my work and side projects' 
              : 'Una colección de mi trabajo y proyectos personales'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project) => {
            const statusStyle = statusConfig[project.status]
            return (
              <article 
                key={project.id}
                className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-700 hover:-translate-y-1 transition-language"
              >
                {/* Status Badge & Progress */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6 transition-language">
                  <div className="flex-1 space-y-4">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h2>
                    
                    {/* Status & Progress Container */}
                    <div className="flex items-center gap-4">
                      <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold ${statusStyle.color} ${statusStyle.bgColor}`}>
                        <span className={`w-2 h-2 rounded-full ${statusStyle.progressColor} animate-pulse`}></span>
                        {language === 'en' ? statusStyle.labelEN : statusStyle.labelES}
                      </span>
                      <span className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
                        {project.progress}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative w-full max-w-md h-3 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className={`absolute inset-y-0 left-0 ${statusStyle.progressColor} rounded-full transition-all duration-700 ease-out`}
                        style={{ width: `${project.progress}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  {(project.link || project.github) && (
                    <div className="flex gap-3">
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                        >
                          {language === 'en' ? 'View Project' : 'Ver Proyecto'}
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 dark:bg-zinc-700 text-white rounded-xl font-semibold hover:bg-zinc-900 dark:hover:bg-zinc-600 transition-all shadow-lg hover:shadow-xl"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed text-lg transition-language">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => {
                    const Icon = techIcons[tech]
                    const color = techColors[tech]
                    return (
                      <span 
                        key={tech}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl border border-zinc-200 dark:border-zinc-700 hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
                      >
                        {Icon && <Icon className={`text-lg ${color}`} />}
                        {tech}
                      </span>
                    )
                  })}
                </div>

               
              </article>
            )
          })}
        </div>
      </div>

      {/* Add shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}
