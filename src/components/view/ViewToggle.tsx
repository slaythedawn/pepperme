"use client";

import { useView, type View } from "./ViewProvider";

const OPTIONS: { value: View; label: string }[] = [
  { value: "him", label: "Him" },
  { value: "her", label: "Her" },
];

/** Nav toggle. Two targets, 44px minimum, no pill. */
export function ViewToggle({ className = "" }: { className?: string }) {
  const { view, setView } = useView();

  return (
    <div
      role="group"
      aria-label="Choose which program of care to view"
      className={`flex border border-border-hairline ${className}`}
    >
      {OPTIONS.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setView(o.value)}
          aria-pressed={view === o.value}
          className={`min-h-[var(--target-min)] px-[var(--space-3)] t-ui transition-colors duration-[var(--duration-fast)] ${
            view === o.value
              ? "bg-border-strong text-text-inverse"
              : "text-text-secondary hover:text-text-primary"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
