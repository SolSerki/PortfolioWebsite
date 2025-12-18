import { motion } from 'motion/react'
import type { WRSection } from '../types'

interface WRContentWrapperProps {
  section: WRSection
  subSection?: string
  title: string
  description?: string
  children: React.ReactNode
}

export default function WRContentWrapper({
  title,
  description,
  children
}: WRContentWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Section Header */}
      <div className="border-b border-purple-500/20 pb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-zinc-400 text-sm md:text-base">
            {description}
          </p>
        )}
      </div>

      {/* Content */}
      <div>
        {children}
      </div>
    </motion.div>
  )
}
