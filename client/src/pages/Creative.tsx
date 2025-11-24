import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ReactSVG } from "react-svg";
import { HiLockClosed, HiSparkles, HiPencil, HiBookOpen, HiStar, HiShieldCheck, HiArrowLeft } from 'react-icons/hi2'
import FrameAntique from '../svg/FrameAntique.svg?react'
import FlowerIcon from '../svg/FlowerIcon.svg?react';
import SplashCursor from '../components/SplashCursor';
import { GiBodyHeight } from 'react-icons/gi';
import Venganza from '../components/poems/Venganza';
import Kaze from '../components/poems/Kaze';
import Tumbas from '../components/poems/Tumbas';
import HattoriHanzo from '../components/poems/HattoriHanzo';
import Cuartitoscuro from '../components/stories/Cuartitoscuro';
import Story2 from '../components/stories/Story2';
import Story3 from '../components/stories/Story3';
import Story4 from '../components/stories/Story4';
import Trama from '../components/writing-resources/Trama';
import Ambientacion from '../components/writing-resources/Ambientacion';
import Personajes from '../components/writing-resources/Personajes';
import Worldbuilding from '../components/writing-resources/Worldbuilding';
import SistemasMagia from '../components/writing-resources/SistemasMagia';
import TarotReading from '../components/TarotReading';
import KnightsWitches from '../components/knights-witches/KnightsWitches';
import { BentoCardProps } from '../components/MagicBento';

type CreativeTab = 'poems' | 'stories' | 'writing-resources' | 'tarot' | 'knights-witches'
type WritingResourceTab = 'trama' | 'ambientacion' | 'personajes' | 'worldbuilding' | 'sistemas-magia'

