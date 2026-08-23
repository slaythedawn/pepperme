/**
 * Programs of care, keyed by the system they act on.
 *
 * Pricing is stated one way and one way only: $149 buys the assessment, the
 * panel and the consult, refunded if the doctor declines. No monthly figure is
 * quoted anywhere, because there isn't one to quote — what ongoing care costs
 * depends on the plan the doctor recommends, and that is decided on the consult.
 * The per-protocol monthly figures the earlier prototypes carried are gone.
 *
 * Copy here never names a medicine. It names the body system, the archetype
 * and what the care includes.
 */

export type Audience = "him" | "her" | "both";

export type Protocol = {
  code: string;
  system: string;
  audience: Audience;
  audienceLabel: string;
  title: string;
  body: string;
  includes: [string, string, string];
  href: string;
  cta: string;
  /** Image slot id in imagery.json. */
  image: string;
};

export const PROTOCOLS: Protocol[] = [
  {
    code: "RCV — 04",
    system: "Recovery",
    audience: "both",
    audienceLabel: "Soft-tissue",
    title: "Recover the way you used to.",
    body: "For tendon, joint and connective-tissue pain. Doctor-led care for adults whose recovery isn't keeping up with their training load.",
    includes: [
      "Comprehensive recovery panel",
      "Doctor consult + 12-week plan",
      "Quarterly re-read",
    ],
    href: "/assessment",
    cta: "Start assessment",
    image: "programme-recovery",
  },
  {
    code: "PRF — 02",
    system: "Performance",
    audience: "him",
    audienceLabel: "For him",
    title: "Body composition, over time.",
    body: "For men whose training plateau isn't moving. Doctor-led care across endocrine, sleep and metabolic markers — read together, not separately.",
    includes: [
      "68-marker performance panel",
      "Endocrine + metabolic read",
      "Quarterly re-read",
    ],
    href: "/assessment",
    cta: "Start assessment",
    image: "programme-performance",
  },
  {
    code: "SLP — 01",
    system: "Sleep",
    audience: "both",
    audienceLabel: "Architecture",
    title: "Sleep that does the actual job.",
    body: "For shift-workers, light sleepers, the chronically wired. Sleep-physician-led assessment of architecture, hormones and lifestyle.",
    includes: [
      "14-night ring + diagnostic",
      "Sleep physician consult",
      "Doctor-led plan",
    ],
    href: "/assessment",
    cta: "Start assessment",
    image: "programme-sleep",
  },
  {
    code: "HRM — M / 07",
    system: "Hormonal",
    audience: "him",
    audienceLabel: "For him",
    title: "Male hormonal care, properly.",
    body: "For men with symptoms that bloodwork explains. Endocrinology-led care across the full male endocrine panel — not a 60-second script.",
    includes: [
      "Full male endocrine panel",
      "Endocrinology consult",
      "Re-read every 8 weeks",
    ],
    href: "/protocols/hormonal/him",
    cta: "Start his assessment",
    image: "programme-hormonal-him",
  },
  {
    code: "HRM — W / 08",
    system: "Hormonal",
    audience: "her",
    audienceLabel: "For her",
    title: "Cycle, peri, read together.",
    body: "For women across the reproductive arc. Women's-health doctors who treat cycle, perimenopause, mood and sleep as one system, not five.",
    includes: [
      "Full female endocrine panel",
      "Women's health consult",
      "Re-read every 8 weeks",
    ],
    href: "/protocols/hormonal/her",
    cta: "Start her assessment",
    image: "programme-hormonal-her",
  },
  {
    code: "LNG — 09",
    system: "Longevity",
    audience: "both",
    audienceLabel: "Cellular",
    title: "Slow the biological clock.",
    body: "For adults under 55 with five-plus years of data. Pace-of-ageing tracked, doctor-supervised, quarterly read.",
    includes: [
      "Epigenetic pace-of-ageing test",
      "Longevity doctor consult",
      "Quarterly read + adjust",
    ],
    href: "/assessment",
    cta: "Start assessment",
    image: "programme-longevity",
  },
  {
    code: "SXL — 03",
    system: "Sexual health",
    audience: "both",
    audienceLabel: "Response",
    title: "Read as a system, not a symptom.",
    body: "Sexual response sits downstream of endocrine, vascular and psychological markers. Sexual medicine doctors read all three together.",
    includes: [
      "Endocrine + vascular panel",
      "Sexual medicine consult",
      "Re-read every 12 weeks",
    ],
    href: "/assessment",
    cta: "Start assessment",
    image: "programme-sexual",
  },
];

/**
 * The one price. Stated identically wherever price appears.
 *
 * There is deliberately no ongoing figure in this object. Quoting a monthly
 * price before a doctor has read a panel promises a plan that may not be
 * indicated — and around 14% of the time it isn't.
 */
export const PRICING = {
  entry: "$149",
  entryIncludes: "assessment + blood panel + 30-min doctor consult + written read",
  declineRate: "~14%",
  refundLine: "Refunded in full if your doctor declines to prescribe.",
  /** Use this wherever the ongoing cost would otherwise be quoted. */
  ongoingLine:
    "What ongoing care costs depends on the plan your doctor recommends. You'll have it in full on the consult, before anything is charged.",
} as const;

export const TREATMENT_AREAS = [
  {
    heading: "Recovery & Sleep",
    items: [
      "Persistent injury",
      "Tendon and joint pain",
      "Onset insomnia",
      "Fragmented sleep",
      "Shift-worker disruption",
      "Post-surgical healing",
    ],
  },
  {
    heading: "Performance",
    items: [
      "Training plateau",
      "Slow recovery",
      "Loss of lean mass",
      "Low output and power",
      "Brain fog mid-session",
      "Decline through your thirties",
    ],
  },
  {
    heading: "Hormonal",
    items: [
      "Low testosterone (men)",
      "Perimenopause (women)",
      "Cycle irregularity",
      "Mood and motivation",
      "Body composition",
      "Sexual response",
    ],
  },
  {
    heading: "Longevity & Sexual",
    items: [
      "Biological age screening",
      "Metabolic health",
      "Inflammation markers",
      "Cognitive maintenance",
      "Erectile dysfunction",
      "Libido and arousal",
    ],
  },
] as const;
