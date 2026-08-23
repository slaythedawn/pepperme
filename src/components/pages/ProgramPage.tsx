import Link from "next/link";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Disclaimer } from "../ui/Disclaimer";
import { DoctorCard } from "../ui/DoctorCard";
import { Editorial } from "../ui/Editorial";
import { Faq, type QA } from "../ui/Faq";
import { ForkBlock, type ForkPanel } from "../ui/ForkBlock";
import { MonoData, MonoTag } from "../ui/MonoTag";
import { SiteImage } from "../ui/SiteImage";
import { ReferenceRangeSet, type Marker } from "../ui/ReferenceRangeBar";
import { doctorBySlug } from "@/content/doctors";
import { COMPLIANCE_NOTE } from "@/content/site";
import { PRICING } from "@/content/protocols";

export type Program = {
  slug: string;
  code: string;
  eyebrow: string;
  /** One h1. The full stop is added as the mark. */
  title: string;
  intro: string;
  heroImage: string;
  /** The serif strap under the hero. The brand device, at most twice a page. */
  pepperNote: string;
  symptomHeading: string;
  symptoms: { title: string; body: string }[];
  /** The recurring brand line band. */
  brandLine: string;
  brandLineSupport: string;
  inclusions: { label: string; title: string; body: string; dark?: boolean }[];
  panelHeading: string;
  panelIntro: string;
  markers: Marker[];
  /** Doctor slugs who read this panel. */
  doctors: string[];
  doctorHeading: string;
  faqs: QA[];
  /** Only where the content genuinely forks — hormonal and sexual health. */
  fork?: { heading: string; him: ForkPanel; her: ForkPanel };
};

/**
 * The unisex program page — the conversion-led reference layout from the
 * handoff, minus the member-proof section, which has no compliant form.
 *
 * The order is deliberate: recognition before product. The symptom block is the
 * emotional hook and it comes before anything is offered.
 */
