import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = String(fd.get('name') || '')
    const email = String(fd.get('email') || '')
    const projectType = String(fd.get('projectType') || '')
    const budget = String(fd.get('budget') || '')
    const description = String(fd.get('description') || '')

    const subject = encodeURIComponent(`${t('contact.budget.emailSubject')} - ${name}`)
    const body = encodeURIComponent(`
${t('contact.budget.name')}: ${name}
${t('contact.budget.email')}: ${email}
${t('contact.budget.projectType')}: ${projectType}
${t('contact.budget.budgetRange')}: ${budget}

${t('contact.budget.description')}:
${description}
    `.trim())
    
    const to = 'you@example.com' // TODO: set your email
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
    
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="transition-language">
          <h1 className="text-4xl font-bold mb-4">{t('contact.title')}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            {t('contact.budget.intro')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5 transition-language">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              {t('contact.budget.name')} <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
              placeholder={t('contact.budget.namePlaceholder')}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              {t('contact.budget.email')} <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
              placeholder={t('contact.budget.emailPlaceholder')}
            />
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium mb-2">
              {t('contact.budget.projectType')} <span className="text-red-500">*</span>
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
            >
              <option value="">{t('contact.budget.selectOption')}</option>
              <option value="web-app">{t('contact.budget.projectTypes.webApp')}</option>
              <option value="api">{t('contact.budget.projectTypes.api')}</option>
              <option value="migration">{t('contact.budget.projectTypes.migration')}</option>
              <option value="consulting">{t('contact.budget.projectTypes.consulting')}</option>
              <option value="maintenance">{t('contact.budget.projectTypes.maintenance')}</option>
              <option value="other">{t('contact.budget.projectTypes.other')}</option>
            </select>
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium mb-2">
              {t('contact.budget.budgetRange')} <span className="text-red-500">*</span>
            </label>
            <select
              id="budget"
              name="budget"
              required
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
            >
              <option value="">{t('contact.budget.selectOption')}</option>
              <option value="<1000">{t('contact.budget.budgetRanges.under1k')}</option>
              <option value="1000-3000">{t('contact.budget.budgetRanges.range1k3k')}</option>
              <option value="3000-5000">{t('contact.budget.budgetRanges.range3k5k')}</option>
              <option value="5000-10000">{t('contact.budget.budgetRanges.range5k10k')}</option>
              <option value="10000+">{t('contact.budget.budgetRanges.over10k')}</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              {t('contact.budget.description')} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={6}
              required
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition resize-y"
              placeholder={t('contact.budget.descriptionPlaceholder')}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition shadow-lg disabled:opacity-50"
            disabled={submitted}
          >
            {submitted ? t('contact.budget.submitted') : t('contact.budget.submit')}
          </button>

          {submitted && (
            <p className="text-sm text-green-600 dark:text-green-400 text-center">
              {t('contact.budget.successMessage')}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
