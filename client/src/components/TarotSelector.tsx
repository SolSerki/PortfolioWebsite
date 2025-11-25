import { useState } from 'react'
import RWTarotReading from './TarotReading'
import KWTarotReading from './tarot/KWTarotReading'

type TarotDeck = 'rider-waite' | 'knights-witches'

export default function TarotSelector() {
  const [selectedDeck, setSelectedDeck] = useState<TarotDeck | null>(null)

  if (selectedDeck === null) {
    return (
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            Lectura de Tarot
          </h2>
          <p className="text-zinc-400 mb-8">
            Selecciona un mazo para comenzar tu lectura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Rider-Waite Deck */}
          <button
            onClick={() => setSelectedDeck('rider-waite')}
            className="group relative overflow-hidden rounded-2xl border-2 border-amber-500/30 hover:border-amber-500/60 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 p-8 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20"
          >
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center">
                <span className="text-4xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold text-amber-300">
                Rider-Waite
              </h3>
              <p className="text-zinc-400 text-sm">
                El mazo tradicional de 78 cartas con siglos de historia y simbolismo
              </p>
              <div className="pt-4 text-amber-400 font-medium group-hover:text-amber-300 transition-colors">
                Seleccionar →
              </div>
            </div>
          </button>

          {/* Knights & Witches Deck */}
          <button
            onClick={() => setSelectedDeck('knights-witches')}
            className="group relative overflow-hidden rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500/60 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 p-8 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
          >
            <div className="text-center space-y-4">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <span className="text-4xl">⚔️</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald-300">
                Knights & Witches
              </h3>
              <p className="text-zinc-400 text-sm">
                Mazo místico de 33 cartas con significados únicos derecha e invertida
              </p>
              <div className="pt-4 text-emerald-400 font-medium group-hover:text-emerald-300 transition-colors">
                Seleccionar →
              </div>
            </div>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Botón para volver */}
      <div className="text-center">
        <button
          onClick={() => setSelectedDeck(null)}
          className="px-6 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:border-purple-500/50 text-zinc-400 hover:text-purple-400 transition-all text-sm"
        >
          ← Cambiar mazo
        </button>
      </div>

      {/* Componente de lectura según el mazo seleccionado */}
      {selectedDeck === 'rider-waite' && <RWTarotReading />}
      {selectedDeck === 'knights-witches' && <KWTarotReading />}
    </div>
  )
}