export function ProgramPage({ program }: { program: Program }) {
  return (
    <>
      <Section ground="page">
        <nav aria-label="Breadcrumb">
          <ol className="m-0 flex list-none flex-wrap gap-[var(--space-2)] p-0">
            <li>
              <Link
                href="/protocols"
                className="t-body-sm text-text-secondary no-underline hover:text-text-primary"
              >
                Programs
              </Link>
            </li>
            <li aria-hidden="true" className="t-body-sm text-text-disabled">
              /
            </li>
            <li className="t-body-sm text-text-primary">{program.eyebrow}</li>
          </ol>
        </nav>

        <div className="mt-[var(--space-6)] grid gap-[var(--space-8)] lg:grid-cols-[1.1fr_1fr]">
          <div>
            <MonoTag>{program.code}</MonoTag>
            <h1 className="t-h1 mt-[var(--space-4)] text-text-primary">
              {program.title}
              <span className="mark">.</span>
            </h1>
            <p className="t-body-lg mt-[var(--space-5)] text-text-secondary">
              {program.intro}
            </p>
            <div className="flex flex-wrap items-center gap-[var(--space-4)]">
              <Button href="/assessment">Start for {PRICING.entry} →</Button>
              <MonoData className="text-text-secondary">
                Includes the panel, the consult and a written read
              </MonoData>
            </div>
            <p className="mt-[var(--space-6)] mb-0 max-w-none border-t border-border-hairline pt-[var(--space-3)]">
              <MonoData className="text-text-secondary">
                14 AHPRA-registered Australian doctors · every panel read by a named doctor
                · {PRICING.declineRate} of assessments declined
              </MonoData>
            </p>
            <Editorial className="mt-[var(--space-6)] text-text-primary">
              <span className="not-italic font-[family-name:var(--font-mono)] text-[length:var(--text-mono)] tracking-[var(--tracking-mono)] uppercase text-text-technical">
                Pepper note —{" "}
              </span>
              {program.pepperNote}
            </Editorial>
          </div>

          <SiteImage
            id={program.heroImage}
            height="520px"
            code={program.code}
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </Section>

      {/* Recognition, before anything is offered. */}
      <Section ground="page" hairlineTop>
        <MonoTag>If this sounds familiar</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[24ch] text-text-primary">
          {program.symptomHeading}
          <span className="mark">.</span>
        </h2>
        <ul className="mt-[var(--space-7)] grid list-none gap-x-[var(--space-6)] gap-y-[var(--space-5)] p-0 md:grid-cols-2 lg:grid-cols-3">
          {program.symptoms.map((s) => (
            <li key={s.title} className="border-t border-border-hairline pt-[var(--space-3)]">
              <h3 className="t-h4 m-0 text-text-primary">{s.title}</h3>
              <p className="t-body-sm mt-[var(--space-2)] mb-0 text-text-secondary">{s.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section ground="muted">
        <div className="mx-auto max-w-[var(--container-text)] text-center">
          <MonoTag>— Pepper Me —</MonoTag>
          <h2 className="t-display mt-[var(--space-4)] text-text-primary">
            {program.brandLine}
            <span className="mark">.</span>
          </h2>
          <Editorial className="mt-[var(--space-4)] text-text-secondary">
            {program.brandLineSupport}
          </Editorial>
        </div>
      </Section>

      {program.fork ? (
        <>
          <Section ground="inverse" tight className="pt-[var(--space-9)]">
            <MonoTag>Pick your path</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] max-w-[24ch] text-text-primary">
              {program.fork.heading}
              <span className="mark">.</span>
            </h2>
            <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
              {PRICING.entry} · assessment + panel + consult. {PRICING.refundLine}{" "}
              {PRICING.declineRate} of assessments are.
            </p>
          </Section>
          <ForkBlock him={program.fork.him} her={program.fork.her} />
        </>
      ) : null}

      <Section ground={program.fork ? "muted" : "muted"}>
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[1fr_1.2fr]">
          <div>
            <MonoTag>What {PRICING.entry} actually gets you</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              A program of care. Not a script vending machine<span className="mark">.</span>
            </h2>
            <p className="t-body mt-[var(--space-5)] text-text-secondary">
              {PRICING.entry} covers your assessment, your blood panel, and a one-on-one
              consult with an Australian doctor who reads it. If they decline to prescribe —
              and {PRICING.declineRate} of the time they do — you get the {PRICING.entry}{" "}
              back.
            </p>
            <Card className="p-[var(--card-padding)]">
              <h3 className="t-h4 m-0 text-text-primary">No prescription? No charge.</h3>
              <p className="t-body-sm mt-[var(--space-2)] mb-0 text-text-secondary">
                If your doctor declines, your {PRICING.entry} is refunded in full. You keep
                your bloods.
              </p>
            </Card>
          </div>

          <ul className="m-0 grid list-none gap-[14px] p-0 sm:grid-cols-2">
            {program.inclusions.map((inc) => (
              <Card
                key={inc.title}
                as="li"
                ground={inc.dark ? "inverse" : undefined}
                className="flex flex-col gap-[var(--space-2)] p-[var(--card-padding)]"
              >
                <MonoTag>{inc.label}</MonoTag>
                <h3 className="t-h4 m-0 text-text-primary">{inc.title}</h3>
                <p className="t-body-sm m-0 text-text-secondary">{inc.body}</p>
              </Card>
            ))}
          </ul>
        </div>
      </Section>

      <Section ground="page">
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[1fr_1.2fr]">
          <div>
            <MonoTag>What gets measured</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              {program.panelHeading}
            </h2>
            <p className="t-body mt-[var(--space-5)] text-text-secondary">
              {program.panelIntro}
            </p>
            <p className="t-body-sm mb-0 text-text-secondary">
              A range is not a diagnosis. What a result means for you is decided on the
              consult, by the doctor who read the whole panel.
            </p>
          </div>
          <ReferenceRangeSet
            markers={program.markers}
            caption="Illustrative panel · Australian reference intervals · not a patient record"
          />
        </div>
      </Section>

      <Section ground="page" hairlineTop>
        <MonoTag>Your doctor</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[28ch] text-text-primary">
          {program.doctorHeading}
          <span className="mark">.</span>
        </h2>
        <ul className="mt-[var(--space-6)] grid list-none gap-[14px] p-0 md:grid-cols-2 lg:grid-cols-3">
          {program.doctors.map((slug) => (
            <li key={slug} className="contents">
              <DoctorCard doctor={doctorBySlug(slug)} />
            </li>
          ))}
        </ul>
      </Section>

      <Section ground="page">
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <MonoTag>Common questions</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              Specific. Clinical. No fluff<span className="mark">.</span>
            </h2>
          </div>
          <Faq items={program.faqs} />
        </div>
      </Section>

      <section data-ground="inverse">
        <Container className="py-[var(--section-gap-sm)] lg:py-[var(--section-gap)]">
          <MonoTag>Start your program</MonoTag>
          <h2 className="t-h2 mt-[var(--space-4)] max-w-[24ch] text-text-primary">
            {PRICING.entry} to start. Refunded if your doctor declines
            <span className="mark">.</span>
          </h2>
          <Editorial className="mt-[var(--space-4)] text-text-secondary">
            {program.brandLine}.
          </Editorial>
          <p className="t-body mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
            Three minutes for the assessment. No payment on the form — you only pay if your
            doctor accepts you onto the program.
          </p>
          <div className="flex flex-wrap gap-[var(--space-4)]">
            <Button href="/assessment">Start for {PRICING.entry} →</Button>
            <Button href="/prescribing-standard" variant="secondary">
              Read the prescribing standard
            </Button>
          </div>
        </Container>
      </section>

      <Disclaimer label="42DLB · note">{COMPLIANCE_NOTE}</Disclaimer>
    </>
  );
}
