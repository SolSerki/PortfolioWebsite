# Personal Portfolio (React + Tailwind + Anime.js)

This is a simple, static portfolio:
- Frontend only: React + Vite + TypeScript + Tailwind + Anime.js
- No backend calls (tech stack is hard-coded; contact opens your email client)

## Getting Started

1) Install dependencies
- `cd client`
- `npm install`

2) Run locally
- `npm run dev`
- Open http://localhost:5173

3) Build for production
- `npm run build`
- Preview the build: `npm run preview`

## Deployment
Because it’s a static site, you can deploy the `client/dist` folder to any static host:
- GitHub Pages, Netlify, Vercel (Static Site), Cloudflare Pages, etc.

## Structure

`client/` — Vite + React + TS + Tailwind app

## Notes
- The Tech Stack is rendered from a local constant (no network).
- The Contact form creates a `mailto:` link. Set your address inside `client/src/App.tsx` (search for `you@example.com`).

## Tech Used
- React, Vite, TypeScript
- Tailwind CSS
- Anime.js v4

## Next Steps
- Add Projects data and pages
- Replace `mailto:` with a form service (e.g., Formspree, Netlify Forms) if desired, still without hosting your own backend.