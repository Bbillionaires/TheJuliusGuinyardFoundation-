# The Julius Guinyard Foundation

Website for The Julius Guinyard Foundation, a drowning prevention nonprofit serving Northeast
Florida — home of The Julius Guinyard Pool and Park.

Built with Next.js 16 (App Router), React 19, and Tailwind CSS 4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

- `src/app/` — pages (App Router), one folder per route
- `src/components/` — shared Header, Footer, and form components
- `src/lib/site.ts` — site-wide constants (contact info, nav items)
- `src/lib/submissions.ts` — local storage for the Volunteer and Contact form submissions

## Forms

The Volunteer application (`/volunteer`) and the footer Contact form use Next.js Server Actions
and write submissions to `data/*.jsonl` on the server for local development. Before deploying to
production, wire `src/lib/submissions.ts` up to a real destination (email, CRM, or database) —
serverless hosts like Vercel do not persist the local filesystem between requests.

## Build

```bash
npm run build
npm run lint
```
