import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi2'
import SplashCursor from '../components/SplashCursor'
import TarotSelector from '../components/TarotSelector'
import KnightsWitches from '../components/knights-witches/KnightsWitches'
import {
  CreativeTabs,
  CursorToggle,
  CreativeFooter,
  PoemsSection,
  StoriesSection,
  WritingResourcesSection,
  type CreativeTab
} from '../components/creative'

export default function CreativeExplore() {
  const [activeTab, setActiveTab] = useState<CreativeTab>('poems')
  const [isCursorEnabled, setIsCursorEnabled] = useState(true)

  return (
    <>
      {isCursorEnabled && <SplashCursor />}
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-zinc-900 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-8">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            {/* Back to Landing */}
            <Link 
              to="/"
              className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors text-sm"
            >
              <HiArrowLeft />
              <span className="hidden sm:inline">Portfolio</span>
            </Link>

            {/* Cursor Toggle */}
            <CursorToggle 
              isEnabled={isCursorEnabled} 
              onToggle={() => setIsCursorEnabled(!isCursorEnabled)} 
            />
          </div>

          {/* Tabs Navigation */}
          <CreativeTabs 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />

          {/* Content Area */}
          <div className="bg-zinc-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-zinc-800 p-4 sm:p-6 md:p-8 min-h-[400px] sm:min-h-[500px]">
            {activeTab === 'poems' && <PoemsSection />}
            {activeTab === 'stories' && <StoriesSection />}
            {activeTab === 'writing-resources' && <WritingResourcesSection />}
            {activeTab === 'tarot' && <TarotSelector />}
            {activeTab === 'knights-witches' && <KnightsWitches />}
          </div>

          <CreativeFooter />
        </div>
      </div>
    </>
  )
}
