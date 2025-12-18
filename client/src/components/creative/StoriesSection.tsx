import { useState } from 'react'
import { HiArrowLeft } from 'react-icons/hi2'
import Cuartitoscuro from '../stories/Cuartitoscuro'
import UptheStairs from '../stories/UptheStairs'
import Entreabierta from '../stories/Entreabierta'

const storiesData = [
  { id: 1, title: 'Cuartito Oscuro', image: '/images/stories/Cuartito Oscuro.png', borderColor: 'pink' },
  { id: 2, title: 'Up the Stairs', image: '/images/stories/Up the Stairs.png', borderColor: 'purple' },
  { id: 3, title: 'Entreabierta', image: '/images/stories/Entreabierta.png', borderColor: 'pink' }
]

export default function StoriesSection() {
  const [selectedStory, setSelectedStory] = useState<number | null>(null)

  if (selectedStory !== null) {
    return (
      <div className="space-y-6">
        <button
          onClick={() => setSelectedStory(null)}
          className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
        >
          <HiArrowLeft className="text-xl" />
          <span>Volver a la galería</span>
        </button>

        {selectedStory === 1 && <Cuartitoscuro />}
        {selectedStory === 2 && <UptheStairs />}
        {selectedStory === 3 && <Entreabierta />}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {storiesData.map((story) => (
        <button
          key={story.id}
          onClick={() => setSelectedStory(story.id)}
          className={`group relative overflow-hidden rounded-xl border transition-all transform hover:scale-105 ${
            story.borderColor === 'purple' 
              ? 'border-purple-500/30 hover:border-purple-500/60' 
              : 'border-pink-500/30 hover:border-pink-500/60'
          }`}
        >
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <h3 className="text-2xl font-bold text-white">{story.title}</h3>
          </div>
        </button>
      ))}
    </div>
  )
}
