import { useState } from 'react'
import { HiChevronDown, HiChevronUp, HiMapPin, HiClock } from 'react-icons/hi2'
import RegionNorte from './regions/RegionNorte'
import RegionSur from './regions/RegionSur'
import RegionEste from './regions/RegionEste'
import RegionOeste from './regions/RegionOeste'

type Region = 'norte' | 'sur' | 'este' | 'oeste' | null

export default function KnightsWitches() {
  const [selectedRegion, setSelectedRegion] = useState<Region>(null)
  const [showSynopsis, setShowSynopsis] = useState(true)
  const [showWorldIntro, setShowWorldIntro] = useState(true)
  const [showTimeline, setShowTimeline] = useState(false)

  const regions = [
    { id: 'norte' as Region, name: 'Tierras del Norte', color: 'from-blue-600 to-cyan-600' },
    { id: 'sur' as Region, name: 'Tierras del Sur', color: 'from-amber-600 to-orange-600' },
    { id: 'este' as Region, name: 'Tierras del Este', color: 'from-purple-600 to-pink-600' },
    { id: 'oeste' as Region, name: 'Tierras del Oeste', color: 'from-emerald-600 to-teal-600' }
  ]

  const timelineEvents = [
    { year: 'Año 0', title: 'El Despertar', description: 'Evento fundacional del mundo...' },
    { year: 'Año 100', title: 'La Primera Guerra', description: 'Conflicto que definió las fronteras...' },
    { year: 'Año 250', title: 'El Pacto de las Brujas', description: 'Formación de los covens...' },
    { year: 'Año 400', title: 'La Era de los Caballeros', description: 'Surgimiento de las órdenes de caballería...' },
    { year: 'Año 600', title: 'La Gran Alianza', description: 'Unión temporal entre caballeros y brujas...' },
    { year: 'Presente', title: 'Tiempos Actuales', description: 'Estado actual del mundo...' }
  ]

  return (
    <div className="space-y-8">
      {/* Sinopsis */}
      <div className="border border-emerald-500/30 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowSynopsis(!showSynopsis)}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 hover:from-emerald-900/30 hover:to-teal-900/30 transition-all"
        >
          <h2 className="text-2xl font-bold text-emerald-300">Sinopsis</h2>
          {showSynopsis ? <HiChevronUp className="text-2xl text-emerald-400" /> : <HiChevronDown className="text-2xl text-emerald-400" />}
        </button>
        {showSynopsis && (
          <div className="p-6 bg-zinc-900/30">
            <p className="text-zinc-300 leading-relaxed">
              En un mundo donde la magia y el honor caballeresco coexisten en constante tensión, 
              las brujas protegen los antiguos secretos mientras los caballeros defienden los reinos 
              de amenazas tanto místicas como mundanas. Placeholder para la sinopsis completa...
            </p>
          </div>
        )}
      </div>

      {/* Introducción al Mundo */}
      <div className="border border-emerald-500/30 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowWorldIntro(!showWorldIntro)}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 hover:from-emerald-900/30 hover:to-teal-900/30 transition-all"
        >
          <h2 className="text-2xl font-bold text-emerald-300">Introducción al Mundo</h2>
          {showWorldIntro ? <HiChevronUp className="text-2xl text-emerald-400" /> : <HiChevronDown className="text-2xl text-emerald-400" />}
        </button>
        {showWorldIntro && (
          <div className="p-6 bg-zinc-900/30 space-y-4">
            <p className="text-zinc-300 leading-relaxed">
              El mundo de Knights & Witches está dividido en cuatro grandes regiones, cada una con 
              su propia cultura, magia y tradiciones caballerescas. Placeholder para descripción del mundo...
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-gradient-to-br from-emerald-900/20 to-zinc-900/40 rounded-lg border border-emerald-500/20">
                <h3 className="text-lg font-semibold text-emerald-300 mb-2">Sistemas de Magia</h3>
                <p className="text-zinc-400 text-sm">Placeholder para descripción de la magia...</p>
              </div>
              <div className="p-4 bg-gradient-to-br from-teal-900/20 to-zinc-900/40 rounded-lg border border-teal-500/20">
                <h3 className="text-lg font-semibold text-teal-300 mb-2">Órdenes de Caballería</h3>
                <p className="text-zinc-400 text-sm">Placeholder para descripción de las órdenes...</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mapamundi Interactivo */}
      <div className="border border-emerald-500/30 rounded-xl p-6 bg-gradient-to-br from-emerald-900/10 to-zinc-900/30">
        <div className="flex items-center gap-2 mb-6">
          <HiMapPin className="text-2xl text-emerald-400" />
          <h2 className="text-2xl font-bold text-emerald-300">Mapamundi</h2>
        </div>

        {/* Selector de Regiones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
              className={`p-4 rounded-lg border transition-all transform hover:scale-105 ${
                selectedRegion === region.id
                  ? `bg-gradient-to-br ${region.color} border-white/50 shadow-lg`
                  : 'bg-zinc-900/50 border-zinc-700 hover:border-emerald-500/50'
              }`}
            >
              <h3 className={`font-bold ${selectedRegion === region.id ? 'text-white' : 'text-zinc-300'}`}>
                {region.name}
              </h3>
            </button>
          ))}
        </div>

        {/* Contenido de la Región Seleccionada */}
        {selectedRegion && (
          <div className="mt-6 animate-fadeIn">
            {selectedRegion === 'norte' && <RegionNorte />}
            {selectedRegion === 'sur' && <RegionSur />}
            {selectedRegion === 'este' && <RegionEste />}
            {selectedRegion === 'oeste' && <RegionOeste />}
          </div>
        )}

        {!selectedRegion && (
          <div className="text-center py-12 text-zinc-500">
            Selecciona una región para explorar
          </div>
        )}
      </div>

      {/* Timeline Interactiva */}
      <div className="border border-emerald-500/30 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowTimeline(!showTimeline)}
          className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 hover:from-emerald-900/30 hover:to-teal-900/30 transition-all"
        >
          <div className="flex items-center gap-2">
            <HiClock className="text-2xl text-emerald-400" />
            <h2 className="text-2xl font-bold text-emerald-300">Línea Temporal</h2>
          </div>
          {showTimeline ? <HiChevronUp className="text-2xl text-emerald-400" /> : <HiChevronDown className="text-2xl text-emerald-400" />}
        </button>
        {showTimeline && (
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
    </div>
  )
}
