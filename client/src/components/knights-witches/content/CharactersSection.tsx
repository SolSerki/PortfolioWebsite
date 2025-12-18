import { useState, useMemo } from 'react'
import { SearchFilters, type FilterGroup } from '../search'
import { CharacterCard } from '../entries'
import type { CharacterEntry } from '../types'

// Datos de ejemplo - estos se moverían a un archivo de datos separado
const sampleCharacters: CharacterEntry[] = [
  {
    id: 'char-1',
    type: 'character',
    name: 'Sir Aldric Blackwood',
    shortDescription: 'Caballero de la Orden del Alba, veterano de las Guerras del Crepúsculo.',
    description: 'Sir Aldric Blackwood es un caballero veterano de la Orden del Alba. Conocido por su inquebrantable sentido del honor y su dominio de la espada, ha servido a la orden durante más de dos décadas. Su cicatriz en el rostro es un recordatorio de la Batalla de los Campos Carmesí.',
    faction: 'Orden del Alba',
    region: 'Tierras del Norte',
    role: 'Maestro de Armas',
    status: 'alive',
    tags: ['caballero', 'veterano', 'norte'],
    relatedEntries: ['Orden del Alba', 'Batalla de los Campos Carmesí'],
    relationships: [
      { characterId: 'Lady Seraphina', relation: 'Comandante' },
      { characterId: 'Thorne', relation: 'Antiguo escudero' }
    ]
  },
  {
    id: 'char-2',
    type: 'character',
    name: 'Morgana Nightshade',
    shortDescription: 'Alta Bruja del Coven de las Sombras, maestra de la magia oscura.',
    description: 'Morgana Nightshade es la líder del Coven de las Sombras, uno de los covens más antiguos y temidos. Su dominio sobre la magia oscura es legendario, aunque pocos conocen sus verdaderas intenciones.',
    faction: 'Coven de las Sombras',
    region: 'Tierras del Oeste',
    role: 'Alta Bruja',
    status: 'alive',
    tags: ['bruja', 'líder', 'magia oscura'],
    spoiler: true
  },
  {
    id: 'char-3',
    type: 'character',
    name: 'Rey Edric III',
    shortDescription: 'Último rey de la dinastía Valorian, caído en la Noche de las Mil Estrellas.',
    description: 'El Rey Edric III gobernó el Reino Unido durante quince años de relativa paz antes de su trágica muerte durante la Noche de las Mil Estrellas. Su reinado marcó el fin de una era.',
    faction: 'Casa Valorian',
    region: 'Tierras del Sur',
    role: 'Rey',
    status: 'deceased',
    tags: ['realeza', 'sur', 'historia'],
    spoiler: true
  }
]

interface CharactersSectionProps {
  subSection?: string
  searchQuery: string
  showSpoilers: boolean
  onToggleSpoilers: () => void
}

export default function CharactersSection({ 
  subSection, 
  searchQuery,
  showSpoilers,
  onToggleSpoilers 
}: CharactersSectionProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})

  const filterGroups: FilterGroup[] = [
    {
      id: 'status',
      label: 'Estado',
      options: [
        { id: 'alive', label: 'Vivo' },
        { id: 'deceased', label: 'Fallecido' },
        { id: 'unknown', label: 'Desconocido' }
      ]
    },
    {
      id: 'faction',
      label: 'Facción',
      multiple: true,
      options: [
        { id: 'orden-alba', label: 'Orden del Alba' },
        { id: 'coven-sombras', label: 'Coven de las Sombras' },
        { id: 'casa-valorian', label: 'Casa Valorian' }
      ]
    },
    {
      id: 'region',
      label: 'Región',
      multiple: true,
      options: [
        { id: 'norte', label: 'Tierras del Norte' },
        { id: 'sur', label: 'Tierras del Sur' },
        { id: 'este', label: 'Tierras del Este' },
        { id: 'oeste', label: 'Tierras del Oeste' }
      ]
    }
  ]

  const filteredCharacters = useMemo(() => {
    let result = sampleCharacters

    // Filter by subSection (protagonistas, antagonistas, secundarios)
    if (subSection === 'protagonistas') {
      result = result.filter(c => c.tags?.includes('protagonista') || c.role === 'Maestro de Armas')
    } else if (subSection === 'antagonistas') {
      result = result.filter(c => c.tags?.includes('antagonista') || c.faction?.includes('Sombras'))
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(c => 
        c.name.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query) ||
        c.faction?.toLowerCase().includes(query) ||
        c.tags?.some(t => t.toLowerCase().includes(query))
      )
    }

    // Apply active filters
    if (activeFilters.status?.length) {
      result = result.filter(c => c.status && activeFilters.status.includes(c.status))
    }

    return result
  }, [subSection, searchQuery, activeFilters])

  const handleFilterChange = (groupId: string, optionIds: string[]) => {
    setActiveFilters(prev => ({ ...prev, [groupId]: optionIds }))
  }

  const clearFilters = () => {
    setActiveFilters({})
  }

  const handleRelatedClick = (entryId: string) => {
    console.log('Navigate to:', entryId)
    // TODO: Implementar navegación a entradas relacionadas
  }

  return (
    <div className="space-y-6">
      <SearchFilters
        filters={filterGroups}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={clearFilters}
        showSpoilers={showSpoilers}
        onToggleSpoilers={onToggleSpoilers}
        resultCount={filteredCharacters.length}
      />

      <div className="grid gap-4">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
              onRelatedClick={handleRelatedClick}
              showSpoilers={showSpoilers}
            />
          ))
        ) : (
          <div className="text-center py-12 text-zinc-500">
            <p>No se encontraron personajes con los filtros actuales.</p>
          </div>
        )}
      </div>
    </div>
  )
}
