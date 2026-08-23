import manifest from "./imagery.json";

/**
 * Site imagery.
 *
 * Every frame is generated on Higgsfield against one locked recipe (below) so
 * the whole site reads as a single shoot rather than a stock library. The
 * manifest in imagery.json is the source of truth: it holds the prompt that
 * produced each frame — so any image can be regenerated on tone — and the alt
 * string, which is public copy and bound by the same compliance rules as the
 * page around it.
 *
 * `src` points at the Higgsfield CDN until `npm run fetch:images` downloads the
 * files into /public/images and rewrites these fields to local paths. Do that
 * before launch: a generation CDN is not an asset host.
 *
 * Non-negotiable in every prompt and every alt string: no medicine, vial, pen,
 * syringe, capsule, blister or pharmacy interior; no lab coat or stethoscope
 * worn as costume; no before-and-after; no clinical claim.
 */

export type Treatment = "mono" | "colour";

export type ImageSlot = {
  id: string;
  alt: string;
  treatment: Treatment;
  aspect: string;
  src: string;
  /** Higgsfield job id, for tracing a frame back to its generation. */
  job: string;
  prompt: string;
};

/**
 * The locked recipe. Every prompt in the manifest is this, plus a subject and
 * a room:
 *
 * Editorial documentary, 35mm film, natural window light. Real Australian
 * adults 30–60, unretouched, no makeup or styling, direct gaze or genuinely
 * absorbed in something — never performing. Ordinary domestic interiors, plain
 * walls, nothing staged. Warm neutral palette against the brand grounds:
 * off-white, cream, deep charcoal. Soft light, medium contrast, fine grain.
 *
 * Portraits are shot and rendered black and white; programme and journal frames
 * stay in muted colour. That split is the design system's, not the model's.
 */
export const IMAGE_RECIPE = {
  model: "soul_2",
  quality: "2k",
  stock: {
    mono: "Kodak Tri-X 400 — true blacks, clean off-white highlights",
    colour: "Kodak Portra 400 — muted, low saturation",
  },
  exclusions:
    "No text, no logos, no branded clothing, no props, no medical equipment, no vials, no syringes, no pills, no lab coat, no stethoscope, no clinic, no pharmacy, no stock-photo expression, no posing.",
} as const;

const SLOTS = manifest as Record<string, Omit<ImageSlot, "id">>;

export function image(id: string): ImageSlot {
  const slot = SLOTS[id];
  if (!slot) throw new Error(`No image slot "${id}" in imagery.json`);
  return { id, ...slot };
}

export const IMAGE_IDS = Object.keys(SLOTS);
