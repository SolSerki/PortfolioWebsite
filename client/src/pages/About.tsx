import { useLanguage } from '../contexts/LanguageContext'
import { HiAcademicCap, HiBriefcase, HiHeart, HiSparkles } from 'react-icons/hi2'
import { FaBook, FaPen, FaGamepad, FaMusic, FaDiceD20, FaUtensils } from 'react-icons/fa'

export default function About() {
  const { t } = useLanguage()

  const handleCreativeClick = () => {
    window.location.href = '/creative'
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 transition-language">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{t('about.title')}</h1>
        </div>

        {/* Profile Section */}
        <section className="mb-12 sm:mb-14 md:mb-16">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <HiSparkles className="text-2xl sm:text-3xl text-accent" />
            <h2 className="text-xl sm:text-2xl font-bold transition-language">{t('about.profile.title')}</h2>
          </div>
          <div className="prose prose-zinc dark:prose-invert max-w-none">
            <p className="text-base sm:text-lg leading-relaxed transition-language">{t('about.profile.description')}</p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <HiBriefcase className="text-3xl text-accent" />
            <h2 className="text-2xl font-bold transition-language">{t('about.work.title')}</h2>
          </div>

          <div className="space-y-8">
            {/* Vetty */}
            <div className="border-l-4 border-accent pl-6 transition-language">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h3 className="text-xl font-semibold">{t('about.work.vetty.role')}</h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t('about.work.vetty.period')}
                </span>
              </div>
              <p className="text-accent font-medium mb-3">{t('about.work.vetty.company')}</p>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>• {t('about.work.vetty.point1')}</li>
                <li>• {t('about.work.vetty.point2')}</li>
                <li>• {t('about.work.vetty.point3')}</li>
                <li>• {t('about.work.vetty.point4')}</li>
              </ul>
            </div>

            {/* Accenture */}
            <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6 transition-language">
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h3 className="text-xl font-semibold">{t('about.work.accenture.role')}</h3>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                  {t('about.work.accenture.period')}
                </span>
              </div>
              <p className="text-accent font-medium mb-3">{t('about.work.accenture.company')}</p>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>• {t('about.work.accenture.point1')}</li>
                <li>• {t('about.work.accenture.point2')}</li>
                <li>• {t('about.work.accenture.point3')}</li>
                <li>• {t('about.work.accenture.point4')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interests & Hobbies */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <HiHeart className="text-3xl text-accent" />
            <h2 className="text-2xl font-bold transition-language">{t('about.interests.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800 transition-language">
              <FaBook className="text-2xl text-purple-600 dark:text-purple-400 mb-3" />
              <h3 className="font-semibold mb-2">{t('about.interests.reading.title')}</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{t('about.interests.reading.description')}</p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200 dark:border-blue-800 transition-language">
              <FaPen className="text-2xl text-blue-600 dark:text-blue-400 mb-3" />
              <h3 className="font-semibold mb-2">{t('about.interests.writing.title')}</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{t('about.interests.writing.description')}</p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 transition-language">
              <FaGamepad className="text-2xl text-green-600 dark:text-green-400 mb-3" />
              <h3 className="font-semibold mb-2">{t('about.interests.gaming.title')}</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{t('about.interests.gaming.description')}</p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border border-pink-200 dark:border-pink-800 transition-language">
              <FaMusic className="text-2xl text-pink-600 dark:text-pink-400 mb-3" />
              <h3 className="font-semibold mb-2">{t('about.interests.music.title')}</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{t('about.interests.music.description')}</p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 transition-language">
              <FaDiceD20 className="text-2xl text-amber-600 dark:text-amber-400 mb-3" />
              <h3 className="font-semibold mb-2">{t('about.interests.roleplay.title')}</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{t('about.interests.roleplay.description')}</p>
            </div>

            <div className="p-5 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border border-red-200 dark:border-red-800 transition-language">
              <FaUtensils className="text-2xl text-red-600 dark:text-red-400 mb-3" />
              <h3 className="font-semibold mb-2">{t('about.interests.cooking.title')}</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">{t('about.interests.cooking.description')}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleCreativeClick}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              <HiSparkles className="text-xl" />
              <span className="transition-language">{t('about.interests.exploreCreative')}</span>
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
