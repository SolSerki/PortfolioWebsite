import { useLanguage } from '../contexts/LanguageContext'
import MagicBento, { type BentoCardProps } from '../components/MagicBento'
import { 
  HiGlobeAlt, 
  HiChartBar, 
  HiDevicePhoneMobile,
  HiCloud,
  HiBriefcase,
  HiCog6Tooth,
  HiSparkles,
  HiTag,
  HiPencil,
  HiCheckCircle,
  HiXCircle
} from 'react-icons/hi2'

export default function Services() {
  const { t } = useLanguage()

  const servicesIDoCards: BentoCardProps[] = [
    {
      color: '#000000ff',
      label: <h3 className="font-semibold text-lg mb-2 transition-language">{t('services.webApps')}</h3>,
      colspan: 2,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          <HiGlobeAlt className="text-4xl text-blue-500 mb-3" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400 transition-language">
            {t('services.webAppsDesc')}
          </p>
        </div>
      )
    },
    {
      color: '#000000ff',
      label: <h3 className="font-semibold text-lg mb-2 transition-language">{t('services.dashboards')}</h3>,
      colspan: 2,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          <HiChartBar className="text-4xl text-purple-500 mb-3" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400 transition-language">
            {t('services.dashboardsDesc')}
          </p>
        </div>
      )
    },
    {
      color: '#000000ff',
      label: <h3 className="font-semibold text-lg mb-2 transition-language">{t('services.mobileApps')}</h3>,
      colspan: 2,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          <HiDevicePhoneMobile className="text-4xl text-indigo-500 mb-3" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400 transition-language">
            {t('services.mobileAppsDesc')}
          </p>
        </div>
      )
    },
    {
      color: '#000000ff',
      label: <h3 className="font-semibold text-lg mb-2 transition-language">{t('services.saas')}</h3>,
      colspan: 2,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          <HiCloud className="text-4xl text-cyan-500 mb-3" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400 transition-language">
            {t('services.saasDesc')}
          </p>
        </div>
      )
    },
    {
      color: '#000000ff',
      label: <h3 className="font-semibold text-lg mb-2 transition-language">{t('services.portfolios')}</h3>,
      colspan: 2,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          <HiBriefcase className="text-4xl text-violet-500 mb-3" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400 transition-language">
            {t('services.portfoliosDesc')}
          </p>
        </div>
      )
    },
    {
      color: '#000000ff',
      label: <h3 className="font-semibold text-lg mb-2 transition-language">{t('services.backend')}</h3>,
      colspan: 2,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full">
          <HiCog6Tooth className="text-4xl text-emerald-500 mb-3" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400 transition-language">
            {t('services.backendDesc')}
          </p>
        </div>
      )
    },
    {
      color: '#000000ff',
      label: <h3 className="font-semibold text-lg mb-2 transition-language">{t('services.andMore')}</h3>,
      colspan: 4,
      rowspan: 1,
      content: (
        <div className="flex flex-col h-full items-center justify-center">
          <HiSparkles className="text-4xl text-pink-500 mb-3" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center transition-language">
            {t('services.andMoreDesc')}
          </p>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 transition-language">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('services.title')}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            {t('services.subtitle')}
          </p>
        </div>

        {/* What I Do */}
        <div className="mb-20">
          
          <div className="flex justify-center">
            <MagicBento 
              cards={servicesIDoCards}
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={false}
              enableMagnetism={false}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={10}
              glowColor="132, 0, 255"
            />
          </div>
        </div>

      </div>
    </div>
  )
}
