import { useState, useRef, useEffect } from 'react';
import type { DockItemData } from '../Dock';
import Dock from '../Dock';
import HamburgerMenu from './HamburgerMenu';
import BottomNav from './BottomNav';
import FloatingActionButton from './FloatingActionButton';
import TabBarSticky from './TabBarSticky';
import SpeedDial from './SpeedDial';
import CardNav from './CardNav';

export type NavigationStyle = 'dock' | 'hamburger' | 'bottom-nav' | 'fab' | 'tab-bar' | 'speed-dial' | 'card-nav';

type NavigationWrapperProps = {
  items: DockItemData[];
  initialStyle?: NavigationStyle;
  showStyleSelector?: boolean;
  className?: string;
};

export default function NavigationWrapper({
  items,
  initialStyle="hamburger",
  showStyleSelector = false,
  className = ''
}: NavigationWrapperProps) {
  const [currentStyle, setCurrentStyle] = useState<NavigationStyle>(initialStyle);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      isScrollingRef.current = true;
      setActiveSection(sectionId);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = ['hero', 'about', 'projects', 'services', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Map items to add scroll functionality
  const processedItems = items.map(item => {
    // Extract section ID from className if present (e.g., 'nav-hero' -> 'hero')
    const sectionMatch = item.className?.match(/nav-(\w+)/);
    const sectionId = sectionMatch ? sectionMatch[1] : '';
    const isNavigationItem = ['hero', 'about', 'projects', 'services', 'contact'].includes(sectionId);

    return {
      ...item,
      onClick: isNavigationItem 
        ? () => scrollToSection(sectionId)
        : item.onClick
    };
  });

  const renderNavigation = () => {
    switch (currentStyle) {
      case 'card-nav':
        return <CardNav items={processedItems} className={className} />;
      case 'hamburger':
        return <HamburgerMenu items={processedItems} className={className} />;
      case 'bottom-nav':
        return <BottomNav items={processedItems} className={className} />;
      case 'fab':
        return <FloatingActionButton items={processedItems} className={className} />;
      case 'tab-bar':
        return <TabBarSticky items={processedItems} className={className} />;
      case 'speed-dial':
        return <SpeedDial items={processedItems} className={className} />;
      case 'dock':
      default:
        return <Dock items={processedItems} className={className} />;
    }
  };

  return (
    <>
      {renderNavigation()}

      {/* Style Selector */}
      {showStyleSelector && (
        <div className="fixed top-4 left-4 z-50 bg-[#060010] border-2 border-neutral-700 rounded-lg p-3 shadow-xl">
          <p className="text-white text-xs font-semibold mb-2">Navigation Style:</p>
          <div className="flex flex-col gap-1.5">
            {(['card-nav', 'dock', 'hamburger', 'bottom-nav', 'fab', 'tab-bar', 'speed-dial'] as NavigationStyle[]).map(
              style => (
                <button
                  key={style}
                  onClick={() => setCurrentStyle(style)}
                  className={`px-3 py-1.5 rounded text-xs transition-all ${
                    currentStyle === style
                      ? 'bg-purple-600 text-white font-semibold'
                      : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-white'
                  }`}
                >
                  {style
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ')}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
