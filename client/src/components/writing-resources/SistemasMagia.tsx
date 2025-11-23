import MagicBento, { BentoCardProps } from '../MagicBento'

interface SistemasMagiaProps {
  cards: BentoCardProps[]
}

export default function SistemasMagia({ cards }: SistemasMagiaProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-300 mb-6 text-center">Sistemas de Magia</h2>
      <MagicBento cards={cards} />
    </div>
  )
}
