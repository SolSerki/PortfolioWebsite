import { useEffect, useRef } from 'react'
import { animate, createTimeline, stagger } from 'animejs'
import { useLanguage } from '../contexts/LanguageContext'
import DarkVeil from './DarkVeil'
import TechStack from './TechStack'
import AvailabilityBadge from './AvailabilityBadge'

export default function Hero() {
  const { t } = useLanguage()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return

    const tl = createTimeline({ defaults: { ease: 'easeOutExpo' }, autoplay: true })

    tl.add(titleRef.current, {
      translateY: { from: 20, to: 0 },
      opacity: { from: 0, to: 1 },
      duration: 900,
    })
      .add(subtitleRef.current, {
        translateY: { from: 10, to: 0 },
        opacity: { from: 0, to: 1 },
        duration: 700,
      }, '-=400')
      .add('.hero-cta', {
        opacity: { from: 0, to: 1 },
        scale: { from: 0.95, to: 1 },
        duration: 500,
        delay: stagger(80)
      }, '-=300')

    return () => {
      tl.pause()
      tl.cancel()
    }
  }, [])

  return (
    <section className="relative w-full h-full min-h-screen flex items-center bg-black overflow-hidden">
      {/* DarkVeil animated background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24 text-white w-full">
        <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg break-words">
          {t('hero.title')}
        </h1>
        <p ref={subtitleRef} className="mt-4 text-base sm:text-lg text-zinc-300 drop-shadow-md">
          {t('hero.subtitle')}
        </p>
        
        <div className="mt-6">
          <AvailabilityBadge status="available" />
        </div>

        
        <TechStack />
      </div>
    </section>
  )
}
