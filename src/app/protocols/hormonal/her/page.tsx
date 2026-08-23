import type { Metadata } from "next";
import { GenderedProgramPage } from "@/components/pages/GenderedProgramPage";
import { doctorBySlug } from "@/content/doctors";

export const metadata: Metadata = {
  title: "Hormonal care for women",
  description:
    "A women's-health-led program across cycle, perimenopause, mood, sleep and recovery — read together, on a cycle-timed 62-marker panel.",
};

export default function HormonalHerPage() {
  return (
    <GenderedProgramPage
      program={{
        ground: "muted",
        eyebrow: "HRM · W / 08 · For women",
        title: "Hormonal care for women",
        intro:
          "If you searched “perimenopause specialist”, “hormone test for women” or “cycle clinic”, you found the right page. Pepper Me runs a women's-health-led program across cycle, perimenopause, mood, sleep and recovery — read together.",
        cta: "Start her assessment →",
        heroBrief:
          "Woman in her forties at home, unretouched, natural light, direct gaze, no medical props.",
        stats: [
          { value: "14", label: "AHPRA doctors" },
          { value: "62", label: "Markers, female endocrine panel" },
          { value: "24 hr", label: "Assessment reviewed within" },
          { value: "$99", label: "To start" },
        ],
        qualifierHeading: "Women whose system is the answer",
        qualifiers: [
          {
            title: "Your cycle has changed and no one is reading the system",
            body: "Length, mood, sleep, energy, weight — symptoms that GPs treat one at a time, but read together tell a story.",
          },
          {
            title: "You're in or near perimenopause and want someone who's read 500 cases",
            body: "Pepper Me's women's-health doctors specialise in the perimenopausal endocrine arc, not the general practice.",
          },
          {
            title: "You've been told “it's just hormones, you'll be fine”",
            body: "Yes — it is hormones. And there's a program of care for that, with bloods and a doctor who reads them.",
          },
          {
            title: "You want a doctor who treats women's bodies as the default",
            body: "Pepper for her is led by women's-health-trained doctors. Cycle, peri, post-meno, mood, sleep — read together.",
          },
        ],
        stepsHeading: "Three steps. Then a doctor who's read 500 cases",
        steps: [
          {
            label: "Step 01 · 3 min",
            title: "Assessment. No payment yet.",
            body: "Tell us about your cycle, your symptoms, what's changed. A women's-health doctor reviews within 24 hours.",
          },
          {
            label: "Step 02 · this week",
            title: "Cycle-timed bloods.",
            body: "62-marker female endocrine panel, timed to your cycle — or any day if peri or post-meno. Australian-accredited lab, walk-in.",
          },
          {
            label: "Step 03 · 48hr",
            title: "Doctor reads. Plan, or no plan.",
            body: "A women's-health doctor reads the full panel and consults with you. If indicated, your plan is decided on the call.",
          },
        ],
        doctorHeading:
          "A women's-health doctor reads your panel. Not the receptionist of one",
        doctor: doctorBySlug("r-bennett"),
        panelHeading: "The female endocrine panel, against its intervals.",
        panelIntro:
          "Six of the 62 markers, shown the way your doctor reads them — value, unit and the Australian reference interval, aligned so they compare down the column. Intervals are cycle-phase dependent; your doctor reads yours against the right one.",
        markers: [
          { name: "Oestradiol (day 3)", value: 118, unit: "pmol/L", low: 90, high: 400 },
          { name: "FSH (day 3)", value: 14.2, unit: "IU/L", low: 3.5, high: 12.5 },
          { name: "LH (day 3)", value: 8.1, unit: "IU/L", low: 2.4, high: 12.6 },
          { name: "Progesterone (day 21)", value: 22, unit: "nmol/L", low: 15, high: 85 },
          { name: "SHBG", value: 88, unit: "nmol/L", low: 26, high: 110 },
          { name: "Ferritin", value: 21, unit: "µg/L", low: 30, high: 300 },
        ],
        faqs: [
          {
            q: "Is this a single-medicine program?",
            a: "No. The program reads the full female endocrine panel and decides — with you, with a doctor — what, if anything, makes sense for your phase.",
          },
          {
            q: "I'm not in perimenopause — is this for me?",
            a: "Yes. We see women from cycle-stage through to post-menopause. The program adapts to your phase.",
          },
          {
            q: "Do you time bloods to my cycle?",
            a: "Yes, if you have a cycle. Day 3 or day 21 depending on indication. We'll tell you when to book.",
          },
          {
            q: "What if my doctor says no?",
            a: "Your $99 is refunded in full and you keep your bloods and your written read. Around 14% of assessments are declined.",
          },
        ],
        complianceNote:
          "Pepper Me does not advertise prescription medicines. This page describes a program of care for adult Australian women. Specific medicines and doses are discussed with your Australian doctor after your bloods and assessment.",
        crossLink: {
          label: "For him",
          heading: "Looking for the men's hormonal program?",
          body: "Same prescribing standard. Different endocrine system. Endocrinologists and sports physicians read the full male panel.",
          cta: "View his program →",
          href: "/protocols/hormonal/him",
        },
      }}
    />
  );
}
