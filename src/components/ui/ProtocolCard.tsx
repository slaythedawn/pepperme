import Link from "next/link";
import { Card } from "./Card";
import { MonoTag, MonoData } from "./MonoTag";
import { Placeholder } from "./Placeholder";
import { PRICING, type Protocol } from "@/content/protocols";

/**
 * Route from a body system to its program page. Price is stated the one way
 * the system states it: $99 to start, ongoing care only if indicated.
 */
export function ProtocolCard({ protocol }: { protocol: Protocol }) {
  return (
    <Card as="li" interactive className="flex flex-col">
      <Placeholder brief={protocol.imageAlt} code={protocol.code} height="220px" />

      <div className="flex flex-1 flex-col gap-[var(--space-3)] p-[var(--card-padding)]">
        <div className="flex flex-wrap gap-[var(--space-2)]">
          <MonoTag as="span">{protocol.system}</MonoTag>
          <MonoData
            chip
            className="border border-border-hairline px-[var(--space-1)] py-[2px] text-text-secondary"
          >
            {protocol.audienceLabel}
          </MonoData>
        </div>

        <h3 className="t-h3 m-0 text-text-primary">{protocol.title}</h3>
        <p className="t-body-sm m-0 text-text-secondary">{protocol.body}</p>

        <ul className="m-0 flex list-none flex-col gap-[var(--space-2)] p-0">
          {protocol.includes.map((inc) => (
            <li key={inc} className="border-t border-border-hairline pt-[var(--space-2)]">
              <MonoData className="text-text-secondary">{inc}</MonoData>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-[var(--space-4)] border-t border-border-hairline pt-[var(--space-3)]">
          <p className="m-0">
            <MonoData className="block text-text-secondary">Start for</MonoData>
            <span className="t-h4 text-text-primary">{PRICING.entry}</span>
          </p>
          <Link
            href={protocol.href}
            className="t-ui text-text-primary underline decoration-border-inactive decoration-1 underline-offset-4 hover:decoration-border-strong"
          >
            {protocol.cta} →
          </Link>
        </div>
      </div>
    </Card>
  );
}
