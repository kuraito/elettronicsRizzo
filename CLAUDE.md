# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test framework is configured in this project.

## Stack

- **Next.js 16.2.3** with App Router — non-standard version with breaking changes; read `node_modules/next/dist/docs/` before writing Next.js-specific code
- **React 19.2.4**
- **Tailwind CSS v4** — uses `@import "tailwindcss"` and `@theme inline {}` syntax in `globals.css` (not the `tailwind.config.js` approach from v3)
- **TypeScript**

## Architecture

Marketing website + admin panel for Electronics Rizzo (Italian electronics shop in Velina).

**Routes:**
- `/` — homepage (static, SSG); sections: Hero → ChiSiamo → Prodotti → Recensioni → Contatti
- `/prodotti` — dynamic product catalog fetched from Supabase (SSR + client filtering/pagination)
- `/login` — admin login (Supabase Auth)
- `/admin` — protected dashboard; CRUD for products

**Entry points:**
- `src/app/layout.tsx` — root layout with `<Navbar>`, `<Footer>`, `<WhatsAppButton>`
- `src/app/page.tsx` — marked `"use client"` because it calls `useScrollReveal()`
- `src/proxy.ts` — route protection: redirects unauthenticated users away from `/admin`, and authenticated users away from `/login`

**Data layer:**
- `src/lib/supabase/client.ts` — browser Supabase client (`createBrowserClient`)
- `src/lib/supabase/server.ts` — server Supabase client (`createServerClient`); uses `await cookies()` — async in Next.js 16
- `src/app/actions/products.ts` — all product CRUD as Server Actions (`'use server'`); always verify `supabase.auth.getUser()` before mutating
- `src/app/actions/auth.ts` — `login` / `logout` Server Actions

**Supabase:**
- Table: `products` (id, name, description, price, image_url, category, created_at)
- Storage bucket: `product-images` (public, for file uploads)
- Auth: email/password; only admin-created users can access `/admin`
- Env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (see `.env.local.example`)

**Admin UI pattern:**
- `src/app/admin/page.tsx` — Server Component; fetches products and passes to `AdminDashboard`
- `src/app/admin/AdminDashboard.tsx` — Client Component; manages modal state (create/edit/delete)
- `src/components/admin/ProductForm.tsx` — reusable form; supports URL or file upload for images
- `src/components/Toast.tsx` — feedback toast with `useToast()` hook

**Next.js 16 breaking changes to remember:**
- `middleware` file is deprecated — use `proxy.ts` with a named `proxy` export
- `cookies()` from `next/headers` is **async** — always `await cookies()`
- Server Actions: `'use server'` directive at the top of the file or function

**Scroll reveal system (`src/hooks/useScrollReveal.ts`):**  
Uses `IntersectionObserver`. Add `.reveal`, `.reveal-left`, or `.reveal-right` to elements; the hook adds `.visible` when they enter the viewport. Optionally add `.delay-100`–`.delay-500`.

**Brand tokens (defined in `globals.css` via `@theme inline`):**
- Primary palette: `--color-primary-{50–950}` (blues, brand main `primary-800` / `#1e40af`)
- Accent: `--color-accent-{400,500}` (yellows)
- WhatsApp green: `--color-whatsapp`, `--color-whatsapp-dark`
