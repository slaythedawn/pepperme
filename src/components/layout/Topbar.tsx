import { Container } from "./Container";
import { SITE } from "@/content/site";

/** The regulatory rail. Mono only, and every string in it is real. */
export function Topbar() {
  return (
    <div data-ground="inverse" className="hidden md:block">
      <Container className="flex items-center justify-between py-[var(--space-1)]">
        <p className="m-0 font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] leading-[2] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary">
          {SITE.regulatoryLine}
        </p>
        <p className="m-0 font-[family-name:var(--font-mono)] text-[length:var(--text-mono-sm)] leading-[2] tracking-[var(--tracking-mono-sm)] uppercase text-text-secondary">
          {SITE.shipping} · {SITE.locale}
        </p>
      </Container>
    </div>
  );
}
