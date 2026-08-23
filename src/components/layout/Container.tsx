import type { ReactNode } from "react";

/** 1280px measure with the responsive gutters from the token set. */
export function Container({
  children,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav" | "main";
}) {
  return (
    <As
      className={`mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter-mobile)] md:px-[var(--gutter-tablet)] xl:px-[var(--gutter-desktop)] ${className}`}
    >
      {children}
    </As>
  );
}
