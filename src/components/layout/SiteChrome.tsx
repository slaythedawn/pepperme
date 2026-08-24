import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { Topbar } from "./Topbar";

/**
 * The site's furniture. Lives here rather than in the root layout so that the
 * pre-launch gate can render without it — a locked page carrying a full
 * navigation that bounces back to itself is worse than no navigation at all.
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Topbar />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
