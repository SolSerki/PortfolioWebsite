import { HiUserGroup, HiMapPin, HiUser, HiUsers, HiShieldCheck, HiShieldExclamation } from 'react-icons/hi2'
import EntryCard from './EntryCard'
import type { FactionEntry } from '../types'

interface FactionCardProps {
  faction: FactionEntry
  onRelatedClick?: (entryId: string) => void
  showSpoilers?: boolean
}

export default function FactionCard({ faction, onRelatedClick, showSpoilers }: FactionCardProps) {
  const typeLabels = {
    knightOrder: 'Orden de Caballería',
    coven: 'Coven de Brujas',
    kingdom: 'Reino',
    guild: 'Gremio',
    other: 'Otro'
  }

  const typeColors = {
    knightOrder: 'bg-blue-500/20 text-blue-300',
    coven: 'bg-purple-500/20 text-purple-300',
    kingdom: 'bg-amber-500/20 text-amber-300',
    guild: 'bg-emerald-500/20 text-emerald-300',
    other: 'bg-zinc-500/20 text-zinc-300'
  }

  return (
    <EntryCard
      entry={faction}
      accentColor="cyan"
      icon={<HiUserGroup />}
      onRelatedClick={onRelatedClick}
      showSpoilers={showSpoilers}
      renderBadges={() => (
        <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[faction.factionType]}`}>
          {typeLabels[faction.factionType]}
        </span>
      )}
      renderDetails={() => (
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-3">
            {faction.leader && (
              <div>
                <span className="text-zinc-500 flex items-center gap-1">
                  <HiUser className="text-xs" /> Líder
                </span>
                <button
                  onClick={() => onRelatedClick?.(faction.leader!)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {faction.leader}
                </button>
              </div>
            )}
            {faction.headquarters && (
              <div>
                <span className="text-zinc-500 flex items-center gap-1">
                  <HiMapPin className="text-xs" /> Sede
                </span>
                <button
                  onClick={() => onRelatedClick?.(faction.headquarters!)}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {faction.headquarters}
                </button>
              </div>
            )}
          </div>

          {faction.members && faction.members.length > 0 && (
            <div>
              <span className="text-zinc-500 flex items-center gap-1">
                <HiUsers className="text-xs" /> Miembros Notables
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {faction.members.map((member) => (
                  <button
                    key={member}
                    onClick={() => onRelatedClick?.(member)}
                    className="text-xs px-2 py-1 bg-zinc-800/50 rounded-lg text-zinc-300 hover:text-white transition-colors"
                  >
                    {member}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            {faction.allies && faction.allies.length > 0 && (
              <div>
                <span className="text-zinc-500 flex items-center gap-1">
                  <HiShieldCheck className="text-xs text-green-400" /> Aliados
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {faction.allies.map((ally) => (
                    <button
                      key={ally}
                      onClick={() => onRelatedClick?.(ally)}
                      className="text-xs text-green-400 hover:text-green-300 underline underline-offset-2"
                    >
                      {ally}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {faction.enemies && faction.enemies.length > 0 && (
              <div>
                <span className="text-zinc-500 flex items-center gap-1">
                  <HiShieldExclamation className="text-xs text-red-400" /> Enemigos
                </span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {faction.enemies.map((enemy) => (
                    <button
                      key={enemy}
                      onClick={() => onRelatedClick?.(enemy)}
                      className="text-xs text-red-400 hover:text-red-300 underline underline-offset-2"
                    >
                      {enemy}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    />
  )
}
