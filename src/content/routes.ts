/**
 * Every public route, in one place. The sitemap is generated from this, so a
 * page that isn't listed here doesn't get indexed — add the route when you add
 * the page.
 */
export type Route = {
  path: string;
  /** Relative priority for the sitemap. The assessment is the conversion. */
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
};

/* /legal is deliberately absent: it is noindex until the copy lands. */
export const ROUTES: Route[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/protocols", priority: 0.9, changeFrequency: "weekly" },
  { path: "/protocols/hormonal", priority: 0.9, changeFrequency: "monthly" },
  { path: "/protocols/hormonal/him", priority: 0.9, changeFrequency: "monthly" },
  { path: "/protocols/hormonal/her", priority: 0.9, changeFrequency: "monthly" },
  { path: "/protocols/recovery", priority: 0.9, changeFrequency: "monthly" },
  { path: "/protocols/performance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/protocols/sleep", priority: 0.9, changeFrequency: "monthly" },
  { path: "/protocols/longevity", priority: 0.9, changeFrequency: "monthly" },
  { path: "/protocols/sexual-health", priority: 0.9, changeFrequency: "monthly" },
  { path: "/protocols/sexual-health/him", priority: 0.9, changeFrequency: "monthly" },
  { path: "/protocols/sexual-health/her", priority: 0.9, changeFrequency: "monthly" },
  { path: "/journal", priority: 0.7, changeFrequency: "weekly" },
  { path: "/doctors", priority: 0.8, changeFrequency: "monthly" },
  { path: "/science", priority: 0.7, changeFrequency: "weekly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/assessment", priority: 0.9, changeFrequency: "monthly" },
  { path: "/prescribing-standard", priority: 0.5, changeFrequency: "yearly" },
];

/** Article routes, generated from the journal so a new article is indexed. */
export const articleRoutes = (slugs: string[]): Route[] =>
  slugs.map((slug) => ({
    path: `/journal/${slug}`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

/**
 * The canonical origin. Set NEXT_PUBLIC_SITE_URL in the deployment environment;
 * the fallback only exists so local builds resolve absolute URLs.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pepperme.com.au";
