import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import type { DockItemData } from '../Dock';

type HamburgerMenuProps = {
  items: DockItemData[];
  className?: string;
};

export default function HamburgerMenu({ items, className = '' }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${className} fixed top-4 right-4 z-50 p-3 rounded-lg bg-[#060010] border-2 border-neutral-700 hover:border-neutral-500 transition-colors`}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-white block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white block"
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-72 sm:w-80 bg-[#060010] border-l-2 border-neutral-700 z-50 p-6 overflow-y-auto"
            >
              <div className="mt-16 space-y-2">
                {items.map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      item.onClick();
                      setIsOpen(false);
                    }}
                    className={`${item.className} w-full flex items-center gap-4 p-4 rounded-lg hover:bg-neutral-800/50 transition-colors text-left`}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-white text-base">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
