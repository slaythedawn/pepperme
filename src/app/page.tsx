import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import { DoctorCard } from "@/components/ui/DoctorCard";
import { Editorial } from "@/components/ui/Editorial";
import { ForkBlock } from "@/components/ui/ForkBlock";
import { MonoData, MonoTag } from "@/components/ui/MonoTag";
import { SiteImage } from "@/components/ui/SiteImage";
import { ProtocolCard } from "@/components/ui/ProtocolCard";
import { ReferenceRangeSet } from "@/components/ui/ReferenceRangeBar";
import { StatRail } from "@/components/ui/StatRail";
import { LineChart } from "@/components/charts/LineChart";
import { SAMPLE_PANEL } from "@/content/biomarkers";
import { DOCTORS } from "@/content/doctors";
import { JOURNAL } from "@/content/journal";
import { PRICING, PROTOCOLS, TREATMENT_AREAS } from "@/content/protocols";
import { PRESS } from "@/content/site";

const EXPLAINERS = [
  {
    index: "01",
    title: "Australian doctors, ongoing care",
    body: "14 AHPRA-registered doctors. Real consults, dose adjustments, quarterly bloods. No 60-second script theatre.",
  },
  {
    index: "02",
    title: "Australian-compounded",
    body: "Each program is compounded per-patient by a TGA-licensed Australian pharmacy under the Section 42DLB pathway. Cold-chain, AU-wide, 48-hour delivery.",
  },
  {
    index: "03",
    title: "Six modalities, one record",
    body: "Recovery, hormonal, sleep, performance, longevity and sexual health — read together, not across five clinics.",
  },
  {
    index: "04",
    title: "Published outcomes, not promises",
    body: "Every member can opt into the open cohort. We publish trajectories, including the programs that didn't work.",
  },
];

