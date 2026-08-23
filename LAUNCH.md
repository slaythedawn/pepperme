# Launch checklist

## Previewing

**Locally, while working:**

```bash
npm install
npm run dev          # http://localhost:3000, hot reload
```

**Exactly as it will ship:**

```bash
npm run build && npm start    # http://localhost:3000, the production build
```

`npm run dev` is the one you want day to day. The imagery currently loads from
Higgsfield's CDN, which resolves fine on a normal machine — so the site looks
complete locally even though `public/images` is still empty.

**For a shareable URL**, the site is a stock Next.js App Router app with no
server dependencies, so any host that takes Next will do — Vercel is the path of
least resistance (`npx vercel`, or connect the repo and let it build on push).
Set `NEXT_PUBLIC_SITE_URL` on the host before the first deploy, or canonical
URLs and the sitemap will point at the fallback domain. Say the word and I'll
wire up a preview deployment.

---

## Blocking — must happen before the site is public

1. **Localise the imagery.** `npm run fetch:images`, then delete the
   `remotePatterns` block from `next.config.ts`. Until then the site depends on
   a generation CDN that can drop the files at any time.
2. **Legal copy.** `/legal` is deliberately unwritten and `noindex` — it lists
   what the privacy policy, terms and contact details have to cover, rather than
   showing a policy that reads well and binds nobody. Pepper Me handles health
   information, which is sensitive information under the Privacy Act 1988 and
   the Australian Privacy Principles, so this needs a lawyer, not a template.
   When the copy lands: fill the page, drop `robots: { index: false }`, and add
   `/legal` back to `ROUTES` in `src/content/routes.ts` so it enters the sitemap.
3. **Set `NEXT_PUBLIC_SITE_URL`** in the deployment environment. It drives
   `metadataBase`, every canonical URL, the sitemap and `robots.txt`.
4. **The assessment form goes nowhere.** It holds its five steps of state and
   takes no payment, which matches the design, but nothing is submitted. It
   needs an endpoint, a store for the answers, and — because those answers are
   health information — a decision about where that data lives before a single
   real one is collected.
5. **Regulatory sign-off.** Every page has been built against the compliance
   rules in the handoff (no testimonials, no medicine named, no medicine
   depicted, no inducement, no interpretation on a data display), but that is my
   reading of the brief, not a lawyer's. Someone who owns TGA risk should read
   the site before it is public.
6. **Verify the claims.** The numbers are the prototype's: 14 doctors, ~14%
   decline rate, 2,140 members, 4-hour median reply, the cohort figures on
   `/science`, the AHPRA registration numbers on every doctor card. Each one is
   a factual claim on a health page and each needs to be true on launch day —
   AHPRA numbers especially, since they are publicly checkable.
7. **Review the remaining imagery.** 23 frames were generated blind — the CDN
   they live on is blocked from the session that made them, so no one has
   checked them against the brief except you. One frame has already been
   reshot (a third arm). The two with the most anatomy risk left are
   `journal-014` (hands resting either side of a knee) and
   `programme-hormonal-her` (a hand in her hair).

## Next, not blocking

- **More journal.** Three articles are written. The format carries itself now —
  `src/content/articles.ts` plus a reviewer is a new article — but three is a
  thin journal, and it is the strongest organic surface the site has.
- **Analytics and consent.** Nothing is tracking. Whatever goes in needs to be
  in the privacy policy before it goes in.
- **Individual doctor profiles.** The article meta block links a reviewer to
  their card on `/doctors` via an anchor. Real `/doctors/[slug]` pages would be
  a better landing surface for a reviewer credential.
- **Accessibility audit on real hardware.** The structural floor is in — one
  `h1` per page, skip link, focus ring on every interactive element, semantic
  headings, `prefers-reduced-motion`, alt text on every frame, 44px targets. It
  has not been through a screen reader or tested at 320px on a real device;
  headless Chrome enforces a 500px minimum viewport, so the narrowest width
  actually verified is 500px.

## Verified in this build

- `npm run build` clean, `npx tsc --noEmit` clean, `npx eslint .` clean.
- All 24 routes return 200, unknown paths return the branded 404. Crawled from
  the sitemap following every internal link: no broken links.
- `sitemap.xml` and `robots.txt` generate from `src/content/routes.ts`.
- No internal link points at a page that doesn't exist.
- No stale `$99` or `$180/month` anywhere in the source.
- No testimonial, rating, medicine name, or medicine depiction in the source.
