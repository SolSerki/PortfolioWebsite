import { HiUser, HiSparkles } from 'react-icons/hi2'
import { GiCrystalBall } from 'react-icons/gi'
import EntryCard from './EntryCard'
import type { ArtifactEntry } from '../types'

interface ArtifactCardProps {
  artifact: ArtifactEntry
  onRelatedClick?: (entryId: string) => void
  showSpoilers?: boolean
}

export default function ArtifactCard({ artifact, onRelatedClick, showSpoilers }: ArtifactCardProps) {
  const typeLabels = {
    weapon: 'Arma',
    armor: 'Armadura',
    relic: 'Reliquia',
    tool: 'Herramienta',
    jewelry: 'Joyería'
  }

  const typeColors = {
    weapon: 'bg-red-500/20 text-red-300',
    armor: 'bg-blue-500/20 text-blue-300',
    relic: 'bg-amber-500/20 text-amber-300',
    tool: 'bg-zinc-500/20 text-zinc-300',
    jewelry: 'bg-violet-500/20 text-violet-300'
  }

  return (
    <EntryCard
      entry={artifact}
      accentColor="amber"
      icon={<GiCrystalBall />}
      onRelatedClick={onRelatedClick}
      showSpoilers={showSpoilers}
      renderBadges={() => (
        <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[artifact.artifactType]}`}>
          {typeLabels[artifact.artifactType]}
        </span>
      )}
      renderDetails={() => (
        <div className="space-y-3 text-sm">
          {artifact.origin && (
            <div>
              <span className="text-zinc-500">Origen</span>
              <p className="text-zinc-300">{artifact.origin}</p>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            {artifact.currentOwner && (
              <div>
                <span className="text-zinc-500 flex items-center gap-1">
                  <HiUser className="text-xs" /> Propietario Actual
                </span>
                <button
                  onClick={() => onRelatedClick?.(artifact.currentOwner!)}
                  className="text-amber-400 hover:text-amber-300 transition-colors"
                >
                  {artifact.currentOwner}
                </button>
              </div>
            )}
          </div>

          {artifact.previousOwners && artifact.previousOwners.length > 0 && (
            <div>
              <span className="text-zinc-500">Propietarios Anteriores</span>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {artifact.previousOwners.map((owner) => (
                  <button
                    key={owner}
                    onClick={() => onRelatedClick?.(owner)}
                    className="text-xs px-2 py-1 bg-zinc-800/50 rounded-lg text-zinc-300 hover:text-white transition-colors"
                  >
                    {owner}
                  </button>
                ))}
              </div>
            </div>
          )}

          {artifact.powers && artifact.powers.length > 0 && (
            <div>
              <span className="text-zinc-500 flex items-center gap-1">
                <HiSparkles className="text-xs" /> Poderes
              </span>
              <ul className="mt-1 space-y-1">
                {artifact.powers.map((power, idx) => (
                  <li key={idx} className="text-zinc-300 pl-3 relative before:content-['✦'] before:absolute before:left-0 before:text-amber-400 before:text-xs">
                    {power}
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
