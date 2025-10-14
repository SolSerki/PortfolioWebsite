import { useLanguage } from '../contexts/LanguageContext'

type StackCategory = { name: string; items: string[] }

export default function TechStack() {
  const { t } = useLanguage()
  
  const stack: StackCategory[] = [
    { name: t('stack.learningNow'), items: ['Node.js', 'React', 'Tailwind CSS', 'Anime.js'] },
    { name: t('stack.backend'), items: ['.NET MVC', 'Entity Framework', 'Java', 'Spring Boot', 'Hibernate', 'REST APIs'] },
    { name: t('stack.authSecurity'), items: ['JWT'] },
    { name: t('stack.tools'), items: ['Git', 'Jenkins', 'Sitecore'] },
    { name: t('stack.practices'), items: ['Unit Testing', 'Design Patterns', 'Scrum', 'FDD'] },
    { name: t('stack.languages'), items: ['English (C2)', 'Spanish (Native)'] }
  ]

  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold mb-6">{t('stack.title')}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map(cat => (
          <div key={cat.name} className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
            <h3 className="font-semibold mb-2">{cat.name}</h3>
            <ul className="flex flex-wrap gap-2">
              {cat.items.map(item => (
                <li key={item} className="text-sm px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
