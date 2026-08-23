import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { MonoTag } from "@/components/ui/MonoTag";
import { AudienceBand } from "@/components/view/AudienceBand";
import { CrossLinkBand } from "@/components/view/CrossLinkBand";
import { ProtocolGrid } from "@/components/view/ProtocolGrid";
import { PROTOCOLS } from "@/content/protocols";
import { COMPLIANCE_NOTE } from "@/content/site";

export const metadata: Metadata = {
  title: "Programs of care",
  description:
    "Six body systems, read together by one Australian doctor. Each program describes an area of care — specific medicines are discussed on the consult.",
};

export default function ProtocolsPage() {
  return (
    <>
      <AudienceBand />

      <Section ground="page">
        <MonoTag index="02">Programs of care</MonoTag>
        <h1 className="t-h1 mt-[var(--space-4)] max-w-[18ch] text-text-primary">
          Six body systems<span className="mark">.</span> Read together by your doctor.
        </h1>
        <p className="t-body-lg mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
          Pepper Me organises modern medicine the way the body actually works — across
          systems, not specialists. Your doctor decides which medicines, at which doses,
          after a comprehensive blood panel and consultation. We don&rsquo;t sell medicines
          on this page.
        </p>
      </Section>

      <Disclaimer label="42DLB · note">{COMPLIANCE_NOTE}</Disclaimer>

      <Section ground="page">
        <ProtocolGrid protocols={[...PROTOCOLS]} />
      </Section>

      <Section ground="muted">
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[1fr_1.4fr]">
          <div>
            <MonoTag>Why read together</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              The body doesn&rsquo;t have specialists<span className="mark">.</span>
            </h2>
          </div>
          <p className="t-body-lg text-text-secondary">
            Most clinics treat one panel at a time. Pepper Me reads them together —
            endocrine, inflammatory, sleep, metabolic — because that&rsquo;s the only way the
            answer makes sense. One doctor. One record. Six body systems on the same canvas.
          </p>
        </div>
      </Section>

      <CrossLinkBand />
    </>
  );
}
