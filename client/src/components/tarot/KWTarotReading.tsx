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

type ReadingType = 'three-card' | 'random' | 'seven-card' | null

export default function KWTarotReading() {
  const [selectedCards, setSelectedCards] = useState<Card[]>([])
  const [isReading, setIsReading] = useState(false)
  const [readingType, setReadingType] = useState<ReadingType>(null)
  const [usedCardIds, setUsedCardIds] = useState<Set<number>>(new Set())

  const getRandomCard = (): Card => {
    const availableCards = kwTarotCards.filter(card => !usedCardIds.has(card.id))
    const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)]
    return {
      ...randomCard,
      isRevealed: false,
      isReversed: Math.random() > 0.5
    }
  }

  const getRandomCards = (count: number): Card[] => {
    const shuffled = [...kwTarotCards].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, count).map(card => ({
      ...card,
      isRevealed: false,
      isReversed: Math.random() > 0.5
    }))
  }

  const handleNewReading = (type: ReadingType) => {
    setIsReading(true)
    setReadingType(type)
    setUsedCardIds(new Set())
    
    if (type === 'three-card') {
      const cards = getRandomCards(3)
      setSelectedCards(cards)
    } else if (type === 'seven-card') {
      const cards = getRandomCards(7)
      setSelectedCards(cards)
    } else if (type === 'random') {
      setSelectedCards([])
    }
  }

  const handleDrawRandomCard = () => {
    if (usedCardIds.size >= kwTarotCards.length) return
    
    const newCard = getRandomCard()
    setUsedCardIds(prev => new Set(prev).add(newCard.id))
    setSelectedCards(prev => [...prev, { ...newCard, isRevealed: true }])
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
    setReadingType(null)
    setSelectedCards([])
    setUsedCardIds(new Set())
  }

  const sevenCardPositions = [
    { label: 'Presente', order: 0 },
    { label: 'Pasado reciente', order: 1 },
    { label: 'Futuro próximo', order: 2 },
    { label: 'Por qué del pasado reciente', order: 3 },
    { label: 'Advertencia', order: 4 },
    { label: 'La raíz', order: 5 },
    { label: 'Desenlace', order: 6 }
  ]

  const sevenCardLayout = [5, 3, 1, 0, 2, 4, 6] // Layout order: 6, 4, 2, 1, 3, 5, 7

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-4">
          Tarot Knights & Witches
        </h2>
        <p className="text-zinc-400 mb-8">
          Elige el tipo de lectura que deseas realizar
        </p>

        {!isReading ? (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleNewReading('three-card')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
            >
              <HiSparkles className="text-xl" />
              <span>3 Cartas</span>
            </button>
            <button
              onClick={() => handleNewReading('random')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-teal-500/50"
            >
              <HiSparkles className="text-xl" />
              <span>Random</span>
            </button>
            <button
              onClick={() => handleNewReading('seven-card')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              <HiSparkles className="text-xl" />
              <span>7 Cartas</span>
            </button>
          </div>
        ) : (
          <button
            onClick={handleReset}
            className="px-6 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 hover:border-emerald-500/50 text-zinc-400 hover:text-emerald-400 transition-all"
          >
            Reiniciar
          </button>
        )}
      </div>

      {/* Three Card Reading */}
      {isReading && readingType === 'three-card' && (
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

      {isReading && readingType === 'three-card' && selectedCards.every(card => card.isRevealed) && (
        <div className="text-center mt-8 p-6 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-xl border border-emerald-500/30">
          <p className="text-zinc-300 italic">
            Tu lectura está completa. Reflexiona sobre el mensaje de las cartas.
          </p>
        </div>
      )}

      {/* Random Card Reading */}
      {isReading && readingType === 'random' && (
        <div className="space-y-8">
          <div className="text-center">
            <button
              onClick={handleDrawRandomCard}
              disabled={usedCardIds.size >= kwTarotCards.length}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 disabled:from-zinc-700 disabled:to-zinc-600 text-white font-medium transition-all transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-teal-500/50 disabled:cursor-not-allowed"
            >
              {usedCardIds.size >= kwTarotCards.length ? 'Todas las cartas reveladas' : 'Tirar otra carta'}
            </button>
            <p className="text-zinc-500 text-sm mt-2">
              Cartas reveladas: {selectedCards.length} / {kwTarotCards.length}
            </p>
          </div>

          {selectedCards.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {selectedCards.map((card, index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                  <div className="relative group">
                    <div className="rounded-lg overflow-hidden border-4 border-teal-500/50 shadow-2xl">
                      <img
                        src={`/images/Cards-KW/${card.filename}`}
                        alt={card.name}
                        className="w-full h-auto"
                        style={{
                          transform: card.isReversed ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-full p-4 bg-gradient-to-br from-teal-900/20 to-zinc-900/40 rounded-lg border border-teal-500/30">
                    <h3 className="text-lg font-bold text-teal-300 mb-2 text-center">
                      {card.name}
                    </h3>
                    <div className="text-center mb-3">
                      <span className={`text-sm font-semibold ${card.isReversed ? 'text-red-400' : 'text-teal-400'}`}>
                        {card.isReversed ? '↓ Invertida' : '↑ Derecha'}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-zinc-300 text-sm">
                      {(card.isReversed ? card.meanings.reversed : card.meanings.upright).map((meaning, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          <span>{meaning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Seven Card Reading */}
      {isReading && readingType === 'seven-card' && (
        <div className="space-y-8">
          <div className="text-center mb-4">
            <p className="text-zinc-400 text-sm">
              Haz clic en las cartas en orden para revelarlas
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-end gap-4 max-w-6xl mx-auto px-4">
            {sevenCardLayout.map((cardIndex, layoutPosition) => {
              const card = selectedCards[cardIndex]
              const position = sevenCardPositions[cardIndex]
              const canReveal = selectedCards.slice(0, cardIndex).every(c => c.isRevealed)

              return (
                <div key={cardIndex} className="flex flex-col items-center gap-4" style={{ marginTop: layoutPosition * 20 }}>
                  <div className="text-xs font-medium text-cyan-400 text-center h-8">
                    {card?.isRevealed && position.label}
                  </div>
                  
                  <button
                    onClick={() => canReveal && !card.isRevealed && handleCardClick(cardIndex)}
                    disabled={card.isRevealed || !canReveal}
                    className={`relative group ${!card.isRevealed && canReveal ? 'cursor-pointer' : 'cursor-default'}`}
                    style={{ perspective: '1000px' }}
                  >
                    <div
                      className={`relative transition-all duration-700 ${
                        card.isRevealed ? '' : canReveal ? 'hover:scale-105' : 'opacity-50'
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: card.isRevealed ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        width: '120px'
                      }}
                    >
                      {/* Dorso de la carta */}
                      <div
                        className="absolute inset-0 rounded-lg overflow-hidden border-4 border-cyan-500/30 shadow-xl"
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
                        className="rounded-lg overflow-hidden border-4 border-cyan-500/50 shadow-2xl"
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

                    {!card.isRevealed && canReveal && (
                      <div className="mt-2 text-xs text-zinc-500 group-hover:text-cyan-400 transition-colors text-center">
                        Click
                      </div>
                    )}
                  </button>

                  {/* Significado de la carta revelada */}
                  {card.isRevealed && (
                    <div className="w-64 p-4 bg-gradient-to-br from-cyan-900/20 to-zinc-900/40 rounded-lg border border-cyan-500/30">
                      <h3 className="text-base font-bold text-cyan-300 mb-2 text-center">
                        {card.name}
                      </h3>
                      <div className="text-center mb-3">
                        <span className={`text-xs font-semibold ${card.isReversed ? 'text-red-400' : 'text-cyan-400'}`}>
                          {card.isReversed ? '↓ Invertida' : '↑ Derecha'}
                        </span>
                      </div>
                      <ul className="space-y-1 text-zinc-300 text-xs">
                        {(card.isReversed ? card.meanings.reversed : card.meanings.upright).map((meaning, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{meaning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {selectedCards.every(card => card.isRevealed) && (
            <div className="text-center mt-8 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl border border-cyan-500/30">
              <p className="text-zinc-300 italic">
                Tu lectura de 7 cartas está completa.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
