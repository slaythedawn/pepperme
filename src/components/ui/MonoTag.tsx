import type { ReactNode } from "react";

/**
 * The metadata layer. Mono 12, uppercase, +0.08em, Lab 500 — Lab 300 on an
 * Ink ground, which the tokens handle. An index is only ever passed when the
 * content is an actual sequence.
 */
export function MonoTag({
  children,
  index,
  className = "",
  as: As = "p",
}: {
  children: ReactNode;
  index?: string;
  className?: string;
  as?: "p" | "span" | "div" | "dt" | "h2" | "h3";
}) {
  return (
    <As
      className={`font-[family-name:var(--font-mono)] text-[length:var(--text-mono)] leading-[var(--leading-mono)] tracking-[var(--tracking-mono)] uppercase text-text-technical ${className}`}
    >
      {index ? <span className="text-text-disabled">{index}&nbsp;</span> : null}
      {children}
    </As>
  );
}

/** Mono used as plain data rather than as a label — no Lab colour. */
export function MonoData({
  children,
  className = "",
  chip = false,
  as: As = "span",
}: {
  children: ReactNode;
  className?: string;
  /** The one place 2px radius is permitted. */
  chip?: boolean;
  as?: "p" | "span" | "div" | "dd" | "dt" | "li";
}) {
  return (
    <As
      data-chip={chip || undefined}
      className={`font-[family-name:var(--font-mono)] text-[length:var(--text-mono)] leading-[var(--leading-mono)] tracking-[var(--tracking-mono)] uppercase tabular-nums ${className}`}
    >
      {children}
    </As>
  );
}
