import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { ReactSVG } from "react-svg";
import { HiSparkles, HiPencil, HiBookOpen, HiStar, HiShieldCheck, HiArrowLeft } from 'react-icons/hi2'
import FrameAntique from '../svg/FrameAntique.svg?react'
import FlowerIcon from '../svg/FlowerIcon.svg?react';
import SplashCursor from '../components/SplashCursor';
import { GiBodyHeight } from 'react-icons/gi';
import Venganza from '../components/poems/Venganza';
import Kaze from '../components/poems/Kaze';
import Tumbas from '../components/poems/Tumbas';
import HattoriHanzo from '../components/poems/HattoriHanzo';
import Cuartitoscuro from '../components/stories/Cuartitoscuro';
import UptheStairs from '../components/stories/UptheStairs';
import Entreabierta from '../components/stories/Entreabierta';
import Story4 from '../components/stories/Story4';
import Trama from '../components/writing-resources/Trama';
import Ambientacion from '../components/writing-resources/Ambientacion';
import Personajes from '../components/writing-resources/Personajes';
import Worldbuilding from '../components/writing-resources/Worldbuilding';
import SistemasMagia from '../components/writing-resources/SistemasMagia';
import TarotSelector from '../components/TarotSelector';
import KnightsWitches from '../components/knights-witches/KnightsWitches';

type CreativeTab = 'poems' | 'stories' | 'writing-resources' | 'tarot' | 'knights-witches'
type WritingResourceTab = 'trama' | 'ambientacion' | 'personajes' | 'worldbuilding' | 'sistemas-magia'

export default function Creative() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<CreativeTab>('poems')
  const [selectedPoem, setSelectedPoem] = useState<number | null>(null)
  const [selectedStory, setSelectedStory] = useState<number | null>(null)
  const [isCursorEnabled, setIsCursorEnabled] = useState(true)
  const [writingResourceTab, setWritingResourceTab] = useState<WritingResourceTab>('trama')

  const tabs = [
    { id: 'poems' as CreativeTab, label: 'Poemas', icon: HiSparkles },
    { id: 'stories' as CreativeTab, label: 'Historias Cortas', icon: HiBookOpen },
    { id: 'writing-resources' as CreativeTab, label: 'Recursos de Escritura', icon: HiPencil },
    { id: 'tarot' as CreativeTab, label: 'Tarot', icon: HiStar },
    { id: 'knights-witches' as CreativeTab, label: 'Knights & Witches', icon: HiShieldCheck }
  ]

  return (
    <>
      {isCursorEnabled && <SplashCursor />}
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-zinc-900 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* Toggle Cursor Button */}
        <div className="flex justify-end mb-4 sm:mb-6">
          <button
            onClick={() => setIsCursorEnabled(!isCursorEnabled)}
            className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 text-zinc-400 hover:text-purple-400 transition-all"
          >
            <HiSparkles className={`text-base sm:text-lg ${isCursorEnabled ? 'text-purple-400' : 'text-zinc-600'}`} />
            <span className="text-xs sm:text-sm">{isCursorEnabled ? 'Cursor ON' : 'Cursor OFF'}</span>
          </button>
        </div>
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="w-full aspect-[3/2]">
              <FrameAntique 
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 md:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Keep
              </h1>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base lg:text-lg mb-0.5 sm:mb-1 md:mb-2 text-center">
                n. an important part of our personality that others seldom see
              </p>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base lg:text-lg mb-0.5 sm:mb-1 md:mb-2 text-center">
                ― a secret flaw, a hidden talent, trauma that never comes up, dreams we never mention ―
              </p>
              
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2 md:mb-4 text-center">
                that remains a vital part of who we are even if nobody knows it's there.
              </p>
              <p className="text-zinc-500 text-xs md:text-sm italic text-center">
                The Dictionary of Obscure Sorrows - John Koenig
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
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
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-zinc-800'
              }`}
            >
              <tab.icon className="text-lg sm:text-xl" />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-zinc-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-zinc-800 p-4 sm:p-6 md:p-8 min-h-[400px] sm:min-h-[500px]">
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
                  {/* Cuartito Oscuro*/}
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

                  {/* Up the Stairs */}
                  <button
                    onClick={() => setSelectedStory(2)}
                    className="group relative overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all transform hover:scale-105"
                  >
                    <img
                      src="/images/stories/Up the Stairs.png"
                      alt="Up the Stairs"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Up the Stairs</h3>
                    </div>
                  </button>

                  {/* Entreabierta */}
                  <button
                    onClick={() => setSelectedStory(3)}
                    className="group relative overflow-hidden rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all transform hover:scale-105"
                  >
                    <img
                      src="/images/stories/Entreabierta.png"
                      alt="Entreabierta"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <h3 className="text-2xl font-bold text-white">Entreabierta</h3>
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

                  {selectedStory === 2 && <UptheStairs />}

                  {selectedStory === 3 && <Entreabierta />}

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
                {writingResourceTab === 'trama' && <Trama />}
                {writingResourceTab === 'ambientacion' && <Ambientacion />}
                {writingResourceTab === 'personajes' && <Personajes />}
                {writingResourceTab === 'worldbuilding' && <Worldbuilding />}
                {writingResourceTab === 'sistemas-magia' && <SistemasMagia />}
              </div>
            </div>
          )}

          {activeTab === 'tarot' && <TarotSelector />}

          {activeTab === 'knights-witches' && <KnightsWitches />}
        </div>

        {/* Footer */}
        <footer className="border-t border-purple-500/20 mt-8 sm:mt-12 md:mt-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-6 text-xs sm:text-sm text-zinc-400">
            <div className="text-center mb-2 sm:mb-3">
              {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
            </div>
            <div className="text-center text-xs text-zinc-500 mb-1.5 sm:mb-2 px-2">
              {t('footer.creativeRights')}
            </div>
            <div className="text-center text-xs text-zinc-600">
              {t('footer.builtWith')}
            </div>
          </div>
        </footer>
      
        </div>
      </div>
    </>
  )
}
