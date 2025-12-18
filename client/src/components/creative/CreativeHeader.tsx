import FrameAntique from '../../svg/FrameAntique.svg?react'

export default function CreativeHeader() {
  return (
    <div className="text-center mb-8 sm:mb-10 md:mb-12">
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="w-full aspect-[3/2]">
          <FrameAntique 
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 md:px-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 md:mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Keep
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base lg:text-lg mb-0.5 sm:mb-1 md:mb-2 text-center">
            n. an important part of our personality that others seldom see
          </p>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base lg:text-lg mb-0.5 sm:mb-1 md:mb-2 text-center">
            ― a secret flaw, a hidden talent, trauma that never comes up, dreams we never mention ―
          </p>
          
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base lg:text-lg mb-1 sm:mb-2 md:mb-4 text-center">
            that remains a vital part of who we are even if nobody knows it's there.
          </p>
          <p className="text-zinc-500 text-xs md:text-sm italic text-center">
            The Dictionary of Obscure Sorrows - John Koenig
          </p>
        </div>
      </div>
    </div>
  )
}
