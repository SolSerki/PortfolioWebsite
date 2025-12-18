import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'

interface SynopsisSectionProps {
  isExpanded: boolean
  onToggle: () => void
}

export default function SynopsisSection({ isExpanded, onToggle }: SynopsisSectionProps) {
  return (
    <div className="border border-emerald-500/30 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 hover:from-emerald-900/30 hover:to-teal-900/30 transition-all"
      >
        <h2 className="text-2xl font-bold text-emerald-300">Sinopsis</h2>
        {isExpanded ? (
          <HiChevronUp className="text-2xl text-emerald-400" />
        ) : (
          <HiChevronDown className="text-2xl text-emerald-400" />
        )}
      </button>
      {isExpanded && (
        <div className="p-6 bg-zinc-900/30">
          <p className="text-zinc-300 leading-relaxed">
            En un mundo donde la magia y el honor caballeresco coexisten en constante tensión, 
            las brujas protegen los antiguos secretos mientras los caballeros defienden los reinos 
            de amenazas tanto místicas como mundanas. Placeholder para la sinopsis completa...
          </p>
        </div>
      )}
    </div>
  )
}
