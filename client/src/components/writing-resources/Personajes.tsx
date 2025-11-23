import MagicBento, { BentoCardProps } from '../MagicBento'

interface PersonajesProps {
  cards: BentoCardProps[]
}

export default function Personajes({ cards }: PersonajesProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-300 mb-6 text-center">Personajes</h2>
      <MagicBento cards={cards} />
    </div>
  )
}
