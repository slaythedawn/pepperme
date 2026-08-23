# Pepper Me — Style Reference
> The instrument, not the brochure

**Theme:** light, with structural dark grounds
**Version:** 1.0
**Companion files:** `tokens.json`, `variables.css`, `theme.css`
**Governing constraint:** every visual decision in this system is bound by the advertising rules in the Website Build Brief, section 03. Imagery and iconography can constitute prohibited advertising on their own.

Pepper Me reads as a clinical instrument that happens to be beautiful, not a wellness brand that happens to be clinical. The system is built on a hard editorial grid, zero radius, hairline rules and a disciplined four-face typographic stack, with a persistent mono metadata layer that annotates the page the way a pathology report annotates a result. Colour is rationed almost to nothing: near-black on near-white, with two chromatic accents used at low frequency and never interchangeably. Pepper red is a mark, not a surface. Lab blue is a label, not a decoration. Where physiology forks, the page forks, ink ground against cream ground.

The system deliberately rejects the prevailing health-tech look. No floating pill navigation, no 9999px buttons, no gradient washes, no atmospheric hero photography with a warm accent pulsing through it. That territory is occupied and it reads as consumer. Pepper Me's differentiator is that a doctor reads your bloods, so the design language is drawn from the laboratory report, not the lifestyle campaign.

---

## Signature

**The reference range bar.**

A horizontal hairline track showing a measured value against its Australian reference interval, with the marker name in mono above and the unit in mono below. Out-of-range values shift the indicator to Pepper red. In-range values sit in Ink.

This is the one element the site is remembered by. It is drawn directly from the subject's own world, the pathology report, it appears nowhere else in the category, and it does the strategic job of making measurement visible without describing a treatment. It anchors every biomarker article, sits inside every concern page's "what gets measured" block, and is the hero device on the Longevity pillar.

Everything else in the system stays quiet so this element can carry the identity.

---

## Tokens — Colour

Three layers. Primitives are raw values and are never referenced directly in a component. Semantic tokens map intent to primitive. Component tokens map a specific element to semantic.

The Superpower reference system has no semantic layer, which is why its own guide contradicts itself on whether coral is a CTA colour. This system resolves that by construction.

### Primitives — Ink ramp

Warm-tinted neutral, derived from Ink so the greys sit against Cream and Paper without going cold.

| Name | Value | Token | Contrast on Paper | Role |
|------|-------|-------|-------------------|------|
| Ink | `#0A0A0B` | `--color-ink` | 19.44:1 | Primary text, dark grounds, wordmark |
| Ink 80 | `#2A2A2C` | `--color-ink-80` | 13.98:1 | Dark ground alternate, pressed states on dark |
| Ink 60 | `#5C5C5F` | `--color-ink-60` | 6.55:1 | Secondary text, body on cream, helper copy |
| Ink 40 | `#8C8C8F` | `--color-ink-40` | 3.29:1 | Disabled text, non-text UI only. **Never body copy.** |
| Ink 30 | `#A3A3A5` | `--color-ink-30` | 2.47:1 | Decorative only. **Never text of any size.** |
| Ink 20 | `#C9C7C2` | `--color-ink-20` | 1.66:1 | Inactive borders, dividers on cream |
| Ink 10 | `#E2E0DB` | `--color-ink-10` | 1.30:1 | Hairline rules, card outlines, table borders |
| Cream | `#F1EEE8` | `--color-cream` | 1.14:1 | Secondary ground, the Her side of the fork |
| Paper | `#FDFDFC` | `--color-paper` | — | Page ground, card surface, text on Ink |

### Primitives — Pepper ramp

| Name | Value | Token | Contrast | Role |
|------|-------|-------|----------|------|
| Pepper 700 | `#A82D1D` | `--color-pepper-700` | 6.75:1 on Paper | Action pressed, action hover |
| Pepper 600 | `#C23522` | `--color-pepper-600` | 5.39:1 on Paper | **Action fill.** White label passes AA at body size. |
| Pepper 500 | `#DC3D27` | `--color-pepper-500` | 4.35:1 on Paper | **The brand mark.** Wordmark period, large display accents, out-of-range indicator. Fails AA for body text. |
| Pepper 400 | `#E8654F` | `--color-pepper-400` | 6.04:1 on Ink | Accent on dark grounds only |
| Pepper 300 | `#F09480` | `--color-pepper-300` | 8.72:1 on Ink | Emphasis on dark grounds |
| Peach | `#F5D5CD` | `--color-peach` | 14.4:1 with Ink | Tint ground for editorial breaks |
| Pepper 50 | `#FBEEEB` | `--color-pepper-50` | — | Out-of-range row tint, alert surface |

