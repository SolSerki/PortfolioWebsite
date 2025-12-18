import { HiUser, HiMapPin, HiUserGroup, HiHeart } from 'react-icons/hi2'
import EntryCard from './EntryCard'
import type { CharacterEntry } from '../types'

interface CharacterCardProps {
  character: CharacterEntry
  onRelatedClick?: (entryId: string) => void
  showSpoilers?: boolean
}

export default function CharacterCard({ character, onRelatedClick, showSpoilers }: CharacterCardProps) {
  const statusColors = {
    alive: 'bg-green-500/20 text-green-300',
    deceased: 'bg-red-500/20 text-red-300',
    unknown: 'bg-zinc-500/20 text-zinc-300'
  }

  const statusLabels = {
    alive: 'Vivo',
    deceased: 'Fallecido',
    unknown: 'Desconocido'
  }

  return (
    <EntryCard
      entry={character}
      accentColor="purple"
      icon={<HiUser />}
      onRelatedClick={onRelatedClick}
      showSpoilers={showSpoilers}
      renderBadges={() => (
        <>
          {character.status && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[character.status]}`}>
              {statusLabels[character.status]}
            </span>
          )}
          {character.faction && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 flex items-center gap-1">
              <HiUserGroup className="text-xs" />
              {character.faction}
            </span>
          )}
        </>
      )}
      renderDetails={() => (
        <div className="grid grid-cols-2 gap-3 text-sm">
          {character.role && (
            <div>
              <span className="text-zinc-500">Rol</span>
              <p className="text-zinc-300">{character.role}</p>
            </div>
          )}
          {character.region && (
            <div>
              <span className="text-zinc-500 flex items-center gap-1">
                <HiMapPin className="text-xs" /> Región
              </span>
              <p className="text-zinc-300">{character.region}</p>
            </div>
          )}
          {character.relationships && character.relationships.length > 0 && (
            <div className="col-span-2">
              <span className="text-zinc-500 flex items-center gap-1">
                <HiHeart className="text-xs" /> Relaciones
              </span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {character.relationships.map((rel, idx) => (
                  <button
                    key={idx}
                    onClick={() => onRelatedClick?.(rel.characterId)}
                    className="text-xs px-2 py-1 bg-zinc-800/50 rounded-lg text-zinc-300 hover:text-white transition-colors"
                  >
                    {rel.characterId} <span className="text-zinc-500">({rel.relation})</span>
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
