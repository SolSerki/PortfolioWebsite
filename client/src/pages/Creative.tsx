import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { HiLockClosed, HiSparkles, HiPencil, HiBookOpen, HiStar, HiShieldCheck } from 'react-icons/hi2'

type CreativeTab = 'poems' | 'stories' | 'writing-resources' | 'tarot' | 'knights-witches'

export default function Creative() {
  const { t } = useLanguage()
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [activeTab, setActiveTab] = useState<CreativeTab>('poems')

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'Serkaplz') {
      setIsUnlocked(true)
      setError(false)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  const tabs = [
    { id: 'poems' as CreativeTab, label: 'Poemas', icon: HiSparkles },
    { id: 'stories' as CreativeTab, label: 'Historias Cortas', icon: HiBookOpen },
    { id: 'writing-resources' as CreativeTab, label: 'Recursos de Escritura', icon: HiPencil },
    { id: 'tarot' as CreativeTab, label: 'Tarot', icon: HiStar },
    { id: 'knights-witches' as CreativeTab, label: 'Knights & Witches', icon: HiShieldCheck }
  ]

  if (!isUnlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-zinc-900 to-black p-4">
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
              Espacio Creativo
            </h1>
            <p className="text-zinc-400 text-sm">
              Di las palabras mágicas y entra a mi mundo
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-zinc-900 to-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            The Keep
          </h1>
          <p className="text-zinc-400 text-lg">
            n. an important part of our personality that others seldom see.
          </p>
        <p className="text-zinc-400 text-lg">
    - a secret flaw, a hidden talent, trauma that never comes up, dreams we never mention -
          </p>
        <p className="text-zinc-400 text-lg">
    that remains a vital part of who we are even if nobody knows it's there.
          </p>
          <p className="text-zinc-500 text-lg">
            The Dictionary of Obscure Sorrows - John Koenig
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-zinc-800'
              }`}
            >
              <tab.icon className="text-xl" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-zinc-900/30 backdrop-blur-sm rounded-2xl border border-zinc-800 p-8 min-h-[500px]">
          {activeTab === 'poems' && (
            <div className="text-center py-20">
              <HiSparkles className="text-6xl text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Poemas</h2>
              <p className="text-zinc-400">Contenido próximamente...</p>
            </div>
          )}

          {activeTab === 'stories' && (
            <div className="text-center py-20">
              <HiBookOpen className="text-6xl text-pink-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Historias Cortas</h2>
              <p className="text-zinc-400">Contenido próximamente...</p>
            </div>
          )}

          {activeTab === 'writing-resources' && (
            <div className="text-center py-20">
              <HiPencil className="text-6xl text-purple-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Recursos de Escritura</h2>
              <p className="text-zinc-400">Contenido próximamente...</p>
            </div>
          )}

          {activeTab === 'tarot' && (
            <div className="text-center py-20">
              <HiStar className="text-6xl text-amber-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Tarot</h2>
              <p className="text-zinc-400">Contenido próximamente...</p>
            </div>
          )}

          {activeTab === 'knights-witches' && (
            <div className="text-center py-20">
              <HiShieldCheck className="text-6xl text-emerald-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">Knights & Witches</h2>
              <p className="text-zinc-400">Contenido próximamente...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