**The critical rule this ramp encodes:** Pepper 500 is the brand red and it does not meet AA as text on Paper, nor does white meet AA on it. It is a mark and a large-display accent. Anything that carries a label uses Pepper 600. Getting this wrong is the most likely accessibility failure in the build.

### Primitives — Lab ramp

| Name | Value | Token | Contrast | Role |
|------|-------|-------|----------|------|
| Lab 700 | `#1B34C4` | `--color-lab-700` | 8.84:1 on Paper | Link pressed, high-emphasis technical text |
| Lab 500 | `#2547FF` | `--color-lab-500` | 6.03:1 on Paper | Section tags, in-text links, focus ring |
| Lab 300 | `#93A6FF` | `--color-lab-300` | 8.61:1 on Ink | Technical labels and links on dark grounds |
| Lab 50 | `#EEF1FF` | `--color-lab-50` | — | Selected state, in-range highlight |

Lab 500 on Ink is 3.23:1 and fails. Dark grounds use Lab 300.

### Semantic tokens

| Token | Maps to | Use |
|-------|---------|-----|
| `--text-primary` | Ink | Headings, body |
| `--text-secondary` | Ink 60 | Standfirsts, captions, helper |
| `--text-disabled` | Ink 40 | Disabled control labels |
| `--text-inverse` | Paper | Text on Ink and on action fills |
| `--text-link` | Lab 500 | In-text links |
| `--text-link-hover` | Lab 700 | Link hover and pressed |
| `--text-technical` | Lab 500 | Mono labels, biomarker names, section tags |
| `--text-technical-inverse` | Lab 300 | The same on dark |
| `--text-alert` | Pepper 700 | Out-of-range values, error copy |
| `--surface-page` | Paper | Level 0 |
| `--surface-raised` | Paper | Level 1, distinguished by hairline not shadow |
| `--surface-muted` | Cream | Level 2, alternating sections, Her fork |
| `--surface-tint` | Peach | Level 3, editorial break |
| `--surface-inverse` | Ink | Level 4, dark sections, Him fork |
| `--surface-alert` | Pepper 50 | Out-of-range row |
| `--border-hairline` | Ink 10 | Default rule, 1px |
| `--border-strong` | Ink | Emphasis rule, 1px |
| `--border-inactive` | Ink 20 | Disabled control border |
| `--action-fill` | Pepper 600 | Primary button |
| `--action-fill-hover` | Pepper 700 | Primary button hover |
| `--action-fill-inverse` | Paper | Primary button on Ink ground |
| `--mark` | Pepper 500 | Wordmark period, out-of-range indicator |
| `--focus-ring` | Lab 500 | 2px, 2px offset, all interactive elements |

Focus ring contrast: 6.03:1 on Paper, 5.30:1 on Cream, 4.46:1 on Peach. All clear the 3:1 non-text minimum.

### Frequency budget

Colour discipline is enforced by a hard budget, not by taste.

- **Pepper 500** appears at most **twice per viewport**: the wordmark period, and one accent.
- **Pepper 600** appears at most **once per viewport** as a filled action.
- **Lab 500** is unlimited in the mono metadata layer but never appears as a fill or a ground.
- **Chromatic surfaces do not exist.** No coloured cards, no coloured section grounds, no gradients anywhere in the system.

---

## Tokens — Typography

Four faces, four jobs, no overlap. The Superpower system runs everything on one face and lets tracking carry the personality. Pepper Me does the opposite: each face carries a distinct register, and the discipline is in never letting them trade jobs.

### Funnel Display · `--font-display`
- **Role:** Headlines, pillar statements, hero. Nothing else.
- **Substitute:** Archivo, Anton, Bebas Neue
- **Weights:** 400, 500, 700
- **Sizes:** 30, 36, 44, 56, 72, 96
- **Line height:** 1.00 at display, opening to 1.15 at h3
- **Tracking:** `-0.03em` at 96px through `-0.01em` at 30px
- Set in sentence case. Never uppercase, never letterspaced positive.

