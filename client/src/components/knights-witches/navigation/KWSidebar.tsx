import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  HiGlobeAlt, 
  HiMapPin, 
  HiClock, 
  HiUserGroup, 
  HiSparkles, 
  HiUsers, 
  HiBookOpen,
  HiChevronDown,
  HiChevronRight,
  HiMagnifyingGlass
} from 'react-icons/hi2'
import { GiDragonHead, GiCrystalBall } from 'react-icons/gi'
import type { KWSection, KWNavItem } from '../types'

interface KWSidebarProps {
  activeSection: KWSection
  activeSubSection?: string
  onSectionChange: (section: KWSection, subSection?: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  isMobile?: boolean
  isOpen?: boolean
  onClose?: () => void
}

const navItems: KWNavItem[] = [
  {
    id: 'mundo',
    label: 'El Mundo',
    icon: <HiGlobeAlt />,
    subSections: [
      { id: 'sinopsis', label: 'Sinopsis' },
      { id: 'introduccion', label: 'Introducción' }
    ]
  },
  {
    id: 'geografia',
    label: 'Geografía',
    icon: <HiMapPin />,
    subSections: [
      { id: 'mapamundi', label: 'Mapamundi' },
      { id: 'norte', label: 'Tierras del Norte' },
      { id: 'sur', label: 'Tierras del Sur' },
      { id: 'este', label: 'Tierras del Este' },
      { id: 'oeste', label: 'Tierras del Oeste' }
    ]
  },
  {
    id: 'historia',
    label: 'Historia',
    icon: <HiClock />,
    subSections: [
      { id: 'timeline', label: 'Línea Temporal' },
      { id: 'eras', label: 'Eras del Mundo' },
      { id: 'eventos', label: 'Eventos Clave' }
    ]
  },
  {
    id: 'facciones',
    label: 'Facciones',
    icon: <HiUserGroup />,
    subSections: [
      { id: 'caballeros', label: 'Órdenes de Caballería' },
      { id: 'brujas', label: 'Covens de Brujas' },
      { id: 'reinos', label: 'Reinos y Casas' }
    ]
  },
  {
    id: 'magia',
    label: 'Magia',
    icon: <HiSparkles />,
    subSections: [
      { id: 'sistemas', label: 'Sistemas de Magia' },
      { id: 'tipos', label: 'Tipos de Magia' },
      { id: 'reglas', label: 'Reglas y Limitaciones' }
    ]
  },
  {
    id: 'personajes',
    label: 'Personajes',
    icon: <HiUsers />,
    subSections: [
      { id: 'protagonistas', label: 'Protagonistas' },
      { id: 'antagonistas', label: 'Antagonistas' },
      { id: 'secundarios', label: 'Secundarios' }
    ]
  },
  {
    id: 'cultura',
    label: 'Cultura',
    icon: <HiBookOpen />,
    subSections: [
      { id: 'religiones', label: 'Religiones' },
      { id: 'tradiciones', label: 'Tradiciones' },
      { id: 'idiomas', label: 'Idiomas' }
    ]
  },
  {
    id: 'bestiario',
    label: 'Bestiario',
    icon: <GiDragonHead />
  },
  {
    id: 'artefactos',
    label: 'Artefactos',
    icon: <GiCrystalBall />
  }
]

export default function KWSidebar({
  activeSection,
  activeSubSection,
  onSectionChange,
  searchQuery,
  onSearchChange,
  isMobile = false,
  isOpen = true,
  onClose
}: KWSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<KWSection[]>([activeSection])

  const toggleSection = (sectionId: KWSection) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(s => s !== sectionId))
    } else {
      setExpandedSections([...expandedSections, sectionId])
    }
  }

  const handleSectionClick = (item: KWNavItem) => {
    if (item.subSections && item.subSections.length > 0) {
      toggleSection(item.id)
      // Si no está expandido, navegar a la primera subsección
      if (!expandedSections.includes(item.id)) {
        onSectionChange(item.id, item.subSections[0].id)
      }
    } else {
      onSectionChange(item.id)
    }
  }

  const sidebarContent = (
    <div className="h-full flex flex-col bg-zinc-900/95 backdrop-blur-md border-r border-emerald-500/20">
      {/* Search Bar */}
      <div className="p-4 border-b border-emerald-500/20">
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 text-sm"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1">
        {navItems.map((item) => (
          <div key={item.id}>
            {/* Main Section Button */}
            <button
              onClick={() => handleSectionClick(item)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-emerald-600/30 to-teal-600/30 text-emerald-300 border border-emerald-500/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              {item.subSections && (
                <span className="text-xs">
                  {expandedSections.includes(item.id) ? <HiChevronDown /> : <HiChevronRight />}
                </span>
              )}
            </button>

            {/* Sub Sections */}
            <AnimatePresence>
              {item.subSections && expandedSections.includes(item.id) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="ml-6 mt-1 space-y-1 border-l border-zinc-700 pl-3">
                    {item.subSections.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          onSectionChange(item.id, sub.id)
                          if (isMobile && onClose) onClose()
                        }}
                        className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-all ${
                          activeSection === item.id && activeSubSection === sub.id
                            ? 'text-emerald-400 bg-emerald-500/10'
                            : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/30'
                        }`}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-emerald-500/20">
        <p className="text-xs text-zinc-600 text-center">
          Knights & Witches © 2024
        </p>
      </div>
    </div>
  )

  // Mobile: Overlay sidebar
  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-72 z-50 lg:hidden"
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }

  // Desktop: Static sidebar
  return (
    <div className="hidden lg:block w-64 h-full">
      {sidebarContent}
    </div>
  )
}

export { navItems }
