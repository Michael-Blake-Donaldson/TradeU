# TradeU

TradeU is a web-first student marketplace where students exchange skills, build portfolio proof, earn trade credits, and grow reputation through completed work.

This repository follows the product and technical outlines included in the repo and is structured for a Next.js + TypeScript + Supabase + Vercel deployment path.

## Stack

- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS 4
- Zod for validation
- React Hook Form for interactive forms
- Supabase-ready auth/database/storage scaffolding
- Vitest for unit tests
- Playwright for end-to-end smoke coverage

## Project Areas

- Public experience: landing, how-it-works, safety, waitlist, login/signup placeholders
- Authenticated product shell: dashboard, onboarding, browse, profile, trades, messages
- Admin preview: moderation queue route
- Typed mock domain layer for product iteration before Supabase wiring
- Validation, security guard helpers, and a Supabase migration plan with RLS policies

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Fill in the Supabase values in `.env.local`.

4. Start the app:

```bash
npm run dev
```

5. Open `http://localhost:3000`.

## Validation Commands

```bash
npm run lint
npm run typecheck
npm run test
```

If you have Playwright browsers installed and want smoke coverage:

```bash
npm run test:e2e
```

## Supabase Setup

1. Create a Supabase project.
2. Add the keys from `.env.example` to `.env.local` and Vercel.
3. Run the SQL migration in [supabase/migrations/20260522_001_initial_tradeu_schema.sql](supabase/migrations/20260522_001_initial_tradeu_schema.sql).
4. Confirm Row Level Security is enabled for all exposed tables.
5. Wire the current mock domain reads and writes to Supabase server actions and route handlers.

## Deployment

1. Push the repo to GitHub.
2. Import the project into Vercel.
3. Add the environment variables from `.env.example`.
4. Use preview deployments for iteration and production only for validated releases.

## Current Status

- Foundation and marketing experience implemented
- MVP shell routes implemented
- Interactive onboarding, listing creation, and trade request forms implemented
- Validation rules, guard rails, schema plan, and test scaffolding implemented
- Supabase integration points prepared, but external project provisioning still needs real credentials
