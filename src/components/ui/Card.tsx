import type { ReactNode } from "react";
import type { Ground } from "../layout/Section";

/** Paper ground, 1px hairline, zero radius. Hover moves the border only. */
export function Card({
  children,
  className = "",
  interactive = false,
  ground,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  /** Carry a ground so the card's own tokens remap with it. */
  ground?: Ground;
  as?: "div" | "li" | "article";
}) {
  return (
    <As
      data-ground={ground}
      className={`border border-border-hairline bg-surface-raised ${
        interactive ? "card-hover" : ""
      } ${className}`}
    >
      {children}
    </As>
  );
}
