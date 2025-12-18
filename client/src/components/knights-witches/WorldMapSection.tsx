import { HiMapPin } from 'react-icons/hi2'
import RegionNorte from './regions/RegionNorte'
import RegionSur from './regions/RegionSur'
import RegionEste from './regions/RegionEste'
import RegionOeste from './regions/RegionOeste'

export type Region = 'norte' | 'sur' | 'este' | 'oeste' | null

interface WorldMapSectionProps {
  selectedRegion: Region
  onRegionChange: (region: Region) => void
}

const regions = [
  { id: 'norte' as Region, name: 'Tierras del Norte', color: 'from-blue-600 to-cyan-600' },
  { id: 'sur' as Region, name: 'Tierras del Sur', color: 'from-amber-600 to-orange-600' },
  { id: 'este' as Region, name: 'Tierras del Este', color: 'from-purple-600 to-pink-600' },
  { id: 'oeste' as Region, name: 'Tierras del Oeste', color: 'from-emerald-600 to-teal-600' }
]

export default function WorldMapSection({ selectedRegion, onRegionChange }: WorldMapSectionProps) {
  return (
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
            onClick={() => onRegionChange(selectedRegion === region.id ? null : region.id)}
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
  )
}
