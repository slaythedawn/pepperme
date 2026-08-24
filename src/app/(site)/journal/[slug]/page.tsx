import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArticleMeta } from "@/components/ui/ArticleMeta";
import { Button } from "@/components/ui/Button";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { Editorial } from "@/components/ui/Editorial";
import { MonoData, MonoTag } from "@/components/ui/MonoTag";
import { ReferenceRangeSet } from "@/components/ui/ReferenceRangeBar";
import { SiteImage } from "@/components/ui/SiteImage";
import { ARTICLES, articleBySlug, type Block } from "@/content/articles";
import { doctorBySlug } from "@/content/doctors";
import { COMPLIANCE_NOTE } from "@/content/site";
import { PRICING } from "@/content/protocols";
import { SITE_URL } from "@/content/routes";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.standfirst,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.standfirst,
      publishedTime: article.published,
      modifiedTime: article.lastReviewed,
    },
  };
}

/** Article measure, 720px, and nothing sets wider than the text except a panel. */
function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="t-h3 mt-[var(--space-7)] mb-[var(--space-3)] text-text-primary">
          {block.text}
        </h2>
      );
    case "editorial":
      return (
        <Editorial key={i} className="my-[var(--space-6)] text-text-primary">
          {block.text}
        </Editorial>
      );
    case "list":
      return (
        <ul key={i} className="m-0 my-[var(--space-5)] list-none border-t border-border-hairline p-0">
          {block.items.map((item) => (
            <li
              key={item}
              className="t-body border-b border-border-hairline py-[var(--space-3)] text-text-secondary"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "markers":
      return (
        <figure key={i} className="my-[var(--space-7)]">
          <MonoTag className="mb-[var(--space-3)]">{block.heading}</MonoTag>
          <ReferenceRangeSet markers={block.markers} caption={block.caption} />
        </figure>
      );
    default:
      return (
        <p key={i} className="t-body-lg text-text-secondary">
          {block.text}
        </p>
      );
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleBySlug(slug);
  if (!article) notFound();

  const reviewer = doctorBySlug(article.reviewer);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.standfirst,
            datePublished: article.published,
            dateModified: article.lastReviewed,
            author: { "@type": "Organization", name: "Pepper Me" },
            reviewedBy: { "@type": "Person", name: reviewer.name },
            url: new URL(`/journal/${article.slug}`, SITE_URL).toString(),
          }),
        }}
      />

      <Section ground="page">
        <Container className="max-w-[var(--container-text)] px-0">
          <nav aria-label="Breadcrumb">
            <ol className="m-0 flex list-none flex-wrap gap-[var(--space-2)] p-0">
              <li>
                <Link
                  href="/journal"
                  className="t-body-sm text-text-secondary no-underline hover:text-text-primary"
                >
                  Journal
                </Link>
              </li>
              <li aria-hidden="true" className="t-body-sm text-text-disabled">
                /
              </li>
              <li className="t-body-sm text-text-primary">{article.issue}</li>
            </ol>
          </nav>

          <p className="mt-[var(--space-6)] mb-0">
            <MonoData className="text-text-secondary">
              {article.issue} · {article.category} · {article.readTime}
            </MonoData>
          </p>
          <h1 className="t-h1 mt-[var(--space-3)] text-text-primary">{article.title}</h1>
          <p className="t-body-lg mt-[var(--space-5)] text-text-secondary">
            {article.standfirst}
          </p>

          <ArticleMeta
            author={article.author}
            reviewer={article.reviewer}
            published={article.published}
            lastReviewed={article.lastReviewed}
          />
        </Container>
      </Section>

      <Container className="max-w-[var(--container-text)]">
        <SiteImage
          id={article.image}
          ratio="3 / 2"
          code={article.issue}
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </Container>

      <Section ground="page">
        <Container className="max-w-[var(--container-text)] px-0">
          <article>{article.body.map(renderBlock)}</article>
        </Container>
      </Section>

      <Section ground="inverse">
        <h2 className="t-h2 max-w-[24ch] text-text-primary">
          A panel, read by a doctor who has to justify it<span className="mark">.</span>
        </h2>
        <p className="t-body mt-[var(--space-4)] max-w-[var(--container-text)] text-text-secondary">
          {PRICING.entry} covers the assessment, the panel and the consult.{" "}
          {PRICING.refundLine}
        </p>
        <div className="flex flex-wrap gap-[var(--space-4)]">
          <Button href="/assessment">Start for {PRICING.entry} →</Button>
          <Button href="/journal" variant="secondary">
            Back to the journal
          </Button>
        </div>
      </Section>

      <Disclaimer label="42DLB · note">{COMPLIANCE_NOTE}</Disclaimer>
    </>
  );
}
