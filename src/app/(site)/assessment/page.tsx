import type { Metadata } from "next";
import { AssessmentFlow } from "@/components/pages/AssessmentFlow";
import { Section } from "@/components/layout/Section";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { MonoTag } from "@/components/ui/MonoTag";
import { COMPLIANCE_NOTE } from "@/content/site";

export const metadata: Metadata = {
  title: "Assessment",
  description:
    "A three-minute assessment. An AHPRA-registered Australian doctor reviews it within 24 hours. No payment is taken on the form.",
};

export default function AssessmentPage() {
  return (
    <>
      <Section ground="page" tight hairlineBottom>
        <MonoTag index="07">Assessment</MonoTag>
        <h1 className="t-h3 mt-[var(--space-3)] max-w-[30ch] text-text-primary">
          The doctor reads everything before you pay<span className="mark">.</span>
        </h1>
      </Section>

      <AssessmentFlow />

      <Disclaimer label="42DLB · note">{COMPLIANCE_NOTE}</Disclaimer>
    </>
  );
}
