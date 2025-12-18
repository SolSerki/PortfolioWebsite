import { useState, useEffect } from 'react'
import { AnimatePresence } from 'motion/react'
import type { WRSection } from '../writing-resources/types'
import { WRSidebar, WRMobileHeader } from '../writing-resources/navigation'
import { WRContentWrapper, TramaSection, PersonajesSection } from '../writing-resources/content'

export default function WritingResourcesSection() {
  // Navigation state
  const [activeSection, setActiveSection] = useState<WRSection>('trama')
  const [activeSubSection, setActiveSubSection] = useState<string>('')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Mobile state
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSectionChange = (section: WRSection, subSection?: string) => {
    setActiveSection(section)
    setActiveSubSection(subSection || '')
    if (isMobile) setSidebarOpen(false)
  }

  // Render content based on active section
  const renderContent = () => {
    switch (activeSection) {
      case 'trama':
        return (
          <WRContentWrapper 
            section="trama" 
            subSection={activeSubSection} 
            title="Trama" 
            description="Estructuras narrativas, técnicas y ejercicios para construir historias"
          >
            <TramaSection subSection={activeSubSection} searchQuery={searchQuery} />
          </WRContentWrapper>
        )

      case 'ambientacion':
        return (
          <WRContentWrapper 
            section="ambientacion" 
            subSection={activeSubSection} 
            title="Ambientación" 
            description="Descripción sensorial, atmósfera y construcción de escenarios"
          >
            <div className="text-center py-12 text-zinc-500">
              <p>Sección en construcción...</p>
            </div>
          </WRContentWrapper>
        )

      case 'personajes':
        return (
          <WRContentWrapper 
            section="personajes" 
            subSection={activeSubSection} 
            title="Personajes" 
            description="Desarrollo de personajes, arquetipos, diálogos y motivaciones"
          >
            <PersonajesSection subSection={activeSubSection} searchQuery={searchQuery} />
          </WRContentWrapper>
        )

      case 'worldbuilding':
        return (
          <WRContentWrapper 
            section="worldbuilding" 
            subSection={activeSubSection} 
            title="Worldbuilding" 
            description="Construcción de mundos: geografía, cultura, historia y más"
          >
            <div className="text-center py-12 text-zinc-500">
              <p>Sección en construcción...</p>
            </div>
          </WRContentWrapper>
        )

      case 'sistemas-magia':
        return (
          <WRContentWrapper 
            section="sistemas-magia" 
            subSection={activeSubSection} 
            title="Sistemas de Magia" 
            description="Diseño de sistemas mágicos: reglas, limitaciones y costos"
          >
            <div className="text-center py-12 text-zinc-500">
              <p>Sección en construcción...</p>
            </div>
          </WRContentWrapper>
        )

      default:
        return null
    }
  }

  return (
    <div className="h-[600px] lg:h-[700px] flex flex-col lg:flex-row rounded-xl overflow-hidden border border-purple-500/20">
      {/* Mobile Header */}
      <WRMobileHeader
        activeSection={activeSection}
        isSidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        showSearch={showMobileSearch}
        onToggleSearch={() => setShowMobileSearch(!showMobileSearch)}
      />

      {/* Sidebar */}
      <WRSidebar
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
      <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-zinc-900/30">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  )
}
