import { motion } from 'motion/react';
import { useState } from 'react';
import type { DockItemData } from '../Dock';

type BottomNavProps = {
  items: DockItemData[];
  className?: string;
};

export default function BottomNav({ items, className = '' }: BottomNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className={`${className} fixed bottom-0 left-0 right-0 z-40 bg-[#060010] border-t-2 border-neutral-700 px-2 py-3 sm:py-4`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-around items-center">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                item.onClick();
              }}
              className={`${item.className} flex flex-col items-center gap-1 sm:gap-1.5 px-2 sm:px-4 py-2 rounded-lg transition-all min-w-0 flex-1 max-w-[120px]`}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.2 : 1,
                  color: isActive ? '#ffffff' : '#a3a3a3'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="text-xl sm:text-2xl"
              >
                {item.icon}
              </motion.div>
              <motion.span
                animate={{
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#ffffff' : '#a3a3a3'
                }}
                className="text-[10px] sm:text-xs truncate max-w-full"
              >
                {item.label}
              </motion.span>
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-8 sm:w-12 h-1 bg-purple-500 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
