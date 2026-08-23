import type { Metadata } from "next";
import { GenderedProgramPage } from "@/components/pages/GenderedProgramPage";
import { doctorBySlug } from "@/content/doctors";

export const metadata: Metadata = {
  title: "Hormonal care for men",
  description:
    "An endocrinology-led program of male hormonal care: a 68-marker panel, a consult with an AHPRA-registered Australian doctor, and an ongoing read.",
};

export default function HormonalHimPage() {
  return (
    <GenderedProgramPage
      program={{
        ground: "inverse",
        eyebrow: "HRM · M / 07 · For men",
        title: "Hormonal care for men",
        intro:
          "If you searched “male hormone clinic” or “testosterone test”, you found the right page. Pepper Me runs an endocrinology-led program of male hormonal care — comprehensive bloods, doctor consult, ongoing read.",
        cta: "Start his assessment →",
        heroImage: "hormonal-him-hero",
        stats: [
          { value: "14", label: "AHPRA doctors" },
          { value: "68", label: "Markers, male endocrine panel" },
          { value: "24 hr", label: "Assessment reviewed within" },
          { value: "$149", label: "To start" },
        ],
        qualifierHeading: "Men whose bloodwork explains it",
        qualifiers: [
          {
            title: "You've noticed energy, drive or recovery slipping",
            body: "And training, sleep and diet aren't the missing variable anymore.",
          },
          {
            title: "Your GP ran a single panel and called it “in range”",
            body: "“In range” for the average 70-year-old isn't a number to optimise from.",
          },
          {
            title: "You want a doctor reading the full system, not one number",
            body: "Free and total testosterone, SHBG, oestradiol, LH, FSH, prolactin, DHEA, IGF-1, thyroid, metabolic and inflammatory markers. Read together.",
          },
          {
            title: "You're willing to wait 24 hours for a real doctor",
            body: "Around 14% of assessments are declined. Pepper Me doctors don't prescribe if the data doesn't justify it.",
          },
        ],
        stepsHeading: "Three steps. Then a doctor",
        steps: [
          {
            label: "Step 01 · 3 min",
            title: "Assessment. No payment yet.",
            body: "Tell us what you're noticing. Medical history, current state, what you've tried. An Australian doctor reviews within 24 hours.",
          },
          {
            label: "Step 02 · this week",
            title: "Bloods at your nearest lab.",
            body: "Comprehensive 68-marker male endocrine panel at an Australian-accredited lab. Walk-in, no appointment.",
          },
          {
            label: "Step 03 · 48hr",
            title: "Doctor reads. Plan, or no plan.",
            body: "An endocrinologist or sports physician reads the full panel and consults with you. If indicated, your plan is decided on the call.",
          },
        ],
        doctorHeading:
          "An Australian endocrinologist reads your panel. Not a script printer",
        doctor: doctorBySlug("m-holt"),
        panelHeading: "The male endocrine panel, against its intervals.",
        panelIntro:
          "Six of the 68 markers, shown the way your doctor reads them — value, unit and the Australian reference interval, aligned so they compare down the column. What a result means for you is decided on the consult.",
        markers: [
          { name: "Total testosterone", value: 11.4, unit: "nmol/L", low: 8.3, high: 29.0 },
          { name: "Free testosterone", value: 158, unit: "pmol/L", low: 170, high: 620 },
          { name: "SHBG", value: 62, unit: "nmol/L", low: 18, high: 54 },
          { name: "LH", value: 4.2, unit: "IU/L", low: 1.7, high: 8.6 },
          { name: "Oestradiol", value: 94, unit: "pmol/L", low: 40, high: 160 },
          { name: "IGF-1", value: 18.2, unit: "nmol/L", low: 11.0, high: 30.0 },
        ],
        faqs: [
          {
            q: "Is this a single-medicine program?",
            a: "No. The program reads the full male endocrine panel and decides — with you, with a doctor — what, if anything, makes sense. We don't sell a single medicine.",
          },
          {
            q: "What if my doctor says no?",
            a: "Your $149 is refunded in full and you keep your bloods and your written read. Around 14% of assessments are declined.",
          },
          {
            q: "How long until I notice anything?",
            a: "If your doctor decides a plan is indicated, most members are re-read at week 8 against fresh bloods. What changes, and when, is discussed on the consult.",
          },
          {
            q: "Is this for younger men too?",
            a: "Adults 25 and over with symptoms supported by bloodwork. Pepper Me doctors decline on age and indication when appropriate.",
          },
        ],
        complianceNote:
          "Pepper Me does not advertise prescription medicines. This page describes a program of care for adult Australian men. Specific medicines and doses are discussed with your Australian doctor after your bloods and assessment.",
        crossLink: {
          label: "For her",
          heading: "Looking for the women's hormonal program?",
          body: "Same prescribing standard. Different endocrine system. Women's-health doctors read cycle, peri and post-menopause as one program.",
          cta: "View her program →",
          href: "/protocols/hormonal/her",
        },
      }}
    />
  );
}
