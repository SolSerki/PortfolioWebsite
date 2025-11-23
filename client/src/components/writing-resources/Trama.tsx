import MagicBento, { BentoCardProps } from '../MagicBento'

interface TramaProps {
  cards: BentoCardProps[]
}

export default function Trama({ cards }: TramaProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-300 mb-6 text-center">Trama</h2>
      <MagicBento cards={cards} />
    </div>
  )
}
