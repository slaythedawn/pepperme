import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { Card } from "@/components/ui/Card";
import { DataTable } from "@/components/ui/DataTable";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { MonoData, MonoTag } from "@/components/ui/MonoTag";
import { StatRail } from "@/components/ui/StatRail";
import { CITED, PUBLICATIONS } from "@/content/publications";
import { COMPLIANCE_NOTE } from "@/content/site";

export const metadata: Metadata = {
  title: "Science",
  description:
    "The Pepper Me open cohort. Bloods at weeks 0, 6 and 12, published as trajectories — including the programs that didn't move.",
};

export default function SciencePage() {
  return (
    <>
      <Section ground="page">
        <MonoTag index="06">Science & cohort data</MonoTag>
        <h1 className="t-h1 mt-[var(--space-4)] max-w-[18ch] text-text-primary">
          We publish before we prescribe<span className="mark">.</span>
        </h1>
        <p className="t-body-lg mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
          Pepper Me runs an open-cohort program: every member&rsquo;s de-identified bloods and
          program response feed back into our science layer. The numbers below are real,
          current, and audited by our medical board quarterly.
        </p>
        <StatRail
          className="mt-[var(--space-7)]"
          columns={3}
          stats={[
            { value: "2,140", label: "Open-cohort members" },
            { value: "12", label: "Papers, pre-print and peer-reviewed" },
            { value: "68", label: "Markers per member, per cycle" },
          ]}
        />
      </Section>

      <Section ground="muted">
        <MonoTag index="01">The method</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
          Real bodies<span className="mark">.</span> Actually measured.
        </h2>
        <p className="t-body-lg mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          Every Pepper Me member can opt into the open cohort. We collect bloods at week 0,
          6 and 12, and publish the trajectories — including the ones that don&rsquo;t move.
        </p>

        <div className="mt-[var(--space-7)] grid gap-[14px] lg:grid-cols-[1.4fr_1fr]">
          <Card className="p-[var(--card-padding)]">
            <MonoTag>RCV-04 · tendon-pain VAS · 12-week trajectory</MonoTag>
            <p className="mt-[var(--space-2)] mb-[var(--space-5)]">
              <MonoData className="text-text-secondary">
                N = 147 · matched control shown dotted
              </MonoData>
            </p>
            <LineChart
              title="Tendon-pain VAS, weeks 0 to 12"
              unit="VAS"
              xLabels={["WK 0", "WK 3", "WK 6", "WK 9", "WK 12"]}
              series={[
                { name: "Pepper cohort", points: [6.8, 5.4, 4.1, 3.2, 2.6] },
                { name: "Matched control", points: [6.7, 6.4, 6.1, 5.9, 5.8], dashed: true },
              ]}
            />
            <p className="t-caption mt-[var(--space-4)] mb-0 text-text-secondary">
              Method · Open Cohort 014. Self-reported VAS collected at each blood draw.
            </p>
          </Card>

          <Card className="p-[var(--card-padding)]">
            <MonoTag>Cohort size by program · current</MonoTag>
            <div className="mt-[var(--space-5)]">
              <BarChart
                title="Members enrolled by program"
                unit="members"
                bars={[
                  { label: "RCV", value: 612 },
                  { label: "PRF", value: 438 },
                  { label: "SLP", value: 374 },
                  { label: "HRM", value: 298 },
                  { label: "LNG", value: 241 },
                  { label: "SXL", value: 177 },
                ]}
              />
            </div>
            <p className="t-caption mt-[var(--space-5)] mb-0 text-text-secondary">
              Counts only. No outcome is implied by cohort size.
            </p>
          </Card>
        </div>
      </Section>

      <Section ground="page">
        <MonoTag index="02">Publications · 12 to date</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
          Every program, every cycle<span className="mark">.</span>
        </h2>
        <div className="mt-[var(--space-6)]">
          <DataTable
            caption="Pepper Me open-cohort publications"
            head={["Code", "Title", "Authors", "Status", "Read"]}
            rows={PUBLICATIONS.map((p) => [
              <MonoData key={`${p.code}-c`} className="text-text-primary">
                {p.code}
              </MonoData>,
              p.title,
              p.authors,
              <MonoData key={`${p.code}-s`} className="text-text-secondary">
                {p.status} · {p.date}
              </MonoData>,
              <MonoData key={`${p.code}-r`} className="text-text-secondary">
                {p.readTime}
              </MonoData>,
            ])}
          />
        </div>
      </Section>

      <Section ground="muted">
        <MonoTag>Cited literature</MonoTag>
        <h2 className="t-h2 mt-[var(--space-4)] text-text-primary">
          The journals our doctors read<span className="mark">.</span>
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          Every program footnotes back to its primary research. We don&rsquo;t prescribe from
          blog posts.
        </p>
        <ul className="m-0 mt-[var(--space-6)] list-none border-t border-border-hairline p-0">
          {CITED.map((c) => (
            <li
              key={c}
              className="t-body-sm border-b border-border-hairline py-[var(--space-4)] text-text-secondary"
            >
              {c}
            </li>
          ))}
        </ul>
      </Section>

      <Disclaimer label="42DLB · note">{COMPLIANCE_NOTE}</Disclaimer>
    </>
  );
}
