import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import type { DockItemData } from '../Dock';

type FloatingActionButtonProps = {
  items: DockItemData[];
  className?: string;
};

export default function FloatingActionButton({ items, className = '' }: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const radius = 120; // Radio del círculo
  const angleStep = Math.PI / (items.length + 1);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/30 z-40 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 135 : 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className={`${className} fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-600 hover:bg-purple-700 border-2 border-purple-400 shadow-lg flex items-center justify-center text-white text-2xl sm:text-3xl font-bold`}
        aria-label="Toggle menu"
      >
        +
      </motion.button>

      {/* Radial Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <>
            {items.map((item, index) => {
              const angle = angleStep * (index + 1);
              const x = Math.cos(angle - Math.PI / 2) * radius;
              const y = Math.sin(angle - Math.PI / 2) * radius;

              return (
                <motion.button
                  key={index}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{ scale: 1, x, y }}
                  exit={{ scale: 0, x: 0, y: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.05
                  }}
                  onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                  }}
                  className={`${item.className} fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#060010] border-2 border-neutral-700 hover:border-neutral-500 shadow-md flex items-center justify-center text-xl sm:text-2xl group`}
                  style={{ transformOrigin: 'center center' }}
                  aria-label={String(item.label)}
                >
                  {item.icon}
                  <motion.span
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.2 }}
                    className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#060010] border border-neutral-700 text-white text-sm whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {item.label}
                  </motion.span>
                </motion.button>
              );
            })}
          </>
        )}
      </AnimatePresence>
    </>
  );
}
