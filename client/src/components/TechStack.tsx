import { useLanguage } from '../contexts/LanguageContext'
import { useEffect, useRef, useState } from 'react'

type StackCategory = { 
  name: string
  items: string[]
  size?: 'small' | 'medium' | 'large'
  gradient?: string
}

export default function TechStack() {
  const { t } = useLanguage()
  
  const stack: StackCategory[] = [
    { 
      name: t('stack.learningNow'), 
      items: ['Node.js', 'React', 'Tailwind CSS', 'Anime.js'],
      size: 'large',
      gradient: 'from-violet-500/10 to-purple-500/10'
    },
    { 
      name: t('stack.backend'), 
      items: ['.NET MVC', 'Entity Framework', 'Java', 'Spring Boot', 'Hibernate', 'REST APIs'],
      size: 'large',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    { 
      name: t('stack.authSecurity'), 
      items: ['JWT'],
      size: 'small',
      gradient: 'from-red-500/10 to-orange-500/10'
    },
    { 
      name: t('stack.tools'), 
      items: ['Git', 'Jenkins', 'Sitecore'],
      size: 'medium',
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    { 
      name: t('stack.practices'), 
      items: ['Unit Testing', 'Design Patterns', 'Scrum', 'FDD'],
      size: 'medium',
      gradient: 'from-amber-500/10 to-yellow-500/10'
    },
    { 
      name: t('stack.languages'), 
      items: ['English (C2)', 'Spanish (Native)'],
      size: 'small',
      gradient: 'from-pink-500/10 to-rose-500/10'
    }
  ]

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold mb-8">{t('stack.title')}</h2>
      <MagicBentoGrid items={stack} />
    </section>
  )
}

function MagicBentoGrid({ items }: { items: StackCategory[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
      {items.map((cat, idx) => (
        <BentoCard key={cat.name} category={cat} index={idx} />
      ))}
    </div>
  )
}

function BentoCard({ category, index }: { category: StackCategory; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-2 row-span-1'
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePosition({ x, y })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('bento-animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        ${sizeClasses[category.size || 'medium']}
        group relative overflow-hidden rounded-2xl
        border border-zinc-200 dark:border-zinc-800
        bg-gradient-to-br ${category.gradient || 'from-zinc-50/50 to-zinc-100/50'}
        dark:from-zinc-900/50 dark:to-zinc-800/50
        backdrop-blur-sm
        transition-all duration-500 ease-out
        hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/5
        cursor-pointer
        opacity-0 translate-y-4
      `}
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      {/* Spotlight effect on hover */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(var(--accent-rgb, 124, 58, 237), 0.1), transparent 40%)`
          }}
        />
      )}

      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Content */}
      <div className="relative h-full p-5 flex flex-col">
        <h3 className="text-base font-bold mb-3 text-zinc-900 dark:text-zinc-100 transition-colors">
          {category.name}
        </h3>
        <ul className="flex flex-wrap gap-2 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
          {category.items.map((item, i) => (
            <li
              key={item}
              className="text-xs px-2.5 py-1 rounded-md bg-white/60 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-accent/10 hover:border-accent/30"
              style={{
                animationDelay: `${(index * 100) + (i * 50)}ms`
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Corner decoration */}
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-colors duration-300" />
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
