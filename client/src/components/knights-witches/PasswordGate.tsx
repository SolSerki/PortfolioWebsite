import { useState } from 'react'
import { HiLockClosed } from 'react-icons/hi2'

interface PasswordGateProps {
  onUnlock: () => void
}

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'Serkaplz') {
      onUnlock()
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div className="min-h-[500px] flex items-center justify-center bg-gradient-to-br from-purple-950/30 via-zinc-900/30 to-black/30 rounded-2xl p-4">
      <div className="max-w-md w-full">
        {/* Lock Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <HiLockClosed className="text-6xl text-purple-400" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Sección Restringida
          </h1>
          <p className="text-zinc-400 text-sm italic">
            Bloom thy roses
          </p>
          <p className="text-zinc-400 text-sm italic">
            Beware the thorns
          </p>
          <p className="text-zinc-400 text-sm italic">
            Continue at your peril
          </p>
          <p className="text-zinc-400 text-sm italic">
            You've been warned
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa la contraseña"
              className={`w-full px-6 py-4 rounded-xl bg-zinc-900/50 border ${
                error ? 'border-red-500' : 'border-zinc-700'
              } text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500 transition-all backdrop-blur-sm`}
              autoFocus
            />
            {error && (
              <p className="absolute -bottom-6 left-0 text-red-400 text-sm">
                Ah ah ah! No dijiste las palabras mágicas!
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
          >
            Entrar
          </button>
        </form>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-purple-500/30 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-pink-500/30 animate-pulse delay-75"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500/30 animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  )
}
