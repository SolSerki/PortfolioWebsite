import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ReactSVG } from "react-svg";
import { HiLockClosed, HiSparkles, HiPencil, HiBookOpen, HiStar, HiShieldCheck, HiArrowLeft } from 'react-icons/hi2'
import FrameAntique from '../svg/FrameAntique.svg?react'
import FlowerIcon from '../svg/FlowerIcon.svg?react';
import SplashCursor from '../components/SplashCursor';
import { GiBodyHeight } from 'react-icons/gi';
type CreativeTab = 'poems' | 'stories' | 'writing-resources' | 'tarot' | 'knights-witches'

export default function Creative() {
  const { t } = useLanguage()
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [activeTab, setActiveTab] = useState<CreativeTab>('poems')
  const [selectedPoem, setSelectedPoem] = useState<number | null>(null)
  const [isCursorEnabled, setIsCursorEnabled] = useState(true)

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
              <HiLockClosed  className="text-6xl text-purple-400" />
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
              You’ve been warned
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
    <>
      {isCursorEnabled && <SplashCursor />}
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-zinc-900 to-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Toggle Cursor Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsCursorEnabled(!isCursorEnabled)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 text-zinc-400 hover:text-purple-400 transition-all"
          >
            <HiSparkles className={`text-lg ${isCursorEnabled ? 'text-purple-400' : 'text-zinc-600'}`} />
            <span className="text-sm">{isCursorEnabled ? 'Cursor ON' : 'Cursor OFF'}</span>
          </button>
        </div>
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="w-full aspect-[3/2]">
              <FrameAntique 
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 md:px-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Keep
              </h1>
              <p className="text-zinc-400 text-sm md:text-base lg:text-lg mb-1 md:mb-2">
                n. an important part of our personality that others seldom see
              </p>
              <p className="text-zinc-400 text-sm md:text-base lg:text-lg mb-1 md:mb-2">
                ― a secret flaw, a hidden talent, trauma that never comes up, dreams we never mention ―
              </p>
              
              <p className="text-zinc-400 text-sm md:text-base lg:text-lg mb-2 md:mb-4">
                that remains a vital part of who we are even if nobody knows it's there.
              </p>
              <p className="text-zinc-500 text-xs md:text-sm italic">
                The Dictionary of Obscure Sorrows - John Koenig
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                if (tab.id === 'poems') {
                  setSelectedPoem(null)
                }
              }}
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
            <>
              {selectedPoem === null ? (
                // Galería de imágenes de poemas
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Poema 1 - Venganza */}
                  <button
                    onClick={() => setSelectedPoem(1)}
                    className="group relative overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all transform hover:scale-105"
                  >
                    <img
                      src="/images/Venganza.png"
                      alt="Venganza"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Venganza</h3>
                    </div>
                  </button>

                  {/* Poema 2 - Placeholder */}
                  <button
                    onClick={() => setSelectedPoem(2)}
                    className="group relative overflow-hidden rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all transform hover:scale-105"
                  >
                    <div className="w-full aspect-square bg-gradient-to-br from-pink-900/20 to-purple-900/20 flex items-center justify-center">
                      <div className="text-center">
                        <HiSparkles className="text-6xl text-pink-400 mx-auto mb-4" />
                        <p className="text-zinc-400">Imagen próximamente</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Poema 2</h3>
                    </div>
                  </button>

                  {/* Poema 3 - Placeholder */}
                  <button
                    onClick={() => setSelectedPoem(3)}
                    className="group relative overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all transform hover:scale-105"
                  >
                    <div className="w-full aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                      <div className="text-center">
                        <HiSparkles className="text-6xl text-purple-400 mx-auto mb-4" />
                        <p className="text-zinc-400">Imagen próximamente</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Poema 3</h3>
                    </div>
                  </button>

                  {/* Poema 4 - Placeholder */}
                  <button
                    onClick={() => setSelectedPoem(4)}
                    className="group relative overflow-hidden rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all transform hover:scale-105"
                  >
                    <div className="w-full aspect-square bg-gradient-to-br from-pink-900/20 to-purple-900/20 flex items-center justify-center">
                      <div className="text-center">
                        <HiSparkles className="text-6xl text-pink-400 mx-auto mb-4" />
                        <p className="text-zinc-400">Imagen próximamente</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Poema 4</h3>
                    </div>
                  </button>
                </div>
              ) : (
                // Vista de poema individual
                <div className="space-y-6">
                  <button
                    onClick={() => setSelectedPoem(null)}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <HiArrowLeft className="text-xl" />
                    <span>Volver a la galería</span>
                  </button>

                  {selectedPoem === 1 && (
                    <div className="border border-purple-500/30 rounded-xl p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm">
                      <h3 className="text-3xl font-bold text-purple-300 mb-6 text-center">
                        Venganza
                      </h3>
                      <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
{`Hoy me doy el lujo de ser hiriente
                De reventar tu cara de serpiente
                Fuí tan inocente, te entregué mi corazón
                Y con hambre dijiste “no es suficiente”

                Yo como putita obediente
                mientras penetraba tu veneno 
                en mi cuerpo y mi mente,
                Y de repente
                me convertí en suicida dependiente

                cada día con vos, pesadilla recurrente
                Ahí entendí, morir es distinto
                que dormir para siempre.
                “Qué ocurrente. Estás exagerando ¿Sos consciente?”

                ¡NO! ¡NO EXAGERO!
                Es que soy una pésima poetisa
                Y no encuentra mi lengua la palabra precisa
                Y vos, bicho rastrero, falso caballero

                Te deje entrar por puro desespero
                Ahora, como buena sacerdotisa
                rezo y espero
                que tu hueso se rompa contra el acero
                que tus tripas sirvan de sombrero
                ¡Por favor Diosa, cumplime mi deseo!

                Nada. Otra plegaria omisa.
                Sólo droga en la repisa,
                una soga en la cornisa
                mi boca se ahoga con sonrisa
                me entrego a la muerte, sumisa

                siento la brisa
                una luz que brilla
                leo el futuro que pasa deprisa
                Me roza el flechazo de Artemisa
                El nudo de mi cuello se desliza
                Caigo de rodillas con la mano en las costillas
                Histérica me cago de risa

                Desde ese día planeo mi venganza
                cagar en tu tumba, con eso me alcanza
                danzar una macumba descalza, 
                por fin mi mente en paz descansa
                En cambio vos, larva
                Ni muero vas a tener esperanza
                porque mientras yo respire, 
                vas a querer ojos en la espalda
                Vas a escuchar mis carcajadas perreando en minifalda
                Vestida de negro esmeralda, bruja malvada
                Así que corré, con la cola entre las patas
                Andá, andá…
                Si nunca te importó dejarme abandonada
                Andá antes que saque filo a mi espada,
                esa que recorrió tu cuerpo y chupó tu daga 
                Ojalá te encuentre borracho en la madrugada
                sin los muchachos, tu cara quebrada, 
                mi sonrisa con tu sangre pintada
                ¿Sigo siendo exagerada? 
                Yo camino como si no me importara
                Si no me crees, creele a mis ojos
                Que te miran, pero ya no ven nada.`}
                      </div>
                    </div>
                  )}

                  {selectedPoem === 2 && (
                    <div className="border border-pink-500/30 rounded-xl p-8 bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-sm">
                      <h3 className="text-3xl font-bold text-pink-300 mb-6 text-center">
                        {/* Título del Poema 2 */}
                      </h3>
                      <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
                        {/* Contenido del Poema 2 */}
                      </div>
                    </div>
                  )}

                  {selectedPoem === 3 && (
                    <div className="border border-purple-500/30 rounded-xl p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm">
                      <h3 className="text-3xl font-bold text-purple-300 mb-6 text-center">
                        {/* Título del Poema 3 */}
                      </h3>
                      <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
                        {/* Contenido del Poema 3 */}
                      </div>
                    </div>
                  )}

                  {selectedPoem === 4 && (
                    <div className="border border-pink-500/30 rounded-xl p-8 bg-gradient-to-br from-pink-900/20 to-purple-900/20 backdrop-blur-sm">
                      <h3 className="text-3xl font-bold text-pink-300 mb-6 text-center">
                        {/* Título del Poema 4 */}
                      </h3>
                      <div className="text-zinc-300 leading-relaxed whitespace-pre-line">
                        {/* Contenido del Poema 4 */}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
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
    </>
  )
}
