"use client";

import { ProtocolCard } from "../ui/ProtocolCard";
import { MonoTag } from "../ui/MonoTag";
import { useView } from "./ViewProvider";
import type { Protocol } from "@/content/protocols";

/**
 * Cards carry an audience and the grid filters on the current view. A program
 * marked "both" shows in either. Filtering happens on the client so the choice
 * survives navigation without a round trip.
 */
export function ProtocolGrid({ protocols }: { protocols: Protocol[] }) {
  const { view } = useView();
  const shown = protocols.filter(
    (p) => p.audience === "both" || p.audience === view,
  );

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-[var(--space-3)]">
        <MonoTag>
          Filtered for {view === "him" ? "him" : "her"} · {shown.length} programs
        </MonoTag>
      </div>
      <ul className="mt-[var(--space-5)] grid list-none grid-cols-1 gap-[14px] p-0 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProtocolCard key={p.code} protocol={p} />
        ))}
      </ul>
    </>
  );
}
