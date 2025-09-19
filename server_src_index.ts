import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { z } from 'zod'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = Number(process.env.PORT || 4000)

// Skills from your CV
const skills = [
  { name: 'Learning Now', items: ['Node.js', 'React', 'Tailwind CSS', 'Anime.js'] },
  { name: 'Backend', items: ['.NET MVC', 'Entity Framework', 'Java', 'Spring Boot', 'Hibernate', 'REST APIs'] },
  { name: 'Auth/Security', items: ['JWT'] },
  { name: 'Tools', items: ['Git', 'Jenkins', 'Sitecore'] },
  { name: 'Practices', items: ['Unit Testing', 'Design Patterns', 'Scrum', 'FDD'] },
  { name: 'Languages', items: ['English (C2)', 'Spanish (Native)'] }
]

app.get('/api/skills', (_req, res) => {
  res.json(skills)
})

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
})

app.post('/api/contact', (req, res) => {
  const parsed = contactSchema.safeParse(req.body)
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() })
  }
  // TODO: integrate email delivery (Resend/Nodemailer)
  console.log('Contact message received:', parsed.data)
  res.status(200).json({ ok: true })
})

// Example projects endpoint (fill later)
app.get('/api/projects', (_req, res) => {
  res.json([
    {
      title: 'Vetty (Veterinary Management)',
      stack: ['Java', 'Spring Boot', 'Full-Stack'],
      summary: 'Comprehensive management app for a veterinary clinic.',
      links: {}
    },
    {
      title: 'Open Source / Experiments',
      stack: ['.NET', 'Java', 'Node.js (learning)'],
      summary: 'Selection of repositories and experiments.',
      links: {}
    }
  ])
})

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`)
})