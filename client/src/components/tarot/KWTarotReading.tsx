import { useState } from 'react'
import { HiSparkles } from 'react-icons/hi2'
import { kwTarotCards } from './kwTarotData'

interface Card {
  id: number
  name: string
  filename: string
  isRevealed: boolean
  isReversed: boolean
  meanings: {
    upright: string[]
    reversed: string[]
  }
}

export default function KWTarotReading() {
  const [selectedCards, setSelectedCards] = useState<Card[]>([])
  const [isReading, setIsReading] = useState(false)

  const getRandomCards = (): Card[] => {
    const shuffled = [...kwTarotCards].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 3).map(card => ({
      ...card,
      isRevealed: false,
      isReversed: Math.random() > 0.5 // 50% chance de estar invertida
    }))
  }

  const handleNewReading = () => {
    setIsReading(true)
    const cards = getRandomCards()
    setSelectedCards(cards)
  }

  const handleCardClick = (index: number) => {
    setSelectedCards(prev => 
      prev.map((card, i) => 
        i === index ? { ...card, isRevealed: true } : card
      )
    )
  }

  const handleReset = () => {
    setIsReading(false)
    setSelectedCards([])
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          Tarot Knights & Witches
        </h2>
        <p className="text-zinc-400 mb-8">
          Haz clic en el botón para recibir una lectura de tres cartas del mazo místico
        </p>

        {!isReading ? (
          <button
            onClick={handleNewReading}
            className="flex items-center gap-2 mx-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
          >
            <HiSparkles className="text-xl" />
            <span>Nueva Lectura</span>
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/50 text-zinc-400 hover:text-emerald-400 transition-all"
          >
            Reiniciar
          </button>
        )}
      </div>

      {isReading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {selectedCards.map((card, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="text-sm font-medium text-emerald-400">
                {index === 0 && 'Pasado'}
                {index === 1 && 'Presente'}
                {index === 2 && 'Futuro'}
              </div>
              
              <button
                onClick={() => !card.isRevealed && handleCardClick(index)}
                disabled={card.isRevealed}
                className={`relative group ${!card.isRevealed ? 'cursor-pointer' : 'cursor-default'}`}
                style={{ perspective: '1000px' }}
              >
                <div
                  className={`relative transition-all duration-700 ${
                    card.isRevealed ? '' : 'hover:scale-105'
                  }`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: card.isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Dorso de la carta */}
                  <div
                    className="absolute inset-0 rounded-lg overflow-hidden border-4 border-emerald-500/30 shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src="/images/Cards-KW/CardBack.png"
                      alt="Dorso de carta"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Frente de la carta */}
                  <div
                    className="rounded-lg overflow-hidden border-4 border-emerald-500/50 shadow-2xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: card.isReversed ? 'rotateY(180deg) rotate(180deg)' : 'rotateY(180deg)'
                    }}
                  >
                    <img
                      src={`/images/Cards-KW/${card.filename}`}
                      alt={card.name}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {!card.isRevealed && (
                  <div className="mt-3 text-sm text-zinc-500 group-hover:text-emerald-400 transition-colors">
                    Haz clic para revelar
                  </div>
                )}
              </button>

              {/* Significado de la carta revelada */}
              {card.isRevealed && (
                <div className="w-full mt-4 p-4 bg-gradient-to-br from-emerald-900/20 to-zinc-900/40 rounded-lg border border-emerald-500/30">
                  <h3 className="text-lg font-bold text-emerald-300 mb-2 text-center">
                    {card.name}
                  </h3>
                  <div className="text-center mb-3">
                    <span className={`text-sm font-semibold ${card.isReversed ? 'text-red-400' : 'text-emerald-400'}`}>
                      {card.isReversed ? '↓ Invertida' : '↑ Derecha'}
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-zinc-300 text-sm">
                    {(card.isReversed ? card.meanings.reversed : card.meanings.upright).map((meaning, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{meaning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {isReading && selectedCards.every(card => card.isRevealed) && (
        <div className="text-center mt-8 p-6 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-xl border border-emerald-500/30">
          <p className="text-zinc-300 italic">
            Tu lectura está completa. Reflexiona sobre el mensaje de las cartas.
          </p>
        </div>
      )}
    </div>
  )
}
