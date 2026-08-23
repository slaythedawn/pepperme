import type { ReactNode } from "react";

export type Marker = {
  /** Marker name, e.g. "SHBG". Rendered in the mono layer. */
  name: string;
  value: number;
  unit: string;
  /** Australian reference interval. */
  low: number;
  high: number;
  /** Track extents. Default to a symmetric margin around the interval. */
  scaleMin?: number;
  scaleMax?: number;
};

const clamp = (n: number) => Math.min(100, Math.max(0, n));

/**
 * Reference Range Bar — the signature element of the system.
 *
 * Renders a value against its reference interval and nothing else. It may show
 * a value, a unit and an interval. It must never show an interpretation, a
 * recommendation, a target, or an arrow implying a desired change: any of those
 * turns a data display into a therapeutic claim.
 *
 * In a stacked set the tracks share a left edge so the intervals read
 * comparatively down the column. That comparison is the whole point.
 */
export function ReferenceRangeBar({ marker }: { marker: Marker }) {
  const { name, value, unit, low, high } = marker;
  const span = high - low;
  const scaleMin = marker.scaleMin ?? Math.min(low - span * 0.75, value - span * 0.4);
  const scaleMax = marker.scaleMax ?? Math.max(high + span * 0.75, value + span * 0.4);
  const range = scaleMax - scaleMin || 1;

  const pct = (n: number) => clamp(((n - scaleMin) / range) * 100);
  const inRange = value >= low && value <= high;

  return (
    <div
      data-in-range={inRange}
      className={`grid grid-cols-[1fr_auto] items-end gap-x-[var(--space-4)] gap-y-[var(--space-2)] p-[var(--rrb-row-padding)] ${
        inRange ? "" : "bg-surface-alert"
      }`}
    >
      <p className="col-start-1 m-0 font-[family-name:var(--font-mono)] text-[length:var(--text-mono)] leading-[var(--leading-mono)] tracking-[var(--tracking-mono)] uppercase text-[color:var(--rrb-label-colour)]">
        {name}
      </p>
      <p className="col-start-2 m-0 text-right font-semibold tabular-nums leading-none text-text-primary text-[length:var(--rrb-value-size)]">
        {value}
      </p>

      {/* Track. The indicator is a rule, not a pointer — it has no direction. */}
      <div className="col-span-2 col-start-1 relative h-[var(--rrb-indicator-height)]" aria-hidden="true">
        <div
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
          style={{ height: "var(--rrb-track-height)", background: "var(--rrb-track-fill)" }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            height: "var(--rrb-track-height)",
            background: "var(--rrb-interval-fill)",
            left: `${pct(low)}%`,
            width: `${pct(high) - pct(low)}%`,
          }}
        />
        <div
          className="absolute top-0"
          style={{
            width: "var(--rrb-indicator-width)",
            height: "var(--rrb-indicator-height)",
            background: inRange ? "var(--rrb-indicator-in)" : "var(--rrb-indicator-out)",
            left: `${pct(value)}%`,
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* The same numbers as text, so the bar is never image-only. */}
      {/* Units are case-sensitive data — no uppercase transform on this line. */}
      <p className="col-span-2 col-start-1 m-0 max-w-none font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] leading-[var(--leading-mono-sm)] tracking-[var(--tracking-mono-sm)] tabular-nums text-text-secondary">
        {value} {unit} · reference interval {low}–{high} {unit}
      </p>
    </div>
  );
}

/** A stacked set. One shared left edge, one hairline between rows. */
export function ReferenceRangeSet({
  markers,
  caption,
}: {
  markers: Marker[];
  caption?: ReactNode;
}) {
  return (
    <div className="border border-border-hairline">
      <div className="divide-y divide-border-hairline">
        {markers.map((m) => (
          <ReferenceRangeBar key={m.name} marker={m} />
        ))}
      </div>
      {caption ? (
        <p className="m-0 max-w-none border-t border-border-hairline p-[var(--space-4)] font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] leading-[1.5] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
