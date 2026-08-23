import Link from "next/link";
import { MonoData, MonoTag } from "./MonoTag";
import { doctorBySlug } from "@/content/doctors";

/**
 * The article meta block — the E-E-A-T signal and the compliance evidence.
 *
 * Sits directly under the standfirst, hairline above and below, four columns of
 * mono at desktop and two at mobile. The reviewer links to their profile.
 *
 * Per the handoff this block is not optional and nothing publishes without it.
 */
export function ArticleMeta({
  author,
  reviewer,
  published,
  lastReviewed,
}: {
  author: string;
  /** Doctor slug. */
  reviewer: string;
  published: string;
  lastReviewed: string;
}) {
  const doctor = doctorBySlug(reviewer);

  return (
    <dl className="m-0 grid grid-cols-2 gap-[var(--space-4)] border-y border-border-hairline py-[var(--space-4)] md:grid-cols-4">
      <div>
        <MonoTag as="dt">Written by</MonoTag>
        <MonoData as="dd" className="m-0 mt-[var(--space-1)] text-text-primary">
          {author}
        </MonoData>
      </div>
      <div>
        <MonoTag as="dt">Medically reviewed by</MonoTag>
        <dd className="m-0 mt-[var(--space-1)]">
          <Link
            href={`/doctors#${doctor.slug}`}
            className="font-[family-name:var(--font-mono)] text-[length:var(--text-mono)] leading-[var(--leading-mono)] tracking-[var(--tracking-mono)] uppercase"
          >
            {doctor.name}
          </Link>
          <MonoData className="mt-[var(--space-1)] block text-text-secondary">
            AHPRA {doctor.ahpra}
          </MonoData>
        </dd>
      </div>
      <div>
        <MonoTag as="dt">Published</MonoTag>
        <MonoData as="dd" className="m-0 mt-[var(--space-1)] text-text-primary">
          {published}
        </MonoData>
      </div>
      <div>
        <MonoTag as="dt">Last reviewed</MonoTag>
        <MonoData as="dd" className="m-0 mt-[var(--space-1)] text-text-primary">
          {lastReviewed}
        </MonoData>
      </div>
    </dl>
  );
}
