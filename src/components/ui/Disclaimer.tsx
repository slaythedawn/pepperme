import { Container } from "../layout/Container";

/**
 * Statutory and clinical disclaimers. Cream ground, 1px top hairline, Ink 60.
 * Never an alert, never coloured, never iconised — a disclaimer that looks
 * like a warning invites dismissal.
 */
export function Disclaimer({
  children,
  label,
}: {
  children: string;
  label?: string;
}) {
  return (
    <aside data-ground="muted" className="border-t border-border-hairline">
      <Container className="py-[var(--space-5)]">
        <div className="flex flex-col gap-[var(--space-2)] md:flex-row md:gap-[var(--space-5)]">
          {label ? (
            <p className="shrink-0 font-[family-name:var(--font-mono)] text-[length:var(--text-mono)] leading-[var(--leading-mono)] tracking-[var(--tracking-mono)] uppercase text-text-secondary">
              {label}
            </p>
          ) : null}
          <p className="t-body-sm m-0 max-w-[var(--container-text)] text-text-secondary">
            {children}
          </p>
        </div>
      </Container>
    </aside>
  );
}
