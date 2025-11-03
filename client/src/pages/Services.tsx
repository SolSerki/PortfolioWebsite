import { useLanguage } from '../contexts/LanguageContext'
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
import { type IconType } from 'react-icons'

interface Service {
  Icon: IconType
  title: string
  description: string
  color: string
}

export default function Services() {
  const { t } = useLanguage()

  const servicesIDo: Service[] = [
    {
      Icon: HiGlobeAlt,
      title: t('services.webApps'),
      description: t('services.webAppsDesc'),
      color: 'text-blue-500'
    },
    {
      Icon: HiChartBar,
      title: t('services.dashboards'),
      description: t('services.dashboardsDesc'),
      color: 'text-purple-500'
    },
    {
      Icon: HiDevicePhoneMobile,
      title: t('services.mobileApps'),
      description: t('services.mobileAppsDesc'),
      color: 'text-indigo-500'
    },
    {
      Icon: HiCloud,
      title: t('services.saas'),
      description: t('services.saasDesc'),
      color: 'text-cyan-500'
    },
    {
      Icon: HiBriefcase,
      title: t('services.portfolios'),
      description: t('services.portfoliosDesc'),
      color: 'text-violet-500'
    },
    {
      Icon: HiCog6Tooth,
      title: t('services.backend'),
      description: t('services.backendDesc'),
      color: 'text-emerald-500'
    }
  ]

  const servicesIDont: Service[] = [
    {
      Icon: HiSparkles,
      title: t('services.uxui'),
      description: t('services.uxuiDesc'),
      color: 'text-rose-400'
    },
    {
      Icon: HiTag,
      title: t('services.branding'),
      description: t('services.brandingDesc'),
      color: 'text-orange-400'
    },
    {
      Icon: HiPencil,
      title: t('services.illustration'),
      description: t('services.illustrationDesc'),
      color: 'text-amber-400'
    }
  ]

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16 transition-language">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {t('services.title')}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* What I Do - Premium Design */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8 transition-language">
            <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg">
              <HiCheckCircle className="text-3xl text-white" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {t('services.whatIDo')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesIDo.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 transition-language"
              >
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 group-hover:scale-110 transition-transform duration-300`}>
                    <service.Icon className={`text-4xl ${service.color}`} />
                  </div>
                  {/* Decorative dot */}
                  <div className={`absolute -top-1 -right-1 w-3 h-3 ${service.color.replace('text', 'bg')} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors transition-language">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed transition-language">
                  {service.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
