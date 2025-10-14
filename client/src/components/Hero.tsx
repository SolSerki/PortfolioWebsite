import { useEffect, useRef } from 'react'
// Anime.js v4 imports
import { animate, createTimeline, stagger } from 'animejs'
import { useLanguage } from '../contexts/LanguageContext'

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
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          {t('hero.title')}
        </h1>
        <p ref={subtitleRef} className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          {t('hero.subtitle')}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="hero-cta inline-flex items-center px-4 py-2 rounded bg-accent text-white shadow hover:opacity-90 transition">
            {t('hero.cta.projects')}
          </a>
          <a href="#stack" className="hero-cta inline-flex items-center px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700">
            {t('hero.cta.stack')}
          </a>
        </div>
      </div>

      {/* Decorative animated blobs using Anime.js-controlled CSS variables */}
      <AnimatedBlobs />
    </section>
  )
}

function AnimatedBlobs() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const el = ref.current

    const rand = (min: number, max: number) => Math.random() * (max - min) + min

    const anim = animate(el.querySelectorAll('.blob'), {
      translateX: () => rand(-20, 20),
      translateY: () => rand(-10, 10),
      alternate: true,
      loop: true,
      ease: 'easeInOutSine',
      duration: 4000,
      delay: stagger(300)
    })

    return () => {
      anim.pause()
      anim.cancel()
    }
  }, [])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="blob absolute -top-10 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
      <div className="blob absolute top-20 -right-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-2xl" />
      <div className="blob absolute bottom-10 left-1/3 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />
    </div>
  )
}
