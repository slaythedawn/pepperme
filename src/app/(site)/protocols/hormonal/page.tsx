import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { Editorial } from "@/components/ui/Editorial";
import { Faq } from "@/components/ui/Faq";
import { ForkBlock } from "@/components/ui/ForkBlock";
import { MonoData, MonoTag } from "@/components/ui/MonoTag";
import { SiteImage } from "@/components/ui/SiteImage";
import { ReferenceRangeSet } from "@/components/ui/ReferenceRangeBar";
import { SAMPLE_PANEL } from "@/content/biomarkers";
import { doctorBySlug } from "@/content/doctors";
import { PRICING } from "@/content/protocols";
import { COMPLIANCE_NOTE } from "@/content/site";

export const metadata: Metadata = {
  title: "Hormonal care",
  description:
    "A doctor-led, panel-driven hormonal program. $149 covers the assessment, a 60+ marker endocrine panel and a consult with an Australian doctor — refunded if they decline.",
};

const SYMPTOMS = [
  {
    title: "Energy that crashes by 2pm",
    body: "Despite sleep, hydration, and a regular schedule.",
  },
  {
    title: "Sleep that's lighter than it used to be",
    body: "Especially the 3am wake-up. That's a hormonal signature.",
  },
  {
    title: "Mood that's flat or short-fused",
    body: "Without an emotional reason that holds up.",
  },
  {
    title: "Recovery that takes longer",
    body: "From the same workouts, the same week, the same you.",
  },
  {
    title: "Weight that won't move",
    body: "Or moves the wrong way despite the same inputs.",
  },
  {
    title: "A GP who told you “you're in range”",
    body: "“In range” for the average 70-year-old isn't a number to live from.",
  },
];

const INCLUSIONS = [
  {
    label: "01 · Included",
    title: "60+ marker endocrine panel",
    body: "Australian-accredited lab, walk-in. Free and total testosterone, oestradiol, LH, FSH, SHBG, DHEA, thyroid, IGF-1, metabolic and inflammatory markers.",
    dark: false,
  },
  {
    label: "02 · Included",
    title: "30-min doctor consult",
    body: "An AHPRA-registered Australian endocrinologist or women's-health doctor reads your panel with you on a video call.",
    dark: false,
  },
  {
    label: "03 · Included",
    title: "A written read of your system",
    body: "What your panel actually says, in plain language. Yours to keep, share, or take to your GP.",
    dark: false,
  },
  {
    label: "04 · If indicated",
    title: "A care plan, decided on the call",
    body: `Discussed only after your panel is read — never advertised, never up-sold. ${PRICING.ongoingLine}`,
    dark: true,
  },
];

const FAQS = [
  {
    q: "What does the $149 actually cover?",
    a: "Your full assessment, your endocrine blood panel (60+ markers), and a 30-minute one-on-one consult with an Australian doctor who reads it with you.",
  },
  {
    q: "What if my doctor declines?",
    a: "Your $149 is refunded in full. You keep your bloods and your written read. Around 14% of assessments are declined — that's the program working as designed.",
  },
  {
    q: "If a plan is indicated, what does ongoing care cost?",
    a: "It depends on the plan. There is no standard monthly figure to quote, because what is prescribed — if anything — is decided by your doctor after your panel is read. You will have the full cost in front of you on the consult, before anything is charged.",
  },
  {
    q: "How long until the consult?",
    a: "Assessment reviewed within 24 hours. Bloods within the week. Doctor consult within 48 hours of bloods landing.",
  },
  {
    q: "Is this a single-medicine program?",
    a: "No. Pepper Me runs a program of care rather than selling one medicine. What — if anything — is prescribed is decided by your doctor, with you, after your panel is read.",
  },
];

