import type { Metadata } from "next";
import { GenderedProgramPage } from "@/components/pages/GenderedProgramPage";
import { doctorBySlug } from "@/content/doctors";

export const metadata: Metadata = {
  title: "Sexual health care for men",
  description:
    "A sexual medicine program for men: an endocrine, vascular and metabolic panel, a consult with an AHPRA-registered Australian doctor, and an ongoing read.",
  alternates: { canonical: "/protocols/sexual-health/him" },
};

export default function SexualHealthHimPage() {
  return (
    <GenderedProgramPage
      program={{
        ground: "inverse",
        eyebrow: "SXL · M / 03 · For men",
        title: "Sexual health for men",
        intro:
          "Response sits at the end of an endocrine and vascular chain. Treating the end of the chain is where most care starts and where most of it stops working. Pepper Me reads the whole chain first — and catches the vascular and metabolic findings that show up here before they show up anywhere else.",
        cta: "Start his assessment →",
        heroImage: "sexual-him-hero",
        stats: [
          { value: "14", label: "AHPRA doctors" },
          { value: "48", label: "Markers, endocrine and vascular" },
          { value: "24 hr", label: "Assessment reviewed within" },
          { value: "$149", label: "To start" },
        ],
        qualifierHeading: "Men who want the cause, not the workaround",
        qualifiers: [
          {
            title: "It changed, and you can roughly date it",
            body: "A change with a timeline is a change with a cause, and a cause is something a panel can look for.",
          },
            {
            title: "Your GP offered a script without taking bloods",
            body: "That treats the symptom and leaves the endocrine and vascular picture unread.",
          },
          {
            title: "You'd want to know about a vascular finding",
            body: "Symptoms here can precede cardiovascular findings elsewhere. This is one of the clearest reasons to investigate rather than patch.",
          },
          {
            title: "Mood, sleep and energy moved at the same time",
            body: "Several systems changing together points at one upstream cause, not four separate ones.",
          },
        ],
        stepsHeading: "Three steps. Then a doctor",
        steps: [
          {
            label: "Step 01 · 3 min",
            title: "Assessment. No payment yet.",
            body: "What changed, when, and what you have already tried. An Australian doctor reviews within 24 hours.",
          },
          {
            label: "Step 02 · this week",
            title: "Bloods at your nearest lab.",
            body: "Endocrine, vascular, lipid and metabolic panel at an Australian-accredited lab. Walk-in, no appointment.",
          },
          {
            label: "Step 03 · 48hr",
            title: "Doctor reads. Plan, or no plan.",
            body: "A sexual medicine doctor reads the full panel and consults with you. If indicated, your plan is decided on the call.",
          },
        ],
        doctorHeading: "A sexual medicine doctor reads the chain, not just the symptom",
        doctor: doctorBySlug("s-crawford"),
        panelHeading: "The male endocrine and vascular panel, against its intervals.",
        panelIntro:
          "Six markers, shown the way your doctor reads them — value, unit and the Australian reference interval, aligned so they compare down the column.",
        markers: [
          { name: "Total testosterone", value: 9.8, unit: "nmol/L", low: 8.3, high: 29.0 },
          { name: "Free testosterone", value: 152, unit: "pmol/L", low: 170, high: 620 },
          { name: "SHBG", value: 47, unit: "nmol/L", low: 18, high: 54 },
          { name: "Prolactin", value: 402, unit: "mIU/L", low: 45, high: 375 },
          { name: "HbA1c", value: 6.1, unit: "%", low: 4.0, high: 6.0 },
          { name: "ApoB", value: 1.28, unit: "g/L", low: 0.6, high: 1.2 },
        ],
        faqs: [
          {
            q: "Why take bloods at all?",
            a: "Because response is downstream of endocrine and vascular function. A panel finds the cause, and it catches a metabolic or vascular finding that would otherwise go unread for years.",
          },
          {
            q: "How private is the consult?",
            a: "One-to-one, by video, with the doctor treating you. Your record is not visible to anyone else at Pepper Me without your say-so.",
          },
          {
            q: "What if my doctor says no?",
            a: "Your $149 is refunded in full and you keep your bloods and your written read. Around 14% of assessments are declined.",
          },
          {
            q: "Is there an age limit?",
            a: "Adults 25 and over with symptoms supported by bloodwork. Your doctor decides on indication, not on age alone.",
          },
        ],
        complianceNote:
          "Pepper Me does not advertise prescription medicines. This page describes a program of care for adult Australian men. Specific medicines and doses are discussed with your Australian doctor after your bloods and assessment.",
        crossLink: {
          label: "For her",
          heading: "Looking for the women's program?",
          body: "Same prescribing standard. Different physiology. Women's-health-trained doctors read desire, arousal and response against the full female endocrine panel.",
          cta: "View her program →",
          href: "/protocols/sexual-health/her",
        },
      }}
    />
  );
}
