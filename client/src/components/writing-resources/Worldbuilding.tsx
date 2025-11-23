import MagicBento, { BentoCardProps } from '../MagicBento'

interface WorldbuildingProps {
  cards: BentoCardProps[]
}

export default function Worldbuilding({ cards }: WorldbuildingProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-pink-300 mb-6 text-center">Worldbuilding</h2>
      <MagicBento cards={cards} />
    </div>
  )
}
