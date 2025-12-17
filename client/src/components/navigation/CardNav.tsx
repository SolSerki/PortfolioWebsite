'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'
import type { DockItemData } from '../Dock'

export type CardNavProps = {
  items: DockItemData[]
  className?: string
}

export default function CardNav({ items, className = '' }: CardNavProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 left-4 z-[60] p-2 sm:p-3 rounded-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800 hover:bg-white/90 dark:hover:bg-zinc-900/90 transition-all"
        aria-label={isVisible ? 'Hide menu' : 'Show menu'}
      >
        <img 
          src="/TriangularOrnament.svg" 
          alt="Toggle menu"
          className={`w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 brightness-0 invert ${isVisible ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Navigation */}
      <div 
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isVisible ? 'top-4' : '-top-[100px]'
        }`}
      >
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
                text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400
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
      </div>
    </>
  )
}
