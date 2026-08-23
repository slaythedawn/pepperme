import Link from "next/link";
import { Container } from "./Container";
import { Wordmark } from "./Wordmark";
import { FOOTER_COLUMNS, FOOTER_LEGAL, SITE } from "@/content/site";

/** Ink ground, five columns, and the sitewide disclaimer in full. */
export function SiteFooter() {
  return (
    <footer data-ground="inverse">
      <Container className="py-[var(--space-8)]">
        <div className="grid gap-[var(--space-7)] lg:grid-cols-[1.6fr_repeat(4,1fr)]">
          <div>
            <Wordmark />
            <p className="t-body-sm mt-[var(--space-3)] max-w-[32ch] text-text-secondary">
              {SITE.descriptor}
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="m-0 font-[family-name:var(--font-mono)] text-[length:var(--text-mono)] leading-[var(--leading-mono)] tracking-[var(--tracking-mono)] uppercase text-text-technical">
                {col.heading}
              </h2>
              <ul className="m-0 mt-[var(--space-3)] flex list-none flex-col gap-[var(--space-2)] p-0">
                {col.links.map((l) => (
                  <li key={`${col.heading}-${l.label}`}>
                    <Link
                      href={l.href}
                      className="t-body-sm text-text-secondary no-underline transition-colors duration-[var(--duration-fast)] hover:text-text-primary"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-[var(--space-8)] border-t border-border-hairline pt-[var(--space-5)]">
          <p className="t-caption m-0 max-w-[var(--container-text)] text-text-secondary">
            {FOOTER_LEGAL}
          </p>
          <p className="t-caption m-0 mt-[var(--space-2)] text-text-secondary">
            © 2026 {SITE.legalName} {SITE.abn} · {SITE.city}
          </p>
        </div>
      </Container>
    </footer>
  );
}
