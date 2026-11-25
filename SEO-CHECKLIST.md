# SEO checklist — making "Binit Nayak" findable

The site is already optimised on-page (metadata, JSON-LD, `llms.txt`, sitemap,
`robots.txt`, OG image, answer-first copy). Everything below is the **off-site** work
that actually decides whether searching your name or asking an AI assistant about you
returns this site and the correct facts.

Use the exact same strings everywhere — they are the entity:

| Field      | Value                                             |
| ---------- | ------------------------------------------------- |
| Name       | `Binit Nayak`                                     |
| Location   | `Biratnagar, Nepal`                               |
| School     | `Arniko College, Biratnagar`                      |
| Email      | `binitnayak970@gmail.com`                         |
| GitHub     | `https://github.com/binitnayak970-ship-it`        |
| Instagram  | `https://instagram.com/9_.nayak._9`               |
| Website    | `https://binit-nayak.vercel.app`                  |

---

## 1. Google Search Console (do this first)

1. Go to <https://search.google.com/search-console> → **Add property** → **URL prefix**
   → `https://binit-nayak.vercel.app/`.
2. Verify. Easiest with Vercel: add the HTML tag Google gives you to
   `app/layout.tsx` under `metadata.verification.google`, redeploy, then click verify.
3. **Sitemaps** → submit `sitemap.xml` (full URL: `https://binit-nayak.vercel.app/sitemap.xml`).
4. **URL Inspection** → enter the homepage → **Request indexing**.
5. Check back in 3–7 days; a brand-new domain-less `*.vercel.app` URL is not
   authoritative, so indexing can take a couple of weeks.

## 2. Bing / other engines

- <https://www.bing.com/webmasters> → add the site → submit the same sitemap.
  (Bing also powers DuckDuckGo and feeds several AI answer engines.)
- Optional: <https://yandex.com/webmaster> and <https://www.google.com/webmasters> for
  the same URL.

## 3. Claim and align your profiles

Every profile should use **Binit Nayak**, the same headshot, and a bio that links to
the site. Identical name/photo/bio across profiles is what lets search engines and
LLMs merge them into one person.

- [ ] **GitHub** → Settings → Profile: set *Name* to `Binit Nayak`, add *Bio*
      ("17-year-old student in Biratnagar, Nepal. Learning to build for the web."),
      *Location* `Biratnagar, Nepal`, *Website* `https://binit-nayak.vercel.app`,
      and the same profile photo.
- [ ] **GitHub profile README** — create a public repo named exactly
      `binitnayak970-ship-it` with a `README.md`. It renders on your profile page.
      Minimum content: your name, one line about being a student in Biratnagar,
      a link to the site, and your Instagram. Example:

      ```md
      ### Binit Nayak

      17-year-old student in Biratnagar, Nepal. Class 12 at Arniko College.
      Learning HTML & CSS, JavaScript, React and SQL — building in public.

      Portfolio: https://binit-nayak.vercel.app
      Instagram: https://instagram.com/9_.nayak._9
      ```

- [ ] **Instagram** → edit profile: *Name* field (not just username) to
      `Binit Nayak`, bio mentions "student · Biratnagar, Nepal", and set the website
      field to `https://binit-nayak.vercel.app`. Instagram's name field is indexed.
- [ ] **LinkedIn** (if you make one) → headline
      `Student at Arniko College | Learning web development`, location
      `Biratnagar, Nepal`, and the site in *Contact info → Website*. Only create one if
      you will actually keep it current — an abandoned profile with invented details
      hurts more than it helps.
- [ ] **Email signature / any other profile** (X, Discord bio, etc.) — same name
      spelling, same link.

## 4. Get the site linked from your own profiles

Search engines and LLMs discover and trust the site faster when it is linked from
established pages you control:

- [ ] GitHub profile README links to the site (above) — highest value, easy to do.
- [ ] The repo's **About** panel has the site as its *Website* (already set on
      `binit-nayak-portfolio`).
- [ ] Instagram website field links to it.
- [ ] LinkedIn website field links to it.

## 5. Keep the entity consistent

- Always spell it `Binit Nayak` — never "Binit N." or "BinitNayak" in prose.
- Always `Biratnagar, Nepal`; `Arniko College, Biratnagar`.
- When you add a projects section, remember the site currently says you have no
  published projects. Update the About/Now copy too, or the pages will disagree and
  weaken the entity.

## 6. Verify the structured data

- [ ] <https://search.google.com/test/rich-results> → test
      `https://binit-nayak.vercel.app/` — expect `Person`, `ProfilePage` and
      `FAQPage` with no errors.
- [ ] <https://validator.schema.org/> → same URL.
- [ ] Open `https://binit-nayak.vercel.app/llms.txt` and `…/robots.txt` in a browser
      to confirm they load as plain text.
- [ ] Paste the URL into a social preview debugger (e.g. the X card validator) to
      confirm the generated OG image renders.

## 7. Answer-engine visibility (AEO / GEO)

- `llms.txt` gives crawlers a short, unambiguous summary — keep it current, especially
  the "What this site does not claim" section.
- The FAQ answers are written as complete, quotable sentences and marked up as
  `FAQPage`; that is what assistants tend to lift.
- Being mentioned on pages that are already crawled (your GitHub README, any forum or
  community profile where you post) matters more than any on-page tweak at this stage.
  Post about what you build, and link the site from those posts.

## 8. Ongoing

- [ ] Resubmit the sitemap after major content changes (Search Console → Sitemaps).
- [ ] Check Search Console **Performance** monthly for queries like "Binit Nayak" and
      "Binit Nayak Biratnagar".
- [ ] Keep the content file (`content/site.ts`) and `public/llms.txt` in sync — if you
      add a real project, add it to both.