export default function HormonalPage() {
  return (
    <>
      {/* Hero */}
      <Section ground="page">
        <nav aria-label="Breadcrumb">
          <ol className="m-0 flex list-none flex-wrap gap-[var(--space-2)] p-0">
            <li>
              <Link href="/protocols" className="t-body-sm text-text-secondary no-underline hover:text-text-primary">
                Programs
              </Link>
            </li>
            <li aria-hidden="true" className="t-body-sm text-text-disabled">
              /
            </li>
            <li className="t-body-sm text-text-primary">Hormonal care</li>
          </ol>
        </nav>

        <div className="mt-[var(--space-6)] grid gap-[var(--space-8)] lg:grid-cols-[1.1fr_1fr]">
          <div>
            <MonoTag>HRM · Hormonal care · 07–08</MonoTag>
            <h1 className="t-h1 mt-[var(--space-4)] text-text-primary">
              Your hormones have a shape. Most doctors only read one number
              <span className="mark">.</span>
            </h1>
            <p className="t-body-lg mt-[var(--space-5)] text-text-secondary">
              Pepper Me&rsquo;s hormonal program is doctor-led and panel-driven. A real
              Australian doctor reads your full endocrine panel — not one marker — and
              decides what, if anything, comes next.
            </p>
            <div className="flex flex-wrap items-center gap-[var(--space-4)]">
              <Button href="/assessment">Start for {PRICING.entry} →</Button>
              <MonoData className="text-text-secondary">
                Includes 60+ marker panel + doctor consult
              </MonoData>
            </div>
            {/* The trust rail is the clinical layer: registered doctors and a
                published decline rate. Ratings and member quotes are prohibited. */}
            <p className="mt-[var(--space-6)] mb-0 max-w-none border-t border-border-hairline pt-[var(--space-3)]">
              <MonoData className="text-text-secondary">
                14 AHPRA-registered Australian doctors · every panel read by a named doctor ·{" "}
                {PRICING.declineRate} of assessments declined
              </MonoData>
            </p>
            <Editorial className="mt-[var(--space-6)] text-text-primary">
              <span className="not-italic font-[family-name:var(--font-mono)] text-[length:var(--text-mono)] tracking-[var(--tracking-mono)] uppercase text-text-technical">
                Pepper note —{" "}
              </span>
              The body doesn&rsquo;t have specialists.
            </Editorial>
          </div>

          <SiteImage
            id="hormonal-hero"
            height="520px"
            code="HRM · 07–08"
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
      </Section>

      {/* Symptom recognition — the hook, before any mention of a program. */}
      <Section ground="page" hairlineTop>
        <MonoTag>If this sounds familiar</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
          You&rsquo;re not making it up<span className="mark">.</span>
        </h2>
        <p className="t-body-lg mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          Symptoms that GPs treat one at a time, but read together tell a story your
          endocrine system has been writing for years.
        </p>
        <ul className="mt-[var(--space-7)] grid list-none gap-x-[var(--space-6)] gap-y-[var(--space-5)] p-0 md:grid-cols-2 lg:grid-cols-3">
          {SYMPTOMS.map((s) => (
            <li key={s.title} className="border-t border-border-hairline pt-[var(--space-3)]">
              <h3 className="t-h4 m-0 text-text-primary">{s.title}</h3>
              <p className="t-body-sm mt-[var(--space-2)] mb-0 text-text-secondary">{s.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Brand line band */}
      <Section ground="muted">
        <div className="mx-auto max-w-[var(--container-text)] text-center">
          <MonoTag>— Pepper Me —</MonoTag>
          <h2 className="t-display mt-[var(--space-4)] text-text-primary">
            The body doesn&rsquo;t have specialists<span className="mark">.</span>
          </h2>
          <Editorial className="mt-[var(--space-4)] text-text-secondary">
            It has one system. Read it that way, or don&rsquo;t read it at all.
          </Editorial>
        </div>
      </Section>

      {/* Path split */}
      <Section ground="inverse" tight className="pt-[var(--space-9)]">
        <MonoTag>Pick your path</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[24ch] text-text-primary">
          Two endocrine systems. One {PRICING.entry} starting point
          <span className="mark">.</span>
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          {PRICING.entry} · assessment + panel + consult. {PRICING.refundLine}{" "}
          {PRICING.declineRate} of assessments are.
        </p>
      </Section>
      <ForkBlock
        him={{
          label: "HRM · M / 07 · For men",
          title: "Hormonal for him",
          body: "Energy, drive, sleep, recovery. Read against a 68-marker male endocrine panel by an Australian endocrinologist or sports physician.",
          cta: `Start his assessment →`,
          href: "/protocols/hormonal/him",
          note: `Start for ${PRICING.entry}`,
          image: "fork-him",
        }}
        her={{
          label: "HRM · W / 08 · For women",
          title: "Hormonal for her",
          body: "Cycle, perimenopause, mood, sleep. Read against a 62-marker female panel — cycle-timed — by a women's-health doctor who treats the whole system.",
          cta: `Start her assessment →`,
          href: "/protocols/hormonal/her",
          note: `Start for ${PRICING.entry}`,
          image: "fork-her",
        }}
      />

      {/* What $149 gets you */}
      <Section ground="muted">
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[1fr_1.2fr]">
          <div>
            <MonoTag>What {PRICING.entry} actually gets you</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              A program of care. Not a script vending machine
              <span className="mark">.</span>
            </h2>
            <p className="t-body mt-[var(--space-5)] text-text-secondary">
              {PRICING.entry} covers your assessment, your full endocrine blood panel, and a
              one-on-one consult with an Australian doctor who reads it. If they decline to
              prescribe — and {PRICING.declineRate} of the time they do — you get the{" "}
              {PRICING.entry} back.
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
            {INCLUSIONS.map((inc) => (
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

      {/* What gets measured — the signature component */}
      <Section ground="page">
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[1fr_1.2fr]">
          <div>
            <MonoTag>What gets measured</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              Your panel, against the interval it&rsquo;s read on.
            </h2>
            <p className="t-body mt-[var(--space-5)] text-text-secondary">
              Six of the 60+ markers on the endocrine panel, shown the way your doctor reads
              them — value, unit, and the Australian reference interval, aligned so they can
              be compared down the column.
            </p>
            <p className="t-body-sm mb-0 text-text-secondary">
              A range is not a diagnosis. What a result means for you is decided on the
              consult, by the doctor who read the whole panel.
            </p>
          </div>
          <ReferenceRangeSet
            markers={SAMPLE_PANEL}
            caption="Illustrative panel · Australian reference intervals · not a patient record"
          />
        </div>
      </Section>

      {/* Doctors */}
      <Section ground="page" hairlineTop>
        <MonoTag>Your doctor</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[28ch] text-text-primary">
          An Australian doctor reads your panel — because the body doesn&rsquo;t have
          specialists<span className="mark">.</span>
        </h2>
        <p className="mt-[var(--space-4)]">
          <MonoData className="text-text-secondary">
            14 AHPRA-registered · 9–18 yrs practice
          </MonoData>
        </p>
        <ul className="mt-[var(--space-6)] grid list-none gap-[14px] p-0 md:grid-cols-2 lg:grid-cols-3">
          {["m-holt", "r-bennett", "a-reid"].map((slug) => (
            <li key={slug} className="contents">
              <DoctorCard doctor={doctorBySlug(slug)} />
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section ground="page">
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <MonoTag>Common questions</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              Specific. Clinical. No fluff<span className="mark">.</span>
            </h2>
          </div>
          <Faq items={FAQS} />
        </div>
      </Section>

      {/* Closing CTA. The handoff drew this on a Pepper 600 ground; the design
          system forbids coloured surfaces, so the ground is Ink and Pepper 600
          stays where it belongs — on the action. */}
      <section data-ground="inverse">
        <Container className="py-[var(--section-gap-sm)] lg:py-[var(--section-gap)]">
          <MonoTag>Start your program</MonoTag>
          <h2 className="t-h2 mt-[var(--space-4)] max-w-[24ch] text-text-primary">
            {PRICING.entry} to start. Refunded if your doctor declines
            <span className="mark">.</span>
          </h2>
          <Editorial className="mt-[var(--space-4)] text-text-secondary">
            The body doesn&rsquo;t have specialists.
          </Editorial>
          <p className="t-body mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
            Three minutes for the assessment. No payment on the form — you only pay if your
            doctor accepts you onto the program.
          </p>
          <div className="flex flex-wrap gap-[var(--space-4)]">
            <Button href="/protocols/hormonal/him">Start his →</Button>
            <Button href="/protocols/hormonal/her" variant="secondary">
              Start hers →
            </Button>
          </div>
        </Container>
      </section>

      <Disclaimer label="42DLB · note">{COMPLIANCE_NOTE}</Disclaimer>
    </>
  );
}