### Instrument Serif Italic · `--font-editorial`
- **Role:** Single-line editorial statements, pull quotes, the one-sentence thesis at a section head. Used at most twice per page.
- **Substitute:** EB Garamond Italic, Newsreader Italic
- **Weights:** 400
- **Sizes:** 24, 30, 36
- **Line height:** 1.25
- **Tracking:** `-0.01em`
- Never used for body copy, never for headings, never in a card.

### Familjen Grotesk · `--font-body`
- **Role:** Body, UI, navigation, forms, buttons, tables.
- **Substitute:** Inter, Public Sans, Söhne
- **Weights:** 400, 500, 600
- **Sizes:** 13, 15, 17, 19, 22
- **Line height:** 1.55 body, 1.4 UI
- **Tracking:** `-0.005em`
- Measure caps at 68 characters, 72 in article body.

### JetBrains Mono · `--font-mono`
- **Role:** The metadata layer. Biomarker names, units, reference ranges, section tags, dates, page positions, AHPRA registration numbers, article review dates.
- **Substitute:** IBM Plex Mono, Roboto Mono
- **Weights:** 400, 500
- **Sizes:** 11, 12, 13
- **Line height:** 1.4
- **Tracking:** `+0.08em`, uppercase for tags, sentence case for values
- **This is the layer that makes the system.** It should be present on every page and it should never be decorative. If a mono label is not annotating a real piece of data, remove it.

### Type scale

Fluid via `clamp()`. Ratio 1.25 at mobile opening to 1.333 at desktop. Tracking is expressed in `em` so it scales with size. This is the fix for the `px` tracking bug in the reference system, where `-0.025px` rounds to zero and does nothing.

| Role | Mobile | Desktop | Line height | Tracking | Face | Token |
|------|--------|---------|-------------|----------|------|-------|
| display | 44px | 96px | 1.00 | -0.03em | Display | `--text-display` |
| h1 | 34px | 72px | 1.02 | -0.025em | Display | `--text-h1` |
| h2 | 27px | 56px | 1.06 | -0.02em | Display | `--text-h2` |
| h3 | 24px | 36px | 1.15 | -0.015em | Display | `--text-h3` |
| h4 | 20px | 24px | 1.25 | -0.01em | Body 600 | `--text-h4` |
| editorial | 24px | 36px | 1.25 | -0.01em | Editorial | `--text-editorial` |
| body-lg | 18px | 19px | 1.55 | -0.005em | Body | `--text-body-lg` |
| body | 16px | 17px | 1.55 | -0.005em | Body | `--text-body` |
| body-sm | 14px | 15px | 1.5 | -0.005em | Body | `--text-body-sm` |
| ui | 15px | 15px | 1.4 | -0.005em | Body 500 | `--text-ui` |
| caption | 13px | 13px | 1.5 | 0 | Body | `--text-caption` |
| mono | 12px | 12px | 1.4 | +0.08em | Mono | `--text-mono` |
| mono-sm | 11px | 11px | 1.4 | +0.08em | Mono | `--text-mono-sm` |

Minimum body size is 16px on mobile. The reference system's 15px body is too small for a medical audience skewing 35 to 60.

---

## Tokens — Space, shape, layout

**Base unit:** 8px. **Density:** editorial, not compact.

### Spacing scale

| Token | Value | Typical use |
|-------|-------|-------------|
| `--space-1` | 4px | Icon to label |
| `--space-2` | 8px | Tight stack |
| `--space-3` | 12px | Form field internal |
| `--space-4` | 16px | Default element gap |
| `--space-5` | 24px | Card padding mobile, paragraph gap |
| `--space-6` | 32px | Card padding desktop |
| `--space-7` | 48px | Block gap |
| `--space-8` | 64px | Sub-section gap |
| `--space-9` | 96px | Section gap mobile |
| `--space-10` | 128px | Section gap desktop |
| `--space-11` | 160px | Major section gap |
| `--space-12` | 200px | Hero clearance |

### Radius

**Zero, almost everywhere.** This is the sharpest departure from the reference system, which pills everything at 9999px.

