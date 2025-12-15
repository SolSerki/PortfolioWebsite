import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import type { DockItemData } from '../Dock';

type TabBarStickyProps = {
  items: DockItemData[];
  className?: string;
};

export default function TabBarSticky({ items, className = '' }: TabBarStickyProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
        backgroundColor: isScrolled ? 'rgba(6, 0, 16, 0.8)' : 'rgba(6, 0, 16, 0.4)'
      }}
      className={`${className} sticky top-0 z-40 border-b-2 border-neutral-700 transition-colors`}
    >
      <div className="max-w-screen-xl mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-3 sm:py-4 min-w-max">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  item.onClick();
                }}
                className={`${item.className} relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-lg transition-all whitespace-nowrap`}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    color: isActive ? '#ffffff' : '#a3a3a3'
                  }}
                  className="text-lg sm:text-xl"
                >
                  {item.icon}
                </motion.div>
                <motion.span
                  animate={{
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#ffffff' : '#a3a3a3'
                  }}
                  className="text-sm sm:text-base"
                >
                  {item.label}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="tabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-purple-500"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
