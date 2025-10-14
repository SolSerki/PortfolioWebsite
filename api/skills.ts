// Vercel Serverless Function: GET /api/skills
// Returns static skills data used by the portfolio
export default async function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const skills = [
    { name: 'Learning Now', items: ['Node.js', 'React', 'Tailwind CSS', 'Anime.js'] },
    { name: 'Backend', items: ['.NET MVC', 'Entity Framework', 'Java', 'Spring Boot', 'Hibernate', 'REST APIs'] },
    { name: 'Auth/Security', items: ['JWT'] },
    { name: 'Tools', items: ['Git', 'Jenkins', 'Sitecore'] },
    { name: 'Practices', items: ['Unit Testing', 'Design Patterns', 'Scrum', 'FDD'] },
    { name: 'Languages', items: ['English (C2)', 'Spanish (Native)'] }
  ]

  res.status(200).json(skills)
}
