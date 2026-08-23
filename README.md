# Pepper Me — marketing site

The Pepper Me website, built from the `design_handoff_pepper_me_website` bundle.
Next.js (App Router) + TypeScript + Tailwind CSS v4, with the handoff's design
system wired in as the token layer.

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
npm run lint
npm run fetch:images   # localise the generated imagery — see Imagery
```

**See [LAUNCH.md](./LAUNCH.md)** for how to preview, what is blocking launch,
and what has been verified.

## Routes

| Route | Handoff file |
|---|---|
| `/` | `index.html` |
| `/protocols` | `protocols.html` |
| `/protocols/hormonal` | `protocol-hormonal.html` |
| `/protocols/hormonal/him` | `protocol-hormonal-him.html` |
| `/protocols/hormonal/her` | `protocol-hormonal-her.html` |
| `/doctors` | `doctors.html` |
| `/science` | `science.html` |
| `/pricing` | `pricing.html` |
| `/assessment` | `assessment.html` |

The prototypes were treated as design references, not as code — nothing in them
was copied across. The design intent, tokens and copy were rebuilt as
components.

## The token layer

`src/styles/variables.css` and `src/styles/theme.css` are the handoff's files,
unmodified. `variables.css` is imported into Tailwind's `base` layer (it carries
element defaults for `a`, `p` and the headings, and unlayered CSS would
otherwise beat every utility class). `src/app/globals.css` then:

- remaps the four font families onto the `next/font` variables,
- re-declares the Tailwind colour aliases with `@theme inline`, so a
  `[data-ground]` section can remap the whole semantic palette at runtime and no
  component needs a dark-mode branch of its own,
- names the type roles (`.t-h1`, `.t-body`, `.mono` …) the handoff is written in.

Grounds are set with `data-ground="page | muted | inverse | tint | alert"`, which
is what `<Section ground="…">` does.

Fonts are Funnel Display, Familjen Grotesk, Instrument Serif and JetBrains Mono,
self-hosted through `next/font/google`.

## Compliance

Pepper Me operates under s42DLB of the *Therapeutic Goods Act*, which exempts
compounded medicines from registration but **not** from the Therapeutic Goods
Advertising Code. The handoff's compliance section was treated as
build-blocking. In this build:

- **No testimonials, ratings, review counts or patient quotes anywhere.** The
  "member proof" sections on the homepage and all three protocol pages are gone,
  along with the star marks and the Trustpilot figures. The doctor roster and the
  public AHPRA registration numbers carry the trust instead — which is also why
  every doctor card renders its registration number in the mono layer.
- **No medicine is named on any page.** Copy describes the body system, the
  patient archetype and what the care includes. That meant rewriting the pricing
  table, the publication titles on `/science` and the cited-literature labels.
  Biomarker names (free and total testosterone, SHBG, oestradiol, FSH, LH,
  ferritin …) are kept: those are measured data on a panel, not a prescribed
  medicine.
- **No depiction of a medicine.** The 3ml vial SVG and the "in the box"
  section — vials, syringes, sharps container — are not built, and the
  exclusion is written into every image prompt in the manifest.
- **No before-and-after, no interpretation on a data display.** The charts and
  the reference range bar show values, units and intervals with no target, no
  arrow and no recommendation.
- **No pricing tier is marked "most popular" or "recommended".**
- Every protocol, pricing, science and assessment page carries the compliance
  note, rendered through `Disclaimer` — Cream ground, hairline, Ink 60, never
  styled as an alert.

## Imagery

Every frame on the site is generated on Higgsfield (`soul_2`, 2k) against one
locked recipe, so the whole site reads as a single shoot rather than a stock
library:

> Editorial documentary, 35mm film, natural window light. Real Australian
> adults 30–60, unretouched, no makeup or styling, direct gaze or genuinely
> absorbed in something — never performing. Ordinary domestic interiors, plain
> walls, nothing staged. Warm neutral palette against the brand grounds:
> off-white, cream, deep charcoal. Soft light, medium contrast, fine grain.

Portraits are shot and rendered black and white (Tri-X); programme and journal
frames stay in muted colour (Portra). Every prompt carries the same exclusion
list — no medicine, vial, syringe, capsule, lab coat, stethoscope, clinic or
pharmacy, and no stock-photo expression.

`src/content/imagery.json` is the manifest and the source of truth: one entry
per frame, holding its alt string (public copy, compliance-bound), its
treatment, the Higgsfield job id, and **the exact prompt that produced it** — so
any frame can be regenerated on tone rather than rewritten from scratch.
`src/components/ui/SiteImage.tsx` renders it: zero radius, no border, no
overlay, no scrim.

**Before launch, run `npm run fetch:images`.** The manifest still points at
Higgsfield's CDN; the script downloads every frame into `public/images`,
rewrites the manifest to local paths, and is idempotent. Then drop the
`remotePatterns` entry from `next.config.ts`. A generation CDN is not an asset
host.

To reshoot one frame: take its `prompt` from the manifest, adjust the subject
line only, regenerate, and swap the `src` and `job`. Add a `note` saying why,
and keep any other takes in `alternates`.

Two guards, learned from the first pass and now carried by `IMAGE_RECIPE.guards`:

- **Anatomy.** A subject whose hands work on their own body — taping a knee,
  holding a joint — is where the model grows an extra limb. State the limb count
  in the prompt and prefer compositions that keep the hands apart and away from
  the legs.
- **Story.** Strapping, bandaging or treating an injury reads as first aid, not
  as recovery between training sessions, and it is not what Pepper Me does. No
  frame shows an injury being treated.

## Reference range bar

`src/components/ui/ReferenceRangeBar.tsx` is the signature component the
prototypes were missing. A stacked set shares one left edge so intervals read
comparatively down the column, which is the whole point of it. Values, units and
intervals are exposed as text, never image-only.

## Divergences from the prototypes

Where the prototypes and the design system conflicted, the design system won —
as the handoff instructs.

| Prototype | This build |
|---|---|
| 14–18px radius, `9999px` buttons | Zero radius. 2px on chips, `9999px` on avatars and status dots only |
| Soft shadows | None. Hairline and ground change carry elevation |
| 1440px container | 1280px (`--container-max`) |
| `#D6422A` as both mark and fill | Pepper 600 fills actions, Pepper 500 is the wordmark period and display accents only |
| Testimonials, vial illustration | Removed (see Compliance) |
| No reference range bar | Built |

