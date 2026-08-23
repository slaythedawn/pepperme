/**
 * The doctor roster is the trust layer. It replaces the testimonial components
 * the prototypes carried — see the compliance section of the handoff README.
 * Every card must render the AHPRA registration number in the mono layer.
 */

export type Doctor = {
  slug: string;
  name: string;
  discipline: string;
  city: string;
  ahpra: string;
  years: number;
  reads: string;
  bio: string;
  quote?: string;
  portraitAlt: string;
};

export const DOCTORS: Doctor[] = [
  {
    slug: "a-reid",
    name: "Dr. A. Reid",
    discipline: "Endocrinology",
    city: "MEL",
    ahpra: "MED 0021041",
    years: 11,
    reads: "HRM-M · HRM-W · LNG",
    bio: "Endocrinologist, Melbourne. 11 years clinical practice across Royal Melbourne and Cabrini. Reid leads Pepper Me's prescribing standard and reviews every protocol-launch cohort.",
    quote:
      "Most telehealth wants doctors to be a script printer. Pepper Me wants us to be doctors. That's why I joined.",
    portraitAlt: "Portrait of Dr. A. Reid, endocrinologist, Melbourne.",
  },
  {
    slug: "m-holt",
    name: "Dr. M. Holt",
    discipline: "Sports medicine",
    city: "SYD",
    ahpra: "MED 0019223",
    years: 9,
    reads: "HRM-M · RCV · PRF",
    bio: "Sports physician, 9 years Olympic Park clinic. Reads male endocrine, recovery and performance panels together.",
    quote:
      "For men, this is usually about reading the whole system. The single-number result is rarely the answer.",
    portraitAlt: "Portrait of Dr. M. Holt, sports physician, Sydney.",
  },
  {
    slug: "r-bennett",
    name: "Dr. R. Bennett",
    discipline: "Women's health · GP",
    city: "ADL",
    ahpra: "MED 0018443",
    years: 12,
    reads: "HRM-W · SXL-W",
    bio: "Women's-health GP, 12 years. Cycle, perimenopause, post-menopause. Co-leads the women's hormonal program.",
    quote:
      "Women's bodies aren't an edge case. The system has a shape. You just need someone willing to read it.",
    portraitAlt: "Portrait of Dr. R. Bennett, women's health GP, Adelaide.",
  },
  {
    slug: "k-wong",
    name: "Dr. K. Wong",
    discipline: "Sleep medicine",
    city: "BNE",
    ahpra: "MED 0014870",
    years: 12,
    reads: "SLP",
    bio: "Sleep physician. Royal Brisbane sleep clinic, 12 years. Leads the sleep program.",
    portraitAlt: "Portrait of Dr. K. Wong, sleep physician, Brisbane.",
  },
  {
    slug: "l-mackenzie",
    name: "Dr. L. Mackenzie",
    discipline: "Psychiatry",
    city: "PER",
    ahpra: "MED 0017654",
    years: 10,
    reads: "HRM-W · SLP",
    bio: "Psychiatrist. Mood, sleep, perimenopausal cognition. Co-reads the women's hormonal panel.",
    portraitAlt: "Portrait of Dr. L. Mackenzie, psychiatrist, Perth.",
  },
  {
    slug: "j-obrien",
    name: "Dr. J. O'Brien",
    discipline: "GP · Longevity",
    city: "MEL",
    ahpra: "MED 0022116",
    years: 8,
    reads: "LNG",
    bio: "GP with a Monash longevity fellowship. Leads the longevity program and pace-of-ageing reads.",
    portraitAlt: "Portrait of Dr. J. O'Brien, GP, Melbourne.",
  },
  {
    slug: "s-crawford",
    name: "Dr. S. Crawford",
    discipline: "Sexual health",
    city: "SYD",
    ahpra: "MED 0011902",
    years: 14,
    reads: "SXL",
    bio: "Sexual medicine, 14 years. Co-reads sexual health across both programs.",
    portraitAlt: "Portrait of Dr. S. Crawford, sexual health physician, Sydney.",
  },
];

export const doctorBySlug = (slug: string) =>
  DOCTORS.find((d) => d.slug === slug) as Doctor;
