# Pepper Me — marketing site

The Pepper Me website, built from the `design_handoff_pepper_me_website` bundle.
Next.js (App Router) + TypeScript + Tailwind CSS v4, with the handoff's design
system wired in as the token layer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

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
  section — vials, syringes, sharps container — are not built. `Placeholder`
  carries the rule for whoever wires real photography in.
- **No before-and-after, no interpretation on a data display.** The charts and
  the reference range bar show values, units and intervals with no target, no
  arrow and no recommendation.
- **No pricing tier is marked "most popular" or "recommended".**
- Every protocol, pricing, science and assessment page carries the compliance
  note, rendered through `Disclaimer` — Cream ground, hairline, Ink 60, never
  styled as an alert.

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

1. **Pricing is reconciled to the $99 model.** `pricing.html` still carried the
   older $280–$640/month per-protocol table, priced against named medicines. The
   handoff states the $99 model on the protocol pages is correct, so $99 —
   assessment, panel, 30-minute consult, refunded if the doctor declines — is the
   single entry price sitewide, and ongoing care is stated once, as "from
   $180/month, if indicated". The per-program table now compares what gets read,
   not what gets dispensed.
2. **The closing CTA on `/protocols/hormonal` sits on Ink, not Pepper 600.** The
   handoff draws it on a Pepper 600 ground; the design system forbids coloured
   surfaces and caps Pepper 600 at one filled action per viewport. Ink ground,
   Pepper 600 button.
3. **Photography is not shipped.** Every image in the bundle is a hotlinked
   Unsplash URL and the brief is explicit that none of it ships, so image slots
   render through `Placeholder`: the crop is held, the commissioning brief is
   stated, and nothing is depicted. Replace it with `next/image` when the
   commissioned photography lands — and run the alt string past the compliance
   rules first, because alt text is public copy.

## Structure

```
src/
  app/                     routes, one folder per page
  components/
    layout/                Container, Section, header, footer, wordmark
    ui/                    Button, Card, MonoTag, Faq, DataTable, Field,
                           Disclaimer, Placeholder, ReferenceRangeBar, …
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

## Still to do

- Commissioned photography, replacing `Placeholder`.
- Real endpoints for the assessment; it currently holds state and takes no
  payment, which matches the design.
- The remaining protocol trios (recovery, performance, sleep, sexual health,
  longevity). Only hormonal and sexual health genuinely fork Him/Her — recovery,
  sleep and longevity should stay unisex.
- Journal and article templates, including the article meta block
  (`WRITTEN BY` / `MEDICALLY REVIEWED BY` / `PUBLISHED` / `LAST REVIEWED`).
