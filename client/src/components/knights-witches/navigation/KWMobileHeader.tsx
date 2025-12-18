import { HiBars3, HiMagnifyingGlass, HiXMark } from 'react-icons/hi2'
import type { KWSection } from '../types'
import { navItems } from './KWSidebar'

interface KWMobileHeaderProps {
  activeSection: KWSection
  isSidebarOpen: boolean
  onToggleSidebar: () => void
  searchQuery: string
  onSearchChange: (query: string) => void
  showSearch: boolean
  onToggleSearch: () => void
}

export default function KWMobileHeader({
  activeSection,
  isSidebarOpen,
  onToggleSidebar,
  searchQuery,
  onSearchChange,
  showSearch,
  onToggleSearch
}: KWMobileHeaderProps) {
  const currentSection = navItems.find(item => item.id === activeSection)

  return (
    <div className="lg:hidden sticky top-0 z-30 bg-zinc-900/95 backdrop-blur-md border-b border-emerald-500/20">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Menu Button */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all"
        >
          {isSidebarOpen ? <HiXMark className="text-xl" /> : <HiBars3 className="text-xl" />}
        </button>

        {/* Current Section Title */}
        <div className="flex items-center gap-2 text-emerald-400">
          <span className="text-lg">{currentSection?.icon}</span>
          <span className="font-medium">{currentSection?.label}</span>
        </div>

        {/* Search Button */}
        <button
          onClick={onToggleSearch}
          className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all"
        >
          <HiMagnifyingGlass className="text-xl" />
        </button>
      </div>

      {/* Search Bar (expandable) */}
      {showSearch && (
        <div className="px-4 pb-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar en el mundo..."
            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder:text-zinc-500 focus:outline-none focus:border-emerald-500/50 text-sm"
            autoFocus
          />
        </div>
      )}
    </div>
  )
}
