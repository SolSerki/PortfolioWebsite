import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  HiFunnel, 
  HiXMark,
  HiAdjustmentsHorizontal 
} from 'react-icons/hi2'

export type FilterOption = {
  id: string
  label: string
  count?: number
}

export type FilterGroup = {
  id: string
  label: string
  options: FilterOption[]
  multiple?: boolean
}

interface WRSearchFiltersProps {
  filters: FilterGroup[]
  activeFilters: Record<string, string[]>
  onFilterChange: (groupId: string, optionIds: string[]) => void
  onClearFilters: () => void
  resultCount?: number
}

export default function WRSearchFilters({
  filters,
  activeFilters,
  onFilterChange,
  onClearFilters,
  resultCount
}: WRSearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const hasActiveFilters = Object.values(activeFilters).some(arr => arr.length > 0)
  const totalActiveFilters = Object.values(activeFilters).flat().length

  const toggleFilter = (groupId: string, optionId: string, multiple: boolean) => {
    const currentFilters = activeFilters[groupId] || []
    
    if (multiple) {
      if (currentFilters.includes(optionId)) {
        onFilterChange(groupId, currentFilters.filter(id => id !== optionId))
      } else {
        onFilterChange(groupId, [...currentFilters, optionId])
      }
    } else {
      if (currentFilters.includes(optionId)) {
        onFilterChange(groupId, [])
      } else {
        onFilterChange(groupId, [optionId])
      }
    }
  }

  return (
    <div className="space-y-3">
      {/* Filter Toggle Bar */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
            isOpen || hasActiveFilters
              ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
              : 'bg-zinc-800/50 border-zinc-700 text-zinc-400 hover:text-white'
          }`}
        >
          <HiAdjustmentsHorizontal />
          <span className="text-sm">Filtros</span>
          {totalActiveFilters > 0 && (
            <span className="px-1.5 py-0.5 bg-purple-500/20 rounded-full text-xs">
              {totalActiveFilters}
            </span>
          )}
        </button>

        <div className="flex items-center gap-3">
          {/* Result Count */}
          {resultCount !== undefined && (
            <span className="text-sm text-zinc-500">
              {resultCount} recurso{resultCount !== 1 ? 's' : ''}
            </span>
          )}

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-zinc-400 hover:text-white transition-colors text-sm"
            >
              <HiXMark />
              <span className="hidden sm:inline">Limpiar</span>
            </button>
          )}
        </div>
      </div>

      {/* Active Filters Tags */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(activeFilters).map(([groupId, optionIds]) =>
            optionIds.map(optionId => {
              const group = filters.find(f => f.id === groupId)
              const option = group?.options.find(o => o.id === optionId)
              if (!option) return null
              
              return (
                <span
                  key={`${groupId}-${optionId}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
                >
                  <span className="text-zinc-500">{group?.label}:</span>
                  {option.label}
                  <button
                    onClick={() => toggleFilter(groupId, optionId, group?.multiple || false)}
                    className="hover:text-white transition-colors"
                  >
                    <HiXMark className="text-sm" />
                  </button>
                </span>
              )
            })
          )}
        </div>
      )}

      {/* Filter Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 bg-zinc-800/30 border border-zinc-700/50 rounded-xl space-y-4">
              {filters.map((group) => (
                <div key={group.id}>
                  <h4 className="text-sm font-medium text-zinc-400 mb-2 flex items-center gap-2">
                    <HiFunnel className="text-xs" />
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.options.map((option) => {
                      const isActive = (activeFilters[group.id] || []).includes(option.id)
                      return (
                        <button
                          key={option.id}
                          onClick={() => toggleFilter(group.id, option.id, group.multiple || false)}
                          className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                            isActive
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                              : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700 hover:text-white hover:border-zinc-600'
                          }`}
                        >
                          {option.label}
                          {option.count !== undefined && (
                            <span className="ml-1.5 text-xs opacity-60">({option.count})</span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
