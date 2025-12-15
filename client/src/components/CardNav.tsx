'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

export type CardNavItem = {
  icon: React.ReactNode
  label: string
  onClick: () => void
  isActive?: boolean
}

export type CardNavProps = {
  items: CardNavItem[]
  className?: string
}

export default function CardNav({ items, className = '' }: CardNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <nav className={`flex gap-1.5 sm:gap-2 transition-language max-w-[95vw] overflow-x-auto scrollbar-hide ${className}`}>
      {items.map((item, index) => (
        <motion.button
          key={index}
          onClick={item.onClick}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`
            relative flex flex-col items-center justify-center gap-0.5 sm:gap-1 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl
            transition-all duration-300 cursor-pointer transition-language min-w-fit
            ${item.isActive 
              ? 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-400' 
              : 'text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Hover background effect */}
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.div
                className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl sm:rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{ zIndex: -1 }}
              />
            )}
          </AnimatePresence>

          {/* Active indicator */}
          {item.isActive && (
            <motion.div
              className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-indigo-500/50"
              layoutId="activeIndicator"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}

          {/* Icon */}
          <div className="text-lg sm:text-xl md:text-2xl relative z-10">
            {item.icon}
          </div>

          {/* Label */}
          <span className="text-[10px] sm:text-xs font-medium relative z-10 whitespace-nowrap">
            {item.label}
          </span>
        </motion.button>
      ))}
    </nav>
  )
}
