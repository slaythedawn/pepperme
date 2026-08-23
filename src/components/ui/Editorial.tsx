import type { ReactNode } from "react";

/**
 * Instrument Serif italic — single-line editorial statements and pull-quotes.
 * Never body, never a heading, at most twice per page.
 */
export function Editorial({
  children,
  className = "",
  as: As = "p",
}: {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "blockquote";
}) {
  return (
    <As
      className={`font-[family-name:var(--font-editorial)] italic text-[length:var(--text-editorial)] leading-[var(--leading-editorial)] tracking-[var(--tracking-editorial)] ${className}`}
    >
      {children}
    </As>
  );
}