| Token | Value | Applies to |
|-------|-------|------------|
| `--radius-none` | 0 | Cards, buttons, inputs, images, tables, containers. The default. |
| `--radius-sm` | 2px | Chips, tags, badges. The only softening in the system. |
| `--radius-full` | 9999px | Avatars and the status dot only. Never a button. |

Rationale: a laboratory report has square corners. Rounded pills read as consumer app, which is precisely the register the brand is differentiating against. The absence of radius is doing work, so it must be applied without exception.

### Borders

| Token | Value | Use |
|-------|-------|-----|
| `--border-width-hairline` | 1px | Default |
| `--border-width-strong` | 1px, Ink | Emphasis, active state |
| `--border-width-focus` | 2px | Focus ring |

### Shadows

There are none.

`--shadow-none: none`. Elevation is communicated by hairline and by ground change, never by shadow. A single exception is permitted for the mobile navigation drawer overlay, which uses a scrim rather than a shadow.

### Layout

| Token | Value |
|-------|-------|
| `--container-max` | 1280px |
| `--container-text` | 720px (article measure) |
| `--container-narrow` | 560px (forms, focused content) |
| `--gutter-desktop` | 80px |
| `--gutter-tablet` | 40px |
| `--gutter-mobile` | 20px |

**Grid:** 12 column desktop at 1280px max, 24px column gap. 6 column tablet. 4 column mobile.

**Breakpoints:** `--bp-sm 480px`, `--bp-md 768px`, `--bp-lg 1024px`, `--bp-xl 1280px`, `--bp-2xl 1536px`.

### Motion

| Token | Value | Use |
|-------|-------|-----|
| `--duration-fast` | 120ms | Hover, focus |
| `--duration-base` | 200ms | State change, disclosure |
| `--duration-slow` | 400ms | Section reveal |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Everything entering |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Everything moving |

One orchestrated page-load moment, on the home hero only. Everything else is functional. `prefers-reduced-motion: reduce` disables all non-essential motion, and the reference range bar renders in its final state rather than animating.

### Z-index

| Token | Value | Layer |
|-------|-------|-------|
| `--z-base` | 0 | Content |
| `--z-sticky` | 100 | Sticky header, TOC |
| `--z-drawer` | 200 | Mobile navigation |
| `--z-overlay` | 300 | Scrim |
| `--z-modal` | 400 | Dialog |
| `--z-toast` | 500 | Notification |

---

## Components

### Reference Range Bar
**Role:** The signature element. Renders a biomarker value against its Australian reference interval.

Full-width hairline track, 2px, Ink 10. Reference interval rendered as a solid Ink 20 segment positioned proportionally within the track. Value indicator is a 2px vertical rule, 16px tall, Ink when in range and Pepper 500 when out of range. Marker name sits above in mono 12 uppercase Lab 500. Unit and interval sit below in mono 11 Ink 60. Value itself sits above right in Body 600 at 22px.

No fill, no gradient, no colour coding beyond the single out-of-range shift. Row background shifts to Pepper 50 when out of range.

In a stacked set the tracks align to a shared left edge so intervals read comparatively down the column. This is the whole point of the component.

**Compliance note:** the component may display a value, a unit and an interval. It must never display an interpretation, a recommendation, a target, or a directional arrow implying a desired change. Any of those turns a data display into a therapeutic claim.

### Header
**Role:** Primary navigation.

Full width, Paper ground, 1px bottom hairline in Ink 10. Height 72px desktop, 60px mobile. Wordmark left, Pepper 500 period. Primary links centre-left in Body 500 at 15px, Ink. Sign in as a text link. Primary action right.

On scroll past 80px the hairline persists and the header background stays Paper at full opacity. **It does not float, it does not become a pill, it does not blur.** It is a rule at the top of the document.

Over an Ink hero section the header inverts to transparent with Paper text, and the hairline becomes Paper at 20 percent.

### Button — Primary
**Role:** The single conversion action.

Pepper 600 fill, Paper label, Body 600 at 15px, zero radius, padding 14px vertical by 28px horizontal. No shadow, no icon by default. Hover shifts fill to Pepper 700 over 120ms. Active shifts to Pepper 700 with no transition. Focus adds a 2px Lab 500 ring at 2px offset. Disabled uses Ink 20 fill with Ink 40 label.

**Never** use Pepper 500 as a button fill. It fails AA with a white label.

On an Ink ground the primary button inverts: Paper fill, Ink label.

