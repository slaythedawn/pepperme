import type { ReactNode } from "react";
import type { Ground } from "../layout/Section";

/** Paper ground, 1px hairline, zero radius. Hover moves the border only. */
export function Card({
  children,
  className = "",
  interactive = false,
  ground,
  id,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  id?: string;
  /** Carry a ground so the card's own tokens remap with it. */
  ground?: Ground;
  as?: "div" | "li" | "article";
}) {
  return (
    <As
      id={id}
      data-ground={ground}
      className={`border border-border-hairline bg-surface-raised ${
        interactive ? "card-hover" : ""
      } ${className}`}
    >
      {children}
    </As>
  );
}
