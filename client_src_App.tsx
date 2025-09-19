import { useEffect } from 'react'
import Hero from './components/Hero'
import TechStack from './components/TechStack'

export default function App() {
  // Basic dark-mode toggle persisted in localStorage (simple demo)
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', dark)
  }, [])

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/50 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <span className="font-semibold">Miguel Serki</span>
          <nav className="flex gap-4 text-sm">
            <a href="#projects" className="hover:text-accent">Projects</a>
            <a href="#stack" className="hover:text-accent">Tech Stack</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <TechStack />
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">Feel free to reach out. This form posts to your Node API.</p>
          <ContactForm />
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} Miguel Serki. Built with React, Node, Tailwind, Anime.js.
        </div>
      </footer>
    </div>
  )
}

function ContactForm() {
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    alert(res.ok ? 'Message sent!' : 'Something went wrong.')
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-xl">
      <input className="px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" name="name" placeholder="Your name" required />
      <input className="px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" name="email" placeholder="Your email" type="email" required />
      <textarea className="px-3 py-2 rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900" name="message" placeholder="Your message" rows={5} required />
      <button className="px-4 py-2 rounded bg-accent text-white font-medium hover:opacity-90 transition">Send</button>
    </form>
  )
}