import { useLanguage } from '../contexts/LanguageContext'

type AvailabilityStatus = 'available' | 'partial' | 'unavailable'

interface AvailabilityBadgeProps {
  status: AvailabilityStatus
}

const statusConfig: Record<AvailabilityStatus, {
  label: { en: string; es: string }
  color: string
  bgColor: string
  borderColor: string
  dotColor: string
}> = {
  available: {
    label: { en: 'Available for projects', es: 'Disponible para proyectos' },
    color: 'text-green-700 dark:text-green-300',
    bgColor: 'bg-green-100 dark:bg-green-950/30',
    borderColor: 'border-green-300 dark:border-green-800',
    dotColor: 'bg-green-500'
  },
  partial: {
    label: { en: 'Limited availability', es: 'Disponibilidad limitada' },
    color: 'text-yellow-700 dark:text-yellow-300',
    bgColor: 'bg-yellow-100 dark:bg-yellow-950/30',
    borderColor: 'border-yellow-300 dark:border-yellow-800',
    dotColor: 'bg-yellow-500'
  },
  unavailable: {
    label: { en: 'Not taking projects', es: 'No acepto proyectos' },
    color: 'text-red-700 dark:text-red-300',
    bgColor: 'bg-red-100 dark:bg-red-950/30',
    borderColor: 'border-red-300 dark:border-red-800',
    dotColor: 'bg-red-500'
  }
}

export default function AvailabilityBadge({ status }: AvailabilityBadgeProps) {
  const { language } = useLanguage()
  const config = statusConfig[status]

  return (
    <div 
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm ${config.bgColor} ${config.borderColor} ${config.color}`}
    >
      <span className="relative flex h-3 w-3">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${config.dotColor}`}></span>
        <span className={`relative inline-flex rounded-full h-3 w-3 ${config.dotColor}`}></span>
      </span>
      <span className="font-medium text-sm">
        {config.label[language]}
      </span>
    </div>
  )
}
