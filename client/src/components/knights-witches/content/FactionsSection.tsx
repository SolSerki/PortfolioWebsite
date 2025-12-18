import { useState, useMemo } from 'react'
import { SearchFilters, type FilterGroup } from '../search'
import { FactionCard } from '../entries'
import type { FactionEntry } from '../types'

const sampleFactions: FactionEntry[] = [
  {
    id: 'faction-1',
    type: 'faction',
    name: 'Orden del Alba',
    shortDescription: 'La más antigua y noble orden de caballeros, guardianes de la luz.',
    description: 'Fundada hace más de quinientos años, la Orden del Alba es la organización de caballeros más prestigiosa del reino. Sus miembros juran proteger a los inocentes y combatir la oscuridad en todas sus formas. Su sede se encuentra en la Ciudadela del Sol.',
    factionType: 'knightOrder',
    leader: 'Lady Seraphina',
    headquarters: 'Ciudadela del Sol',
    members: ['Sir Aldric Blackwood', 'Sir Thorne', 'Lady Elena'],
    allies: ['Casa Valorian', 'Orden del Crepúsculo'],
    enemies: ['Coven de las Sombras'],
    tags: ['caballeros', 'luz', 'honor']
  },
  {
    id: 'faction-2',
    type: 'faction',
    name: 'Coven de las Sombras',
    shortDescription: 'Un coven antiguo dedicado a los misterios de la magia oscura.',
    description: 'El Coven de las Sombras es uno de los covens más antiguos y temidos. Operan desde las profundidades del Bosque Eterno, practicando artes que muchos consideran prohibidas. Su verdadera agenda sigue siendo un misterio.',
    factionType: 'coven',
    leader: 'Morgana Nightshade',
    headquarters: 'Bosque Eterno',
    members: ['Morgana Nightshade', 'Selene Darkweaver'],
    enemies: ['Orden del Alba'],
    tags: ['brujas', 'magia oscura', 'secretos'],
    spoiler: true
  },
  {
    id: 'faction-3',
    type: 'faction',
    name: 'Casa Valorian',
    shortDescription: 'La casa real que gobernó el reino durante tres siglos.',
    description: 'La Casa Valorian fue la dinastía gobernante del Reino Unido durante más de trescientos años. Conocidos por su justicia y sabiduría, su linaje terminó con la muerte del Rey Edric III.',
    factionType: 'kingdom',
    leader: 'Rey Edric III (fallecido)',
    headquarters: 'Palacio de Cristal',
    allies: ['Orden del Alba'],
    tags: ['realeza', 'sur', 'historia']
  }
]

interface FactionsSectionProps {
  subSection?: string
  searchQuery: string
  showSpoilers: boolean
  onToggleSpoilers: () => void
}

export default function FactionsSection({
  subSection,
  searchQuery,
  showSpoilers,
  onToggleSpoilers
}: FactionsSectionProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})

  const filterGroups: FilterGroup[] = [
    {
      id: 'type',
      label: 'Tipo',
      options: [
        { id: 'knightOrder', label: 'Orden de Caballería' },
        { id: 'coven', label: 'Coven' },
        { id: 'kingdom', label: 'Reino' },
        { id: 'guild', label: 'Gremio' }
      ]
    }
  ]

  const filteredFactions = useMemo(() => {
    let result = sampleFactions

    // Filter by subSection
    if (subSection === 'caballeros') {
      result = result.filter(f => f.factionType === 'knightOrder')
    } else if (subSection === 'brujas') {
      result = result.filter(f => f.factionType === 'coven')
    } else if (subSection === 'reinos') {
      result = result.filter(f => f.factionType === 'kingdom')
    }

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(f =>
        f.name.toLowerCase().includes(query) ||
        f.description.toLowerCase().includes(query) ||
        f.tags?.some(t => t.toLowerCase().includes(query))
      )
    }

    // Active filters
    if (activeFilters.type?.length) {
      result = result.filter(f => activeFilters.type.includes(f.factionType))
    }

    return result
  }, [subSection, searchQuery, activeFilters])

  const handleFilterChange = (groupId: string, optionIds: string[]) => {
    setActiveFilters(prev => ({ ...prev, [groupId]: optionIds }))
  }

  const handleRelatedClick = (entryId: string) => {
    console.log('Navigate to:', entryId)
  }

  return (
    <div className="space-y-6">
      <SearchFilters
        filters={filterGroups}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={() => setActiveFilters({})}
        showSpoilers={showSpoilers}
        onToggleSpoilers={onToggleSpoilers}
        resultCount={filteredFactions.length}
      />

      <div className="grid gap-4">
        {filteredFactions.length > 0 ? (
          filteredFactions.map(faction => (
            <FactionCard
              key={faction.id}
              faction={faction}
              onRelatedClick={handleRelatedClick}
              showSpoilers={showSpoilers}
            />
          ))
        ) : (
          <div className="text-center py-12 text-zinc-500">
            <p>No se encontraron facciones con los filtros actuales.</p>
          </div>
        )}
      </div>
    </div>
  )
}
