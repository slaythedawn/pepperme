import type { Metadata } from "next";
import { GenderedProgramPage } from "@/components/pages/GenderedProgramPage";
import { doctorBySlug } from "@/content/doctors";

export const metadata: Metadata = {
  title: "Sexual health care for women",
  description:
    "A women's-health-led program across desire, arousal and response, read against the full female endocrine panel by an AHPRA-registered Australian doctor.",
  alternates: { canonical: "/protocols/sexual-health/her" },
};

export default function SexualHealthHerPage() {
  return (
    <GenderedProgramPage
      program={{
        ground: "muted",
        eyebrow: "SXL · W / 03 · For women",
        title: "Sexual health for women",
        intro:
          "Desire, arousal and response are physiology, and for women they are routinely treated as everything except physiology. Pepper Me reads the full endocrine picture — cycle-timed where it applies — with a women's-health-trained doctor, and starts from what the panel says rather than from what you have already been told.",
        cta: "Start her assessment →",
        heroImage: "sexual-her-hero",
        stats: [
          { value: "14", label: "AHPRA doctors" },
          { value: "46", label: "Markers, female endocrine panel" },
          { value: "24 hr", label: "Assessment reviewed within" },
          { value: "$149", label: "To start" },
        ],
        qualifierHeading: "Women who have been told it's everything but physiology",
        qualifiers: [
          {
            title: "You've been told it's stress, or the relationship",
            body: "Sometimes it is. Often there is an endocrine picture underneath that nobody has looked at.",
          },
          {
            title: "It changed alongside your cycle, or alongside peri",
            body: "Timing that tracks a hormonal transition is the strongest clue there is.",
          },
          {
            title: "Desire, sleep and mood moved together",
            body: "Three things changing at once is one cause, read across three systems.",
          },
          {
            title: "You want a doctor who treats this as medicine",
            body: "Women's-health-trained, unembarrassed, and reading a panel rather than offering reassurance.",
          },
        ],
        stepsHeading: "Three steps. Then a doctor who has read 500 cases",
        steps: [
          {
            label: "Step 01 · 3 min",
            title: "Assessment. No payment yet.",
            body: "What changed, when, where you are in the reproductive arc, and what you have already been told. A women's-health doctor reviews within 24 hours.",
          },
          {
            label: "Step 02 · this week",
            title: "Cycle-timed bloods.",
            body: "Female endocrine, metabolic and inflammatory panel, timed to your cycle — or any day if peri or post-meno. Australian-accredited lab, walk-in.",
          },
          {
            label: "Step 03 · 48hr",
            title: "Doctor reads. Plan, or no plan.",
            body: "A women's-health doctor reads the full panel and consults with you. If indicated, your plan is decided on the call.",
          },
        ],
        doctorHeading: "A women's-health doctor who treats this as physiology",
        doctor: doctorBySlug("r-bennett"),
        panelHeading: "The female endocrine panel, against its intervals.",
        panelIntro:
          "Six markers, shown the way your doctor reads them — value, unit and the Australian reference interval, aligned so they compare down the column. Intervals are cycle-phase dependent; your doctor reads yours against the right one.",
        markers: [
          { name: "Oestradiol (day 3)", value: 104, unit: "pmol/L", low: 90, high: 400 },
          { name: "Total testosterone", value: 0.6, unit: "nmol/L", low: 0.5, high: 1.7 },
          { name: "SHBG", value: 118, unit: "nmol/L", low: 26, high: 110 },
          { name: "Prolactin", value: 288, unit: "mIU/L", low: 45, high: 375 },
          { name: "TSH", value: 2.8, unit: "mIU/L", low: 0.4, high: 4.0 },
          { name: "Ferritin", value: 19, unit: "µg/L", low: 30, high: 300 },
        ],
        faqs: [
          {
            q: "Is this only about libido?",
            a: "No. Desire, arousal, comfort and response are separate things with separate physiology, and the consult separates them out rather than collapsing them into one word.",
          },
          {
            q: "I'm on contraception. Does that change the panel?",
            a: "It changes how several markers are interpreted, which is exactly why it belongs on the assessment. Your doctor reads the panel with that in mind.",
          },
          {
            q: "Can I ask for a female doctor?",
            a: "Yes. Ask at assessment and you will be matched accordingly.",
          },
          {
            q: "What if my doctor says no?",
            a: "Your $149 is refunded in full and you keep your bloods and your written read. Around 14% of assessments are declined.",
          },
        ],
        complianceNote:
          "Pepper Me does not advertise prescription medicines. This page describes a program of care for adult Australian women. Specific medicines and doses are discussed with your Australian doctor after your bloods and assessment.",
        crossLink: {
          label: "For him",
          heading: "Looking for the men's program?",
          body: "Same prescribing standard. Different physiology. Sexual medicine doctors read the male endocrine and vascular chain together.",
          cta: "View his program →",
          href: "/protocols/sexual-health/him",
        },
      }}
    />
  );
}
