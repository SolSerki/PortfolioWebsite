import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { HiChevronDown, HiTag, HiBookOpen } from 'react-icons/hi2'
import type { BaseResource } from '../types'

interface ResourceCardProps {
  resource: BaseResource
  renderDetails?: () => React.ReactNode
  renderBadges?: () => React.ReactNode
  accentColor?: string
  icon?: React.ReactNode
  onRelatedClick?: (resourceId: string) => void
}

export default function ResourceCard({
  resource,
  renderDetails,
  renderBadges,
  accentColor = 'purple',
  icon,
  onRelatedClick
}: ResourceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const colorClasses = {
    purple: {
      border: 'border-purple-500/30 hover:border-purple-500/50',
      bg: 'from-purple-500/10 to-purple-600/5',
      text: 'text-purple-400',
      tag: 'bg-purple-500/20 text-purple-300'
    },
    pink: {
      border: 'border-pink-500/30 hover:border-pink-500/50',
      bg: 'from-pink-500/10 to-pink-600/5',
      text: 'text-pink-400',
      tag: 'bg-pink-500/20 text-pink-300'
    },
    blue: {
      border: 'border-blue-500/30 hover:border-blue-500/50',
      bg: 'from-blue-500/10 to-blue-600/5',
      text: 'text-blue-400',
      tag: 'bg-blue-500/20 text-blue-300'
    },
    amber: {
      border: 'border-amber-500/30 hover:border-amber-500/50',
      bg: 'from-amber-500/10 to-amber-600/5',
      text: 'text-amber-400',
      tag: 'bg-amber-500/20 text-amber-300'
    },
    emerald: {
      border: 'border-emerald-500/30 hover:border-emerald-500/50',
      bg: 'from-emerald-500/10 to-emerald-600/5',
      text: 'text-emerald-400',
      tag: 'bg-emerald-500/20 text-emerald-300'
    }
  }

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.purple

  return (
    <motion.div
      layout
      className={`relative rounded-xl border ${colors.border} bg-gradient-to-br ${colors.bg} backdrop-blur-sm overflow-hidden transition-all duration-300`}
    >
      {/* Card Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-start gap-4 text-left"
      >
        {/* Icon */}
        <div className={`w-12 h-12 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 ${colors.text}`}>
          <span className="text-xl">{icon || <HiBookOpen />}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-white text-lg">{resource.title}</h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-zinc-500 flex-shrink-0"
            >
              <HiChevronDown />
            </motion.div>
          </div>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {renderBadges && renderBadges()}
          </div>

          {/* Short Description */}
          <p className="text-zinc-400 text-sm mt-2 line-clamp-2">
            {resource.shortDescription || resource.description}
          </p>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4 border-t border-zinc-700/50 pt-4">
              {/* Full Description */}
              <div>
                <h4 className={`text-sm font-medium ${colors.text} mb-2`}>Descripción</h4>
                <p className="text-zinc-300 text-sm leading-relaxed">{resource.description}</p>
              </div>

              {/* Content if available */}
              {resource.content && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text} mb-2`}>Contenido</h4>
                  <div className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {resource.content}
                  </div>
                </div>
              )}

              {/* Custom Details */}
              {renderDetails && renderDetails()}

              {/* Tags */}
              {resource.tags && resource.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${colors.tag}`}
                    >
                      <HiTag className="text-xs" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Related Resources */}
              {resource.relatedResources && resource.relatedResources.length > 0 && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text} mb-2`}>
                    Recursos Relacionados
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {resource.relatedResources.map((relatedId) => (
                      <button
                        key={relatedId}
                        onClick={() => onRelatedClick?.(relatedId)}
                        className="text-sm text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        {relatedId}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
