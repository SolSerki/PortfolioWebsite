import { useState } from 'react'
import { HiSparkles } from 'react-icons/hi2'

// Lista completa de cartas de tarot
const allCards = [
  // Arcanos Mayores
  '00-TheFool.png', '01-TheMagician.png', '02-TheHighPriestess.png', '03-TheEmpress.png',
  '04-TheEmperor.png', '05-TheHierophant.png', '06-TheLovers.png', '07-TheChariot.png',
  '08-Strength.png', '09-TheHermit.png', '10-WheelOfFortune.png', '11-Justice.png',
  '12-TheHangedMan.png', '13-Death.png', '14-Temperance.png', '15-TheDevil.png',
  '16-TheTower.png', '17-TheStar.png', '18-TheMoon.png', '19-TheSun.png',
  '20-Judgement.png', '21-TheWorld.png',
  // Copas
  'Cups01.png', 'Cups02.png', 'Cups03.png', 'Cups04.png', 'Cups05.png', 'Cups06.png',
  'Cups07.png', 'Cups08.png', 'Cups09.png', 'Cups10.png', 'Cups11.png', 'Cups12.png',
  'Cups13.png', 'Cups14.png',
  // Bastos
  'Wands01.png', 'Wands02.png', 'Wands03.png', 'Wands04.png', 'Wands05.png', 'Wands06.png',
  'Wands07.png', 'Wands08.png', 'Wands09.png', 'Wands10.png', 'Wands11.png', 'Wands12.png',
  'Wands13.png', 'Wands14.png',
  // Espadas
  'Swords01.png', 'Swords02.png', 'Swords03.png', 'Swords04.png', 'Swords05.png', 'Swords06.png',
  'Swords07.png', 'Swords08.png', 'Swords09.png', 'Swords10.png', 'Swords11.png', 'Swords12.png',
  'Swords13.png', 'Swords14.png',
  // Pentáculos
  'Pentacles01.png', 'Pentacles02.png', 'Pentacles03.png', 'Pentacles04.png', 'Pentacles05.png', 'Pentacles06.png',
  'Pentacles07.png', 'Pentacles08.png', 'Pentacles09.png', 'Pentacles10.png', 'Pentacles11.png', 'Pentacles12.png',
  'Pentacles13.png', 'Pentacles14.png'
]

interface Card {
  filename: string
  isRevealed: boolean
}

export default function TarotReading() {
  const [selectedCards, setSelectedCards] = useState<Card[]>([])
  const [isReading, setIsReading] = useState(false)

  const getRandomCards = (): Card[] => {
    const shuffled = [...allCards].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 3).map(filename => ({
      filename,
      isRevealed: false
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
        <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent mb-4">
          Lectura de Tarot
        </h2>
        <p className="text-zinc-400 mb-8">
          Haz clic en el botón para recibir una lectura de tres cartas
        </p>

        {!isReading ? (
          <button
            onClick={handleNewReading}
            className="flex items-center gap-2 mx-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-amber-500/50"
          >
            <HiSparkles className="text-xl" />
            <span>Nueva Lectura</span>
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:border-amber-500/50 text-zinc-400 hover:text-amber-400 transition-all"
          >
            Reiniciar
          </button>
        )}
      </div>

      {isReading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {selectedCards.map((card, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="text-sm font-medium text-amber-400">
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
                    className="absolute inset-0 rounded-lg overflow-hidden border-4 border-amber-500/30 shadow-xl"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <img
                      src="/images/Cards-png/CardBacks.png"
                      alt="Dorso de carta"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Frente de la carta */}
                  <div
                    className="rounded-lg overflow-hidden border-4 border-amber-500/50 shadow-2xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <img
                      src={`/images/Cards-png/${card.filename}`}
                      alt="Carta de tarot"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {!card.isRevealed && (
                  <div className="mt-3 text-sm text-zinc-500 group-hover:text-amber-400 transition-colors">
                    Haz clic para revelar
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      )}

      {isReading && selectedCards.every(card => card.isRevealed) && (
        <div className="text-center mt-8 p-6 bg-gradient-to-br from-amber-900/20 to-yellow-900/20 rounded-xl border border-amber-500/30">
          <p className="text-zinc-300 italic">
            Tu lectura está completa.
          </p>
        </div>
      )}
    </div>
  )
}
