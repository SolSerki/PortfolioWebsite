import { HiMapPin, HiUsers, HiUser } from 'react-icons/hi2'
import EntryCard from './EntryCard'
import type { LocationEntry } from '../types'

interface LocationCardProps {
  location: LocationEntry
  onRelatedClick?: (entryId: string) => void
  showSpoilers?: boolean
}

export default function LocationCard({ location, onRelatedClick, showSpoilers }: LocationCardProps) {
  const typeLabels = {
    city: 'Ciudad',
    landmark: 'Lugar Emblemático',
    territory: 'Territorio',
    building: 'Edificio',
    natural: 'Lugar Natural'
  }

  const typeColors = {
    city: 'bg-amber-500/20 text-amber-300',
    landmark: 'bg-emerald-500/20 text-emerald-300',
    territory: 'bg-blue-500/20 text-blue-300',
    building: 'bg-zinc-500/20 text-zinc-300',
    natural: 'bg-green-500/20 text-green-300'
  }

  return (
    <EntryCard
      entry={location}
      accentColor="amber"
      icon={<HiMapPin />}
      onRelatedClick={onRelatedClick}
      showSpoilers={showSpoilers}
      renderBadges={() => (
        <>
          <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[location.locationType]}`}>
            {typeLabels[location.locationType]}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
            {location.region}
          </span>
        </>
      )}
      renderDetails={() => (
        <div className="grid grid-cols-2 gap-3 text-sm">
          {location.population && (
            <div>
              <span className="text-zinc-500 flex items-center gap-1">
                <HiUsers className="text-xs" /> Población
              </span>
              <p className="text-zinc-300">{location.population}</p>
            </div>
          )}
          {location.ruler && (
            <div>
              <span className="text-zinc-500 flex items-center gap-1">
                <HiUser className="text-xs" /> Gobernante
              </span>
              <button
                onClick={() => onRelatedClick?.(location.ruler!)}
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                {location.ruler}
              </button>
            </div>
          )}
        </div>
      )}
    />
  )
}
