import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { Editorial } from "@/components/ui/Editorial";
import { MonoData, MonoTag } from "@/components/ui/MonoTag";
import { COMPLIANCE_NOTE } from "@/content/site";
import { PRICING } from "@/content/protocols";

export const metadata: Metadata = {
  title: "Prescribing standard",
  description:
    "The five rules every Pepper Me doctor prescribes by, the decline rate, and what a patient is entitled to expect from a consult.",
  alternates: { canonical: "/prescribing-standard" },
};

const RULES = [
  {
    title: "Bloods before scripts.",
    body: "No plan is proposed before a comprehensive panel has been drawn and read. A symptom questionnaire is not a diagnosis, and a consult without bloodwork is not a consult we will bill for.",
  },
  {
    title: "Read all panels together.",
    body: "Endocrine, metabolic, inflammatory and sleep markers are read on one record by one doctor. A marker that sits outside its reference interval is read against the rest of the panel, never on its own.",
  },
  {
    title: "Decline if the data doesn't justify it.",
    body: `Around 14% of assessments end with a doctor declining to prescribe. Those patients keep their bloods and their written read, and the ${PRICING.entry} is refunded in full. A decline is the standard working, not the standard failing.`,
  },
  {
    title: "Lowest dose that moves the number.",
    body: "Where a plan is indicated, it starts under-dosed and is titrated only when fresh bloods justify the change. Nothing is escalated on how a patient says they feel alone.",
  },
  {
    title: "Re-read every 12 weeks.",
    body: "Fresh bloods, a fresh read, and a plan that changes with the data or ends. No plan runs indefinitely without a doctor looking at it again.",
  },
];

const RIGHTS = [
  "The name and AHPRA registration number of the doctor who read your panel.",
  "A written read of your results in plain language, yours to keep and to give to your GP.",
  "The reasoning behind a decline, in writing, and a full refund.",
  "A second opinion from another Pepper Me doctor, at your request.",
  "Your complete record, exported on request, at any time.",
];

export default function PrescribingStandardPage() {
  return (
    <>
      <Section ground="page">
        <MonoTag>Prescribing standard</MonoTag>
        <h1 className="t-h1 mt-[var(--space-4)] max-w-[22ch] text-text-primary">
          What every Pepper Me doctor prescribes by<span className="mark">.</span>
        </h1>
        <p className="t-body-lg mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
          This is the standard our doctors hold each other to, published so that you can
          hold us to it as well. It is reviewed by the medical board quarterly and applies
          to every program of care on this site.
        </p>
        <Editorial className="mt-[var(--space-6)] text-text-primary">
          The body doesn&rsquo;t have specialists.
        </Editorial>
      </Section>

      <Section ground="page" hairlineTop>
        <h2 className="t-h2 max-w-[24ch] text-text-primary">
          Five rules<span className="mark">.</span>
        </h2>
        <ol className="m-0 mt-[var(--space-6)] list-none p-0">
          {RULES.map((rule, i) => (
            <li
              key={rule.title}
              className="grid gap-[var(--space-3)] border-t border-border-hairline py-[var(--space-5)] md:grid-cols-[64px_1fr_1.4fr]"
            >
              <MonoData className="text-text-disabled">
                {String(i + 1).padStart(2, "0")}
              </MonoData>
              <h3 className="t-h4 m-0 text-text-primary">{rule.title}</h3>
              <p className="t-body-sm m-0 text-text-secondary">{rule.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section ground="muted">
        <MonoTag>What you are entitled to</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[24ch] text-text-primary">
          Every patient, every consult<span className="mark">.</span>
        </h2>
        <ul className="m-0 mt-[var(--space-6)] max-w-[var(--container-text)] list-none border-t border-border-hairline p-0">
          {RIGHTS.map((right) => (
            <li
              key={right}
              className="t-body border-b border-border-hairline py-[var(--space-4)] text-text-secondary"
            >
              {right}
            </li>
          ))}
        </ul>
      </Section>

      <Section ground="inverse">
        <h2 className="t-h2 max-w-[26ch] text-text-primary">
          If a doctor of ours falls short of this, we want to hear about it
          <span className="mark">.</span>
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          Every complaint is read by the lead clinician, not by support. You can also raise
          a concern about any registered practitioner directly with AHPRA, and nothing on
          this page limits that right.
        </p>
        <Button href="/doctors" variant="secondary">
          Meet the doctors
        </Button>
      </Section>

      <Disclaimer label="42DLB · note">{COMPLIANCE_NOTE}</Disclaimer>
    </>
  );
}
