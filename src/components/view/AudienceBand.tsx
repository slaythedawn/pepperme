"use client";

import { Container } from "../layout/Container";
import { MonoTag } from "../ui/MonoTag";
import { useView } from "./ViewProvider";

/**
 * The context band under the nav. It states which program is being viewed and
 * swaps ground with it — Ink for him, Cream for her — with a one-tap switch.
 */
export function AudienceBand() {
  const { view, setView } = useView();
  const him = view === "him";

  return (
    <div data-ground={him ? "inverse" : "muted"}>
      <Container className="flex flex-wrap items-center justify-between gap-[var(--space-4)] py-[var(--space-4)]">
        <div className="flex flex-wrap items-baseline gap-[var(--space-3)]">
          <MonoTag as="span">You are viewing</MonoTag>
          <p className="t-h4 m-0 text-text-primary">
            {him ? "Pepper for him" : "Pepper for her"}
            <span className="mark">.</span>
          </p>
          <p className="t-body-sm m-0 text-text-secondary">
            {him
              ? "Built for the male endocrine system"
              : "Built for the female endocrine system"}
          </p>
        </div>
        <button
          type="button"
          onClick={() => setView(him ? "her" : "him")}
          className="t-ui min-h-[var(--target-min)] text-text-primary underline decoration-border-inactive decoration-1 underline-offset-4 hover:decoration-border-strong"
        >
          Switch to {him ? "Her" : "Him"} →
        </button>
      </Container>
    </div>
  );
}
