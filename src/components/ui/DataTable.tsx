import type { ReactNode } from "react";

/**
 * Zero radius, no outer border, 1px row rules. Header row in the mono layer
 * with an Ink bottom rule. Numeric cells are right-aligned and tabular.
 */
export function DataTable({
  caption,
  head,
  rows,
  highlightColumn,
}: {
  caption: string;
  head: string[];
  rows: ReactNode[][];
  /** Zero-based index of the column rendered on an Ink ground. */
  highlightColumn?: number;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left tabular-nums">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border-strong">
            {head.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={`py-[var(--space-3)] pr-[var(--space-4)] align-bottom font-[family-name:var(--font-mono)] text-[length:var(--text-mono)] font-medium leading-[var(--leading-mono)] tracking-[var(--tracking-mono)] uppercase text-text-technical ${
                  i === highlightColumn ? "px-[var(--space-3)]" : ""
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr key={r} className="border-b border-border-hairline">
              {row.map((cell, c) => (
                <td
                  key={c}
                  className={`py-[var(--space-4)] pr-[var(--space-4)] align-top t-body-sm ${
                    c === 0 ? "text-text-primary" : "text-text-secondary"
                  } ${
                    c === highlightColumn
                      ? "bg-surface-inverse px-[var(--space-3)] text-[color:var(--color-paper)]"
                      : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
