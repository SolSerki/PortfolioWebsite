// Vercel Serverless Function: POST /api/contact
// Validates and logs the contact message. Replace with email provider (Resend/SendGrid) later.
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' })
    return
  }

  const { name, email, message } = req.body || {}
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields' })
    return
  }

  // TODO: send via email provider using environment secrets
  console.log('Contact message:', { name, email, message })
  res.status(200).json({ ok: true })
}
