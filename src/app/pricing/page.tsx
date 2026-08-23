import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { Faq } from "@/components/ui/Faq";
import { MonoData, MonoTag } from "@/components/ui/MonoTag";
import { PRICING } from "@/content/protocols";
import { COMPLIANCE_NOTE } from "@/content/site";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "$99 covers the assessment, the blood panel and a consult with an Australian doctor — refunded in full if they decline. Ongoing care from $180/month, only if indicated.",
};

/*
 * Reconciled to the $99 model.
 *
 * The pricing prototype still carried the older $280–$640/month per-protocol
 * table, priced against named medicines. Both had to go: the handoff states the
 * $99 model on the protocol pages is correct, and a public page may not name or
 * price a prescription medicine. What is priced here is the program of care.
 *
 * No tier is marked "most popular" or "recommended" — that is a soft inducement.
 */

const INCLUDED = [
  {
    title: "Comprehensive bloods",
    body: "42–68 markers depending on the program. Australian-accredited lab, walk-in.",
  },
  {
    title: "Doctor consult",
    body: "30 minutes with an AHPRA-registered Australian doctor who reads everything together.",
  },
  {
    title: "A written read",
    body: "What your panel says, in plain language. Yours to keep, share, or take to your GP.",
  },
  {
    title: "Direct doctor line",
    body: "Message your prescribing doctor once on program. Median reply four hours.",
  },
  {
    title: "Quarterly re-read",
    body: "New bloods every 12 weeks. The plan changes with the data, or it ends.",
  },
];

const ADD_ONS = [
  { title: "Epigenetic pace-of-ageing", price: "$280 / quarter", body: "Biological age and pace of ageing, measured." },
  { title: "Sleep diagnostic", price: "$340", body: "14-night ring plus a sleep physician read." },
  { title: "Continuous glucose", price: "$160", body: "A 14-day continuous glucose month." },
  { title: "Second opinion", price: "$220", body: "Bring bloods you already have. We read them." },
];

