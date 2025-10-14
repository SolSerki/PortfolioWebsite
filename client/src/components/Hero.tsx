import { useEffect, useRef } from 'react'
// Anime.js v4 imports
import { animate, createTimeline, stagger } from 'animejs'
import { useLanguage } from '../contexts/LanguageContext'
import LiquidEther from './LiquidEther'

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
    <section className="relative overflow-hidden min-h-[600px]">
      {/* LiquidEther animated background */}
      <div className="absolute inset-0 -z-10">
        <LiquidEther
          mouseForce={30}
          cursorSize={100}
          resolution={0.5}
          colors={['#6366f1', '#8b5cf6', '#a855f7', '#d946ef']}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.5}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          dt={0.014}
          BFECC={true}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p ref={subtitleRef} className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 drop-shadow-md">
          {t('hero.subtitle')}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="hero-cta inline-flex items-center px-4 py-2 rounded bg-accent text-white shadow-lg hover:opacity-90 transition">
            {t('hero.cta.projects')}
          </a>
          <a href="#stack" className="hero-cta inline-flex items-center px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm shadow-lg">
            {t('hero.cta.stack')}
          </a>
        </div>
      </div>
    </section>
  )
}
