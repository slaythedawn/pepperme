import { Section } from "@/components/layout/Section";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { Button } from "@/components/ui/Button";
import { MonoTag } from "@/components/ui/MonoTag";

export default function NotFound() {
  return (
    <SiteChrome>
      <Section ground="page">
      <MonoTag>Error 404</MonoTag>
      <h1 className="t-h1 mt-[var(--space-4)] max-w-[20ch] text-text-primary">
        This page isn&rsquo;t here<span className="mark">.</span>
      </h1>
      <p className="t-body-lg mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
        The link may be old, or the page may have moved. The programs of care, the
        doctors and the assessment are all still where you left them.
      </p>
      <div className="flex flex-wrap gap-[var(--space-4)]">
        <Button href="/">Back to the homepage</Button>
        <Button href="/protocols" variant="secondary">
          See the programs
        </Button>
      </div>
      </Section>
    </SiteChrome>
  );
}
