import type { Marker } from "@/components/ui/ReferenceRangeBar";

/**
 * The journal.
 *
 * Articles are the E-E-A-T layer and they carry the strictest version of the
 * compliance rules: no medicine is named, no outcome is promised, no
 * before-and-after appears, and every reference-range display shows a value, a
 * unit and an interval with nothing attached to it. Every article carries the
 * meta block, and nothing publishes without a named medical reviewer.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "editorial"; text: string }
  | { type: "list"; items: string[] }
  | { type: "markers"; heading: string; caption: string; markers: Marker[] };

export type Article = {
  slug: string;
  issue: string;
  category: string;
  title: string;
  standfirst: string;
  author: string;
  /** Doctor slug. The reviewer, not the author. */
  reviewer: string;
  published: string;
  lastReviewed: string;
  readTime: string;
  image: string;
  body: Block[];
};

export const ARTICLES: Article[] = [
  {
    slug: "twelve-weeks-of-measurement",
    issue: "Issue 014",
    category: "Recovery",
    title: "What twelve weeks of measurement actually tells you about a knee",
    standfirst:
      "A tendon that won't settle is rarely a tendon problem alone. Here is what a recovery panel measures, what changed across our open cohort, and — more usefully — what it did not.",
    author: "Pepper Me editorial",
    reviewer: "m-holt",
    published: "12 March 2026",
    lastReviewed: "2 August 2026",
    readTime: "14 min read",
    image: "journal-014",
    body: [
      {
        type: "p",
        text: "Most people arrive at a recovery program having already had the scan. The scan was clean, or close enough to clean that nobody could pin the problem on it, and they were told to rest and come back if it got worse. Twelve months later they are still managing it.",
      },
      {
        type: "p",
        text: "That sequence is so common it is almost the definition of the patient we see. It happens because imaging answers a structural question, and a tendon that will not settle is usually asking a physiological one: what is the environment this tissue is trying to repair in?",
      },
      { type: "h2", text: "What a recovery panel is actually looking at" },
      {
        type: "p",
        text: "Four systems govern soft-tissue repair, and they are usually measured by four different clinicians on four different days, if they are measured at all.",
      },
      {
        type: "list",
        items: [
          "Inflammatory load — whether the body is running a low-grade background signal that repair has to compete with.",
          "Endocrine capacity — the hormonal signalling that governs tissue turnover, which declines with age at a rate that varies enormously between people.",
          "Micronutrient status — iron and vitamin D in particular, both of which are common, cheap to measure, and routinely missed.",
          "Metabolic context — glycaemic control, which changes how connective tissue behaves over years rather than weeks.",
        ],
      },
      {
        type: "p",
        text: "None of those four is interesting alone. A ferritin of 41 µg/L is unremarkable on its own report. Read next to a raised inflammatory marker and a vitamin D below the interval, in someone whose recovery window has doubled, it stops being unremarkable.",
      },
      {
        type: "markers",
        heading: "The same four markers, read together",
        caption:
          "Illustrative panel · Australian reference intervals · not a patient record",
        markers: [
          { name: "hs-CRP", value: 4.2, unit: "mg/L", low: 0, high: 3.0 },
          { name: "Ferritin", value: 41, unit: "µg/L", low: 30, high: 300 },
          { name: "Vitamin D (25-OH)", value: 44, unit: "nmol/L", low: 50, high: 150 },
          { name: "IGF-1", value: 16.4, unit: "nmol/L", low: 11.0, high: 30.0 },
        ],
      },
      {
        type: "editorial",
        text: "Three of those four are inside their intervals. The pattern is still the pattern.",
      },
      { type: "h2", text: "What the cohort showed" },
      {
        type: "p",
        text: "Our open cohort runs bloods at week 0, week 6 and week 12, alongside a self-reported pain scale. Across 147 members on the recovery program, the median pain score fell over twelve weeks and the matched control group's did not move meaningfully. The full method and the trajectories are published on the science page, including the confidence intervals, which are wider than anyone selling something would like them to be.",
      },
      {
        type: "p",
        text: "That result is a cohort observation, not a promise about you. It is also not attributable to any single element of the program: members change their training, their sleep and their nutrition alongside everything else, and a cohort study cannot separate those out. We publish it because publishing the modest result is the point of running an open cohort at all.",
      },
      { type: "h2", text: "What it did not show" },
      {
        type: "p",
        text: "It did not show a structural change. Nothing in twelve weeks of bloodwork tells you a tendon has remodelled, and any read that claims otherwise is reading past its data. It did not show a dose-response relationship. And it did not show anything at all for the eleven members whose panels came back with a finding that sent them to a different specialty entirely — which is its own kind of useful.",
      },
      {
        type: "p",
        text: "Around 14% of assessments across all Pepper Me programs end with a doctor declining to prescribe. In recovery specifically the most common reason is that the panel points somewhere the program does not go.",
      },
      { type: "h2", text: "The practical version" },
      {
        type: "p",
        text: "If your recovery curve has flattened and your imaging is clean, the useful next step is a panel that reads all four systems on one day, and a doctor who reads them together. That may end in a plan. It may end in a referral. Either is a better answer than another twelve months of managing it.",
      },
    ],
  },

  {
    slug: "one-number-is-not-the-number",
    issue: "Issue 013",
    category: "Hormonal",
    title: "Why one number on your hormonal panel isn't the number to fix",
    standfirst:
      "A single hormonal result, read alone, is close to meaningless — and it is the way almost every hormonal complaint in Australia gets assessed. Here is what the rest of the panel is for.",
    author: "Pepper Me editorial",
    reviewer: "a-reid",
    published: "8 February 2026",
    lastReviewed: "2 August 2026",
    readTime: "9 min read",
    image: "journal-013",
    body: [
      {
        type: "p",
        text: "The most common thing a patient brings us is a single number on a page, usually with a note beside it saying it is within normal limits. Sometimes they have been given the number and told there is nothing to discuss. Sometimes they have been given the number and told it explains everything. Both readings are doing the same thing wrong.",
      },
      { type: "h2", text: "A reference interval is a population, not a person" },
      {
        type: "p",
        text: "A reference interval describes where the middle 95% of a reference population sits. It is a description of a crowd. Whether a particular value is right for a particular person depends on their age, their symptoms, the time of day the sample was taken, where they are in a cycle, and what every other marker on the panel is doing.",
      },
      {
        type: "p",
        text: "This is why 'you're in range' can be true and unhelpful in the same sentence. In range for whom, measured when, against what else?",
      },
      {
        type: "editorial",
        text: "In range for the average seventy-year-old is not a number to live from.",
      },
      { type: "h2", text: "The binding problem" },
      {
        type: "p",
        text: "Hormones circulate both bound to carrier proteins and unbound. Broadly, only the unbound fraction is biologically available. So a total measurement can sit comfortably mid-interval while the available fraction sits below it, if the carrier protein is high.",
      },
      {
        type: "markers",
        heading: "Two markers that only make sense next to each other",
        caption:
          "Illustrative panel · Australian reference intervals · not a patient record",
        markers: [
          { name: "Total testosterone", value: 11.4, unit: "nmol/L", low: 8.3, high: 29.0 },
          { name: "SHBG", value: 62, unit: "nmol/L", low: 18, high: 54 },
          { name: "Free testosterone", value: 158, unit: "pmol/L", low: 170, high: 620 },
        ],
      },
      {
        type: "p",
        text: "Read the first row alone and there is nothing to discuss. Read all three and there is a conversation — about why the carrier protein is elevated, which has its own list of causes worth ruling out before anyone reaches for anything else.",
      },
      { type: "h2", text: "Upstream and downstream" },
      {
        type: "p",
        text: "A low value can come from the gland itself or from the signalling above it, and telling those apart changes the entire clinical picture. That is what the pituitary markers on the panel are for. A panel without them cannot answer the first question a clinician should ask, which is not how low, but why.",
      },
      {
        type: "p",
        text: "Thyroid, prolactin, iron studies and glycaemic control all sit in the same conversation, because each of them can produce the symptom set people arrive with, and each is cheap to measure on the same draw.",
      },
      { type: "h2", text: "What to do with this" },
      {
        type: "p",
        text: "If you have one number and a symptom, you have neither a diagnosis nor a reason to be dismissed. You have a reason for a full panel, read on one day, by one doctor, against your symptoms. What follows from that — if anything — is a clinical decision made with you, not a product decision made in advance.",
      },
    ],
  },

  {
    slug: "pace-of-ageing-for-and-against",
    issue: "Issue 012",
    category: "Longevity",
    title: "Pace-of-ageing testing. The case for and the case against",
    standfirst:
      "Epigenetic ageing clocks are the most interesting measurement in longevity medicine and the most over-claimed. Our longevity lead makes both arguments, in order.",
    author: "Pepper Me editorial",
    reviewer: "j-obrien",
    published: "19 December 2025",
    lastReviewed: "2 August 2026",
    readTime: "22 min read",
    image: "journal-012",
    body: [
      {
        type: "p",
        text: "There are two honest positions on epigenetic pace-of-ageing testing, and most of what is written about it holds only one of them. We think you should have both before you spend money on it.",
      },
      { type: "h2", text: "The case for" },
      {
        type: "p",
        text: "Chronological age is the strongest single predictor of almost every outcome in medicine, and it is completely useless as a target because it only moves one way. A rate measure is different in kind: it estimates how fast the underlying process is running now, which means it can in principle be measured again and compared.",
      },
      {
        type: "list",
        items: [
          "It is a rate, not a milestone — which makes it the only ageing number that can be trended against itself.",
          "The methylation-based measures have peer-reviewed validation against longitudinal cohorts, not just cross-sectional correlation.",
          "It is one of very few measures that gives a patient in their thirties anything actionable to trend at all.",
          "Taken alongside a metabolic and inflammatory panel, it contextualises markers that individually look fine.",
        ],
      },
      { type: "h2", text: "The case against" },
      {
        type: "p",
        text: "Test-retest variability is real and it is not small relative to the effect sizes people report. A change between two measurements six months apart can sit inside the noise of the assay, and the honest response to a single small movement is to shrug rather than to celebrate or to intervene.",
      },
      {
        type: "list",
        items: [
          "It is a correlate, not a mechanism. Nothing about a shift in the number tells you what changed underneath it.",
          "Validation is strongest at population scale and weakest at the individual level — which is exactly the level a patient cares about.",
          "The commercial incentive to over-read a small movement is enormous, and the field has not covered itself in glory here.",
          "No regulator has approved any of these measures as a diagnostic, and nobody should present one as though it were.",
        ],
      },
      {
        type: "editorial",
        text: "It is one input. It is not a verdict, and anyone selling it as one is selling something else.",
      },
      { type: "h2", text: "How we use it" },
      {
        type: "p",
        text: "We take it at baseline and re-measure annually rather than quarterly, because measuring a noisy signal more often mostly produces more noise. It is read alongside the metabolic and cardiovascular panel, which is where anything actionable usually is.",
      },
      {
        type: "markers",
        heading: "The panel the rate is read against",
        caption:
          "Illustrative panel · Australian reference intervals · not a patient record",
        markers: [
          { name: "hs-CRP", value: 1.4, unit: "mg/L", low: 0, high: 3.0 },
          { name: "HbA1c", value: 5.9, unit: "%", low: 4.0, high: 6.0 },
          { name: "ApoB", value: 1.34, unit: "g/L", low: 0.6, high: 1.2 },
          { name: "Homocysteine", value: 12.1, unit: "µmol/L", low: 5.0, high: 15.0 },
        ],
      },
      {
        type: "p",
        text: "If you take one thing from this: a longevity program whose entire case rests on the ageing clock is a program that has skipped the boring markers. The boring markers are where the medicine is.",
      },
    ],
  },
];

export const articleBySlug = (slug: string) =>
  ARTICLES.find((a) => a.slug === slug);
