import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Disclaimer } from "../ui/Disclaimer";
import { Editorial } from "../ui/Editorial";
import { Faq, type QA } from "../ui/Faq";
import { MonoData, MonoTag } from "../ui/MonoTag";
import { Placeholder } from "../ui/Placeholder";
import { ReferenceRangeSet, type Marker } from "../ui/ReferenceRangeBar";
import { StatRail, type Stat } from "../ui/StatRail";
import type { Doctor } from "@/content/doctors";
import { PRICING } from "@/content/protocols";

export type GenderedProgram = {
  /** Ink hero for him, Cream hero for her. */
  ground: "inverse" | "muted";
  eyebrow: string;
  title: string;
  intro: string;
  cta: string;
  heroBrief: string;
  stats: Stat[];
  qualifierHeading: string;
  qualifiers: { title: string; body: string }[];
  stepsHeading: string;
  steps: { label: string; title: string; body: string }[];
  doctorHeading: string;
  doctor: Doctor;
  panelHeading: string;
  panelIntro: string;
  markers: Marker[];
  faqs: QA[];
  complianceNote: string;
  crossLink: { label: string; heading: string; body: string; cta: string; href: string };
};

/**
 * The male- and female-direct landing variants. Same structure, same
 * prescribing standard, different endocrine system — which is what the ground
 * change encodes.
 *
 * The member-proof section the prototypes carried here is gone: ratings and
 * patient quotes have no compliant form. The doctor feature and the panel block
 * carry the trust instead.
 */
export function GenderedProgramPage({ program }: { program: GenderedProgram }) {
  return (
    <>
      <section data-ground={program.ground}>
        <Container className="grid min-h-[600px] items-center gap-[var(--space-8)] py-[var(--space-9)] lg:grid-cols-[1.1fr_1fr]">
          <div>
            <MonoTag>{program.eyebrow}</MonoTag>
            <h1 className="t-display mt-[var(--space-4)] text-text-primary">
              {program.title}
              <span className="mark">.</span>
            </h1>
            <p className="t-body-lg mt-[var(--space-5)] max-w-[54ch] text-text-secondary">
              {program.intro}
            </p>
            <div className="flex flex-wrap items-center gap-[var(--space-4)]">
              <Button href="/assessment">{program.cta}</Button>
              <Button href="/science" variant="secondary">
                Read the science
              </Button>
              <MonoData className="text-text-secondary">3 min · no payment yet</MonoData>
            </div>
            <StatRail className="mt-[var(--space-7)]" stats={program.stats} />
          </div>
          <Placeholder height="480px" brief={program.heroBrief} />
        </Container>
      </section>

      <Section ground="page">
        <MonoTag>Who this is for</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
          {program.qualifierHeading}
          <span className="mark">.</span>
        </h2>
        <ol className="m-0 mt-[var(--space-6)] list-none p-0">
          {program.qualifiers.map((q, i) => (
            <li
              key={q.title}
              className="grid gap-[var(--space-3)] border-t border-border-hairline py-[var(--space-5)] md:grid-cols-[64px_1fr_1.2fr]"
            >
              <MonoData className="text-text-disabled">
                {String(i + 1).padStart(2, "0")}
              </MonoData>
              <h3 className="t-h4 m-0 text-text-primary">{q.title}</h3>
              <p className="t-body-sm m-0 text-text-secondary">{q.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section ground="muted">
        <MonoTag>How it works</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
          {program.stepsHeading}
          <span className="mark">.</span>
        </h2>
        <ol className="m-0 mt-[var(--space-7)] grid list-none gap-[var(--space-6)] p-0 lg:grid-cols-3">
          {program.steps.map((s) => (
            <li key={s.label} className="border-t border-border-strong pt-[var(--space-4)]">
              <MonoTag>{s.label}</MonoTag>
              <h3 className="t-h3 mt-[var(--space-3)] text-text-primary">{s.title}</h3>
              <p className="t-body mt-[var(--space-3)] mb-0 text-text-secondary">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section ground="page">
        <MonoTag>Your prescribing doctor</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[26ch] text-text-primary">
          {program.doctorHeading}
          <span className="mark">.</span>
        </h2>
        <Card className="mt-[var(--space-6)] grid gap-0 md:grid-cols-[0.6fr_1fr]">
          <Placeholder
            ratio="4 / 5"
            brief={program.doctor.portraitAlt}
            code={program.doctor.ahpra}
          />
          <div className="flex flex-col gap-[var(--space-3)] p-[var(--card-padding)]">
            <MonoTag>
              {program.doctor.discipline} · {program.doctor.city}
            </MonoTag>
            <h3 className="t-h3 m-0 text-text-primary">
              {program.doctor.name}
              <span className="mark">.</span>
            </h3>
            <p className="t-body m-0 text-text-secondary">{program.doctor.bio}</p>
            {program.doctor.quote ? (
              <Editorial className="mt-[var(--space-2)] text-text-primary">
                &ldquo;{program.doctor.quote}&rdquo;
              </Editorial>
            ) : null}
            <dl className="m-0 mt-auto grid grid-cols-3 gap-[var(--space-4)] border-t border-border-hairline pt-[var(--space-4)]">
              {[
                { k: "AHPRA", v: program.doctor.ahpra },
                { k: "Practice", v: `${program.doctor.years} years` },
                { k: "Reads", v: program.doctor.reads },
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

      <Section ground="page" hairlineTop id="panel">
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[1fr_1.2fr]">
          <div>
            <MonoTag>What gets measured</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              {program.panelHeading}
            </h2>
            <p className="t-body mt-[var(--space-5)] text-text-secondary">
              {program.panelIntro}
            </p>
          </div>
          <ReferenceRangeSet
            markers={program.markers}
            caption="Illustrative panel · Australian reference intervals · not a patient record"
          />
        </div>
      </Section>

      <Section ground="page">
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <MonoTag>FAQ</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              Specific. Clinical. No fluff<span className="mark">.</span>
            </h2>
          </div>
          <Faq items={program.faqs} />
        </div>
      </Section>

      <Disclaimer label="42DLB · note">{program.complianceNote}</Disclaimer>

      <Section ground="muted">
        <MonoTag>{program.crossLink.label}</MonoTag>
        <h2 className="t-h3 mt-[var(--space-3)] max-w-[28ch] text-text-primary">
          {program.crossLink.heading}
        </h2>
        <p className="t-body mt-[var(--space-3)] max-w-[var(--container-text)] text-text-secondary">
          {program.crossLink.body}
        </p>
        <Button href={program.crossLink.href} variant="secondary">
          {program.crossLink.cta}
        </Button>
      </Section>

      <Section ground="inverse" tight>
        <div className="flex flex-wrap items-center justify-between gap-[var(--space-4)]">
          <p className="t-body m-0 text-text-secondary">
            {PRICING.entry} to start · {PRICING.refundLine}
          </p>
          <Link
            href="/pricing"
            className="t-ui text-text-primary underline decoration-border-inactive decoration-1 underline-offset-4"
          >
            See what ongoing care costs →
          </Link>
        </div>
      </Section>
    </>
  );
}
