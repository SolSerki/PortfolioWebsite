import { useState, useMemo } from 'react'
import { HiUsers, HiChatBubbleLeft, HiHeart, HiPuzzlePiece, HiClock } from 'react-icons/hi2'
import { WRSearchFilters, type FilterGroup } from '../search'
import { ResourceCard } from '../entries'
import type { PersonajesResource } from '../types'

const sampleResources: PersonajesResource[] = [
  {
    id: 'personaje-1',
    type: 'personajes',
    title: 'Arquetipos de Jung',
    shortDescription: 'Los 12 arquetipos universales para crear personajes memorables.',
    description: 'Los arquetipos de Carl Jung son patrones universales del inconsciente colectivo que resuenan con todos los lectores. Úsalos como base, no como molde rígido.',
    content: `**Los 12 Arquetipos:**
1. El Inocente - Optimista, busca la felicidad
2. El Huérfano - Realista, busca pertenencia
3. El Guerrero - Valiente, busca dominio
4. El Cuidador - Altruista, busca proteger
5. El Buscador - Independiente, busca libertad
6. El Amante - Apasionado, busca intimidad
7. El Destructor - Rebelde, busca liberación
8. El Creador - Imaginativo, busca innovación
9. El Gobernante - Líder, busca control
10. El Mago - Visionario, busca transformación
11. El Sabio - Pensador, busca verdad
12. El Bufón - Alegre, busca disfrutar el momento`,
    resourceType: 'archetype',
    category: 'arquetipos',
    difficulty: 'intermediate',
    tags: ['arquetipos', 'jung', 'psicología']
  },
  {
    id: 'personaje-2',
    type: 'personajes',
    title: 'El Método de la Herida',
    shortDescription: 'Crea personajes complejos partiendo de su trauma fundamental.',
    description: 'Todo personaje memorable tiene una herida emocional que define sus comportamientos, miedos y deseos. Esta herida es el motor de su arco de transformación.',
    content: `**Componentes de la Herida:**
• La Herida: Evento traumático del pasado
• La Mentira: Lo que el personaje cree por la herida
• El Miedo: Lo que evita a toda costa
• El Deseo: Lo que cree que lo sanará
• La Necesidad: Lo que realmente necesita

**Ejemplo:**
Herida: Abandono en la infancia
Mentira: "No soy digno de amor"
Miedo: Intimidad emocional
Deseo: Éxito profesional (prueba de valor)
Necesidad: Conexión genuina`,
    resourceType: 'development',
    category: 'desarrollo',
    difficulty: 'intermediate',
    tags: ['desarrollo', 'psicología', 'arco']
  },
  {
    id: 'personaje-3',
    type: 'personajes',
    title: 'Diálogo que Revela',
    shortDescription: 'Técnicas para que cada línea de diálogo trabaje en múltiples niveles.',
    description: 'El mejor diálogo hace al menos dos cosas a la vez: avanza la trama Y revela carácter. Evita el diálogo que solo transmite información.',
    content: `**Técnicas clave:**
• Subtexto: Lo que NO se dice es tan importante
• Voz única: Cada personaje habla diferente
• Conflicto: Agendas opuestas en cada conversación
• Economía: Menos es más

**Test de diálogo:**
¿Podrías saber quién habla sin etiquetas de diálogo?
¿La conversación tiene tensión?
¿Se revela algo sobre los personajes?`,
    resourceType: 'dialogue',
    category: 'dialogos',
    difficulty: 'advanced',
    tags: ['diálogo', 'técnica', 'subtexto']
  },
  {
    id: 'personaje-4',
    type: 'personajes',
    title: 'Motivaciones Contradictorias',
    shortDescription: 'Crea personajes realistas con deseos en conflicto interno.',
    description: 'Los personajes más interesantes quieren cosas que se contradicen entre sí. Esta tensión interna genera drama sin necesidad de villanos externos.',
    resourceType: 'motivation',
    category: 'motivaciones',
    difficulty: 'advanced',
    tags: ['motivación', 'conflicto interno', 'complejidad']
  },
  {
    id: 'personaje-5',
    type: 'personajes',
    title: 'Backstory Iceberg',
    shortDescription: 'Conoce el 100% de la historia de tu personaje, muestra solo el 10%.',
    description: 'Como un iceberg, la mayor parte del backstory debe permanecer bajo la superficie. El lector lo sentirá aunque no lo vea explícitamente.',
    resourceType: 'backstory',
    category: 'backstory',
    difficulty: 'beginner',
    tags: ['backstory', 'historia', 'técnica']
  }
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

    if (activeFilters.difficulty?.length) {
      result = result.filter(r => r.difficulty && activeFilters.difficulty.includes(r.difficulty))
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
