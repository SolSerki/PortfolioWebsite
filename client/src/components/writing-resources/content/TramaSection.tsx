import { useState, useMemo } from 'react'
import { HiBookOpen, HiLightBulb, HiPencil, HiSparkles } from 'react-icons/hi2'
import { WRSearchFilters, type FilterGroup } from '../search'
import { ResourceCard } from '../entries'
import type { TramaResource } from '../types'

// Template para tus recursos - Copia este formato para agregar nuevos recursos
const sampleResources: TramaResource[] = [
  // {
  //   id: 'trama-1', // ID único
  //   type: 'trama',
  //   title: 'Título del recurso',
  //   shortDescription: 'Descripción breve para la vista previa',
  //   description: 'Descripción completa del recurso',
  //   content: `Contenido detallado aquí.
  //   
  //   Puedes usar múltiples líneas y formateo Markdown.`,
  //   resourceType: 'structure', // 'structure' | 'technique' | 'exercise' | 'tip'
  //   category: 'estructuras', // categoría para organización interna
  //   tags: ['tag1', 'tag2'], // tags opcionales
  //   relatedResources: ['id-otro-recurso'] // IDs de recursos relacionados (opcional)
  // }
]

interface TramaSectionProps {
  subSection?: string
  searchQuery: string
}

export default function TramaSection({ subSection, searchQuery }: TramaSectionProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})

  const filterGroups: FilterGroup[] = [
    {
      id: 'type',
      label: 'Tipo',
      multiple: true,
      options: [
        { id: 'structure', label: 'Estructuras' },
        { id: 'technique', label: 'Técnicas' },
        { id: 'exercise', label: 'Ejercicios' },
        { id: 'tip', label: 'Tips' }
      ]
    }
  ]

  const typeIcons = {
    structure: <HiBookOpen />,
    technique: <HiSparkles />,
    exercise: <HiPencil />,
    tip: <HiLightBulb />
  }

  const typeLabels = {
    structure: 'Estructura',
    technique: 'Técnica',
    exercise: 'Ejercicio',
    tip: 'Tip'
  }

  const filteredResources = useMemo(() => {
    let result = sampleResources

    // Filter by subSection
    if (subSection === 'estructuras') {
      result = result.filter(r => r.resourceType === 'structure')
    } else if (subSection === 'tecnicas') {
      result = result.filter(r => r.resourceType === 'technique')
    } else if (subSection === 'ejercicios') {
      result = result.filter(r => r.resourceType === 'exercise')
    } else if (subSection === 'tips') {
      result = result.filter(r => r.resourceType === 'tip')
    }

    // Search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(r =>
        r.title.toLowerCase().includes(query) ||
        r.description.toLowerCase().includes(query) ||
        r.tags?.some(t => t.toLowerCase().includes(query))
      )
    }

    // Active filters - type
    if (activeFilters.type?.length) {
      result = result.filter(r => activeFilters.type.includes(r.resourceType))
    }

    return result
  }, [subSection, searchQuery, activeFilters])

  const handleFilterChange = (groupId: string, optionIds: string[]) => {
    setActiveFilters(prev => ({ ...prev, [groupId]: optionIds }))
  }

  return (
    <div className="space-y-6">
      <WRSearchFilters
        filters={filterGroups}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        onClearFilters={() => setActiveFilters({})}
        resultCount={filteredResources.length}
      />

      <div className="grid gap-4">
        {filteredResources.length > 0 ? (
          filteredResources.map(resource => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              accentColor="purple"
              icon={typeIcons[resource.resourceType]}
              renderBadges={() => (
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
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
