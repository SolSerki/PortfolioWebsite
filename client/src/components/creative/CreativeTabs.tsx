import { HiSparkles, HiPencil, HiBookOpen, HiStar, HiShieldCheck } from 'react-icons/hi2'

export type CreativeTab = 'poems' | 'stories' | 'writing-resources' | 'tarot' | 'knights-witches'

interface CreativeTabsProps {
  activeTab: CreativeTab
  onTabChange: (tab: CreativeTab) => void
}

const tabs = [
  { id: 'poems' as CreativeTab, label: 'Poemas', icon: HiSparkles },
  { id: 'stories' as CreativeTab, label: 'Historias Cortas', icon: HiBookOpen },
  { id: 'writing-resources' as CreativeTab, label: 'Recursos de Escritura', icon: HiPencil },
  { id: 'tarot' as CreativeTab, label: 'Tarot', icon: HiStar },
  { id: 'knights-witches' as CreativeTab, label: 'Knights & Witches', icon: HiShieldCheck }
]

export default function CreativeTabs({ activeTab, onTabChange }: CreativeTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
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
  )
}
