import { HiChevronDown, HiChevronUp, HiClock } from 'react-icons/hi2'

interface TimelineSectionProps {
  isExpanded: boolean
  onToggle: () => void
}

const timelineEvents = [
  { year: 'Año 0', title: 'El Despertar', description: 'Evento fundacional del mundo...' },
  { year: 'Año 100', title: 'La Primera Guerra', description: 'Conflicto que definió las fronteras...' },
  { year: 'Año 250', title: 'El Pacto de las Brujas', description: 'Formación de los covens...' },
  { year: 'Año 400', title: 'La Era de los Caballeros', description: 'Surgimiento de las órdenes de caballería...' },
  { year: 'Año 600', title: 'La Gran Alianza', description: 'Unión temporal entre caballeros y brujas...' },
  { year: 'Presente', title: 'Tiempos Actuales', description: 'Estado actual del mundo...' }
]

export default function TimelineSection({ isExpanded, onToggle }: TimelineSectionProps) {
  return (
    <div className="border border-emerald-500/30 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 hover:from-emerald-900/30 hover:to-teal-900/30 transition-all"
      >
        <div className="flex items-center gap-2">
          <HiClock className="text-2xl text-emerald-400" />
          <h2 className="text-2xl font-bold text-emerald-300">Línea Temporal</h2>
        </div>
        {isExpanded ? (
          <HiChevronUp className="text-2xl text-emerald-400" />
        ) : (
          <HiChevronDown className="text-2xl text-emerald-400" />
        )}
      </button>
      {isExpanded && (
        <div className="p-6 bg-zinc-900/30">
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-emerald-500"></div>
            
            {/* Eventos */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-20">
                  {/* Punto en la línea */}
                  <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-emerald-500 border-4 border-zinc-900 shadow-lg shadow-emerald-500/50"></div>
                  
                  {/* Contenido del evento */}
                  <div className="bg-gradient-to-br from-emerald-900/20 to-zinc-900/40 p-4 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
                    <div className="text-sm text-emerald-400 font-semibold mb-1">{event.year}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-zinc-400 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
