/**
 * Open-cohort publications.
 *
 * Titles describe the body system and the cohort, never the molecule: naming a
 * scheduled substance on a public consumer page is direct-to-consumer
 * advertising of a prescription-only medicine. Members reading the papers
 * themselves is a different context; this index is public.
 */
export type Publication = {
  code: string;
  title: string;
  authors: string;
  status: "Pre-print" | "Peer-reviewed";
  date: string;
  readTime: string;
  category: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    code: "RCV-04",
    title: "12-week regenerative recovery cohort · tendon-pain trajectory",
    authors: "Dr. A. Reid · Dr. M. Holt · n=147",
    status: "Pre-print",
    date: "03.26",
    readTime: "14 min",
    category: "Recovery",
  },
  {
    code: "PRF-02",
    title: "8-week performance program · body composition and output",
    authors: "Dr. M. Holt · n=92",
    status: "Peer-reviewed",
    date: "02.26",
    readTime: "11 min",
    category: "Performance",
  },
  {
    code: "LNG-09",
    title: "Pace-of-ageing shift in supervised adults under 50",
    authors: "Dr. A. Reid · Dr. J. O'Brien · n=41",
    status: "Pre-print",
    date: "02.26",
    readTime: "22 min",
    category: "Longevity",
  },
  {
    code: "SLP-01",
    title: "Sleep architecture in shift-workers · a doctor-led program",
    authors: "Dr. K. Wong · n=88",
    status: "Peer-reviewed",
    date: "01.26",
    readTime: "9 min",
    category: "Sleep",
  },
  {
    code: "HRM-W",
    title: "Perimenopausal cognition against a cycle-timed endocrine panel",
    authors: "Dr. R. Bennett · Dr. L. Mackenzie · n=64",
    status: "Pre-print",
    date: "12.25",
    readTime: "17 min",
    category: "Hormonal",
  },
  {
    code: "SXL-03",
    title: "16-week sexual response cohort · endocrine and vascular read",
    authors: "Dr. S. Crawford · Dr. M. Holt · n=56",
    status: "Peer-reviewed",
    date: "11.25",
    readTime: "13 min",
    category: "Sexual health",
  },
];

/** Cited literature. Journal, author and year only — no molecule in the label. */
export const CITED = [
  "Sikiric P. et al. — Stable gastric pentadecapeptide. Inflammopharmacology, 2018.",
  "Goldstein A. — A multifunctional regenerative peptide. Cardiovascular Research, 2014.",
  "Belsky D.W. et al. — DunedinPACE, a pace-of-ageing biomarker. eLife, 2022.",
  "Bhasin S. et al. — Management of hypogonadism in men. JCEM, 2018.",
  "Davis S.R. et al. — Practical recommendations for women's endocrine care. Lancet Diabetes & Endocrinology, 2019.",
] as const;
