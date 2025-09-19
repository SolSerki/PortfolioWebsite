import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      anime.timeline({ easing: 'easeOutExpo' })
        .add({
          targets: titleRef.current,
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 900
        })
        .add({
          targets: subtitleRef.current,
          translateY: [10, 0],
          opacity: [0, 1],
          duration: 700
        }, '-=400')
        .add({
          targets: '.hero-cta',
          opacity: [0, 1],
          scale: [0.95, 1],
          duration: 500,
          delay: anime.stagger(80)
        }, '-=300')
    }
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Back‑End Developer learning Node.js & React
        </h1>
        <p ref={subtitleRef} className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          5+ years building reliable web backends (.NET, Java/Spring). Now expanding into Node.js, React, Tailwind, and delightful UI animations.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="hero-cta inline-flex items-center px-4 py-2 rounded bg-accent text-white shadow hover:opacity-90 transition">
            View Projects
          </a>
          <a href="#stack" className="hero-cta inline-flex items-center px-4 py-2 rounded border border-zinc-300 dark:border-zinc-700">
            My Tech Stack
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
    anime({
      targets: el.querySelectorAll('.blob'),
      translateX: () => anime.random(-20, 20),
      translateY: () => anime.random(-10, 10),
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 4000,
      delay: anime.stagger(300)
    })
  }, [])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="blob absolute -top-10 -left-10 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
      <div className="blob absolute top-20 -right-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-2xl" />
      <div className="blob absolute bottom-10 left-1/3 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />
    </div>
  )
}