import type { MetadataRoute } from "next";
import { ARTICLES } from "@/content/articles";
import { ROUTES, SITE_URL, articleRoutes } from "@/content/routes";
import { gatePassword } from "@/lib/preview-gate";

/*
 * Evaluated per request rather than baked into the build. The gate itself is a
 * runtime check in the middleware, and a crawler signal that disagreed with it
 * would be the worst kind of stale: a live site still telling search engines to
 * go away, or a gated one advertising its URLs.
 */
export const dynamic = "force-dynamic";


export default function sitemap(): MetadataRoute.Sitemap {
  // Nothing to offer a crawler while the site is gated.
  if (gatePassword()) return [];

  const routes = [...ROUTES, ...articleRoutes(ARTICLES.map((a) => a.slug))];

  return routes.map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
