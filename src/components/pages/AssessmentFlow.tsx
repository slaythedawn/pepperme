"use client";

import { useState } from "react";
import { Container } from "../layout/Container";
import { Button, ButtonAction } from "../ui/Button";
import { Card } from "../ui/Card";
import { Editorial } from "../ui/Editorial";
import { Field, OptionButton } from "../ui/Field";
import { MonoData, MonoTag } from "../ui/MonoTag";
import { SiteImage } from "../ui/SiteImage";
import { useView } from "../view/ViewProvider";
import { doctorBySlug } from "@/content/doctors";
import { PRICING } from "@/content/protocols";

const STEPS = [
  { label: "About you", time: "~30s", title: "Let's start with you.", intro: "Your answers help your doctor read your bloods in context. Nothing here is shared outside Pepper Me." },
  { label: "Goals", time: "~40s", title: "What are you trying to move?", intro: "Pick up to three. Your doctor reads everything together — these just sharpen the focus." },
  { label: "Body areas", time: "~40s", title: "Where, in your body?", intro: "If your goal is recovery, where exactly. If hormonal, which symptoms." },
  { label: "Clinical context", time: "~50s", title: "A few clinical questions.", intro: "So your doctor doesn't ask you to repeat yourself on the consult." },
  { label: "Doctor match", time: "~20s", title: "Match to a doctor.", intro: "Based on what you've shared, here's who we'd assign. You can change this at any time." },
];

const GOALS = [
  "Faster soft-tissue recovery",
  "Deeper, more restorative sleep",
  "Hormonal optimisation",
  "Body composition & lean mass",
  "Energy & cognition",
  "Sexual response",
  "Cellular maintenance / longevity",
  "Persistent injury / inflammation",
];

const AREAS = [
  "Knees / lower body joints",
  "Shoulders / upper body",
  "Tendon / connective tissue",
  "Gut / digestive lining",
  "Onset insomnia",
  "Fragmented sleep",
  "Low libido / response",
  "Mood / motivation",
];

const MEDICATIONS = ["None", "I'll list them on the consult"];
const BLOODS = ["I'll upload recent bloods", "Order through Pepper Me", "Not sure"];

const MAX_GOALS = 3;

/**
 * Five steps, and no payment is taken on the form. The Him/Her selector on
 * step 1 is the same state the nav toggle writes, so the two stay in sync.
 */
