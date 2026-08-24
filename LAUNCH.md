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

## The pre-launch gate

Set `SITE_PASSWORD` in the host's environment and the entire site sits behind a
password. Unset it and the gate disappears from the request path completely.
Nothing else changes, and no rebuild is needed either way.

```bash
SITE_PASSWORD="something-long-and-boring" npm start
```

What the gate does while it is on:

- Every route rewrites to a branded gate page until the password is entered.
  Locked pages serve none of the underlying content — not a rendered page with a
  banner over it.
- `robots.txt` is served from *in front of* the gate and returns `Disallow: /`,
  so a crawler that finds the domain gets a plain refusal rather than the gate
  page rendered as a 200.
- `sitemap.xml` returns nothing, and every response carries
  `X-Robots-Tag: noindex, nofollow, noarchive`.
- The unlock cookie holds an HMAC of a fixed message keyed by the password, so
  it carries no secret and cannot be forged. Changing `SITE_PASSWORD` invalidates
  every session issued under the old one.

`robots.txt` and `sitemap.xml` are evaluated per request rather than baked into
the build, specifically so they can never disagree with the gate — a live site
still telling Google to go away is the failure mode that costs the most.

**Share the password out of band**, not in the same email as the link. One
password for everyone is the right shape for this: it is a shutter on an
unfinished shopfront, not authentication. Nothing carrying real patient data
should ever sit behind it — when the assessment gets a backend, that needs
proper auth regardless of what this gate is doing.

**At launch:** delete `SITE_PASSWORD` from the host's environment. That is the
whole removal. Then check `robots.txt` says `Allow: /` and `sitemap.xml` lists
the routes before you ask anyone to index anything.

---

## Blocking — must happen before the site is public

1. **Localise the imagery.** `npm run fetch:images`, then delete the
   `remotePatterns` block from `next.config.ts`. Until then the site depends on
   a generation CDN that can drop the files at any time.
2. **Take the gate off — last, deliberately.** `SITE_PASSWORD` should stay set
   until every other item on this list is done. Removing it is the act that
   makes the site public, so treat it as the launch switch rather than as
   configuration.
3. **Legal copy.** `/legal` is deliberately unwritten and `noindex` — it lists
   what the privacy policy, terms and contact details have to cover, rather than
   showing a policy that reads well and binds nobody. Pepper Me handles health
   information, which is sensitive information under the Privacy Act 1988 and
   the Australian Privacy Principles, so this needs a lawyer, not a template.
   When the copy lands: fill the page, drop `robots: { index: false }`, and add
   `/legal` back to `ROUTES` in `src/content/routes.ts` so it enters the sitemap.
4. **Set `NEXT_PUBLIC_SITE_URL`** in the deployment environment. It drives
   `metadataBase`, every canonical URL, the sitemap and `robots.txt`.
5. **The assessment form goes nowhere.** It holds its five steps of state and
   takes no payment, which matches the design, but nothing is submitted. It
   needs an endpoint, a store for the answers, and — because those answers are
   health information — a decision about where that data lives before a single
   real one is collected.
6. **Regulatory sign-off.** Every page has been built against the compliance
   rules in the handoff (no testimonials, no medicine named, no medicine
   depicted, no inducement, no interpretation on a data display), but that is my
   reading of the brief, not a lawyer's. Someone who owns TGA risk should read
   the site before it is public.
7. **Verify the claims.** The numbers are the prototype's: 14 doctors, ~14%
   decline rate, 2,140 members, 4-hour median reply, the cohort figures on
   `/science`, the AHPRA registration numbers on every doctor card. Each one is
   a factual claim on a health page and each needs to be true on launch day —
   AHPRA numbers especially, since they are publicly checkable.
8. **Review the remaining imagery.** 23 frames were generated blind — the CDN
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
