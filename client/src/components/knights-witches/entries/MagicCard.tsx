import { HiSparkles, HiExclamationTriangle, HiUsers } from 'react-icons/hi2'
import EntryCard from './EntryCard'
import type { MagicEntry } from '../types'

interface MagicCardProps {
  magic: MagicEntry
  onRelatedClick?: (entryId: string) => void
  showSpoilers?: boolean
}

export default function MagicCard({ magic, onRelatedClick, showSpoilers }: MagicCardProps) {
  const typeLabels = {
    system: 'Sistema de Magia',
    spell: 'Hechizo',
    ability: 'Habilidad',
    ritual: 'Ritual'
  }

  const typeColors = {
    system: 'bg-violet-500/20 text-violet-300',
    spell: 'bg-blue-500/20 text-blue-300',
    ability: 'bg-emerald-500/20 text-emerald-300',
    ritual: 'bg-rose-500/20 text-rose-300'
  }

  return (
    <EntryCard
      entry={magic}
      accentColor="rose"
      icon={<HiSparkles />}
      onRelatedClick={onRelatedClick}
      showSpoilers={showSpoilers}
      renderBadges={() => (
        <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[magic.magicType]}`}>
          {typeLabels[magic.magicType]}
        </span>
      )}
      renderDetails={() => (
        <div className="space-y-3 text-sm">
          {magic.requirements && (
            <div>
              <span className="text-zinc-500">Requisitos</span>
              <p className="text-zinc-300">{magic.requirements}</p>
            </div>
          )}
          
          {magic.limitations && (
            <div>
              <span className="text-zinc-500 flex items-center gap-1">
                <HiExclamationTriangle className="text-xs text-amber-400" /> Limitaciones
              </span>
              <p className="text-zinc-300">{magic.limitations}</p>
            </div>
          )}

          {magic.practitioners && magic.practitioners.length > 0 && (
            <div>
              <span className="text-zinc-500 flex items-center gap-1">
                <HiUsers className="text-xs" /> Practicantes Conocidos
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {magic.practitioners.map((practitioner) => (
                  <button
                    key={practitioner}
                    onClick={() => onRelatedClick?.(practitioner)}
                    className="text-xs px-2 py-1 bg-zinc-800/50 rounded-lg text-zinc-300 hover:text-white transition-colors"
                  >
                    {practitioner}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    />
  )
}
