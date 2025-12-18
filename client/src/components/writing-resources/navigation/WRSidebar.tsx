import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  HiBookOpen,
  HiPaintBrush,
  HiUsers,
  HiGlobeAlt,
  HiSparkles,
  HiChevronDown,
  HiChevronRight,
  HiMagnifyingGlass
} from 'react-icons/hi2'
import type { WRSection, WRNavItem } from '../types'

interface WRSidebarProps {
  activeSection: WRSection
  activeSubSection?: string
  onSectionChange: (section: WRSection, subSection?: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  isMobile?: boolean
  isOpen?: boolean
  onClose?: () => void
}

const navItems: WRNavItem[] = [
  {
    id: 'trama',
    label: 'Trama',
    icon: <HiBookOpen />,
    subSections: [
      { id: 'estructuras', label: 'Estructuras Narrativas' },
      { id: 'tecnicas', label: 'Técnicas' },
      { id: 'ejercicios', label: 'Ejercicios' },
      { id: 'tips', label: 'Tips y Consejos' }
    ]
  },
  {
    id: 'ambientacion',
    label: 'Ambientación',
    icon: <HiPaintBrush />,
    subSections: [
      { id: 'sensorial', label: 'Descripción Sensorial' },
      { id: 'atmosfera', label: 'Atmósfera' },
      { id: 'escenarios', label: 'Escenarios' }
    ]
  },
  {
    id: 'personajes',
    label: 'Personajes',
    icon: <HiUsers />,
    subSections: [
      { id: 'desarrollo', label: 'Desarrollo' },
      { id: 'arquetipos', label: 'Arquetipos' },
      { id: 'dialogos', label: 'Diálogos' },
      { id: 'motivaciones', label: 'Motivaciones' },
      { id: 'backstory', label: 'Backstory' }
    ]
  },
  {
    id: 'worldbuilding',
    label: 'Worldbuilding',
    icon: <HiGlobeAlt />,
    subSections: [
      { id: 'geografia', label: 'Geografía' },
      { id: 'cultura', label: 'Cultura' },
      { id: 'historia', label: 'Historia' },
      { id: 'politica', label: 'Política' },
      { id: 'economia', label: 'Economía' },
      { id: 'religion', label: 'Religión' }
    ]
  },
  {
    id: 'sistemas-magia',
    label: 'Sistemas de Magia',
    icon: <HiSparkles />,
    subSections: [
      { id: 'hard-magic', label: 'Magia Dura' },
      { id: 'soft-magic', label: 'Magia Blanda' },
      { id: 'reglas', label: 'Reglas' },
      { id: 'limitaciones', label: 'Limitaciones' },
      { id: 'costos', label: 'Costos' }
    ]
  }
]

export default function WRSidebar({
  activeSection,
  activeSubSection,
  onSectionChange,
  searchQuery,
  onSearchChange,
  isMobile = false,
  isOpen = true,
  onClose
}: WRSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<WRSection[]>([activeSection])

  const toggleSection = (sectionId: WRSection) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(s => s !== sectionId))
    } else {
      setExpandedSections([...expandedSections, sectionId])
    }
  }

  const handleSectionClick = (item: WRNavItem) => {
    if (item.subSections && item.subSections.length > 0) {
      toggleSection(item.id)
      if (!expandedSections.includes(item.id)) {
        onSectionChange(item.id, item.subSections[0].id)
      }
    } else {
      onSectionChange(item.id)
    }
  }

  const sidebarContent = (
    <div className="h-full flex flex-col bg-zinc-900/95 backdrop-blur-md border-r border-purple-500/20">
      {/* Search Bar */}
      <div className="p-4 border-b border-purple-500/20">
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar recursos..."
            className="w-full pl-10 pr-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500/50 text-sm"
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
                  ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-300 border border-purple-500/30'
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
                            ? 'text-purple-400 bg-purple-500/10'
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
      <div className="p-4 border-t border-purple-500/20">
        <p className="text-xs text-zinc-600 text-center">
          Writing Resources © 2024
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
