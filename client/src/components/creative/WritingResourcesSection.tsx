import { useState } from 'react'
import Trama from '../writing-resources/Trama'
import Ambientacion from '../writing-resources/Ambientacion'
import Personajes from '../writing-resources/Personajes'
import Worldbuilding from '../writing-resources/Worldbuilding'
import SistemasMagia from '../writing-resources/SistemasMagia'

type WritingResourceTab = 'trama' | 'ambientacion' | 'personajes' | 'worldbuilding' | 'sistemas-magia'

const subTabs = [
  { id: 'trama' as WritingResourceTab, label: 'Trama' },
  { id: 'ambientacion' as WritingResourceTab, label: 'Ambientación' },
  { id: 'personajes' as WritingResourceTab, label: 'Personajes' },
  { id: 'worldbuilding' as WritingResourceTab, label: 'Worldbuilding' },
  { id: 'sistemas-magia' as WritingResourceTab, label: 'Sistemas de Magia' }
]

export default function WritingResourcesSection() {
  const [activeTab, setActiveTab] = useState<WritingResourceTab>('trama')

  return (
    <div className="space-y-8">
      {/* Sub-navegación */}
      <div className="flex flex-wrap justify-center gap-2">
        {subTabs.map((subTab) => (
          <button
            key={subTab.id}
            onClick={() => setActiveTab(subTab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === subTab.id
                ? 'bg-purple-600 text-white'
                : 'bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50'
            }`}
          >
            {subTab.label}
          </button>
        ))}
      </div>

      {/* Contenido */}
      <div>
        {activeTab === 'trama' && <Trama />}
        {activeTab === 'ambientacion' && <Ambientacion />}
        {activeTab === 'personajes' && <Personajes />}
        {activeTab === 'worldbuilding' && <Worldbuilding />}
        {activeTab === 'sistemas-magia' && <SistemasMagia />}
      </div>
    </div>
  )
}