### Button — Secondary
Transparent fill, 1px Ink border, Ink label. Hover fills Ink with Paper label. Same geometry as primary.

### Button — Ghost
No fill, no border, Ink label with a 1px Ink 20 underline offset 4px. Hover shifts underline to Ink. Used for tertiary actions and in-card links.

### Mono Tag
**Role:** Section label, category marker, metadata.

Mono 12, uppercase, `+0.08em` tracking, Lab 500. Optionally preceded by a 2-digit index in Ink 40 when the content is genuinely sequential. No background, no border, no pill. Sits 16px above the block it labels.

Do not use an index unless the content is an actual sequence. A numbered marker on a non-sequence is decoration.

### Concern Card
**Role:** Route from pillar to concern page.

Paper ground, 1px Ink 10 border, zero radius, 32px padding. Mono tag top. Concern title in Display h3. One line of Body 15 in Ink 60. Hairline rule. Marker chips in mono. Ghost link bottom.

Hover shifts the border to Ink and nothing else moves. No lift, no shadow, no scale.

### Biomarker Chip
**Role:** Inline reference to a marker, links to its library article.

Mono 12, Ink, 1px Ink 10 border, 2px radius, 4px by 8px padding. Hover shifts border to Lab 500 and text to Lab 500. These are dense by design and appear in rows of six to twelve inside the "what gets measured" block.

### Doctor Card
**Role:** Clinical authority.

Portrait at 4:5, zero radius, no border. Name in Display h4. Qualifications in Body 15 Ink 60. **AHPRA registration in mono 12 Ink 60.** Scope in Body 15.

The registration number in mono is a deliberate trust device. It is verifiable, it is public, and rendering it in the technical layer signals that the brand treats it as data rather than as a badge.

### Price Card
**Role:** Membership tier.

Paper ground, 1px Ink 10 border, zero radius, 32px padding. Mono tag for tier name. Price in Display h2 with the interval in Body 17 Ink 60 on the baseline. Hairline. Inclusion list in Body 17 with 1px Ink 10 rules between rows, not bullets, not ticks. Primary button.

**Compliance note:** the inclusion list describes services. It never names, implies or prices a medicine. No tier is marked "most popular" or "recommended", which is a soft inducement.

### Fork Block
**Role:** The Him and Her split on hormonal and sexual health.

Two panels, equal width at desktop, stacked at mobile. Left panel Ink ground with Paper text and Lab 300 mono. Right panel Cream ground with Ink text and Lab 500 mono. No divider between them, the ground change is the divider. Each panel carries a Display h3, one line of body, and a ghost link.

Used **only** where the content genuinely forks. It is a structural device encoding real physiological divergence, not a layout pattern to reach for when a section needs visual interest.

### Article Meta Block
**Role:** E-E-A-T signal and compliance evidence.

Sits directly under the standfirst. 1px Ink 10 rules above and below. Four columns at desktop, two at mobile, all in mono 12: `WRITTEN BY`, `MEDICALLY REVIEWED BY`, `PUBLISHED`, `LAST REVIEWED`. Reviewer name links to their doctor profile.

This block is not optional and nothing publishes without it.

### Disclaimer Block
**Role:** Statutory and clinical disclaimers.

Cream ground, 1px Ink 10 top border only, 24px padding, Body 15 in Ink 60. Three sizes: inline (one sentence), block (paragraph), page (full statement). Never styled as an alert, never coloured, never iconised. A disclaimer that looks like a warning invites dismissal.

### Data Table
**Role:** Reference ranges, panel scope, comparison.

Zero radius, no outer border. 1px Ink 10 row rules. Header row in mono 12 uppercase Lab 500 with a 1px Ink bottom rule. Numeric cells right-aligned and tabular-figured. Row hover tints Cream.

### FAQ Accordion
Question in Display h4, chevron right in Ink at 16px. 1px Ink 10 rule between items. Answer in Body 17, 24px top padding. Open state rotates the chevron 90 degrees over 200ms. No card, no fill, no shadow.

### Table of Contents
Sticky at 100px offset on desktop, collapsed disclosure on mobile. Mono 12 uppercase Lab 500 heading. Items in Body 15 Ink 60, active item Ink with a 2px Pepper 500 left rule. Scroll-spy driven.

