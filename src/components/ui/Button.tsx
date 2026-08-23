import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 min-h-[var(--target-min)] " +
  "font-[family-name:var(--font-body)] text-[15px] font-semibold leading-none tracking-[-0.005em] " +
  "no-underline transition-colors duration-[var(--duration-fast)] ease-[var(--ease-out)]";

const variants: Record<Variant, string> = {
  // Pepper 600 fill, Paper label. On an Ink ground both invert via the tokens.
  primary:
    "bg-action text-action-label px-[28px] py-[14px] hover:bg-action-hover",
  secondary:
    "border border-border-strong text-text-primary px-[28px] py-[14px] " +
    "hover:bg-border-strong hover:text-text-inverse",
  // No fill, no border — a 1px underline at 4px offset.
  ghost:
    "text-text-primary underline decoration-border-inactive decoration-1 underline-offset-4 " +
    "hover:decoration-border-strong",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ComponentProps<typeof Link>) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAction({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className} disabled:bg-border-inactive disabled:text-text-disabled disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  );
}