Three further calls, made in the same spirit:

1. **One price: $149 up front, and no monthly figure anywhere.** The pricing
   prototype carried a $280–$640/month per-protocol table priced against named
   medicines. All of it is gone. $149 — assessment, panel, 30-minute consult,
   refunded in full if the doctor declines — is the single entry price sitewide.
   Nothing on the site quotes a monthly cost: what ongoing care costs depends on
   the plan the doctor recommends, and around 14% of assessments end without one.
   `PRICING.ongoingLine` in `src/content/protocols.ts` is the single sentence
   used wherever that question comes up. The per-program table compares what
   gets read, not what gets dispensed.
2. **The closing CTA on `/protocols/hormonal` sits on Ink, not Pepper 600.** The
   handoff draws it on a Pepper 600 ground; the design system forbids coloured
   surfaces and caps Pepper 600 at one filled action per viewport. Ink ground,
   Pepper 600 button.
3. **The homepage closing CTA sets its frame beside the type, not under it.**
   The handoff runs it full-bleed under a gradient scrim. Neither the photograph
   nor a 96px display setting survives that well, so the frame sits in its own
   column on the Ink ground — no scrim, which is also what the design system
   asks for.

## Structure

```
src/
  app/                     routes, one folder per page
  components/
    layout/                Container, Section, header, footer, wordmark
    ui/                    Button, Card, MonoTag, Faq, DataTable, Field,
                           Disclaimer, SiteImage, ReferenceRangeBar, …
    charts/                LineChart, BarChart — hairline and mono, no fills
    view/                  the Him/Her state container and its consumers
    pages/                 the two multi-section page bodies
  content/                 all copy and data, kept out of the components so the
                           compliance review runs over one surface
  styles/                  the handoff's token files, unmodified
design/                    DESIGN.md and tokens.json from the handoff
```

## Him / Her

`ViewProvider` holds the audience choice in an external store: read from
`localStorage["pm-view"]` through `useSyncExternalStore`, written back on every
change, and kept in sync across tabs by the `storage` event. It sets
`data-view` on `<body>`, drives the card filter on `/protocols`, the audience
context band, the cross-link copy, and the selector on step 1 of the assessment.

## Routing, SEO and legal

`src/content/routes.ts` is the route table; `sitemap.ts` and `robots.ts` are
generated from it, so a new page enters the sitemap by being added there. Set
`NEXT_PUBLIC_SITE_URL` in the deployment environment — it drives `metadataBase`,
canonical URLs, the sitemap and `robots.txt`.

`/prescribing-standard` publishes the five rules in full, plus what a patient is
entitled to expect from a consult. `/legal` is deliberately unwritten and
`noindex`: it lists what the privacy policy, terms and contact details have to
cover rather than showing invented policy, because health information is
sensitive information under the Privacy Act. Both are linked from the footer, so
no footer link is a dead end.

## Still to do

See [LAUNCH.md](./LAUNCH.md).
