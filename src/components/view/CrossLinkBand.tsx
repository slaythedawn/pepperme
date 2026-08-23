"use client";

import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { MonoTag } from "../ui/MonoTag";
import { useView } from "./ViewProvider";

/** Invites the switch, and the copy rewrites with the current view. */
export function CrossLinkBand() {
  const { view } = useView();
  const him = view === "him";

  return (
    <div data-ground="page" className="border-t border-border-hairline">
      <Container className="py-[var(--space-8)]">
        <MonoTag>Currently viewing — for {him ? "him" : "her"}</MonoTag>
        <h2 className="t-h3 mt-[var(--space-3)] max-w-[24ch] text-text-primary">
          Want to see what we do for {him ? "her" : "him"}?
        </h2>
        <p className="t-body mt-[var(--space-3)] max-w-[var(--container-text)] text-text-secondary">
          Pepper Me runs two parallel programs of care — same doctors, same prescribing
          standard, different endocrine systems.
        </p>
        <Button
          href={him ? "/protocols/hormonal/her" : "/protocols/hormonal/him"}
          variant="secondary"
        >
          View Pepper for {him ? "her" : "him"} →
        </Button>
      </Container>
    </div>
  );
}