export function AssessmentFlow() {
  const { view, setView } = useView();
  const [step, setStep] = useState(0);
  const [goals, setGoals] = useState<string[]>([]);
  const [areas, setAreas] = useState<string[]>([]);
  const [medication, setMedication] = useState<string | null>(null);
  const [bloods, setBloods] = useState<string | null>(null);

  const last = step === STEPS.length - 1;
  const current = STEPS[step];
  const doctor = doctorBySlug(view === "him" ? "m-holt" : "r-bennett");

  const go = (next: number) => {
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggle = (
    value: string,
    list: string[],
    set: (v: string[]) => void,
    max?: number,
  ) => {
    if (list.includes(value)) set(list.filter((v) => v !== value));
    else if (!max || list.length < max) set([...list, value]);
  };

  return (
    <Container className="grid gap-0 py-0 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Left rail — sticky context, not a form. */}
      <div
        data-ground="muted"
        className="flex flex-col gap-[var(--space-6)] p-[var(--space-6)] lg:sticky lg:top-[var(--header-height)] lg:h-fit lg:p-[var(--space-8)]"
      >
        <div>
          <MonoTag>Assessment · step {step + 1} of {STEPS.length}</MonoTag>
          <h2 className="t-h2 mt-[var(--space-3)] text-text-primary">{current.title}</h2>
          <p className="t-body mt-[var(--space-4)] mb-0 text-text-secondary">{current.intro}</p>
        </div>

        <ol className="m-0 flex list-none flex-col gap-[var(--space-3)] p-0">
          {[
            { n: 1, t: "Tell us about you", s: "3 minutes. Confidential." },
            { n: 2, t: "Doctor reviews", s: "Within 24 hours." },
            { n: 3, t: "Bloods, then a plan or no plan", s: `${PRICING.entry} refunded if declined.` },
          ].map((s, i) => {
            const active = i === Math.min(Math.floor(step / 2), 2);
            return (
              <li key={s.n} className="flex items-start gap-[var(--space-3)]">
                <span
                  data-avatar
                  aria-hidden="true"
                  className={`flex h-[28px] w-[28px] shrink-0 items-center justify-center font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] ${
                    active
                      ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
                      : "bg-[color:var(--color-ink-10)] text-text-secondary"
                  }`}
                >
                  {s.n}
                </span>
                <span>
                  <span className="t-ui block text-text-primary">{s.t}</span>
                  <MonoData className="text-text-secondary">{s.s}</MonoData>
                </span>
              </li>
            );
          })}
        </ol>

        <div className="border-t border-border-hairline pt-[var(--space-5)]">
          <Editorial className="text-text-primary">
            &ldquo;Pepper Me wants us to be doctors, not script printers.&rdquo;
          </Editorial>
          <p className="mt-[var(--space-3)] mb-0">
            <MonoData className="text-text-secondary">
              Dr. A. Reid · Endocrinology · MEL · AHPRA MED 0021041
            </MonoData>
          </p>
        </div>
      </div>

      {/* Right — the form itself. */}
      <div data-ground="page" className="p-[var(--space-6)] lg:p-[var(--space-8)]">
        <div className="flex items-center justify-between gap-[var(--space-4)]">
          <MonoTag>{current.label}</MonoTag>
          <MonoData className="text-text-secondary">Est. {current.time}</MonoData>
        </div>
        <div
          className="mt-[var(--space-3)] h-[3px] w-full bg-[color:var(--color-ink-10)]"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={STEPS.length}
          aria-valuenow={step + 1}
          aria-label="Assessment progress"
        >
          <div
            className="h-full bg-[color:var(--color-ink)] transition-[width] duration-[var(--duration-base)] ease-[var(--ease-in-out)]"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>

        <div className="mt-[var(--space-6)]">
          {step === 0 ? (
            <div className="flex flex-col gap-[var(--space-5)]">
              <div className="grid gap-[var(--space-4)] sm:grid-cols-2">
                <Field id="first-name" label="First name" name="firstName" autoComplete="given-name" />
                <Field id="age" label="Age" name="age" inputMode="numeric" autoComplete="off" />
                <Field id="postcode" label="Postcode" name="postcode" inputMode="numeric" autoComplete="postal-code" />
                <Field id="email" label="Email" name="email" type="email" autoComplete="email" />
              </div>

              <fieldset className="m-0 border-0 p-0">
                <legend className="t-ui mb-[var(--space-2)] p-0 text-text-primary">I&rsquo;m here for</legend>
                <div role="radiogroup" className="grid gap-[var(--space-3)] sm:grid-cols-2">
                  <OptionButton role="radio" selected={view === "him"} onClick={() => setView("him")}>
                    For him · male endocrine system
                  </OptionButton>
                  <OptionButton role="radio" selected={view === "her"} onClick={() => setView("her")}>
                    For her · female endocrine system
                  </OptionButton>
                </div>
              </fieldset>
            </div>
          ) : null}

          {step === 1 ? (
            <fieldset className="m-0 border-0 p-0">
              <legend className="sr-only">Goals, choose up to three</legend>
              <div role="group" className="grid gap-[var(--space-3)] sm:grid-cols-2">
                {GOALS.map((g) => (
                  <OptionButton
                    key={g}
                    selected={goals.includes(g)}
                    disabled={!goals.includes(g) && goals.length >= MAX_GOALS}
                    onClick={() => toggle(g, goals, setGoals, MAX_GOALS)}
                  >
                    {g}
                  </OptionButton>
                ))}
              </div>
              <p className="mt-[var(--space-4)] mb-0">
                <MonoData className="text-text-secondary">
                  {goals.length} of {MAX_GOALS} selected
                </MonoData>
              </p>
            </fieldset>
          ) : null}

          {step === 2 ? (
            <fieldset className="m-0 border-0 p-0">
              <legend className="sr-only">Body areas</legend>
              <div role="group" className="grid gap-[var(--space-3)] sm:grid-cols-2">
                {AREAS.map((a) => (
                  <OptionButton
                    key={a}
                    selected={areas.includes(a)}
                    onClick={() => toggle(a, areas, setAreas)}
                  >
                    {a}
                  </OptionButton>
                ))}
              </div>
            </fieldset>
          ) : null}

          {step === 3 ? (
            <div className="flex flex-col gap-[var(--space-6)]">
              <fieldset className="m-0 border-0 p-0">
                <legend className="t-ui mb-[var(--space-2)] p-0 text-text-primary">
                  Any current medications?
                </legend>
                <div role="radiogroup" className="grid gap-[var(--space-3)] sm:grid-cols-2">
                  {MEDICATIONS.map((m) => (
                    <OptionButton
                      key={m}
                      role="radio"
                      selected={medication === m}
                      onClick={() => setMedication(m)}
                    >
                      {m}
                    </OptionButton>
                  ))}
                </div>
              </fieldset>

              <fieldset className="m-0 border-0 p-0">
                <legend className="t-ui mb-[var(--space-2)] p-0 text-text-primary">
                  Recent bloods, in the last 6 months?
                </legend>
                <div role="radiogroup" className="grid gap-[var(--space-3)] sm:grid-cols-3">
                  {BLOODS.map((b) => (
                    <OptionButton key={b} role="radio" selected={bloods === b} onClick={() => setBloods(b)}>
                      {b}
                    </OptionButton>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-[var(--space-1)]">
                <label htmlFor="notes" className="t-ui text-text-primary">
                  Anything in your own words
                </label>
                <textarea
                  id="notes"
                  rows={5}
                  className="border border-border-inactive bg-surface-raised p-[var(--field-padding-x)] t-body text-text-primary focus:border-[color:var(--focus-ring)]"
                />
              </div>
            </div>
          ) : null}

          {step === 4 ? (
            <div className="flex flex-col gap-[var(--space-5)]">
              <Card className="grid gap-0 sm:grid-cols-[0.6fr_1fr]">
                <SiteImage id={doctor.portrait} ratio="4 / 5" code={doctor.ahpra} sizes="240px" />
                <div className="flex flex-col gap-[var(--space-2)] p-[var(--card-padding)]">
                  <MonoTag>Recommended doctor</MonoTag>
                  <h3 className="t-h3 m-0 text-text-primary">{doctor.name}</h3>
                  <MonoData className="text-text-secondary">
                    {doctor.discipline} · {doctor.city} · {doctor.ahpra}
                  </MonoData>
                  <p className="t-body-sm m-0 text-text-secondary">{doctor.bio}</p>
                </div>
              </Card>

              <Card className="p-[var(--card-padding)]">
                <MonoTag>Next step · order bloods</MonoTag>
                <h3 className="t-h4 mt-[var(--space-3)] text-text-primary">
                  $0 today. {PRICING.entry} when your doctor accepts the assessment.
                </h3>
                <p className="t-body-sm mt-[var(--space-3)] mb-0 text-text-secondary">
                  Comprehensive panel at your nearest accredited Australian lab. The{" "}
                  {PRICING.entry} covers the assessment, the panel and your 30-minute
                  consult, and is refunded in full if your doctor declines to prescribe.
                </p>
              </Card>
            </div>
          ) : null}
        </div>

        <div className="mt-[var(--space-7)] flex flex-wrap items-center justify-between gap-[var(--space-4)] border-t border-border-hairline pt-[var(--space-4)]">
          <ButtonAction
            variant="ghost"
            onClick={() => go(step - 1)}
            className={step === 0 ? "invisible" : ""}
          >
            ← Back
          </ButtonAction>
          <div className="flex flex-wrap items-center gap-[var(--space-4)]">
            <MonoData className="text-text-secondary">No payment yet</MonoData>
            {last ? (
              <Button href="/pricing">Order bloods →</Button>
            ) : (
              <ButtonAction onClick={() => go(step + 1)}>Continue →</ButtonAction>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
