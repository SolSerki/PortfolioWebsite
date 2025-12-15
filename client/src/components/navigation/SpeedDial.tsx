import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import type { DockItemData } from '../Dock';

type SpeedDialProps = {
  items: DockItemData[];
  className?: string;
};

export default function SpeedDial({ items, className = '' }: SpeedDialProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Speed Dial Items */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
        <AnimatePresence>
          {isOpen &&
            items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0, opacity: 0, y: 20 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: index * 0.05
                }}
                className="flex items-center gap-3 group"
              >
                {/* Label */}
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  className="px-3 py-2 rounded-lg bg-[#060010] border border-neutral-700 text-white text-sm whitespace-nowrap shadow-lg"
                >
                  {item.label}
                </motion.span>

                {/* Button */}
                <button
                  onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                  }}
                  className={`${item.className} w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-600/90 hover:bg-purple-700 border-2 border-purple-400 shadow-lg flex items-center justify-center text-white text-xl sm:text-2xl transition-colors`}
                  aria-label={String(item.label)}
                >
                  {item.icon}
                </button>
              </motion.div>
            ))}
        </AnimatePresence>

        {/* Main Speed Dial Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className={`${className} w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-purple-600 hover:bg-purple-700 border-2 border-purple-400 shadow-2xl flex items-center justify-center text-white text-3xl sm:text-4xl font-light`}
          aria-label="Toggle speed dial"
        >
          +
        </motion.button>
      </div>
    </>
  );
}