### Form Field
Label in Body 500 at 15px Ink, 8px above. Input at 48px height, 1px Ink 20 border, zero radius, Paper fill, Body 17. Focus shifts border to Lab 500 and adds the 2px ring. Error shifts border to Pepper 700 with the message below in Body 15 Pepper 700. Helper text in Body 15 Ink 60.

Errors state what happened and how to fix it. They never apologise and they are never vague.

### Footer
Ink ground. Five columns desktop, stacked mobile. Wordmark with Pepper 500 period, inverted. Column headings in mono 12 uppercase Lab 300. Links in Body 15 Paper at 80 percent, full opacity on hover. Legal block at the base in Body 13 Paper at 60 percent, above a 1px Paper 20 rule.

The sitewide disclaimer lives here in full.

---

## Do's and Don'ts

### Do
- Use Pepper 600 for every filled action and reserve Pepper 500 for the wordmark period and large display accents. The ramp exists because the brand red fails AA as a button.
- Keep radius at zero on every card, button, input and container. The sharpness is the identity.
- Let the mono metadata layer annotate every page, and only ever where it is annotating real data.
- Communicate elevation with a hairline and a ground change. Never a shadow.
- Express tracking in `em` so it scales. `px` tracking rounds to nothing at small sizes.
- Align stacked reference range bars to a shared left edge so intervals read comparatively.
- Alternate Paper, Cream and Ink grounds to structure a long page instead of adding dividers.
- Put the AHPRA registration number in mono on every doctor card.
- Run every image, icon and piece of alt text past the section 03 rules before it ships.

### Don't
- Don't float the navigation as a pill over imagery. That is the category default and it reads as consumer.
- Don't use Pepper 500 as a fill behind white text. 4.35:1 fails AA.
- Don't use Lab 500 on an Ink ground. 3.23:1 fails. Use Lab 300.
- Don't use Ink 30 or Ink 40 for body copy at any size.
- Don't introduce a third chromatic accent, a gradient, or a coloured surface. The system is deliberately dichromatic against neutrals.
- Don't add drop shadows, lifts, scales or parallax. Hover changes a border, nothing more.
- Don't use the fork block where the content does not actually fork.
- Don't number a list of items that is not a sequence.
- Don't mark a pricing tier as "most popular" or "recommended". It is a soft inducement.
- Don't put a directional arrow, target or interpretation on a reference range bar. That converts data into a therapeutic claim.
- **Don't render any medicine, vial, pen, syringe, capsule, blister or pharmacy interior**, in photography, illustration or iconography. An image can be prohibited advertising on its own.
- **Don't build a before-and-after component.** Not for body composition, not for bloodwork, not for anything. It is prohibited under section 133 and there is no compliant use of it.
- Don't build a testimonial, review, star rating or quote-from-patient component. There is no version of these that is compliant.

---

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page | `#FDFDFC` | Default ground |
| 1 | Raised | `#FDFDFC` | Cards, distinguished by hairline only |
| 2 | Muted | `#F1EEE8` | Alternating sections, Her fork, disclaimers, table hover |
| 3 | Tint | `#F5D5CD` | Editorial break, used sparingly |
| 4 | Inverse | `#0A0A0B` | Dark sections, Him fork, footer |
| 5 | Alert | `#FBEEEB` | Out-of-range row only |

Ground alternation across a long page runs Paper, Cream, Paper, Ink, Paper. Never two chromatic grounds adjacent.

## Elevation

None. `--shadow-none: none` is the only shadow token in the system.

---

## Imagery

**Direction.** Editorial portraiture of real Australian adults, 30 to 60, unretouched, natural light, direct gaze, no stock affect and no aspirational posing. Shot in ordinary interiors and ordinary daylight. The subject looks like someone who went to a doctor, not someone in a campaign. Supported by material and texture studies at very low frequency, and by diagram and data visualisation, which carry more of the visual load than photography does.

Portraits are full colour, zero radius, no border, no overlay, no scrim. Mono metadata may sit over an image in a corner, in Paper, as a caption device.

**Iconography.** Line only, 1.5px stroke, Ink, zero radius on any container, 24px grid. Geometric and neutral. No filled icons, no duotone, no rounded caps.

