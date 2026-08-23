"use client";

import { useState } from "react";

export type QA = { q: string; a: string };

/**
 * Question in Display h4, chevron rotates 90° over 200ms. Hairline between
 * items. No card, no fill, no shadow.
 */
export function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-border-hairline">
            <h3 className="m-0">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                className="flex w-full min-h-[var(--target-min)] items-center justify-between gap-[var(--space-4)] py-[var(--space-4)] text-left t-h4 text-text-primary"
              >
                {item.q}
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-in-out)]"
                  style={{ transform: isOpen ? "rotate(90deg)" : "none" }}
                >
                  <path d="M5 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              hidden={!isOpen}
            >
              <p className="t-body max-w-[var(--container-text)] pb-[var(--space-5)] pt-[var(--space-3)] text-text-secondary">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