const STEPS = [
  {
    step: "Step 01 · 3 minutes",
    title: "Tell us what's missing.",
    body: "Symptoms, training load, sleep, stress. Recent bloods if you have them — we can also order what you don't.",
    footer: "Assessment",
  },
  {
    step: "Step 02 · same day",
    title: "Your doctor reads everything together.",
    body: "An AHPRA-registered Australian doctor reads the full panel and designs a plan around the system, not one marker. The smallest plan that gets you there.",
    footer: "Consultation",
  },
  {
    step: "Step 03 · 48hr",
    title: "Compounded. At your door.",
    body: "A TGA-licensed Australian pharmacy compounds to your plan. Cold-chain shipped, AU-wide. Quarterly check-ins and adjustments inside the app.",
    footer: "Delivery",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 03 — Hero */}
      <Section ground="page">
        <div className="grid items-center gap-[var(--space-8)] lg:grid-cols-[1fr_1.05fr]">
          <div>
            <MonoTag>Advanced bloods · Modern prescriptions · Australian doctors</MonoTag>
            <h1 className="t-h1 mt-[var(--space-4)] text-text-primary">
              Pepper me with the medicine that{" "}
              <span className="font-[family-name:var(--font-editorial)] italic">
                actually works
              </span>
              <span className="mark">.</span>
            </h1>
            <p className="t-body-lg mt-[var(--space-5)] text-text-secondary">
              Science is moving faster than general practice. Pepper Me is where it catches
              up — advanced bloods, hormonal optimisation, recovery, sleep, longevity and
              sexual health, prescribed by Australian doctors who actually read the
              literature.
            </p>
            <div className="flex flex-wrap items-center gap-[var(--space-4)]">
              <Button href="/assessment">Get peppered →</Button>
              <Button href="#how-it-works" variant="secondary">
                How it works
              </Button>
            </div>
            <p className="mt-[var(--space-3)]">
              <MonoData className="text-text-secondary">
                3-min assessment · same-day review
              </MonoData>
            </p>
            <StatRail
              className="mt-[var(--space-7)]"
              stats={[
                { value: "14", label: "AU doctors" },
                { value: "42DLB", label: "Compounding pathway" },
                { value: "2,140+", label: "Active members" },
                { value: "48hr", label: "Door-to-door" },
              ]}
            />
          </div>

          <SiteImage
            id="hero-portrait"
            height="680px"
            code="Subject 014 · Studio 02"
            priority
            sizes="(max-width: 1024px) 100vw, 700px"
          />
        </div>
      </Section>

      {/* 04 — Him / Her fork */}
      <ForkBlock
        him={{
          label: "For men",
          title: "Pepper for him",
          body: "Hormonal optimisation. Soft-tissue recovery. Sleep architecture. Sexual response. Built for the male endocrine system, prescribed by Australian doctors.",
          cta: "Start his assessment →",
          href: "/protocols/hormonal/him",
          note: "3 min · confidential",
          image: "fork-him",
          tags: ["HRM · M", "RCV", "SLP", "SXL · M", "LNG"],
        }}
        her={{
          label: "For women",
          title: "Pepper for her",
          body: "Cycle and perimenopause. Hormonal optimisation. Sleep, mood, recovery. Sexual response. Built for the female endocrine system, prescribed by Australian doctors.",
          cta: "Start her assessment →",
          href: "/protocols/hormonal/her",
          note: "3 min · confidential",
          image: "fork-her",
          tags: ["HRM · W", "RCV", "SLP", "SXL · W", "LNG · W"],
        }}
      />

      {/* 05 — Press */}
      <Section ground="page" tight hairlineBottom>
        <div className="flex flex-wrap items-center justify-between gap-[var(--space-4)]">
          <MonoTag>As featured in</MonoTag>
          <ul className="m-0 flex list-none flex-wrap items-center gap-[var(--space-5)] p-0">
            {PRESS.map((p) => (
              <li key={p}>
                <MonoData className="text-text-secondary">{p}</MonoData>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 06 — What is performance medicine */}
      <Section ground="page">
        <div className="grid gap-[var(--space-9)] lg:grid-cols-[1fr_1.4fr]">
          <div>
            <MonoTag index="01">What it is</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              What is performance medicine?
            </h2>
          </div>
          <div>
            <p className="t-body-lg text-text-secondary">
              Performance medicine treats the body as a system. Rather than waiting for
              disease, it reads bloods, sleep data and clinical history together, then
              treats the function the body is no longer delivering on its own.
            </p>
            <p className="t-body-lg text-text-secondary">
              Pepper Me is one of the first Australian clinics to bring all six areas of
              care together under one prescribing doctor — by program, not by paywall.
            </p>
            <div className="mt-[var(--space-6)] grid gap-x-[var(--space-6)] gap-y-[var(--space-5)] sm:grid-cols-2">
              {EXPLAINERS.map((e) => (
                <div key={e.index} className="border-t border-border-hairline pt-[var(--space-3)]">
                  <MonoData className="text-text-disabled">{e.index}</MonoData>
                  <h3 className="t-h4 mt-[var(--space-2)] text-text-primary">{e.title}</h3>
                  <p className="t-body-sm mt-[var(--space-2)] mb-0 text-text-secondary">{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 07 — Programs of care */}
      <Section ground="muted">
        <div className="flex flex-wrap items-end justify-between gap-[var(--space-4)]">
          <div>
            <MonoTag index="02">Programs of care</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              Six body systems we treat<span className="mark">.</span>
            </h2>
          </div>
          <Link
            href="/protocols"
            className="t-ui text-text-primary underline decoration-border-inactive decoration-1 underline-offset-4 hover:decoration-border-strong"
          >
            All programs →
          </Link>
        </div>
        <ul className="mt-[var(--space-6)] grid list-none grid-cols-1 gap-[14px] p-0 md:grid-cols-2 lg:grid-cols-3">
          {PROTOCOLS.slice(0, 6).map((p) => (
            <ProtocolCard key={p.code} protocol={p} />
          ))}
        </ul>
      </Section>

      {/* 08 — The approach */}
      <Section ground="page">
        <div className="grid gap-[var(--space-9)] lg:grid-cols-[1fr_1.4fr]">
          <div>
            <MonoTag index="03">The approach</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              Why your body needs all six, read together.
            </h2>
          </div>
          <div>
            <p className="t-body-lg text-text-secondary">
              Health has lived in silos. A recovery clinic on one street, a hormone clinic
              on another, a sleep doctor across town, a longevity consultant on a waitlist.
              Five appointments, five paywalls, five inboxes — and nobody talking to each
              other.
            </p>
            <p className="t-body-lg text-text-secondary">
              Pepper Me runs all six under one clinical record. Your doctor reads your
              bloods, your training, your sleep and your stress together, then treats where
              the system actually needs it.
            </p>
            <div className="flex flex-wrap gap-[var(--space-4)]">
              <Button href="/protocols" variant="secondary">
                See the programs
              </Button>
              <Button href="/science" variant="ghost">
                Read the science
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 09 — The four paths */}
      <Section ground="page" hairlineTop>
        <MonoTag index="04">Compared</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[22ch] text-text-primary">
          The four paths<span className="mark">.</span> Why people choose ours.
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          Same goals. Different access, different ceilings. Pepper Me operates under
          Australia&rsquo;s Section 42DLB pathway with a TGA-licensed compounding pharmacy.
        </p>
        <div className="mt-[var(--space-6)]">
          <DataTable
            caption="How the four paths to care compare"
            head={["", "Standard GP", "Specialist clinic", "Grey-market", "Pepper Me"]}
            highlightColumn={4}
            rows={[
              [
                "Doctor",
                "10-minute consult, no follow-up",
                "Specialist — hard to find, harder to keep",
                "No doctor. Forum guidance.",
                "AHPRA-registered, ongoing care",
              ],
              [
                "Areas of care",
                "One issue at a time",
                "Recovery only — or hormonal only",
                "DIY, unverified",
                "Recovery + hormonal + sleep + longevity + sexual health, read together",
              ],
              [
                "Pharmacy",
                "Retail dispensing",
                "Varies — often opaque",
                "Unknown source, no chain-of-custody",
                "TGA-licensed AU compounding pharmacy",
              ],
              [
                "Pathway",
                "PBS or private script",
                "Private script",
                "Illegal (research-only label)",
                "Section 42DLB · SAS Cat B",
              ],
              [
                "Follow-up",
                "Re-book the queue",
                "Sporadic, expensive",
                "None",
                "Quarterly review · in-app messaging",
              ],
              [
                "Cost",
                "Bulk-billed → private gap",
                "$800–$2,000 / month",
                "Low up-front, high biological risk",
                "$149 to start · a plan, and its cost, decided on the consult",
              ],
              [
                "Time to start",
                "1–4 weeks",
                "4–12 weeks",
                "Immediate",
                "48 hours from script",
              ],
            ]}
          />
        </div>
        <p className="t-caption mt-[var(--space-4)] mb-0 text-text-secondary">
          Comparison reflects publicly available information at time of publication. We are
          not affiliated with any clinic or brand described.
        </p>
      </Section>

      {/* 10 — Everything we treat */}
      <Section ground="page">
        <MonoTag index="05">What we treat</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
          Everything we treat<span className="mark">.</span>
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          If your goal is on this list, you&rsquo;re in scope. If it isn&rsquo;t, your doctor
          will say so — straight.
        </p>
        <div className="mt-[var(--space-6)] grid gap-[var(--space-6)] sm:grid-cols-2 lg:grid-cols-4">
          {TREATMENT_AREAS.map((area) => (
            <div key={area.heading}>
              <MonoTag as="h3" className="border-b border-border-strong pb-[var(--space-2)]">
                {area.heading}
              </MonoTag>
              <ul className="m-0 mt-[var(--space-3)] flex list-none flex-col gap-[var(--space-2)] p-0">
                {area.items.map((i) => (
                  <li key={i} className="t-body-sm text-text-secondary">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 12 — How it works */}
      <Section ground="inverse" id="how-it-works">
        <MonoTag index="06">How Pepper Me works</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[20ch] text-text-primary">
          Three steps<span className="mark">.</span> Then medicine.
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          No portals. No faxes. No vault of after-hours admin. Three steps, signed by an
          Australian doctor, delivered to the door.
        </p>
        <ol className="m-0 mt-[var(--space-7)] grid list-none gap-[var(--space-6)] p-0 lg:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.footer}>
              <MonoTag>{s.step}</MonoTag>
              <h3 className="t-h3 mt-[var(--space-3)] text-text-primary">{s.title}</h3>
              <p className="t-body mt-[var(--space-3)] text-text-secondary">{s.body}</p>
              <p className="mt-[var(--space-4)] mb-0 max-w-none border-t border-border-hairline pt-[var(--space-3)]">
                <MonoData className="text-text-secondary">{s.footer}</MonoData>
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 13 — Doctors */}
      <Section ground="page">
        <div className="grid gap-[var(--space-8)] lg:grid-cols-[0.85fr_1.15fr]">
          <SiteImage
            id="doctors-band"
            height="600px"
            code="DR · 002"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
          <div>
            <MonoTag index="07">The doctors behind it</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              Real Australian doctors. Not a script printer<span className="mark">.</span>
            </h2>
            <p className="t-body-lg mt-[var(--space-5)] text-text-secondary">
              14 AHPRA-registered doctors across endocrinology, sports medicine, sleep,
              psychiatry and longevity. They read every assessment, propose every plan, and
              reply — usually the same day.
            </p>
            <Editorial className="mt-[var(--space-6)] text-text-primary">
              &ldquo;Most telehealth wants doctors to be a script printer. Pepper Me wants us
              to be doctors. That&rsquo;s why I joined.&rdquo;
            </Editorial>
            <p className="mt-[var(--space-3)]">
              <MonoData className="text-text-secondary">
                Dr. A. Reid · Endocrinology · MEL · AHPRA MED 0021041
              </MonoData>
            </p>
            <StatRail
              className="mt-[var(--space-6)]"
              columns={3}
              stats={[
                { value: "14", label: "AHPRA doctors" },
                { value: "4 hrs", label: "Median reply" },
                { value: "~14%", label: "Decline rate" },
              ]}
            />
            <div className="mt-[var(--space-6)] flex flex-wrap gap-[var(--space-4)]">
              <Button href="/doctors" variant="secondary">
                Meet the team
              </Button>
              <Button href="/prescribing-standard" variant="ghost">
                Prescribing standard
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 14 — Science */}
      <Section ground="muted">
        <div className="flex flex-wrap items-end justify-between gap-[var(--space-4)]">
          <div>
            <MonoTag index="08">Science</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              The science of being human<span className="mark">.</span>
            </h2>
          </div>
          <Link
            href="/science"
            className="t-ui text-text-primary underline decoration-border-inactive decoration-1 underline-offset-4 hover:decoration-border-strong"
          >
            Read all studies →
          </Link>
        </div>

        <div className="mt-[var(--space-6)] grid gap-[14px] lg:grid-cols-[1.2fr_1fr_1fr]">
          <Card className="p-[var(--card-padding)]">
            <MonoTag>RCV-04 · IGF-1 trajectory · ng/mL</MonoTag>
            <p className="mt-[var(--space-2)] mb-[var(--space-5)]">
              <MonoData className="text-text-secondary">N = 147 · 12-week cohort</MonoData>
            </p>
            <LineChart
              title="IGF-1 median, weeks 0 to 12"
              unit="ng/mL"
              xLabels={["WK 0", "WK 4", "WK 8", "WK 12"]}
              series={[{ name: "Pepper cohort", points: [148, 171, 190, 204] }]}
            />
            <p className="t-caption mt-[var(--space-4)] mb-0 text-text-secondary">
              Method · Pepper Me Open Cohort 014. Bloods at weeks 0, 6 and 12. Pre-print
              available.
            </p>
          </Card>

          <Card ground="inverse" className="p-[var(--card-padding)]">
            <div>
              <MonoTag>SLP-01 · sleep architecture</MonoTag>
              <p className="t-display mt-[var(--space-4)] mb-0 text-text-primary">+1.4 hr</p>
              <p className="t-body-sm mt-[var(--space-2)] text-text-secondary">
                Slow-wave sleep, week 6. N = 88.
              </p>
              <p className="t-caption mt-[var(--space-6)] mb-0 max-w-none border-t border-border-hairline pt-[var(--space-3)] text-text-secondary">
                Measured value from the open cohort. No target is implied.
              </p>
            </div>
          </Card>

          <Card className="p-[var(--card-padding)]">
            <MonoTag>Panel · what gets measured</MonoTag>
            <p className="t-body-sm mt-[var(--space-3)] text-text-secondary">
              A sample of the endocrine panel, read against the Australian reference
              interval. Your doctor reads all 60+ markers together.
            </p>
            <div className="mt-[var(--space-4)]">
              <ReferenceRangeSet markers={SAMPLE_PANEL.slice(0, 3)} />
            </div>
          </Card>
        </div>
      </Section>

      {/* 16 — Journal */}
      <Section ground="page">
        <div className="flex flex-wrap items-end justify-between gap-[var(--space-4)]">
          <div>
            <MonoTag index="09">Journal</MonoTag>
            <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
              Read the medicine<span className="mark">.</span>
            </h2>
          </div>
        </div>
        <ul className="mt-[var(--space-6)] grid list-none gap-[var(--space-6)] p-0 md:grid-cols-3">
          {JOURNAL.map((j) => (
            <li key={j.issue}>
              <SiteImage id={j.image} ratio="4 / 5" code={j.issue} sizes="(max-width: 768px) 100vw, 400px" />
              <p className="mt-[var(--space-3)] mb-0">
                <MonoData className="text-text-secondary">
                  {j.issue} · {j.category}
                </MonoData>
              </p>
              <h3 className="t-h4 mt-[var(--space-2)] text-text-primary">{j.title}</h3>
              <p className="mt-[var(--space-2)] mb-0">
                <MonoData className="text-text-secondary">
                  {j.readTime} · {j.author}
                </MonoData>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 18 — Final CTA. The handoff runs the frame full-bleed under a gradient
          scrim; the frame sits beside the type instead, so neither the
          photograph nor the display setting is compromised by the other. */}
      <section data-ground="inverse">
        <Container className="grid min-h-[520px] items-end gap-[var(--space-8)] py-[var(--space-9)] lg:grid-cols-[1fr_0.7fr]">
        <div>
          <MonoTag>A higher state of human performance</MonoTag>
          <h2 className="t-display mt-[var(--space-4)] text-text-primary">
            Get peppered<span className="mark">.</span>
          </h2>
          <p className="t-body-lg mt-[var(--space-5)] max-w-[52ch] text-text-secondary">
            {PRICING.entry} covers the assessment, your blood panel and a consult with an
            Australian doctor. {PRICING.refundLine}
          </p>
          <div className="flex flex-wrap gap-[var(--space-4)]">
            <Button href="/assessment">Take the assessment →</Button>
            <Button href="/doctors" variant="secondary">
              Speak with a doctor
            </Button>
          </div>
        </div>
        <SiteImage
          id="closing-cta"
          height="420px"
          sizes="(max-width: 1024px) 100vw, 420px"
        />
        </Container>
      </section>

      {/* Doctor roster — the trust layer, in place of member testimonials. */}
      <Section ground="page" hairlineTop>
        <MonoTag index="10">Who reads your panel</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] max-w-[24ch] text-text-primary">
          Every panel is read by a named, registered Australian doctor.
        </h2>
        <ul className="mt-[var(--space-6)] grid list-none gap-[14px] p-0 md:grid-cols-2 lg:grid-cols-3">
          {DOCTORS.slice(0, 3).map((d) => (
            <li key={d.slug} className="contents">
              <DoctorCard doctor={d} />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