const FAQS = [
  {
    q: "Is there a membership fee?",
    a: "No. $99 covers the assessment, the blood panel and the consult. If a plan is indicated, ongoing care is from $180/month and is discussed with your doctor on the consult — never before.",
  },
  {
    q: "What if my doctor declines?",
    a: "Your $99 is refunded in full. You keep your bloods and your written read. Around 14% of assessments are declined.",
  },
  {
    q: "Can I cancel mid-cycle?",
    a: "Yes. Cancel any time. We don't lock you in beyond care you've already received.",
  },
  {
    q: "Does private health cover this?",
    a: "Some bloods qualify for a partial Medicare rebate. Compounded medicines do not. Every invoice states what was charged and why.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Section ground="page">
        <MonoTag index="05">Pricing</MonoTag>
        <h1 className="t-h1 mt-[var(--space-4)] max-w-[18ch] text-text-primary">
          {PRICING.entry} to start<span className="mark">.</span> Refunded if your doctor
          declines.
        </h1>
        <p className="t-body-lg mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
          No tier ladder, no annual fee. {PRICING.entry} covers your assessment, your
          comprehensive blood panel and a 30-minute consult with an Australian doctor who
          reads it. If a plan is indicated, ongoing care is from {PRICING.ongoingFrom}
          {PRICING.ongoingInterval} — decided on the consult, never advertised beforehand.
        </p>
        <div className="flex flex-wrap items-center gap-[var(--space-4)]">
          <Button href="/assessment">Start for {PRICING.entry} →</Button>
          <MonoData className="text-text-secondary">
            No payment on the assessment form
          </MonoData>
        </div>
      </Section>

      <Section ground="muted">
        <MonoTag>In every program</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[26ch] text-text-primary">
          Everything that should already be standard<span className="mark">.</span>
        </h2>
        <ul className="m-0 mt-[var(--space-7)] grid list-none gap-[var(--space-6)] p-0 md:grid-cols-3 lg:grid-cols-5">
          {INCLUDED.map((inc) => (
            <li key={inc.title} className="border-t border-border-strong pt-[var(--space-3)]">
              <h3 className="t-h4 m-0 text-text-primary">{inc.title}</h3>
              <p className="t-body-sm mt-[var(--space-2)] mb-0 text-text-secondary">
                {inc.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section ground="page">
        <MonoTag>By program</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[26ch] text-text-primary">
          One price to start. What differs is what gets read
          <span className="mark">.</span>
        </h2>
        <div className="mt-[var(--space-6)]">
          <DataTable
            caption="What each program reads, and what it costs to start"
            head={["Program", "What's read", "Consult", "Re-read", "To start"]}
            rows={[
              ["Recovery · RCV-04", "42-marker recovery panel", "Sports physician", "Quarterly", PRICING.entry],
              ["Performance · PRF-02", "68-marker performance panel", "Sports physician", "Quarterly", PRICING.entry],
              ["Sleep · SLP-01", "Sleep diagnostic + hormonal panel", "Sleep physician", "Quarterly", PRICING.entry],
              ["Hormonal · HRM-M", "68-marker male endocrine panel", "Endocrinology", "Every 8 weeks", PRICING.entry],
              ["Hormonal · HRM-W", "62-marker female panel, cycle-timed", "Women's health", "Every 8 weeks", PRICING.entry],
              ["Longevity · LNG-09", "Metabolic, inflammatory + epigenetic", "Longevity GP", "Quarterly", PRICING.entry],
            ]}
          />
        </div>
        <p className="t-body-sm mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
          Ongoing care, if your doctor decides it is indicated, is from{" "}
          {PRICING.ongoingFrom}
          {PRICING.ongoingInterval} all-in — care, re-bloods and doctor reviews. What that
          plan is, and what it costs for you, is discussed on the consult.
        </p>
      </Section>

      <Section ground="muted">
        <MonoTag>Read together</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[26ch] text-text-primary">
          Systems your doctor commonly reads as one<span className="mark">.</span>
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          These aren&rsquo;t packages to choose between. They are the combinations doctors
          most often end up reading together, on one record, for one {PRICING.entry} start.
        </p>
        <ul className="m-0 mt-[var(--space-6)] grid list-none gap-[14px] p-0 md:grid-cols-3">
          {[
            {
              title: "Recovery + performance",
              body: "Soft-tissue recovery read against the endocrine and metabolic markers that govern it.",
            },
            {
              title: "Hormonal + sleep",
              body: "The two systems that throttle everything else, read on the same panel.",
            },
            {
              title: "Longevity + hormonal",
              body: "Cellular and endocrine markers, tracked on the same quarterly cadence.",
            },
          ].map((b) => (
            <Card key={b.title} as="li" className="p-[var(--card-padding)]">
              <h3 className="t-h4 m-0 text-text-primary">{b.title}</h3>
              <p className="t-body-sm mt-[var(--space-3)] mb-0 text-text-secondary">{b.body}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section ground="page">
        <MonoTag>Add-ons</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
          Extra eyes when you want them<span className="mark">.</span>
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          Layer onto any program. No commitment beyond the cycle.
        </p>
        <ul className="m-0 mt-[var(--space-6)] grid list-none gap-[14px] p-0 sm:grid-cols-2">
          {ADD_ONS.map((a) => (
            <Card key={a.title} as="li" className="flex flex-col gap-[var(--space-2)] p-[var(--card-padding)]">
              <div className="flex flex-wrap items-baseline justify-between gap-[var(--space-3)]">
                <h3 className="t-h4 m-0 text-text-primary">{a.title}</h3>
                <MonoData className="text-text-secondary">{a.price}</MonoData>
              </div>
              <p className="t-body-sm m-0 text-text-secondary">{a.body}</p>
            </Card>
          ))}
        </ul>
      </Section>

      <Section ground="page" id="faq" hairlineTop>
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <MonoTag>Pricing FAQ</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              The boring but important bits<span className="mark">.</span>
            </h2>
          </div>
          <Faq items={FAQS} />
        </div>
      </Section>

      <Disclaimer label="42DLB · note">{COMPLIANCE_NOTE}</Disclaimer>
    </>
  );
}
