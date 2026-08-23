import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { Editorial } from "@/components/ui/Editorial";
import { MonoData, MonoTag } from "@/components/ui/MonoTag";
import { SiteImage } from "@/components/ui/SiteImage";
import { StatRail } from "@/components/ui/StatRail";
import { DOCTORS, doctorBySlug } from "@/content/doctors";

export const metadata: Metadata = {
  title: "Doctors",
  description:
    "14 AHPRA-registered Australian doctors across endocrinology, sports medicine, sleep, psychiatry and longevity. Every registration number is public and verifiable.",
};

const RULES = [
  { title: "Bloods before scripts.", body: "No plan is proposed before a panel is read." },
  { title: "Read all panels together.", body: "Endocrine, metabolic, inflammatory and sleep, on one record." },
  { title: "Decline if data doesn't justify.", body: "Around 14% of assessments end in a decline, with the reasoning sent." },
  { title: "Lowest dose that moves the number.", body: "Start under-dosed and titrate only when bloods justify it." },
  { title: "Re-read every 12 weeks.", body: "Fresh bloods, a fresh read, and a plan that changes with the data." },
];

export default function DoctorsPage() {
  const lead = doctorBySlug("a-reid");

  return (
    <>
      <Section ground="page">
        <MonoTag index="04">The doctors behind it</MonoTag>
        <h1 className="t-h1 mt-[var(--space-4)] max-w-[20ch] text-text-primary">
          Real Australian doctors<span className="mark">.</span> Not a script printer.
        </h1>
        <p className="t-body-lg mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
          14 AHPRA-registered doctors across endocrinology, sports medicine, sleep,
          psychiatry and longevity. They read every assessment in full, decline patients
          when the data doesn&rsquo;t justify a prescription, and stay with you across cycles.
        </p>
        <StatRail
          className="mt-[var(--space-7)]"
          stats={[
            { value: "14", label: "Active doctors" },
            { value: "4 hr", label: "Median reply" },
            { value: "~14%", label: "Decline rate" },
            { value: "8+ yr", label: "Average practice" },
          ]}
        />
      </Section>

      <Section ground="muted">
        <Card className="grid gap-0 lg:grid-cols-[0.8fr_1fr]">
          <SiteImage id={lead.portrait} ratio="4 / 5" code={lead.ahpra} sizes="(max-width: 1024px) 100vw, 480px" />
          <div className="flex flex-col gap-[var(--space-3)] p-[var(--card-padding)]">
            <MonoTag>Lead clinician · {lead.discipline}</MonoTag>
            <h2 className="t-h2 m-0 text-text-primary">
              {lead.name}
              <span className="mark">.</span>
            </h2>
            <p className="t-body m-0 text-text-secondary">{lead.bio}</p>
            <Editorial className="text-text-primary">&ldquo;{lead.quote}&rdquo;</Editorial>
            <dl className="m-0 mt-auto grid grid-cols-3 gap-[var(--space-4)] border-t border-border-hairline pt-[var(--space-4)]">
              {[
                { k: "AHPRA", v: lead.ahpra },
                { k: "Practice", v: `${lead.years} years` },
                { k: "Focus", v: lead.reads },
              ].map((row) => (
                <div key={row.k}>
                  <MonoData as="dt" className="text-text-disabled">
                    {row.k}
                  </MonoData>
                  <MonoData as="dd" className="m-0 mt-[var(--space-1)] text-text-primary">
                    {row.v}
                  </MonoData>
                </div>
              ))}
            </dl>
          </div>
        </Card>
      </Section>

      <Section ground="page">
        <MonoTag>The roster</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
          Every doctor, every registration number<span className="mark">.</span>
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          Each number below is a public AHPRA registration. Look any of them up.
        </p>
        <ul className="mt-[var(--space-6)] grid list-none gap-[14px] p-0 md:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.map((d) => (
            <li key={d.slug} className="contents">
              <DoctorCard doctor={d} />
            </li>
          ))}
        </ul>
      </Section>

      <Section ground="muted" id="prescribing-standard">
        <MonoTag index="03">Prescribing standard</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[26ch] text-text-primary">
          Five rules every Pepper Me doctor prescribes by<span className="mark">.</span>
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          The standard in full, including what every patient is entitled to expect from a
          consult, is published at{" "}
          <Link href="/prescribing-standard">the prescribing standard</Link>.
        </p>
        <ol className="m-0 mt-[var(--space-7)] grid list-none gap-[var(--space-6)] p-0 md:grid-cols-3 lg:grid-cols-5">
          {RULES.map((r, i) => (
            <li key={r.title} className="border-t border-border-strong pt-[var(--space-3)]">
              <MonoData className="text-text-disabled">
                {String(i + 1).padStart(2, "0")}
              </MonoData>
              <h3 className="t-h4 mt-[var(--space-2)] text-text-primary">{r.title}</h3>
              <p className="t-body-sm mt-[var(--space-2)] mb-0 text-text-secondary">{r.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section ground="inverse">
        <h2 className="t-h2 max-w-[24ch] text-text-primary">
          Your panel is read by one of them<span className="mark">.</span>
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          $149 covers the assessment, the panel and the consult. Refunded in full if your
          doctor declines to prescribe.
        </p>
        <Button href="/assessment">Start for $149 →</Button>
      </Section>
    </>
  );
}
