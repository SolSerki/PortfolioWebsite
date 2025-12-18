import { useState, useEffect } from 'react'
import { AnimatePresence } from 'motion/react'
import {
  PasswordGate,
  SynopsisSection,
  WorldIntroSection,
  WorldMapSection,
  TimelineSection,
  type Region,
  type KWSection
} from './index'
import { KWSidebar, KWMobileHeader } from './navigation'
import { KWContentWrapper, CharactersSection, FactionsSection } from './content'

export default function KnightsWitches() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState<Region>(null)
  
  // Navigation state
  const [activeSection, setActiveSection] = useState<KWSection>('mundo')
  const [activeSubSection, setActiveSubSection] = useState<string>('sinopsis')
  const [searchQuery, setSearchQuery] = useState('')
  const [showSpoilers, setShowSpoilers] = useState(false)
  
  // Mobile state
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  
  // Collapse states for existing sections
  const [showSynopsis, setShowSynopsis] = useState(true)
  const [showWorldIntro, setShowWorldIntro] = useState(true)
  const [showTimeline, setShowTimeline] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSectionChange = (section: KWSection, subSection?: string) => {
    setActiveSection(section)
    setActiveSubSection(subSection || '')
    if (isMobile) setSidebarOpen(false)
  }

  if (!isUnlocked) {
    return <PasswordGate onUnlock={() => setIsUnlocked(true)} />
  }

  // Render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'mundo':
        return (
          <KWContentWrapper section="mundo" subSection={activeSubSection} title="El Mundo" description="Descubre el mundo de Knights & Witches">
            <div className="space-y-8">
              {(!activeSubSection || activeSubSection === 'sinopsis') && (
                <SynopsisSection 
                  isExpanded={showSynopsis} 
                  onToggle={() => setShowSynopsis(!showSynopsis)} 
                />
              )}
              {(!activeSubSection || activeSubSection === 'introduccion') && (
                <WorldIntroSection 
                  isExpanded={showWorldIntro} 
                  onToggle={() => setShowWorldIntro(!showWorldIntro)} 
                />
              )}
            </div>
          </KWContentWrapper>
        )

      case 'geografia':
        return (
          <KWContentWrapper section="geografia" subSection={activeSubSection} title="Geografía" description="Explora las tierras del mundo">
            <WorldMapSection 
              selectedRegion={selectedRegion} 
              onRegionChange={setSelectedRegion} 
            />
          </KWContentWrapper>
        )

      case 'historia':
        return (
          <KWContentWrapper section="historia" subSection={activeSubSection} title="Historia" description="La historia del mundo a través de las eras">
            <TimelineSection 
              isExpanded={showTimeline} 
              onToggle={() => setShowTimeline(!showTimeline)} 
            />
          </KWContentWrapper>
        )

      case 'facciones':
        return (
          <KWContentWrapper section="facciones" subSection={activeSubSection} title="Facciones" description="Las organizaciones que moldean el mundo">
            <FactionsSection
              subSection={activeSubSection}
              searchQuery={searchQuery}
              showSpoilers={showSpoilers}
              onToggleSpoilers={() => setShowSpoilers(!showSpoilers)}
            />
          </KWContentWrapper>
        )

      case 'magia':
        return (
          <KWContentWrapper section="magia" subSection={activeSubSection} title="Magia" description="Los sistemas arcanos del mundo">
            <div className="text-center py-12 text-zinc-500">
              <p>Sección en construcción...</p>
            </div>
          </KWContentWrapper>
        )

      case 'personajes':
        return (
          <KWContentWrapper section="personajes" subSection={activeSubSection} title="Personajes" description="Los habitantes del mundo">
            <CharactersSection
              subSection={activeSubSection}
              searchQuery={searchQuery}
              showSpoilers={showSpoilers}
              onToggleSpoilers={() => setShowSpoilers(!showSpoilers)}
            />
          </KWContentWrapper>
        )

      case 'cultura':
        return (
          <KWContentWrapper section="cultura" subSection={activeSubSection} title="Cultura" description="Religiones, tradiciones e idiomas">
            <div className="text-center py-12 text-zinc-500">
              <p>Sección en construcción...</p>
            </div>
          </KWContentWrapper>
        )

      case 'bestiario':
        return (
          <KWContentWrapper section="bestiario" subSection={activeSubSection} title="Bestiario" description="Criaturas que habitan el mundo">
            <div className="text-center py-12 text-zinc-500">
              <p>Sección en construcción...</p>
            </div>
          </KWContentWrapper>
        )

      case 'artefactos':
        return (
          <KWContentWrapper section="artefactos" subSection={activeSubSection} title="Artefactos" description="Objetos mágicos y reliquias legendarias">
            <div className="text-center py-12 text-zinc-500">
              <p>Sección en construcción...</p>
            </div>
          </KWContentWrapper>
        )

      default:
        return null
    }
  }

  return (
    <div className="h-full flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <KWMobileHeader
        activeSection={activeSection}
        isSidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showSearch={showMobileSearch}
        onToggleSearch={() => setShowMobileSearch(!showMobileSearch)}
      />

      {/* Sidebar - Desktop always visible, Mobile as overlay */}
      <KWSidebar
        activeSection={activeSection}
        activeSubSection={activeSubSection}
        onSectionChange={handleSectionChange}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isMobile={isMobile}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  )
}
