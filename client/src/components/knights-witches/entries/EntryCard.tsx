import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { HiChevronDown, HiLink, HiTag, HiEyeSlash, HiEye } from 'react-icons/hi2'
import type { BaseEntry } from '../types'

interface EntryCardProps {
  entry: BaseEntry
  renderDetails?: () => React.ReactNode
  renderBadges?: () => React.ReactNode
  accentColor?: string
  icon?: React.ReactNode
  onRelatedClick?: (entryId: string) => void
  showSpoilers?: boolean
}

export default function EntryCard({
  entry,
  renderDetails,
  renderBadges,
  accentColor = 'emerald',
  icon,
  onRelatedClick,
  showSpoilers = false
}: EntryCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [revealSpoiler, setRevealSpoiler] = useState(false)

  const isSpoiler = entry.spoiler && !showSpoilers && !revealSpoiler

  const colorClasses = {
    emerald: {
      border: 'border-emerald-500/30 hover:border-emerald-500/50',
      bg: 'from-emerald-500/10 to-emerald-600/5',
      text: 'text-emerald-400',
      tag: 'bg-emerald-500/20 text-emerald-300'
    },
    purple: {
      border: 'border-purple-500/30 hover:border-purple-500/50',
      bg: 'from-purple-500/10 to-purple-600/5',
      text: 'text-purple-400',
      tag: 'bg-purple-500/20 text-purple-300'
    },
    amber: {
      border: 'border-amber-500/30 hover:border-amber-500/50',
      bg: 'from-amber-500/10 to-amber-600/5',
      text: 'text-amber-400',
      tag: 'bg-amber-500/20 text-amber-300'
    },
    rose: {
      border: 'border-rose-500/30 hover:border-rose-500/50',
      bg: 'from-rose-500/10 to-rose-600/5',
      text: 'text-rose-400',
      tag: 'bg-rose-500/20 text-rose-300'
    },
    cyan: {
      border: 'border-cyan-500/30 hover:border-cyan-500/50',
      bg: 'from-cyan-500/10 to-cyan-600/5',
      text: 'text-cyan-400',
      tag: 'bg-cyan-500/20 text-cyan-300'
    }
  }

  const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.emerald

  return (
    <motion.div
      layout
      className={`relative rounded-xl border ${colors.border} bg-gradient-to-br ${colors.bg} backdrop-blur-sm overflow-hidden transition-all duration-300`}
    >
      {/* Spoiler Overlay */}
      {isSpoiler && (
        <div className="absolute inset-0 bg-zinc-900/95 backdrop-blur-md z-10 flex flex-col items-center justify-center gap-3 p-4">
          <HiEyeSlash className="text-4xl text-zinc-500" />
          <p className="text-zinc-400 text-sm text-center">Este contenido contiene spoilers</p>
          <button
            onClick={() => setRevealSpoiler(true)}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-sm text-zinc-300 transition-colors"
          >
            <HiEye className="text-lg" />
            Revelar
          </button>
        </div>
      )}

      {/* Card Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-start gap-4 text-left"
      >
        {/* Image or Icon */}
        <div className={`w-16 h-16 rounded-lg bg-zinc-800/50 flex items-center justify-center flex-shrink-0 ${colors.text}`}>
          {entry.image ? (
            <img 
              src={entry.image} 
              alt={entry.name} 
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <span className="text-2xl">{icon}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-white text-lg truncate">{entry.name}</h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-zinc-500 flex-shrink-0"
            >
              <HiChevronDown />
            </motion.div>
          </div>
          
          {/* Badges */}
          {renderBadges && (
            <div className="flex flex-wrap gap-1.5 mt-1">
              {renderBadges()}
            </div>
          )}

          {/* Short Description */}
          <p className="text-zinc-400 text-sm mt-2 line-clamp-2">
            {entry.shortDescription || entry.description}
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
                <p className="text-zinc-300 text-sm leading-relaxed">{entry.description}</p>
              </div>

              {/* Custom Details */}
              {renderDetails && renderDetails()}

              {/* Tags */}
              {entry.tags && entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
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

              {/* Related Entries */}
              {entry.relatedEntries && entry.relatedEntries.length > 0 && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text} mb-2 flex items-center gap-2`}>
                    <HiLink />
                    Referencias
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {entry.relatedEntries.map((relatedId) => (
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
