import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { HiArrowRight, HiSparkles } from 'react-icons/hi2'
import SplashCursor from '../components/SplashCursor'
import FrameAntique from '../svg/FrameAntique.svg?react'

export default function CreativeLanding() {
  const navigate = useNavigate()

  return (
    <>
      <SplashCursor />
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-zinc-900 to-black flex flex-col items-center justify-center px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl relative"
        >
          {/* Frame Container */}
          <div className="relative w-full aspect-[3/2]">
            {/* Antique Frame */}
            <FrameAntique 
              className="w-full h-full absolute inset-0 z-0"
              preserveAspectRatio="xMidYMid meet"
            />
            
            {/* Content inside the frame */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-12 md:px-20 lg:px-24 py-12 sm:py-16 md:py-20 z-10">
              {/* Title */}
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
              >
                Keep
              </motion.h1>
              
              {/* Definition */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center mb-4 sm:mb-6"
              >
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2">
                  n. an important part of our personality that others seldom see
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2">
                  ― a secret flaw, a hidden talent, trauma that never comes up, dreams we never mention ―
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3">
                  that remains a vital part of who we are even if nobody knows it's there.
                </p>
                <p className="text-zinc-500 text-xs md:text-sm italic">
                  The Dictionary of Obscure Sorrows - John Koenig
                </p>
              </motion.div>

              {/* Enter Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                onClick={() => navigate('/creative/explore')}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Sparkle effects */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping animation-delay-200" />
                </div>
                
                {/* Button content */}
                <span className="relative flex items-center gap-2 sm:gap-3">
                  <HiSparkles className="text-lg sm:text-xl" />
                  Explorar
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Back to portfolio link */}
        <motion.a
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-6 text-zinc-500 hover:text-purple-400 text-sm transition-colors"
        >
          ← Volver al portfolio
        </motion.a>
      </div>
    </>
  )
}
