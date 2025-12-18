import { HiSparkles } from 'react-icons/hi2'

interface CursorToggleProps {
  isEnabled: boolean
  onToggle: () => void
  className?: string
}

export default function CursorToggle({ isEnabled, onToggle, className = '' }: CursorToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 text-zinc-400 hover:text-purple-400 transition-all ${className}`}
    >
      <HiSparkles className={`text-base sm:text-lg ${isEnabled ? 'text-purple-400' : 'text-zinc-600'}`} />
      <span className="text-xs sm:text-sm">{isEnabled ? 'Cursor ON' : 'Cursor OFF'}</span>
    </button>
  )
}
