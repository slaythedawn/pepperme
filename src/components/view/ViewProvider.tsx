"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type View = "him" | "her";

const STORAGE_KEY = "pm-view";

/* ---------------------------------------------------------------------------
   The audience choice lives outside React: it is read from localStorage, it is
   written back on every change, and another tab can change it under us. That
   makes it an external store rather than component state.
   --------------------------------------------------------------------------- */

let cached: View | null = null;
const listeners = new Set<() => void>();

function read(): View {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "her" ? "her" : "him";
  } catch {
    // Private mode, or storage disabled.
    return "him";
  }
}

function getSnapshot(): View {
  if (cached === null) cached = read();
  return cached;
}

/** The server has no audience to read, so it renders the default. */
function getServerSnapshot(): View {
  return "him";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== STORAGE_KEY) return;
    cached = read();
    listeners.forEach((l) => l());
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function write(next: View) {
  cached = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // The choice still holds for this session.
  }
  listeners.forEach((l) => l());
}

const ViewContext = createContext<{
  view: View;
  setView: (v: View) => void;
} | null>(null);

/**
 * The Him/Her state container. Sets data-view on <body>, persists to
 * localStorage under "pm-view" so the choice carries across pages, and drives
 * both the card filter and the audience context band.
 */
export function ViewProvider({ children }: { children: ReactNode }) {
  const view = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const setView = useCallback((next: View) => write(next), []);

  useEffect(() => {
    document.body.dataset.view = view;
  }, [view]);

  return (
    <ViewContext.Provider value={{ view, setView }}>{children}</ViewContext.Provider>
  );
}

export function useView() {
  const ctx = useContext(ViewContext);
  if (!ctx) throw new Error("useView must be used inside ViewProvider");
  return ctx;
}
