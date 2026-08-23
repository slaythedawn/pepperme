"use client";

import type { ReactNode } from "react";
import { useView, type View } from "./ViewProvider";

/** Inline copy that swaps with the audience. The .him-only / .her-only helper. */
export function ViewOnly({ view, children }: { view: View; children: ReactNode }) {
  const { view: current } = useView();
  return current === view ? <>{children}</> : null;
}

/** Picks one of two strings for the current audience. */
export function useAudienceCopy<T>(him: T, her: T): T {
  const { view } = useView();
  return view === "him" ? him : her;
}
