import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { MonoData, MonoTag } from "@/components/ui/MonoTag";
import { SiteImage } from "@/components/ui/SiteImage";
import { ARTICLES } from "@/content/articles";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "What our doctors read, and what our open cohort actually showed — including the results that were modest.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <Section ground="page">
      <MonoTag index="09">Journal</MonoTag>
      <h1 className="t-h1 mt-[var(--space-4)] max-w-[18ch] text-text-primary">
        Read the medicine<span className="mark">.</span>
      </h1>
      <p className="t-body-lg mt-[var(--space-5)] max-w-[var(--container-text)] text-text-secondary">
        Every article is written against the literature and reviewed by a named,
        AHPRA-registered Australian doctor before it publishes. Where we cite our own
        cohort, the method is published alongside it.
      </p>

      <ul className="mt-[var(--space-8)] grid list-none gap-[var(--space-7)] p-0 md:grid-cols-2 lg:grid-cols-3">
        {ARTICLES.map((article) => (
          <li key={article.slug}>
            <Link href={`/journal/${article.slug}`} className="group block no-underline">
              <SiteImage
                id={article.image}
                ratio="4 / 5"
                code={article.issue}
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <p className="mt-[var(--space-3)] mb-0">
                <MonoData className="text-text-secondary">
                  {article.issue} · {article.category}
                </MonoData>
              </p>
              <h2 className="t-h4 mt-[var(--space-2)] text-text-primary group-hover:underline decoration-border-inactive decoration-1 underline-offset-4">
                {article.title}
              </h2>
              <p className="t-body-sm mt-[var(--space-2)] text-text-secondary">
                {article.standfirst}
              </p>
              <p className="mt-[var(--space-2)] mb-0">
                <MonoData className="text-text-secondary">
                  {article.readTime} · reviewed {article.lastReviewed}
                </MonoData>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
