import type { ReactNode } from "react";
import { Container } from "./Container";

export type Ground = "page" | "muted" | "inverse" | "tint" | "alert";

/**
 * A full-bleed horizontal band. Grounds alternate to structure a long page —
 * that is the system's divider, in place of rules or shadows.
 */
export function Section({
  children,
  ground = "page",
  id,
  className = "",
  bleed = false,
  hairlineTop = false,
  hairlineBottom = false,
  tight = false,
}: {
  children: ReactNode;
  ground?: Ground;
  id?: string;
  className?: string;
  /** Skip the container — for bands that run edge to edge. */
  bleed?: boolean;
  hairlineTop?: boolean;
  hairlineBottom?: boolean;
  /** Half the vertical rhythm, for note bands and context rails. */
  tight?: boolean;
}) {
  const padding = tight
    ? "py-[var(--space-5)]"
    : "py-[var(--section-gap-sm)] lg:py-[var(--section-gap)]";

  return (
    <section
      id={id}
      data-ground={ground}
      className={[
        padding,
        hairlineTop ? "border-t border-border-hairline" : "",
        hairlineBottom ? "border-b border-border-hairline" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
