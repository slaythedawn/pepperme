"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { Button } from "../ui/Button";
import { ViewToggle } from "../view/ViewToggle";
import { NAV_LINKS } from "@/content/site";

/**
 * A rule at the top of the document. Sticky, Paper ground at full opacity,
 * 1px bottom hairline that persists on scroll. It does not float, it does not
 * become a pill, and it does not blur.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);

  // Navigating closes the drawer. Deriving it during render beats an effect
  // that would paint the open drawer once on the new route first.
  if (openedAt !== pathname) {
    setOpenedAt(pathname);
    if (open) setOpen(false);
  }

  return (
    <header
      data-ground="page"
      className="sticky top-0 z-[var(--z-sticky)] border-b border-border-hairline"
    >
      <Container className="flex min-h-[var(--header-height)] items-center justify-between gap-[var(--space-4)]">
        <Wordmark />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="m-0 flex list-none items-center gap-[var(--space-5)] p-0">
            {NAV_LINKS.map((l) => {
              const active = pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`t-ui no-underline transition-colors duration-[var(--duration-fast)] ${
                      active ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-[var(--space-3)]">
          <ViewToggle className="hidden sm:flex" />
          <Link
            href="/assessment"
            className="hidden t-ui text-text-secondary no-underline hover:text-text-primary lg:inline"
          >
            Sign in
          </Link>
          <Button href="/assessment" className="hidden sm:inline-flex">
            Start for $149
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="t-ui min-h-[var(--target-min)] px-[var(--space-2)] text-text-primary lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" data-ground="page" className="border-t border-border-hairline lg:hidden">
          <Container className="py-[var(--space-4)]">
            <ul className="m-0 flex list-none flex-col gap-[var(--space-3)] p-0">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="t-ui flex min-h-[var(--target-min)] items-center text-text-primary no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-[var(--space-4)] flex flex-wrap items-center gap-[var(--space-3)]">
              <ViewToggle className="sm:hidden" />
              <Button href="/assessment" className="sm:hidden">
                Start for $149
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
