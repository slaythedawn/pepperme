import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ButtonAction } from "@/components/ui/Button";
import { MonoData, MonoTag } from "@/components/ui/MonoTag";
import { Wordmark } from "@/components/layout/Wordmark";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Not public yet",
  robots: { index: false, follow: false, nocache: true },
};

/**
 * The gate. Deliberately plain, deliberately honest about what it is: a site
 * waiting on legal and regulatory sign-off, not a members' area.
 */
export default async function PreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; error?: string }>;
}) {
  const { from = "/", error } = await searchParams;
  const destination = from.startsWith("/") && !from.startsWith("//") ? from : "/";

  return (
    <div data-ground="inverse" className="flex min-h-screen flex-col justify-between">
      <Container className="py-[var(--space-6)]">
        <Wordmark />
      </Container>

      <Container className="py-[var(--space-8)]">
        <div className="max-w-[var(--container-narrow)]">
          <MonoTag>Pre-launch · not public</MonoTag>
          <h1 className="t-h2 mt-[var(--space-4)] text-text-primary">
            This site isn&rsquo;t live yet<span className="mark">.</span>
          </h1>
          <p className="t-body-lg mt-[var(--space-5)] text-text-secondary">
            {SITE.legalName} is waiting on legal and regulatory sign-off. Until that
            lands, the site is visible to the people working on it and to nobody else.
            If you were given a password, it goes here.
          </p>

          <form
            action="/api/preview"
            method="POST"
            className="mt-[var(--space-7)] flex flex-col gap-[var(--space-3)]"
          >
            <input type="hidden" name="from" value={destination} />
            <label htmlFor="password" className="t-ui text-text-primary">
              Password
            </label>
            <div className="flex flex-wrap items-start gap-[var(--space-3)]">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                autoFocus
                required
                aria-describedby={error ? "password-error" : undefined}
                aria-invalid={error ? true : undefined}
                className="h-[var(--field-height)] w-full max-w-[320px] border border-border-inactive bg-transparent px-[var(--field-padding-x)] t-body text-text-primary"
              />
              <ButtonAction type="submit">Continue →</ButtonAction>
            </div>
            {error ? (
              <p
                id="password-error"
                role="alert"
                className="t-body-sm m-0 text-[color:var(--color-pepper-300)]"
              >
                That password doesn&rsquo;t match. Check it with whoever sent you the
                link — nothing is locked out, so you can try again.
              </p>
            ) : null}
          </form>
        </div>
      </Container>

      <Container className="border-t border-border-hairline py-[var(--space-5)]">
        <MonoData className="text-text-secondary">
          {SITE.regulatoryLine} · {SITE.legalName} {SITE.abn}
        </MonoData>
      </Container>
    </div>
  );
}
