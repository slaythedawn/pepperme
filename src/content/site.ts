/**
 * Sitewide content. Copy is held here rather than inline so the compliance
 * review (no medicine named, no testimonial, no inducement) can be run over a
 * single surface. See design/DESIGN.md and the handoff README.
 */

export const SITE = {
  name: "Pepper Me",
  tagline: "A higher state of human performance.",
  descriptor: "Modern prescriptions on demand. Doctor-led. Compounded in Australia.",
  legalName: "Pepper Me Pty Ltd",
  abn: "ABN 41 619 224 002",
  city: "Sydney, AU",
  regulatoryLine: "Australian doctors · Australian compounded · Section 42DLB",
  shipping: "Free shipping over $200",
  locale: "AU · EN",
} as const;

/** The compliance note. Carried by every protocol and pricing page. */
export const COMPLIANCE_NOTE =
  "Pepper Me does not advertise prescription medicines. This page describes a program of care. " +
  "Specific medicines and doses are discussed with your Australian doctor after your bloods and assessment.";

export const FOOTER_LEGAL =
  "Section 42DLB · Pepper Me does not advertise prescription medicines · " +
  "Compounded by a TGA-licensed AU pharmacy · SAS Category B";

export const NAV_LINKS = [
  { label: "Protocols", href: "/protocols" },
  { label: "Doctors", href: "/doctors" },
  { label: "Science", href: "/science" },
  { label: "Pricing", href: "/pricing" },
] as const;

export const FOOTER_COLUMNS = [
  {
    heading: "Care areas",
    links: [
      { label: "Recovery", href: "/protocols" },
      { label: "Performance", href: "/protocols" },
      { label: "Sleep", href: "/protocols" },
      { label: "Hormonal", href: "/protocols/hormonal" },
      { label: "Longevity", href: "/protocols" },
      { label: "Sexual health", href: "/protocols" },
    ],
  },
  {
    heading: "Pepper Me",
    links: [
      { label: "Doctors", href: "/doctors" },
      { label: "Science", href: "/science" },
      { label: "Pricing", href: "/pricing" },
      { label: "Assessment", href: "/assessment" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "FAQ", href: "/pricing#faq" },
      { label: "Contact", href: "/legal#contact" },
      { label: "Assessment", href: "/assessment" },
      { label: "Doctors", href: "/doctors" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/legal#privacy" },
      { label: "Terms", href: "/legal#terms" },
      { label: "Prescribing standard", href: "/prescribing-standard" },
      { label: "42DLB", href: "/science" },
    ],
  },
] as const;

export const PRESS = [
  "Nature",
  "The Guardian",
  "GQ Australia",
  "The Australian",
  "Sydney Morning Herald",
  "Broadsheet",
] as const;
