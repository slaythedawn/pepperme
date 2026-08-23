/** Cohort distribution. Hairline rules, mono labels, no fills beyond the bar. */
export function BarChart({
  bars,
  title,
  unit,
}: {
  bars: { label: string; value: number }[];
  title: string;
  unit: string;
}) {
  const max = Math.max(...bars.map((b) => b.value)) || 1;

  return (
    <figure className="m-0">
      <figcaption className="sr-only">
        {title}. {bars.map((b) => `${b.label}: ${b.value} ${unit}`).join(". ")}
      </figcaption>
      <ul className="m-0 flex list-none flex-col gap-[var(--space-3)] p-0">
        {bars.map((b) => (
          <li key={b.label} className="grid grid-cols-[64px_1fr_auto] items-center gap-[var(--space-3)]">
            <span className="font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary">
              {b.label}
            </span>
            <span aria-hidden="true" className="block h-[10px] bg-border-hairline">
              <span
                className="block h-full bg-border-strong"
                style={{ width: `${(b.value / max) * 100}%` }}
              />
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] tracking-[var(--tracking-mono-sm)] uppercase tabular-nums text-text-primary">
              {b.value}
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
