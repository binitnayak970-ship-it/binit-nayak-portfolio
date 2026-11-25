# binit-nayak-portfolio

The personal site of **Binit Nayak** — a 17-year-old Class 12 student at Arniko College,
Biratnagar, Nepal, learning to build for the web.

Live: **[https://binit-nayak.vercel.app](https://binit-nayak.vercel.app)**

The site is deliberately honest: it presents a student who is learning, not a
professional developer. There is no projects section yet because there are no real
projects yet — the structure is ready for one when that changes.

## What's inside

- **Hero** — name, one-line positioning, portrait, CTAs.
- **About** — who he is, where he studies, what he wants to build next.
- **What I'm learning** — HTML & CSS, JavaScript, React, SQL, each with an honest
  status line instead of a fake proficiency bar.
- **Now** — what he is studying this month and what he is working towards.
- **FAQ** — short factual answers, also emitted as `FAQPage` structured data.
- **Contact** — server-validated form saved to Supabase with a honeypot and rate
  limiting.
- **Footer** — email, GitHub, Instagram, a small view counter.

## Stack

| Layer      | Choice                                              |
| ---------- | --------------------------------------------------- |
| Framework  | Next.js (App Router) + TypeScript                   |
| Styling    | Tailwind CSS, hand-built components                 |
| Fonts      | Anton (display) + Inter (body) via `next/font`      |
| Backend    | Supabase (Postgres + RLS)                           |
| Hosting    | Vercel (`*.vercel.app`)                             |

## Project structure

```
app/
  layout.tsx            # metadata, fonts, Person + WebSite JSON-LD, header/footer
  page.tsx              # the single page + ProfilePage + FAQPage JSON-LD
  globals.css           # palette, focus states, reveal + reduced-motion rules
  api/contact/route.ts  # POST — validate, rate limit, insert into Supabase
  api/views/route.ts    # GET/POST — page view counter
  opengraph-image.tsx   # OG image generated at build time
  twitter-image.tsx     # reuses the OG image
  sitemap.ts robots.ts manifest.ts icon.svg
components/             # Hero, About, Learning, Now, Faq, Contact, Footer, …
content/site.ts         # ALL copy, links and section data — edit text here
lib/                    # schema builders, validation, rate limit, Supabase client
supabase/migrations/    # SQL to (re)create the database tables and policies
public/
  portrait-binit-nayak.jpg
  llms.txt
```

## Local setup

Requires Node.js 20.9+.

```bash
npm install
cp .env.example .env.local   # then fill in the Supabase values
npm run dev                  # http://localhost:3000
```

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Environment variables

Create `.env.local` (gitignored) and set the same names in Vercel →
Project → Settings → Environment Variables.

| Variable                        | Where it is used              | Notes                                                      |
| ------------------------------- | ----------------------------- | ---------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | server routes                 | `https://<project-ref>.supabase.co`                        |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | reserved for client use       | Public key. Safe only because RLS blocks reads.            |
| `SUPABASE_SERVICE_ROLE_KEY`     | server routes only            | **Never** expose to the browser or commit it.              |

The form keeps the public key in reserve but inserts from the server, so the
service role key stays server-side. If Supabase is not configured the site still
renders; the form returns a clear error instead of silently dropping a message.

## Database setup

Run [`supabase/migrations/0001_init.sql`](supabase/migrations/0001_init.sql) in the
Supabase SQL editor (or with the Supabase CLI). It is idempotent and creates:

- `public.messages` — `name`, `email`, `message`, `created_at`. RLS on: anonymous
  visitors may **insert only**. There are no select/update/delete policies, so no one
  can read submissions with the public key.
- `public.page_views` — `path`, `views`, `updated_at`, plus an
  `increment_page_view(path)` function. RLS on with no policies: server access only.

To read messages, use the Supabase dashboard or the service role key — never the
public key.

## Deploy

Push to `main`; Vercel builds with `npm run build`. Set the three environment
variables above for Production (and Preview if you want previews to save messages).
No custom domain is required — the site is served from the free
`binit-nayak.vercel.app` address.

## Editing content

Almost everything lives in [`content/site.ts`](content/site.ts): nav, hero copy,
about paragraphs, the learning list, the Now columns, FAQ items, contact copy and all
links. Components only render what is in that file. Change the URL in one place
(`siteConfig.url`) and canonical tags, sitemap, robots.txt, JSON-LD, Open Graph URLs
and `llms.txt` should be updated to match (`llms.txt` is a static file in `public/`).

## Accessibility & SEO notes

- Single `<h1>` with the name, logical heading order, labelled sections, skip link.
- Visible focus states everywhere; `prefers-reduced-motion` disables reveals and
  parallax.
- Text-safe colour variants (`ember-ink`, `ochre-ink`) keep small text at WCAG AA on
  the paper background; the vivid `ember`/`ochre` are for graphics and large type.
- `Person`, `WebSite`, `ProfilePage` and `FAQPage` JSON-LD, plus `llms.txt` for answer
  engines. Off-site steps are in [`SEO-CHECKLIST.md`](SEO-CHECKLIST.md).

## License

Personal project — the code is here to read and learn from. The portrait and personal
copy belong to Binit Nayak.