**Banned outright.** Medicines, vials, pens, syringes, capsules, blisters, pharmacy interiors, anything that could stand in for a medicine as a visual reference. Before-and-after pairings in any form. Body transformation imagery. Lab coats and stethoscopes as costume. Stock wellness photography. Gradient meshes, 3D renders, abstract blobs. Muscular torsos.

The bans are a compliance instrument, not a taste preference.

---

## Accessibility floor

WCAG 2.2 AA, verified not assumed.

- Every foreground and background pair in the semantic layer has a computed contrast ratio recorded in `tokens.json`.
- Focus ring is 2px Lab 500 at 2px offset, clearing 3:1 on Paper, Cream and Peach.
- Minimum body size 16px mobile, 17px desktop.
- Target size 44px minimum, with 48px form controls.
- Full keyboard operability, logical tab order, visible focus everywhere, skip link to main.
- Semantic heading order, one h1 per page.
- The reference range bar exposes its value, unit and interval as text to assistive technology. It is never image-only.
- Alt text on every image. **Alt text is public copy and is bound by every rule in section 03 of the Website Build Brief.**
- Tested at 320px width and at 200% zoom.
- `prefers-reduced-motion: reduce` honoured throughout.

---

## Agent Prompt Guide

**Quick colour reference**
- text: `#0A0A0B` Ink
- secondary text: `#5C5C5F` Ink 60
- background: `#FDFDFC` Paper
- muted background: `#F1EEE8` Cream
- dark background: `#0A0A0B` Ink
- border: `#E2E0DB` Ink 10
- primary action: `#C23522` Pepper 600
- brand mark: `#DC3D27` Pepper 500
- technical label and link: `#2547FF` Lab 500

**Three example component prompts**

1. **Home hero.** Paper ground, 1280px container, 80px gutters, 200px top clearance. Mono tag top left in Lab 500 at 12px uppercase reading `DOCTOR LED CARE`. Headline in Funnel Display at 96px weight 500, line-height 1.0, tracking -0.03em, Ink, two lines, max 12 characters per line, reading "The doctor leads. Everything else is handled." Subcopy in Familjen Grotesk 19px Ink 60, max 480px measure, 24px below. Primary button in Pepper 600 with Paper label, zero radius, 48px below. Editorial portrait right at 4:5, zero radius, no treatment. No shadow anywhere.

2. **Reference range bar, stacked set of five.** Paper ground, 720px measure, 1px Ink 10 rules between rows, 24px row padding. Each row: marker name left in JetBrains Mono 12 uppercase Lab 500, value right in Familjen Grotesk 600 at 22px Ink. Below, a full-width 2px Ink 10 track with the reference interval as a solid Ink 20 segment and the value as a 2px 16px-tall vertical rule in Ink. Unit and interval below in mono 11 Ink 60. One row out of range: value and indicator shift to Pepper 500, row ground to Pepper 50. No arrows, no targets, no interpretation.

3. **Membership tier row, four cards.** Paper ground, 12 column grid, four cards at 3 columns each, 24px gap. Each card Paper with 1px Ink 10 border, zero radius, 32px padding. Mono tag for tier name in Lab 500 at 12px uppercase. Price in Funnel Display 56px Ink with the interval in Familjen Grotesk 17px Ink 60 sitting on the baseline. 1px Ink 10 rule. Inclusion list in Familjen Grotesk 17px with 1px Ink 10 rules between rows, no bullets, no ticks. Primary button in Pepper 600 at the base, full card width. No card is highlighted, badged or scaled.

---

## Positioning against the category

| Brand | What they do | What Pepper Me does instead |
|-------|--------------|-----------------------------|
| Superpower | Floating dark pill nav, coral accent, 9999px buttons, cinematic dark hero | Fixed hairline header, zero radius, rationed red as a mark, editorial daylight portraiture |
| Function Health | Atmospheric photography, rounded card system, results dashboard as hero | Reference range bar as hero, laboratory report as the visual source |
| Eucalyptus brands (Pilot, Juniper) | Bright flat illustration, product-forward, molecule-forward | No illustration, no product, doctor and data forward |
| Eight Sleep, Whoop | Dichromatic tech palette, pill CTAs, device photography | Four-face editorial stack, square geometry, no device |

The convergence in this category is total. Every competitor has arrived at the same warm-accent-on-neutral, rounded, atmospheric look. The opportunity is that none of them look like a clinical document, and a clinical document is what the brand actually is.
