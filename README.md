# Manoj Shivalingaiah — DevOps Portfolio

A premium, interactive DevOps engineering portfolio built with Next.js 16 (App
Router), TypeScript, Tailwind CSS v4, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Content is data-driven — edit `src/data/profile.ts`

Every visible fact on this site (name, title, experience, projects, skills,
certifications, education, contact links) lives in one file:
[`src/data/profile.ts`](src/data/profile.ts). UI components read from it —
you should never need to touch a component to update copy.

### Things still marked as placeholders / TODO

| What | Where | Status |
|---|---|---|
| Certification credential link | `credentialUrl` on `certifications` | Only add this if you have a real, public verification URL for the IIT Roorkee certificate (ID `IPTIH2412265` is already shown) — otherwise leave it `undefined` and the "Verify Credential" link stays hidden. |
| Project 01 GitHub repo | `github` on `projects[0]` (Production-Grade Microservices Platform on AWS EKS) | Currently links to `microservices-platform`, which only has the application layer pushed. The site's copy already says the infra/deployment code (Terraform, Jenkins, Argo CD, Helm, Prometheus, Velero) is "being finalized for publication" — once you push it, that line in `description` and `caseStudy.outcome` can be simplified to drop the "finalized for publication" caveat. |

Everything else — experience dates, titles, education, LinkedIn, the resume
PDF, and all project/skills content — is sourced directly from your resume
(`public/Manoj-Shivalingaiah-DevOps-Resume.pdf`) or the actual
`microservices-platform` repository.

## Add your resume

Drop your resume PDF at:

```
public/Manoj-Shivalingaiah-DevOps-Resume.pdf
```

(the exact filename referenced by `profile.resumeFile` in
`src/data/profile.ts`). The site checks for this file at build/render time
(`src/lib/resume.ts`) — until it exists, every "Download Resume" button
automatically shows a disabled "Resume Coming Soon" state instead of a
broken link. As soon as the file is in place, rebuild/redeploy and the
buttons go live with no code changes needed.

## Add project screenshots

Put images in `public/projects/` — e.g. `public/projects/microservices-eks.png`
and `public/projects/aws-cost-optimization.png` (WebP preferred for smaller
file size). The project cards don't currently render a screenshot (the
design leans on the interactive pipeline diagram instead), but the folder is
there and ready if you want to add one — reference it with an `image` field
on the relevant entry in `projects` in `src/data/profile.ts` and render it in
`src/components/ProjectCard.tsx`.

## Update your GitHub / email

- Email is set to `manojgowda.s0423@gmail.com` in `social.email`.
- GitHub is set to `https://github.com/manoj-s0423` in `social.github`.
- LinkedIn is unset — see the placeholders table above.

## Deploying to Vercel

This repo is pushed to `https://github.com/manoj-s0423/manoj-shivalingaiah-portfolio`.

1. Go to [vercel.com/new](https://vercel.com/new), sign in with the GitHub
   account that owns this repo, and import `manoj-s0423/manoj-shivalingaiah-portfolio`.
2. Vercel auto-detects Next.js — no configuration or environment variables
   are required for this project.
3. Click **Deploy**. Vercel builds with `npm run build` and serves the
   output automatically.
4. Every future `git push` to `main` redeploys automatically. Pull requests
   get their own preview URLs.

No environment variables are required — the contact form uses a `mailto:`
link (no backend), and there is no external API integration.

## Project structure

```
manoj-shivalingaiah-portfolio/
├── public/
│   ├── projects/                     # project screenshots (add your own)
│   └── Manoj-Shivalingaiah-DevOps-Resume.pdf   # add your resume here
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # fonts, metadata, theme provider
│   │   ├── page.tsx                   # assembles all sections
│   │   ├── globals.css                # design tokens, light/dark theme
│   │   ├── robots.ts / sitemap.ts     # SEO
│   │   └── icon.svg                   # favicon
│   ├── components/                    # one component per section (see below)
│   ├── data/profile.ts                # ← ALL content lives here
│   ├── types/profile.ts               # shared TypeScript types for the data
│   └── lib/
│       ├── resume.ts                  # checks whether the resume PDF exists
│       └── useHasMounted.ts           # SSR-safe hydration helper
```

Key components: `Navbar`, `Hero` + `HeroPipeline`, `About`, `StatsBar`,
`Experience`, `DevOpsJourney`, `Projects` + `ProjectCard` +
`ProjectCaseStudyModal`, `ProductionScenarios`, `DevOpsControlPlane`,
`AWSArchitecture`, `ShipPipeline`, `Skills`, `Certifications`, `Education`,
`CurrentlyExploring`, `Resume`, `Contact`, `Footer`.

## Design notes

- Dark mode is the default; light mode is a fully separate, hand-tuned
  palette (not an inversion) — toggle in the navbar.
- Respects `prefers-reduced-motion`.
- All production-incident and "case study" content is explicitly labeled by
  type (confirmed / production-style scenario / planned) so nothing reads as
  a claim that isn't backed by something real.
