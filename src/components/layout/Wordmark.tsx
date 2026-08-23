import Link from "next/link";

/** The wordmark. The period is the mark and the only place Pepper 500 lives. */
export function Wordmark({
  className = "",
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`font-[family-name:var(--font-display)] text-[20px] font-medium leading-none tracking-[-0.02em] text-text-primary no-underline ${className}`}
    >
      pepper me<span className="mark">.</span>
    </Link>
  );
}
