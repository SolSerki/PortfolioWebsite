import { useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi2'
import Venganza from '../poems/Venganza'
import Kaze from '../poems/Kaze'
import Tumbas from '../poems/Tumbas'
import HattoriHanzo from '../poems/HattoriHanzo'

const poemsData = [
  { id: 1, title: 'Venganza', image: '/images/poems/Venganza.png', borderColor: 'purple' },
  { id: 2, title: 'Kaze', image: '/images/poems/Kaze.png', borderColor: 'pink' },
  { id: 3, title: 'Tumbas', image: '/images/poems/Tumbas.png', borderColor: 'purple' },
  { id: 4, title: 'Hattori Hanzo', image: '/images/poems/Hattori Hanzo.png', borderColor: 'pink' }
]

export default function PoemsSection() {
  const [selectedPoem, setSelectedPoem] = useState<number | null>(null)

  if (selectedPoem !== null) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelectedPoem(null)}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <HiArrowLeft className="text-xl" />
          <span>Volver a la galería</span>
        </button>

        {selectedPoem === 1 && <Venganza />}
        {selectedPoem === 2 && <Kaze />}
        {selectedPoem === 3 && <Tumbas />}
        {selectedPoem === 4 && <HattoriHanzo />}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {poemsData.map((poem) => (
        <button
          key={poem.id}
          onClick={() => setSelectedPoem(poem.id)}
          className={`group relative overflow-hidden rounded-xl border transition-all transform hover:scale-105 ${
            poem.borderColor === 'purple' 
              ? 'border-purple-500/30 hover:border-purple-500/60' 
              : 'border-pink-500/30 hover:border-pink-500/60'
          }`}
        >
          <img
            src={poem.image}
            alt={poem.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <h3 className="text-2xl font-bold text-white">{poem.title}</h3>
          </div>
        </button>
      ))}
    </div>
  )
}
