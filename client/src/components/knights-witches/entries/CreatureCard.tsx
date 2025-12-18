import { HiMapPin, HiExclamationTriangle, HiSparkles } from 'react-icons/hi2'
import { GiDragonHead } from 'react-icons/gi'
import EntryCard from './EntryCard'
import type { CreatureEntry } from '../types'

interface CreatureCardProps {
  creature: CreatureEntry
  onRelatedClick?: (entryId: string) => void
  showSpoilers?: boolean
}

export default function CreatureCard({ creature, onRelatedClick, showSpoilers }: CreatureCardProps) {
  const typeLabels = {
    beast: 'Bestia',
    monster: 'Monstruo',
    spirit: 'Espíritu',
    undead: 'No-Muerto',
    mythical: 'Criatura Mítica'
  }

  const typeColors = {
    beast: 'bg-amber-500/20 text-amber-300',
    monster: 'bg-red-500/20 text-red-300',
    spirit: 'bg-blue-500/20 text-blue-300',
    undead: 'bg-zinc-500/20 text-zinc-300',
    mythical: 'bg-violet-500/20 text-violet-300'
  }

  const dangerColors = {
    harmless: 'bg-green-500/20 text-green-300',
    low: 'bg-emerald-500/20 text-emerald-300',
    medium: 'bg-amber-500/20 text-amber-300',
    high: 'bg-orange-500/20 text-orange-300',
    extreme: 'bg-red-500/20 text-red-300'
  }

  const dangerLabels = {
    harmless: 'Inofensivo',
    low: 'Bajo',
    medium: 'Medio',
    high: 'Alto',
    extreme: 'Extremo'
  }

  return (
    <EntryCard
      entry={creature}
      accentColor="amber"
      icon={<GiDragonHead />}
      onRelatedClick={onRelatedClick}
      showSpoilers={showSpoilers}
      renderBadges={() => (
        <>
          <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[creature.creatureType]}`}>
            {typeLabels[creature.creatureType]}
          </span>
          {creature.dangerLevel && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${dangerColors[creature.dangerLevel]} flex items-center gap-1`}>
              <HiExclamationTriangle className="text-xs" />
              {dangerLabels[creature.dangerLevel]}
            </span>
          )}
        </>
      )}
      renderDetails={() => (
        <div className="space-y-3 text-sm">
          {creature.habitat && (
            <div>
              <span className="text-zinc-500 flex items-center gap-1">
                <HiMapPin className="text-xs" /> Hábitat
              </span>
              <p className="text-zinc-300">{creature.habitat}</p>
            </div>
          )}

          {creature.abilities && creature.abilities.length > 0 && (
            <div>
              <span className="text-zinc-500 flex items-center gap-1">
                <HiSparkles className="text-xs" /> Habilidades
              </span>
              <ul className="mt-1 space-y-1">
                {creature.abilities.map((ability, idx) => (
                  <li key={idx} className="text-zinc-300 pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-amber-400">
                    {ability}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    />
  )
}