export default function Creative() {
  const { t } = useLanguage()
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [activeTab, setActiveTab] = useState<CreativeTab>('poems')
  const [selectedPoem, setSelectedPoem] = useState<number | null>(null)
  const [selectedStory, setSelectedStory] = useState<number | null>(null)
  const [isCursorEnabled, setIsCursorEnabled] = useState(true)
  const [writingResourceTab, setWritingResourceTab] = useState<WritingResourceTab>('trama')

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

  // Datos de ejemplo para BentoCards
  const tramaCards: BentoCardProps[] = [
    { color: '#060010', title: 'Estructura de Tres Actos', description: 'Guía básica de estructura narrativa', label: 'Trama' },
    { color: '#060010', title: 'El Viaje del Héroe', description: 'Monomito de Joseph Campbell', label: 'Trama' },
    { color: '#060010', title: 'Giros de Trama', description: 'Cómo crear plot twists efectivos', label: 'Trama' },
    { color: '#060010', title: 'Conflicto y Tensión', description: 'Mantener la tensión narrativa', label: 'Trama' }
  ]

  const ambientacionCards: BentoCardProps[] = [
    { color: '#060010', title: 'Worldbuilding', description: 'Construyendo mundos creíbles', label: 'Ambientación' },
    { color: '#060010', title: 'Descripción Sensorial', description: 'Usar los cinco sentidos', label: 'Ambientación' },
    { color: '#060010', title: 'Atmósfera', description: 'Crear el mood correcto', label: 'Ambientación' }
  ]

  const personajesCards: BentoCardProps[] = [
    { color: '#060010', title: 'Desarrollo de Personajes', description: 'Crear personajes tridimensionales', label: 'Personajes' },
    { color: '#060010', title: 'Arquetipos', description: 'Uso de arquetipos narrativos', label: 'Personajes' },
    { color: '#060010', title: 'Diálogos', description: 'Escribir diálogos naturales', label: 'Personajes' }
  ]

  const worldbuildingCards: BentoCardProps[] = [
    { color: '#060010', title: 'Sistemas Políticos', description: 'Estructuras de poder', label: 'Worldbuilding' },
    { color: '#060010', title: 'Economía', description: 'Sistemas económicos del mundo', label: 'Worldbuilding' },
    { color: '#060010', title: 'Cultura', description: 'Tradiciones y costumbres', label: 'Worldbuilding' }
  ]

  const sistemasMagiaCards: BentoCardProps[] = [
    { color: '#060010', title: 'Magia Dura vs Blanda', description: 'Sistemas de magia definidos', label: 'Magia' },
    { color: '#060010', title: 'Costos y Limitaciones', description: 'Balancear el poder mágico', label: 'Magia' },
    { color: '#060010', title: 'Fuentes de Magia', description: 'De dónde viene el poder', label: 'Magia' }
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
                if (tab.id === 'stories') {
                  setSelectedStory(null)
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
                      src="/images/poems/Venganza.png"
                      alt="Venganza"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Venganza</h3>
                    </div>
                  </button>

                  {/* Poema 2 - Kaze */}
                  <button
                    onClick={() => setSelectedPoem(2)}
                    className="group relative overflow-hidden rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all transform hover:scale-105"
                  >
                    <img
                      src="/images/poems/Kaze.png"
                      alt="Kaze"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Kaze</h3>
                    </div>
                  </button>

                  {/* Tumbas */}
                  <button
                    onClick={() => setSelectedPoem(3)}
                    className="group relative overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all transform hover:scale-105"
                  >
                    <img
                      src="/images/poems/Tumbas.png"
                      alt="Tumbas"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Tumbas</h3>
                    </div>
                  </button>

                  {/* Hattori Hanzo */}
                  <button
                    onClick={() => setSelectedPoem(4)}
                    className="group relative overflow-hidden rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all transform hover:scale-105"
                  >
                    <img
                      src="/images/poems/Hattori Hanzo.png"
                      alt="Hattori Hanzo"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Hattori Hanzo</h3>
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

                  {selectedPoem === 1 && <Venganza />}

                  {selectedPoem === 2 && <Kaze />}

                  {selectedPoem === 3 && <Tumbas />}

                  {selectedPoem === 4 && <HattoriHanzo />}
                </div>
              )}
            </>
          )}

          {activeTab === 'stories' && (
            <>
              {selectedStory === null ? (
                // Galería de imágenes de historias cortas
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Historia 1 */}
                  <button
                    onClick={() => setSelectedStory(1)}
                    className="group relative overflow-hidden rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all transform hover:scale-105"
                  >
                    <img
                      src="/images/stories/Cuartito Oscuro.png"
                      alt="Cuartito Oscuro"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Cuartito Oscuro</h3>
                    </div>
                  </button>

                  {/* Historia 2 */}
                  <button
                    onClick={() => setSelectedStory(2)}
                    className="group relative overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all transform hover:scale-105"
                  >
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center">
                      <span className="text-4xl text-purple-300/30">Historia 2</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Título 2</h3>
                    </div>
                  </button>

                  {/* Historia 3 */}
                  <button
                    onClick={() => setSelectedStory(3)}
                    className="group relative overflow-hidden rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all transform hover:scale-105"
                  >
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-pink-900/40 to-purple-900/40 flex items-center justify-center">
                      <span className="text-4xl text-pink-300/30">Historia 3</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Título 3</h3>
                    </div>
                  </button>

                  {/* Historia 4 */}
                  <button
                    onClick={() => setSelectedStory(4)}
                    className="group relative overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all transform hover:scale-105"
                  >
                    <div className="w-full aspect-[4/3] bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center">
                      <span className="text-4xl text-purple-300/30">Historia 4</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Título 4</h3>
                    </div>
                  </button>
                </div>
              ) : (
                // Vista de historia individual
                <div className="space-y-6">
                  <button
                    onClick={() => setSelectedStory(null)}
                    className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <HiArrowLeft className="text-xl" />
                    <span>Volver a la galería</span>
                  </button>

                  {selectedStory === 1 && <Cuartitoscuro />}

                  {selectedStory === 2 && <Story2 />}

                  {selectedStory === 3 && <Story3 />}

                  {selectedStory === 4 && <Story4 />}
                </div>
              )}
            </>
          )}

          {activeTab === 'writing-resources' && (
            <div className="space-y-8">
              {/* Sub-navegación para Recursos de Escritura */}
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { id: 'trama' as WritingResourceTab, label: 'Trama' },
                  { id: 'ambientacion' as WritingResourceTab, label: 'Ambientación' },
                  { id: 'personajes' as WritingResourceTab, label: 'Personajes' },
                  { id: 'worldbuilding' as WritingResourceTab, label: 'Worldbuilding' },
                  { id: 'sistemas-magia' as WritingResourceTab, label: 'Sistemas de Magia' }
                ].map((subTab) => (
                  <button
                    key={subTab.id}
                    onClick={() => setWritingResourceTab(subTab.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      writingResourceTab === subTab.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-700/50'
                    }`}
                  >
                    {subTab.label}
                  </button>
                ))}
              </div>

              {/* Contenido de sub-sección */}
              <div>
                {writingResourceTab === 'trama' && <Trama cards={tramaCards} />}
                {writingResourceTab === 'ambientacion' && <Ambientacion cards={ambientacionCards} />}
                {writingResourceTab === 'personajes' && <Personajes cards={personajesCards} />}
                {writingResourceTab === 'worldbuilding' && <Worldbuilding cards={worldbuildingCards} />}
                {writingResourceTab === 'sistemas-magia' && <SistemasMagia cards={sistemasMagiaCards} />}
              </div>
            </div>
          )}

          {activeTab === 'tarot' && <TarotReading />}

          {activeTab === 'knights-witches' && <KnightsWitches />}
        </div>
      
        </div>
      </div>
    </>
  )
}
