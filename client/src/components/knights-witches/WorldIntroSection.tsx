import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'

interface WorldIntroSectionProps {
  isExpanded: boolean
  onToggle: () => void
}

export default function WorldIntroSection({ isExpanded, onToggle }: WorldIntroSectionProps) {
  return (
    <div className="border border-emerald-500/30 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-emerald-900/20 to-teal-900/20 hover:from-emerald-900/30 hover:to-teal-900/30 transition-all"
      >
        <h2 className="text-2xl font-bold text-emerald-300">Introducción al Mundo</h2>
        {isExpanded ? (
          <HiChevronUp className="text-2xl text-emerald-400" />
        ) : (
          <HiChevronDown className="text-2xl text-emerald-400" />
        )}
      </button>
      {isExpanded && (
        <div className="p-6 bg-zinc-900/30 space-y-4">
          <p className="text-zinc-300 leading-relaxed">
            El mundo de Knights & Witches está dividido en cuatro grandes regiones, cada una con 
            su propia cultura, magia y tradiciones caballerescas. Placeholder para descripción del mundo...
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-gradient-to-br from-emerald-900/20 to-zinc-900/40 rounded-lg border border-emerald-500/20">
              <h3 className="text-lg font-semibold text-emerald-300 mb-2">Sistemas de Magia</h3>
              <p className="text-zinc-400 text-sm">Placeholder para descripción de la magia...</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-teal-900/20 to-zinc-900/40 rounded-lg border border-teal-500/20">
              <h3 className="text-lg font-semibold text-teal-300 mb-2">Órdenes de Caballería</h3>
              <p className="text-zinc-400 text-sm">Placeholder para descripción de las órdenes...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
