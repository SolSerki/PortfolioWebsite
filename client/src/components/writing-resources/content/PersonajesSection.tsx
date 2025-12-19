import { useState, useMemo } from 'react'
import { HiUsers, HiChatBubbleLeft, HiHeart, HiPuzzlePiece, HiClock } from 'react-icons/hi2'
import { WRSearchFilters, type FilterGroup } from '../search'
import { ResourceCard } from '../entries'
import type { PersonajesResource } from '../types'

// Template para tus recursos - Copia este formato para agregar nuevos recursos
const sampleResources: PersonajesResource[] = [
  // {
  //   id: 'personaje-1', // ID único
  //   type: 'personajes',
  //   title: 'Título del recurso',
  //   shortDescription: 'Descripción breve para la vista previa',
  //   description: 'Descripción completa del recurso',
  //   content: `Contenido detallado aquí.
  //   
  //   Puedes usar múltiples líneas y formateo Markdown.`,
  //   resourceType: 'development', // 'development' | 'archetype' | 'dialogue' | 'motivation' | 'backstory'
  //   category: 'desarrollo', // categoría para organización interna
  //   tags: ['tag1', 'tag2'], // tags opcionales
  //   relatedResources: ['id-otro-recurso'] // IDs de recursos relacionados (opcional)
  // }
]

interface PersonajesSectionProps {
  subSection?: string
  searchQuery: string
}

export default function PersonajesSection({ subSection, searchQuery }: PersonajesSectionProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})

  const filterGroups: FilterGroup[] = [
    {
      id: 'type',
      label: 'Categoría',
      multiple: true,
      options: [
        { id: 'development', label: 'Desarrollo' },
        { id: 'archetype', label: 'Arquetipos' },
        { id: 'dialogue', label: 'Diálogos' },
        { id: 'motivation', label: 'Motivaciones' },
        { id: 'backstory', label: 'Backstory' }
      ]
    }
  ]

  const typeIcons = {
    development: <HiUsers />,
    archetype: <HiPuzzlePiece />,
    dialogue: <HiChatBubbleLeft />,
    motivation: <HiHeart />,
    backstory: <HiClock />
  }

  const typeLabels = {
    development: 'Desarrollo',
    archetype: 'Arquetipo',
    dialogue: 'Diálogo',
    motivation: 'Motivación',
    backstory: 'Backstory'
  }

  const filteredResources = useMemo(() => {
    let result = sampleResources

    if (subSection === 'desarrollo') {
      result = result.filter(r => r.resourceType === 'development')
    } else if (subSection === 'arquetipos') {
      result = result.filter(r => r.resourceType === 'archetype')
    } else if (subSection === 'dialogos') {
      result = result.filter(r => r.resourceType === 'dialogue')
    } else if (subSection === 'motivaciones') {
      result = result.filter(r => r.resourceType === 'motivation')
    } else if (subSection === 'backstory') {
      result = result.filter(r => r.resourceType === 'backstory')
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(r =>
        r.title.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        r.tags?.some(t => t.toLowerCase().includes(query))
      )
    }

    if (activeFilters.type?.length) {
      result = result.filter(r => activeFilters.type.includes(r.resourceType))
    }

    return result
  }, [subSection, searchQuery, activeFilters])

  return (
    <div className="space-y-6">
      <WRSearchFilters
        filters={filterGroups}
        activeFilters={activeFilters}
        onFilterChange={(groupId, optionIds) => setActiveFilters(prev => ({ ...prev, [groupId]: optionIds }))}
        onClearFilters={() => setActiveFilters({})}
        resultCount={filteredResources.length}
      />

      <div className="grid gap-4">
        {filteredResources.length > 0 ? (
          filteredResources.map(resource => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              accentColor="pink"
              icon={typeIcons[resource.resourceType]}
              renderBadges={() => (
                <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300">
                  {typeLabels[resource.resourceType]}
                </span>
              )}
            />
          ))
        ) : (
          <div className="text-center py-12 text-zinc-500">
            <p>No se encontraron recursos con los filtros actuales.</p>
          </div>
        )}
      </div>
    </div>
  )
}
