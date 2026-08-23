/**
 * Cohort trajectory. Hairline and mono only — no fill, no gradient, no
 * annotation. The chart shows measured values and the axis they sit on;
 * it carries no target, no directional arrow and no interpretation.
 */
export function LineChart({
  series,
  xLabels,
  title,
  unit,
  height = 220,
}: {
  series: { name: string; points: number[]; dashed?: boolean }[];
  xLabels: string[];
  title: string;
  unit: string;
  height?: number;
}) {
  const all = series.flatMap((s) => s.points);
  const min = Math.min(...all);
  const max = Math.max(...all);
  const range = max - min || 1;
  const pad = range * 0.15;
  const lo = min - pad;
  const hi = max + pad;

  const w = 100;
  const h = 100;
  const x = (i: number, n: number) => (n === 1 ? 0 : (i / (n - 1)) * w);
  const y = (v: number) => h - ((v - lo) / (hi - lo)) * h;

  return (
    <figure className="m-0">
      <figcaption className="sr-only">
        {title}. Values in {unit}, plotted at {xLabels.join(", ")}.
      </figcaption>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        role="img"
        aria-label={`${title}. ${series
          .map((s) => `${s.name}: ${s.points.join(", ")} ${unit}`)
          .join(". ")}`}
        style={{ height, width: "100%" }}
      >
        {[0, 25, 50, 75, 100].map((g) => (
          <line
            key={g}
            x1={0}
            x2={w}
            y1={g}
            y2={g}
            stroke="var(--color-ink-10)"
            strokeWidth="0.4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {series.map((s) => (
          <polyline
            key={s.name}
            points={s.points.map((p, i) => `${x(i, s.points.length)},${y(p)}`).join(" ")}
            fill="none"
            stroke={s.dashed ? "var(--color-ink-40)" : "var(--color-pepper-600)"}
            strokeDasharray={s.dashed ? "3 3" : undefined}
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <ul className="m-0 mt-[var(--space-2)] flex list-none justify-between p-0">
        {xLabels.map((l) => (
          <li
            key={l}
            className="font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary"
          >
            {l}
          </li>
        ))}
      </ul>
      {series.length > 1 ? (
        <ul className="m-0 mt-[var(--space-3)] flex list-none flex-wrap gap-[var(--space-4)] p-0">
          {series.map((s) => (
            <li
              key={s.name}
              className="flex items-center gap-[var(--space-1)] font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary"
            >
              <span
                aria-hidden="true"
                className="inline-block h-[2px] w-[16px]"
                style={{
                  background: s.dashed ? "var(--color-ink-40)" : "var(--color-pepper-600)",
                }}
              />
              {s.name}
            </li>
          ))}
        </ul>
      ) : null}
    </figure>
  );
}
