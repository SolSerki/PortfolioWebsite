import { useState, useMemo } from 'react'
import { HiBookOpen, HiLightBulb, HiPencil, HiSparkles } from 'react-icons/hi2'
import { WRSearchFilters, type FilterGroup } from '../search'
import { ResourceCard } from '../entries'
import type { TramaResource } from '../types'

// Datos de ejemplo
const sampleResources: TramaResource[] = [
  {
    id: 'trama-1',
    type: 'trama',
    title: 'La Estructura de Tres Actos',
    shortDescription: 'La estructura narrativa más utilizada en la historia del storytelling.',
    description: 'La estructura de tres actos divide la historia en Planteamiento (25%), Nudo (50%) y Desenlace (25%). Es la base de la mayoría de las historias exitosas en cine, literatura y teatro.',
    content: `**Primer Acto - Planteamiento (25%)**
• Introducción del protagonista y su mundo ordinario
• Establecimiento del conflicto principal
• Punto de giro que lanza la historia

**Segundo Acto - Nudo (50%)**
• El protagonista enfrenta obstáculos crecientes
• Punto medio: revelación o cambio importante
• Crisis: el momento más oscuro

**Tercer Acto - Desenlace (25%)**
• Clímax: confrontación final
• Resolución del conflicto
• Nuevo equilibrio`,
    resourceType: 'structure',
    category: 'estructuras',
    difficulty: 'beginner',
    tags: ['estructura', 'básico', 'tres actos'],
    relatedResources: ['El Viaje del Héroe', 'Save the Cat']
  },
  {
    id: 'trama-2',
    type: 'trama',
    title: 'El Viaje del Héroe',
    shortDescription: 'El monomito de Joseph Campbell aplicado a la narrativa moderna.',
    description: 'Estructura circular de 12 etapas que describe el viaje transformador del protagonista, desde el mundo ordinario hasta el regreso con el elixir.',
    resourceType: 'structure',
    category: 'estructuras',
    difficulty: 'intermediate',
    tags: ['estructura', 'campbell', 'monomito', 'fantasía'],
    relatedResources: ['La Estructura de Tres Actos']
  },
  {
    id: 'trama-3',
    type: 'trama',
    title: 'Foreshadowing Efectivo',
    shortDescription: 'Cómo plantar pistas sin revelar el final.',
    description: 'El foreshadowing es una técnica que prepara al lector para eventos futuros sin arruinar la sorpresa. Bien ejecutado, hace que los giros se sientan inevitables en retrospectiva.',
    content: `**Tipos de Foreshadowing:**
• Directo: Profecías, advertencias explícitas
• Simbólico: Objetos, colores, patrones recurrentes
• Atmosférico: El tono presagia eventos
• Retroactivo: Detalles que cobran significado después

**Regla de oro:** Si el lector puede predecir el giro, es muy obvio. Si no tiene sentido en retrospectiva, es muy sutil.`,
    resourceType: 'technique',
    category: 'tecnicas',
    difficulty: 'intermediate',
    tags: ['técnica', 'suspense', 'giros']
  },
  {
    id: 'trama-4',
    type: 'trama',
    title: 'Ejercicio: El Reloj',
    shortDescription: 'Crea tensión limitando el tiempo de tu protagonista.',
    description: 'Escribe una escena donde el protagonista tiene exactamente 10 minutos para lograr algo crucial. Practica el manejo de la tensión temporal.',
    content: `**Instrucciones:**
1. Define qué debe lograr el protagonista
2. Establece las consecuencias del fracaso
3. Escribe la escena mostrando el paso del tiempo
4. Añade al menos un obstáculo inesperado
5. Máximo 1000 palabras`,
    resourceType: 'exercise',
    category: 'ejercicios',
    difficulty: 'beginner',
    tags: ['ejercicio', 'tensión', 'práctica']
  },
  {
    id: 'trama-5',
    type: 'trama',
    title: 'Subtramas que Enriquecen',
    shortDescription: 'Cómo las historias secundarias fortalecen la trama principal.',
    description: 'Las subtramas bien diseñadas reflejan, contrastan o complementan el tema principal, añadiendo profundidad sin distraer.',
    resourceType: 'tip',
    category: 'tips',
    difficulty: 'advanced',
    tags: ['subtrama', 'estructura', 'avanzado']
  }
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
    },
    {
      id: 'difficulty',
      label: 'Dificultad',
      options: [
        { id: 'beginner', label: 'Principiante' },
        { id: 'intermediate', label: 'Intermedio' },
        { id: 'advanced', label: 'Avanzado' }
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

    // Active filters - difficulty
    if (activeFilters.difficulty?.length) {
      result = result.filter(r => r.difficulty && activeFilters.difficulty.includes(r.difficulty))
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
