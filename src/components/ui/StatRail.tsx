export type Stat = { value: string; label: string };

/** Numbers with their unit above the label. Tabular, hairline-separated. */
export function StatRail({
  stats,
  columns = 4,
  className = "",
}: {
  stats: Stat[];
  columns?: 3 | 4;
  className?: string;
}) {
  return (
    <dl
      className={`m-0 grid grid-cols-2 gap-[var(--space-5)] ${
        columns === 3 ? "md:grid-cols-3" : "md:grid-cols-4"
      } ${className}`}
    >
      {stats.map((s) => (
        <div key={s.label} className="border-t border-border-hairline pt-[var(--space-3)]">
          <dt className="sr-only">{s.label}</dt>
          <dd className="m-0">
            <span className="block font-[family-name:var(--font-display)] text-[28px] font-medium leading-none tracking-[-0.02em] tabular-nums text-text-primary">
              {s.value}
            </span>
            <span className="mt-[var(--space-2)] block font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] leading-[1.4] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary">
              {s.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
