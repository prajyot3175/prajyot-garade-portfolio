# Prajyot Garade Portfolio

Recruiter-focused personal portfolio for Prajyot Vijay Garade, highlighting software engineering, QA/testing, projects, experience, education, and contact links.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/prajyot-portfolio/src/App.tsx` — single-page portfolio content and interactions
- `artifacts/prajyot-portfolio/src/index.css` — portfolio visual system, responsive layout, and motion
- `artifacts/prajyot-portfolio/public/assets/` — downloadable software engineering and QA/testing resumes
- `attached_assets/` — source resume PDFs provided for the portfolio

## Architecture decisions

- The portfolio is a static, presentation-first React app; resume content is intentionally kept in the frontend so the site remains fast and easy to publish.
- Both resume versions are offered because they communicate different candidate angles: software engineering and QA/testing.
- External profile actions use the resume-provided contact details and links without inventing project URLs or claims.

## Product

The site gives interviewers and recruiters a fast overview of Prajyot's technical identity, project work, internships, education, India Skills achievement, certifications, and contact options. It includes responsive navigation, anchor links, resume downloads, and direct email, phone, LinkedIn, and GitHub actions.

## User preferences

No durable user preferences recorded.

## Gotchas

- Resume PDFs are copied into the portfolio's public assets folder so download links work in the built site.
- Keep resume-derived claims accurate when adding new portfolio content; the two source resumes emphasize different roles and list slightly different internship naming.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
