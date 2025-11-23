import MagicBento, { BentoCardProps } from '../MagicBento'

interface AmbientacionProps {
  cards: BentoCardProps[]
}

export default function Ambientacion({ cards }: AmbientacionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-pink-300 mb-6 text-center">Ambientación</h2>
      <MagicBento cards={cards} />
    </div>
  )
}
